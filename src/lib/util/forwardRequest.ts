const forwardRequest = async <T = any>(
	request: Request,
	endpoint: string,
	params: { [key: string]: any } = {}
): Promise<T> => {
	const body = await request.text()
	const formData = new URLSearchParams(body)
	const requestData = Object.fromEntries(formData)
	const origin = new URL(request.url).origin

	const response = await fetch(`${origin}${endpoint}`, {
		method: 'POST',
		body: JSON.stringify({ ...requestData, ...params }),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	return response.json()
}

export default forwardRequest

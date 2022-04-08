import { createComment } from '../../../lib/db/comments'

export const post = async (params: any, request: Request) => {
	const data = await request.json()

	const headers = new Headers()
	headers.append('Content-Type', 'application/json')

	const comment = await createComment({
		postId: data.postId,
		title: data.title,
		content: data.content,
		author: 'Me'
	})

	return new Response(JSON.stringify(comment), {
		status: 201,
		headers
	})
}

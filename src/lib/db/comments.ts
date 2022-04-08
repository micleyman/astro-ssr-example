import client, { Prisma } from './prisma'

export type Comment = Prisma.CommentSelect

export const getCommentsForPost = async (postId: string) => {
	return client.comment.findMany({ where: { postId } })
}

export const createComment = async (commentData: Prisma.CommentCreateInput) => {
	return client.comment.create({ data: commentData })
}

import prisma from "../lib/prisma.js";
import { ObjectId } from 'mongodb';
export const getAll = async (req, res) => {

    try {

        const posts = await prisma.post.findMany();

        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get posts" })
    }

}

export const getSingle = async (req, res) => {
    const id = req.params.id;

    try {        
        const posts = await prisma.post.findUnique({
            where: { id },
            include: {
                postDetail: true,
                user: {
                    select: {
                        username: true,
                        avatar: true
                    }
                },
            },
        }
        );

        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const addpost = async (req, res) => {

    const body = req.body
    const tokenId = req.userId
    try {
        const posts = await prisma.post.create({
          
            data: {
                ...body.postData,
                userId: tokenId,
                postDetail: {
                    create: body.postDetail,
                }
            }
        }
        )

        res.status(200).json(posts)
    } catch (error) {

        res.status(500).json(error)
    }
}

export const updatePost = async (req, res) => {

}

export const deletePost = async (req, res) => {
    const id = req.params.id
    const body = req.body
    const tokenId = req.userId
    try {
        const posts = await prisma.post.findUnique({
            where: { id }
        }
        )
        if (posts.userId !== tokenId) {
            return res.status(403).json({ message: "Not the owner" });
        }

        await prisma.post.delete({
            where: { id }
        })

        res.status(200).json({ message: "deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: "Failed to get posts" })
    }
}
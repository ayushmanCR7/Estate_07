import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt"
export const getUsers= async(req,res)=>{
    
    try {
        const userss = await prisma.user.findMany();
        res.status(200).json(userss)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Faild to get All Users"})
    }
}
export const getSingleUsers= async(req,res)=>{
    const id = req.params.id
    try {
        const userss = await prisma.user.findUnique({
            where: {id},
        });
        res.status(200).json(userss)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Faild to get Single Users"})
    }
}
export const updateUsers= async(req,res)=>{
    const id = req.params.id;
    const tId = req.userId;
    const {password,avatar,...inputs} = req.body;
    if(id !== tId) return res.status(403).json({message: "Not Authorized"});
    let upass = null;
    try {
        if(password){
            upass = await bcrypt.hash(password,10)
        }
        const updatedUser = await prisma.user.update({
            where : {id},
            data: {
                ...inputs,
                ...(upass && {password: upass}),
                ...(avatar && {avatar}),
            }
        });
        const {password: userPassword, ...rest} = updatedUser
        res.status(200).json({rest})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Faild to update Users"})
    }
}
export const deleteUsers= async(req,res)=>{
    const id = req.params.id;
    const tId = req.userId;
   
    if(id !== tId) return res.status(403).json({message: "Not Authorized"});
    try {
        await prisma.user.delete({
            where: {id}
        })
        res.status(200).json({message: "user deleted Successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Faild to delete Users"})
    }
}
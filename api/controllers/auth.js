import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken"
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedpassword = await bcrypt.hash(password, 10);
    console.log(hashedpassword)

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedpassword
      },
    })
    console.log(newUser)
    res.status(200).send("All done")
  }
  catch (error) {
    res.status(404).json({message: "Failed to login"});
  }

}
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { username },
   });

   if(!user) return res.status(404).json({message: "Invalid Credentials"})

   const isnotvalid = await bcrypt.compare(password,user.password);

   if(!isnotvalid) return res.status(404).json({message: "Invalid Credentials"})
    const age = 1000*60*60*24*7
    const token = jwt.sign({
      id: user.id,
      isAdmin: false,
    }, process.env.JWT_SECRET_KEY,{
      expiresIn: age
    })
    const {password:userpassword, ...userInfo} = user;
   
    res.cookie("token",token,{
      httpOnly: true,
      maxAge: age,
    }).status(200).json(userInfo)

} catch (error) {
  return res.status(500).json({message: "Failed to login"})
}
    
}
export const logout = (req, res) => {
  res.clearCookie("token", { path: '/' }).status(200).json({ message: "Successfully logged out" });
}
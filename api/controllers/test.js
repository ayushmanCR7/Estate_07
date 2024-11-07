import jwt from "jsonwebtoken"
export const shouldBeLoggedin = async (req, res) => {
    console.log(req.userId);
    res.status(200).json({ meassage: "You are Authentucated" });
}
export const shouldBeAdmin = async (req, res) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ meassage: "Not Authenticated!" });
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (err) return res.status(403).json({ meassage: "invalid token!" });
        if (!payload.isAdmin) return res.status(403).json({ meassage: "Not authorized" });
    })
    res.status(200).json({ meassage: "You are Authentucated" });
}
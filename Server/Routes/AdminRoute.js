import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/adminlogin ", async (req, res) => {
    const { email, password } = req.body;

    try {
        const sql = "SELECT * FROM admin WHERE email = ?";
        const [results] = await con.promise().query(sql, [email]);

        if (results.length > 0) {
            const isMatch = await bcrypt.compare(password, results[0].password);

            if (isMatch) {
                const token = jwt.sign(
                    { role: "admin", email: results[0].email }, 
                    process.env.JWT_SECRET, 
                    { expiresIn: "1d" }
                );

                res.cookie("token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict'
                });

                return res.json({ loginStatus: true });
            }
        }

        return res.json({ loginStatus: false, Error: "Invalid email or password" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ loginStatus: false, Error: "Server error" });
    }
});

export { router as adminRouter };
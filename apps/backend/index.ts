import express from "express";
import { prismaClient } from "db/client";
const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
    try{
        const users = await prismaClient.user.findMany();
        res.json({
            users
        })
    }catch{
        res.status(500).json({
            message: "Users not found"
        })
    }
})

app.post("/user", async (req, res) => {
    const {username, password } = req.body;

    if(!username || !password){
        res.status(400).json({
            message: "Username and password are required to login"
        })
        return;
    }

    try{
        console.log("DATABASE url ", process.env.DATABASE_URL);
        const user = await prismaClient.user.create({
        data: {
            username,
            password
        }
        })

        res.status(201).json({
            user
        })
    }catch(error){
        console.error("Db error: ", error);
        res.status(500).json({
            message: "User not created",
            //@ts-ignore
            error: error.message
        })
    }
    
})

app.listen(8080, () => {
    console.log(`Server running on port 8080`)
});

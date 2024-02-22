import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv/config";

const app = express()
app.use(express.json()) // converts any request body into json
app.use(cors())

app.get("/test", async (req: Request, res: Response) => {
    res.json({
        message: "Test route works fine!"
    })
})
app.listen(7001, () => {
    console.log("server started at on localhost:7001")
})
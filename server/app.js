import express from "express"
import cors from "cors"
import "./config/config.js"
import { getDb } from "./utils/db.js"
import bodyParser from "body-parser"

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.get("/api/friends", (req, res) => {
    getDb()
        .then(db => db.collection("friends").find())
        .then(pointer => pointer.toArray())
        .then(array => res.status(200).json(array))
})

app.post("/api/friends", (req, res) => {
    console.log(req.body)
    const friend = req.body
    getDb()
        .then(db => db.collection("friends").insertOne(friend))
        .then(ark => res.status(200).json(ark))
})
app.listen(PORT, () => console.log(PORT))
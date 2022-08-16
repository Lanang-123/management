import express from "express"
import cors from "cors"

import MahasiswaRouters from "./router/MahasiswaRouter.js"

const app = express();
const hostname = "localhost";
const port = 8000;

app.use(cors());
app.use(express.json());

app.use("/mahasiswa",MahasiswaRouters)


app.listen(port,hostname,()=>console.log(`Server berjalan di port ${port}`))
import express, {Request, Response} from "express";
import dotenv from "dotenv";
import database from "./database/configdb.js";
import dataRoutes from "./routes/data.route.js";


dotenv.config();

const app = express();
database.connect();

app.use(express.json());

app.use("/data", dataRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send({ message: "IoT ESP32 Robo Espacial API is running" });
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}/`);
});
    
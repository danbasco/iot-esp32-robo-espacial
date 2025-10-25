import RobotData, { IRobotData } from "../models/RobotData.js";
import { Request, Response } from "express";


export const getData = async (req: Request, res: Response) => {

    try {
        const data: IRobotData[] = await RobotData.find().sort({ timestamp: -1 }).limit(100).exec();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }

}
export const postData = async (req: Request, res: Response) => {

    try {
        const { timestamp, temperature, humidity, luminosity, presence } = req.body;

        const newData = new RobotData({

            timestamp,
            temperature,
            humidity,
            luminosity,
            presence

        });

        const savedData = await newData.save();
        res.status(201).json(savedData);

    } catch (error) {

        res.status(500).json({ message: "Error saving data", error });
    }
    
}

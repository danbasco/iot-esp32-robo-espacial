import mongoose, { Schema, Model } from "mongoose"

export interface IRobotData {
    timestamp: string,
    temperature: number,
    humidity: number,
    luminosity: number,
    presence: boolean
}


const RobotDataSchema : Schema<IRobotData> = new mongoose.Schema({

    timestamp: { 
        type: String, required: true 
    },
    temperature: { 
        type: Number, required: true 
    },
    humidity: { 
        type: Number, required: true 
    },
    luminosity: { 
        type: Number, required: true 
    },
    presence: { 
        type: Boolean, required: true 
    }
});

const RobotData : Model<IRobotData> = mongoose.models.RobotData || mongoose.model<IRobotData>('RobotData', RobotDataSchema);

export default RobotData;
import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile:{
            type: String, /// URL of the video file
            required: [true, "Video file URL is required!"],
        
        },
         thumbnail:{
            type: String, /// URL of the video file
            required: true,       
        },
        title:{
            type: String, /// URL of the video file
            required: true,       
        },
        desceription:{
            type: String, /// URL of the video file
            required: true,       
        },
        duration:{
            type: Number, /// URL of the video file
            required: true,       
        },
        views:{
            type: Number, /// URL of the video file
            default: 0,     
        },
        isPublice:{
            type: Boolean, /// URL of the video file
            required: true,       
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User",
               
        },
    },
    {
        timestamps: true,
    }  
)

videoSchema.plugin(mongooseAggregatePaginate);
export const video = mongoose.module("Video", videoSchema);
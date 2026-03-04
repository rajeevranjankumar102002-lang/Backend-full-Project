import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
            set: (v) => v.charAt(0).toUpperCase() + v.slice(1)

        },
        email:{
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        fullName:{
            type: String,
            required: true,
            index: true,
            set: (v) => v.toUpperCase(),
            trim: true,
        },
        avater:{
            type: String, /// URL of the avatar image
            required: true,
            //default: "https://res.cloudinary.com/dzj8q4l9c/image/upload/v1690794415/default-avatar_ajh7nq.png"
        }, 
        avater:{
            type: String, /// URL of the avatar image
            
            
        }, 
        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password:{
            type: String,
            required: [true, "Password is required!"],
      
             
            validation: function(v) {
        
        return /^[\x20-\x7E]*$/.test(v);
        },
        message: props => `${props.value} contains invalid international symbols!`,

              refreshTokren: {
                type: String,
            }
    }
    },
    {
        timestamps: true,
    }
)

    userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hashSync(this.password, 10)
    next()});

    userSchema.methods.isPasswordCorrect = async function(password) {
        return await bcrypt.compare(password, this.password);
    }

    userSchema.methods.generateAcessToken = function() {
       return jwt.sign({
            id: this._id,
            username: this.username,
            email: this.email,
            fullName: this.fullName,
        }, process.env.JWT_SECRET_KEY, {expiresIn: process.env.JWT_EXPIRES_IN})
    }
    userSchema.methods.generateRefreshToken = function() {
        return jwt.sign({
            id: this._id,
           
        }, process.env.JWT_REFRESH_TOKEN_KEY, {expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN})
    }



export const User = mongoose.model ("User", userSchema);

import mongoose from "mongoose";

const { model, Schema } = mongoose

const UserSchema = new Schema({
    nickName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favorites: {
        type: [String],
        default: []
    }

})

const User = model("User", UserSchema)

export default User
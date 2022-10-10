
import mongoose from "mongoose";

const { model, Schema } = mongoose
const GiffSchema = new Schema({
    title: String,
    id: String,
    url: String
})
const UserSchema = new Schema({
    nickName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userInfo: {
        firstName: String,
        lastName: String,
        avatar: String
        
    }

})

const User = model("User", UserSchema)

export default User
import mongoose from 'mongoose';
const { model, Schema } = mongoose;
const FavouriteSchema = new Schema({
    userName: String,
    giff: {
        url: String,
        title: String,
        id: String
    }
});
const Favourite = model("Favourite", FavouriteSchema);
export default Favourite;

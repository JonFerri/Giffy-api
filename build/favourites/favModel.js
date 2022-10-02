import mongoose from 'mongoose';
const { model, Schema } = mongoose;
const FavouriteSchema = new Schema({
    user: String,
    url: String
});
const Favourite = model("Favourite", FavouriteSchema);
export default Favourite;

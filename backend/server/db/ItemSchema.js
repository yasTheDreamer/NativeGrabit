import mongoose, { Schema } from "mongoose";

const Shcema = mongoose.Schema;

const ItemSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
});

export default mongoose.model("Item", ItemSchema);

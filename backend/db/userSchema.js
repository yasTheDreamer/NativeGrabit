import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  fullName: { type: String, required: true },
  city: { type: String, required: false },
  telephone: { type: Number, required: false },
  email: { type: String, required: true },
  user_type: { type: Number, required: true },
  picture: { type: String, required: false },
  actif: { type: Number, required: false },
});

export default mongoose.model("User", UserSchema);

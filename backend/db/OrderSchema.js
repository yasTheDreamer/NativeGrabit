import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  description: { type: String, required: false },
  customerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  courierId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  time: { type: String, required: true },
  date: { type: Date, required: true },
  cost: { type: Number, required: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
  status: { type: String, required: true },
});

export default mongoose.model("Order", OrderSchema);

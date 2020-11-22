import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OrderItemSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  order_id: { type: Schema.Types.ObjectId, ref: "Order" },
  item_id: { type: Schema.Types.ObjectId, ref: "Item" },
});

export default mongoose.model("OrderItem", OrderItemSchema);

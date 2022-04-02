import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    orderId: {
      type: Number,
      maxlength: 14,
    },
    customer: {
      type: String,
      maxlength: 60,
    },
    address: {
      type: String,
      require: true,
      maxlength: 60,
    },
    total: {
      type: Number,
      require: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model.Order || mongoose.model("Order", orderSchema);

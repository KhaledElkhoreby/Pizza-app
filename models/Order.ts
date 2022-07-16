import mongoose, { Model } from 'mongoose';

export interface IOrder {
  orderId: number;
  customer: string;
  address: string;
  total: number;
  status: number;
  method: number;
}

const orderSchema = new mongoose.Schema<IOrder, Model<IOrder>>(
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

export default (mongoose.models.Order as Model<IOrder>) ||
  mongoose.model<IOrder, Model<IOrder>>('Order', orderSchema);

import mongoose, { Model } from 'mongoose';
import { Interface } from 'readline';

interface IExtraOption {
  _id: string;
  text: string;
  price: number;
}

const extraOptionsSchema = new mongoose.Schema<IExtraOption>({
  text: String,
  price: Number,
});

export interface IProduct {
  _id: string;
  title: string;
  desc: string;
  img: string;
  prices: number[];
  extraOptions: IExtraOption[];
}

const ProductSchema = new mongoose.Schema<IProduct, Model<IProduct>>(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    extraOptions: {
      type: [extraOptionsSchema],
    },
  },
  { timestamps: true }
);

export default (mongoose.models.Product as Model<IProduct>) ||
  mongoose.model<IProduct, Model<IProduct>>('Product', ProductSchema);

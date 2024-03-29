import {  NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Product from '../../../models/Product';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const {
    method,
    query: { productId },
  } = req;

  dbConnect();

  if (method === 'GET') {
    try {
      const product = await Product.findById(productId);
      res.status(200).json(product);
    } catch (err) {
      res.status(404).json(err);
    }
  }
  if (method === 'PUT') {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === 'DELETE') {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

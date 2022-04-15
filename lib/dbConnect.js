/* import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URL environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = await mongoose.connect(MONGODB_URL, opts);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
 */

//!------------------------------------------
import mongoose from "mongoose";

const dbConnect = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL);
  if (conn.readyState) {
    console.log("DB is Connected Successfully");
    return conn;
  } else {
    console.error("DB is not Connected Successfully");
  }
};

export default dbConnect;

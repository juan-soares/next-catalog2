import mongoose from "mongoose";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalWithMongoose = globalThis as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

const cache: MongooseCache = globalWithMongoose.mongooseCache ?? {
  conn: null,
  promise: null,
};

globalWithMongoose.mongooseCache = cache;

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cache.conn) {
    return cache.conn;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }

  if (!cache.promise) {
    cache.promise = mongoose
      .connect(process.env.MONGODB_URI, {
        bufferCommands: false,
      })
      .catch((error) => {
        cache.promise = null;
        throw error;
      });
  }

  cache.conn = await cache.promise;

  return cache.conn;
}

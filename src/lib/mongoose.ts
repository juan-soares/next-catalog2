import mongoose from "mongoose";

/**
 * Conexão global com o MongoDB usando Mongoose.
 *
 * Este arquivo é responsável apenas por infraestrutura:
 * - abrir conexão com o MongoDB Atlas
 * - reutilizar a mesma conexão (singleton)
 * - garantir que a aplicação não crie múltiplas conexões
 *
 * Ele NÃO contém:
 * - models
 * - schemas
 * - regras de negócio
 * - lógica de domínio
 */

// Cache global para evitar múltiplas conexões (especialmente no Next.js em dev/hot reload)
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

/**
 * Conecta ao MongoDB Atlas (lazy connection)
 * Só executa a conexão quando chamado pela primeira vez.
 */
export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cache.conn) {
    return cache.conn;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }

  if (!cache.promise) {
    cache.promise = mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cache.conn = await cache.promise;

  return cache.conn;
}

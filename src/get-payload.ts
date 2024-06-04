import dotenv from "dotenv";
import path from "path";
import payload from "payload";
import type { InitOptions } from "payload/config";

dotenv.config({
  path: path.resolve(__dirname, "../.env")
});

let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null
  };
}

interface Args {
  initOptions?: Partial<InitOptions>;
}

export const getPayloadClient = async ({ initOptions }: Args = {}) => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error('PAYLOAD_SECRET is MISSING');
  }
  if (!cached.client) {  // This should check if client is not cached
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions ? (initOptions.express ? false : true) : true,
      ...(initOptions || {})
    });
  }
  try {
    cached.client = await cached.promise;
  } catch (error: unknown) {
    throw error;
  }
  return cached.client
};

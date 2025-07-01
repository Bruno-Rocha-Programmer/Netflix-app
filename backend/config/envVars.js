import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
  MONGO_URI:
    "mongodb+srv://robertbruno592:TMrtCvbrf6Ok78PQ@cluster0.t45ouhm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  TMDB_API_KEY: process.env.TMDB_API_KEY,
};

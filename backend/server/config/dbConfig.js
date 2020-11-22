import env from "dotenv";

const dotend = env.config();

export const databaseURL = process.env.DB_URL;

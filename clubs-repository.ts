import fs from "fs/promises";
import path from "path";
import { ClubModel } from "../models/club-model";

// Lendo arquivo JSON
export const findAllClubs = async (): Promise<ClubModel[]> => {
  const filePath = path.join(process.cwd(), "src", "data", "clubs.json");
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file);
};

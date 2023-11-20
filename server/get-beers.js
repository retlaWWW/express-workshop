import { readFile } from "fs/promises"
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


export const getBeers = async () => {
  const file = await readFile(
    join(__dirname, './beers.json'),
    'utf-8'
  )
  return JSON.parse(file)
}
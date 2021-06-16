import { config } from "dotenv";
config();
import Hypixel from "hypixel-api-reborn";
const hypixel: Hypixel.Client = new Hypixel.Client(
  process.env.API_KEY as string
);

const getData = async (username: string) => {
  try {
    return await hypixel.getPlayer(username);
  } catch (err) {
    console.log(err);
    return false;
  }
};
export default getData;

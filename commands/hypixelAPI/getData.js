require("dotenv").config();
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client(process.env.API_KEY);

const getData = async (username) =>{
    try {
        return await hypixel.getPlayer(username);
    }
    catch (err) {
        console.log(err);
    }
};

export default getData;
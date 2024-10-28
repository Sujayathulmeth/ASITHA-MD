const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=DyIiTJwY#Tgu3j8ybbnt9FH8R5mxpL5LEYPrjC3Zly4n91Z5kd8w",
MONGODB: process.env.MONGODB || "mongodb+srv://sujaya:sujaya@cluster0.mcpcg.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};

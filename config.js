//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "theodoreogbeche1@gmail.com";
global.location = "Africa,Nigeria.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "";
global.sudo = process.env.SUDO || "2348069374767";
global.owner = process.env.OWNER_NUMBER || "2348069374767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE5ZSVI0YzFHTzBPeld1aTkyTFM1ME5qSG9yaUtKNzdkcndsekl6U3EwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblFNNGhJNHBPclFwbXhhUjJVZ3pEOUFnNk1FWXN6V0VzRjY0cmwzMDRqMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDS2VrUUc0cm52UGdyS2NJcHhlZXdlSzg5WmRidk56WXU3Z3NyTloreG40PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxcm1keUdIR0JsTTUwSFM4SllvT1dSbUt0bjFIWmEvSERVSDJqK0pNZW5nPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNPc3E3ckpjWmh3MWwyYTI5QUVacTNFaGk5QTlPMDZOd2NYd0M2NnRmVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNpNWI1RmdZZU9rWStwc3VNOVBBUlVPODRXQ0Vsd3V6K1ljOU51ZnlVUmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZoeldyWTBTODJUK25Ya0lZOWsvbXF5OWlQNERlL21SVEZUY2YvemkxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWozUjErbXIxMTBwYWxlcVFFaDZZN0pXUktJY0F1aTFsOEJMQ3U4YnpqTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZCVGN6bE5XeWFjdS9yWXZ1cWM4aGEvMzNGNzBDcDJNWk1NQUpNVEdlMGtkN1RDaDdMdWMyRTA2L2pMUDZPb3N3VUZOcWd3eTQzbFRBeG0xWVZOOUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjIsImFkdlNlY3JldEtleSI6Ik95UGkxblVTc0xSZlhOSCtTY0xFaWJPQjBWZnFiZHFoSXZOYWFYV1lpK2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZTTVBDZkd4UW15UHVJQzMwaTladVEiLCJwaG9uZUlkIjoiYmEzMWEyMzctMTEwMy00ZWFmLWI5NjYtZjVhNzdhMTRiMTNmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNUNmtFUFppTStpUHZEa1BPWThJZW5iWGE0Yz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSFA4L0UvT29sREh5TGFQVXlCakhVcy9VNnc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjFZNzRSNEciLCJtZSI6eyJpZCI6IjIzNDgwNjkzNzQ3Njc6MzdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05tZGpjMEJFSldsd0xRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im95alV6a1hnbDd6RCtHYmpIUlpyZFVuV1VkQzBZRVFEbk1NSFNWRW9jMWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlBhMVR1NzgrQ2VFRkloc0VUdmpKVEUvMndkYmVxdVV2aHBGTTZDUGVFL1I2TzVrTlZ4aGdUU0NZaW9QWElkVERkcUdoS21QbVphaVlxem8vL3FSZER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1WUZwSXR4SUxVd0o4VlBIVlVXMDFpVFVMMk9QRXFSNWZsOWRXNGpSeUdna3hobzlwU2VCK3VJV1MwQXo3bjlVb3JHYmNuNGdKa2p2dWZJd21WZzZEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNjkzNzQ3Njc6MzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYU1vMU01RjRKZTh3L2htNHgwV2EzVkoxbEhRdEdCRUE1ekRCMGxSS0hOWCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDcxNzk4N30="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "✞ঔৣŦℨĐĐƳঔৣ✞",
  packname: process.env.PACK_NAME || "✞ঔৣŦℨĐĐƳঔৣ✞",
  botname: process.env.BOT_NAME || "✞ঔৣŦℨĐĐƳঔৣ✞",
  ownername: process.env.OWNER_NAME || "✞ঔৣŦℨĐĐƳঔৣ✞",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUNIYlNUbXYybG5NOWprb044c2hDaG5Yd3NzMnU5a2xvVTZwTkpMZ2lVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2x4SGQxZ3JnV0Y3d0RSbTRxTkpUVHgxYXJBSWZaaHg0V2lxZDV0Y29ITT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQjJMd2F2WndkQVFoNVQ0cnE5ZVFKamZ4Q21NelR4Q1cwRnJYY3JIUjF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiQkVzczhiYmQ1MGQ0ZVh0aGZXOEJqd1dEajlKWVB1UUFkbUJIWDVSblRvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtOTEZ6MUJyYjFSYUVqU1k0SWhyeXIrelA0Zy9RWkh2Y1ZwQk9NbzBQRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd2MlRLQndlemw3UlNac2k2QmNUcE1Nb0lRcDUvVFJZbFc0eEpveVAxRzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkR4NVg4b2FJTTlkczNQTjh4M2M2QWRCNGNxZ0QrcGtENDJVOHNoSUcyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmVwdXhmRER0aFBCUVNXbW1qdWQ2SEdHUWdyMURCYkdCSmtYTEk0N3Z3VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjcrbHI0UG9BZ1FHcVBOOUcrU2RZNFh1Y2owWkwxaFNyOE5LSExuUkFNaEVPVGYvZHZ6ZEduYk1zSWQ2aG5BdDUyaHlaMExRU3pOOWNqbWJySERsRUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY0LCJhZHZTZWNyZXRLZXkiOiJGY1JCeENjb08xK2JZa3BaZDZqWTJaa2xtdTExRXNYNnJaUnpiMFVtK3FBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPN29mZWdPTFNKdWdyVnNRWE9PS1BBIiwicGhvbmVJZCI6IjFlYzU1ZjAxLTMwNmYtNDQyZi04Y2MyLWNmMmJmMjg1YWRlYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFWFUzVGFnM3ljQTdhbkp4T29IeWRkVGJUV0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTS9WcUtMeHFCK2FYUXNCWnAvNFF5ZjZtRFRFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQzTlFLQ1M3IiwibWUiOnsiaWQiOiIyMzQ4MDY5Mzc0NzY3OjQ3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOdWRqYzBCRVBpZTViUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJveWpVemtYZ2w3ekQrR2JqSFJacmRVbldVZEMwWUVRRG5NTUhTVkVvYzFjPSIsImFjY291bnRTaWduYXR1cmUiOiJpaXNuU3FuNEZNaFV4TnlxVCs5WXpMZWFXdzRQZnpkdjQ1WldXc3pIT0tMT1FWWTNIUjdpZS9Fc28rT3FhVHAvWWJJRXhXa21GRXI0MXh0anQ3UmdBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVDRXM1l6a1NEZ2ptUi9jTzNEcDc1UURJQTVPNlV3UGwrMm91ZXdBRERjaHowQ3BEcEpnZE5tYWNXQWxIVFg2Ukk0a2lzL0FBbHZGZEo5dWhyQjlCQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDY5Mzc0NzY3OjQ3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFNbzFNNUY0SmU4dy9obTR4MFdhM1ZKMWxIUXRHQkVBNXpEQjBsUktITlgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjEzMjMzOTd9"
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

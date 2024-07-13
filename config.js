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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU0vNlZ2Y0NrdzZCcVdaZks5bldwUlhDV3pJd1pSRUUwQjA4ZGtQMDBXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkN3Q1ZlNDJySHRuV2lxVWpFbWtJa0RIcDhPaGRaUE5TdkpmVFFlNDBCUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RGN0d1ZhR1orS29wMXY0M1VIMU5ydHcrd3RQZ1BOQTQvMVJtMzl4VGs4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0NTlyb1lGLzJpMzEzYzRRbUdXRDliSk8yWDJlQ0JFSDZMandzYWVIMVJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktIRWlkMy9UUHFUY3k5K09OcDhnVWZmZnpBN3ZKTWJSZWptQmdNUG5TVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5JM0NJSDdzdlNPdE5YeTNIYms4NzV5ckxLZEQ5K0NLTUhUekpMamhLUjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEpKaTk0LzU0aTFvd3c0ZUNtRFcyTzFnc2lMNnprZFhJaDEwU002V0Vsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVArdFRJbGRJRWRPVkpNa1NQaFNtSFpkSVRkOGdaTVVFWjBQNU9xVkFoUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCRnBBL3ZLZkphS3Uvcmp2b3hLM3A2UmpLN0ZVSU1Jc2k3MnlXNXFtMDlBUmVUdHZIdnJ2NEtVYWdjeE96WENvcmd3TTB6eVdPbjBKUzNqSmZZMEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzUsImFkdlNlY3JldEtleSI6IjhvdGZjVkpwNTNOMXF4UFpnZDdqTmdBNnZiRS8rZGloNy9wQ05mTDlId0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImlwU1htUVhGUXJ1cmFqZFpPOVY1dnciLCJwaG9uZUlkIjoiNjZlNGM0MDAtOWM5MS00ZjA3LThmY2ItYTNmMGExOTE0N2NjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRaaFFKdDVNczBoQWxaNURyMzFtRFl2b250Yz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYVHM1c08xNmo5ODlqZUU0aUpPcm5mQzRPWTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQUxRSkFKN0IiLCJtZSI6eyJpZCI6IjIzNDgwNjkzNzQ3Njc6NDJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05tZGpjMEJFUFRQeUxRR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im95alV6a1hnbDd6RCtHYmpIUlpyZFVuV1VkQzBZRVFEbk1NSFNWRW9jMWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpNeXhmZ3dYeEFPMUljTWZWNjZqUGMvSXoxSHNvUG1waU5HUlg0T3J3dDRYSUNsZUV4TjVDRVFzemZyYXRTTFpRMWVqVDM4Y1grUzlqTkkyU3haYkNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2ZmZMaE4yQWhaeEplL3FSSGozZkN1cGhRaWNybUNmaUtOZm5nVmlYZ0IzaWkyeVZUOGNZWE9tVkVlWFhXa2t5UXhMVnBYNm9aZ29rMzZuZHMxVkVEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNjkzNzQ3Njc6NDJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYU1vMU01RjRKZTh3L2htNHgwV2EzVkoxbEhRdEdCRUE1ekRCMGxSS0hOWCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDg1NDUyOX0="
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

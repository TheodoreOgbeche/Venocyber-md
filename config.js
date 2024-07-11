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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0xDUGVrcysyVmZBTlhTU2FSL1hNQytBbVF5ZnVMUENra1Z4V1dyRjhWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWp3U0pnMTBGdWV3SDFlamR5elowa01WVDNCS0lOTDJLakR1dW1CWG1Gcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRlN6bHRPUERvenJLRzUyVXl2TVc3YnNNVjMySWtobWRpZWNBbUd3QUdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTK294c1JoRW8vNUJxbDZqb0NLTnYxcDZTclJqQStlTGtnTlpXOGY0Sm5VPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1BcVBXczVkS0dFY1IwSG94cGMxUURDQWNYNzBCdnJsMlMybjVSajY1bTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1PS3ZjV3VnVVBQVGxjNENZb3V4cTFLU3pRcUFGa2NsN1ZFcVlwU0MzRVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05tNGR6VlNndDcyUGhMd3JPZTFzaVIvakdqSDhYdVd4MVBPcVZiYlZFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmgzY0R3Sm9wZHBvbkJkVm1qakRtUVBFUG9jQW9hZzVTcFl6UHJRZEMxaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpvZFNacDMvYUZmRmU0UTUrcmxyTzJmWVhuTXRFR1hRUXpDZEZCZ0ZHYVVvZWRnL0FtSFYxa080c3JrSnhQQktTUG9NRlpJeFRXN0pQTHRyb0lmUUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJCMVBuaWY1cExMYmhmN1BVWE5oR21BN1ZyRFdJMTFIc2ZEK1k2QW8vcENVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFZGttQzVLNFRwNlkwRzdmd1RrUVNRIiwicGhvbmVJZCI6IjFiNjI2MDVmLWVhNmMtNDcwOS1hZDk1LWNkYWRiZjQwMWQ0NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRUlZ6SnJSN3V3UE0zOUU1OU43aHVQQzQ2L1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3lYNWkzeU1uNm1QSW81SWlkUVBBbmdublJ3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijk5RDJNWkxWIiwibWUiOnsiaWQiOiIyMzQ4MDY5Mzc0NzY3OjM1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOaWRqYzBCRUkyUnY3UUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJveWpVemtYZ2w3ekQrR2JqSFJacmRVbldVZEMwWUVRRG5NTUhTVkVvYzFjPSIsImFjY291bnRTaWduYXR1cmUiOiJFRjRDR0pTTzhlTkd1Zm91ekpzRmRwZGs4bHc4QWRiQ0kwY1FUdGFWVjZReXNwTjBhM3dvQlhKS2V3eFhtbGk1cTUwUHErYVhDVS8rVmp4anZmREVCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSFJjODVWRXBTSDRKdExRb2J5NjFObjF4SDJ3elMyTFNOZGJ4Znp0VWRzNGl2cTlzRFBWSFRpb1VqQjljN2llcDdmNXVJeXRyME1aaDFhbW1mU0RkQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDY5Mzc0NzY3OjM1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFNbzFNNUY0SmU4dy9obTR4MFdhM1ZKMWxIUXRHQkVBNXpEQjBsUktITlgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA2OTkwMzR9"
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

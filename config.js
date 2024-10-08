const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94702525109";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "94702525109,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "🥰",
  botname : process.env.BOT_NAME  || "chamiyh",
  ownername:process.env.OWNER_NAME|| "CHAMIYH",

  sessionName:process.env.SESSION_ID || "SUHAIL_09_07_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk4LFxuICAgICAgICA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc0LFxuICAgICAgICAzNixcbiAgICAgICAgODIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE3LFxuICAgICAgICA0MixcbiAgICAgICAgNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDUwLFxuICAgICAgICA4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MixcbiAgICAgICAgMTQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MixcbiAgICAgICAgNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY1LFxuICAgICAgICA4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDg0LFxuICAgICAgICA1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZnFxNHRORnV6VU96enN6ekMxay9ObkRCYTRRNXliTjBuZ285azI1TjdzUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ2xfRTljRE9SMWVGdDdnckxfVGJOUVwiLFxuICBcInBob25lSWRcIjogXCI0OGI5OTMzNy1iOWM0LTRlODItYTc2My01OTdlZmYzZmM1YzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMTEyLFxuICAgICAgMTc3LFxuICAgICAgOSxcbiAgICAgIDMwLFxuICAgICAgNTIsXG4gICAgICA3NyxcbiAgICAgIDEzLFxuICAgICAgNTMsXG4gICAgICAyMjYsXG4gICAgICA3OSxcbiAgICAgIDE2MyxcbiAgICAgIDIwNyxcbiAgICAgIDI0MCxcbiAgICAgIDIwMyxcbiAgICAgIDIzMCxcbiAgICAgIDgwLFxuICAgICAgMTA0LFxuICAgICAgMjMxLFxuICAgICAgOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDUsXG4gICAgICA3NSxcbiAgICAgIDg4LFxuICAgICAgMTMxLFxuICAgICAgOTYsXG4gICAgICAzMyxcbiAgICAgIDE0MixcbiAgICAgIDIyLFxuICAgICAgMTUyLFxuICAgICAgNjQsXG4gICAgICAxNjQsXG4gICAgICAxOTMsXG4gICAgICAxNDcsXG4gICAgICAyMzcsXG4gICAgICAxNCxcbiAgICAgIDIwNyxcbiAgICAgIDI0MixcbiAgICAgIDEyNyxcbiAgICAgIDE0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNMkJTWVpEVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MDI1MjUxMDk6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJcXFwiQ0hBTUlZSCBPRkZMQ0FMXFxcIlwiLFxuICAgIFwibGlkXCI6IFwiMTQxMTM3NDA2ODg1OTc4OjIxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ055d3VOc0RFS2ZzazdnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicEYyMS9UODhZQldaMGpPbHdzc3dyNGM1V2dMbjhOaWpjWVlGeUFmaGR3OD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1WEhqdnpiZXJuaHYzZThzVkZra1ExRDA2YjczQzZJLzJoa1h5QjlwM05RL2Frem5ZbVBzM1lBR1RCOUQ3REN2QWQrRVcxdVpTeGF5MzBhOFk1TnNBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWUkV1cmw1SU0rNDBXWE1kdFc1Z1ptM3htQko5WEN4L20vc2UxRWIyNEZNWGpyRXJDTWE5ajBtbTNmOXF5WU51QmROQTh2dUVGRG9maWNKbVdMUkxpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcwMjUyNTEwOToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4Mzc4NDEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlIwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKUjAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEY3Vrak9IRFFQci9jc2V3RGJEc2tXMk5oa2s3V2gveWxtaDJPZktkVmVBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk5NzA3MDkzNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349097234905";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_38_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDgyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTksXG4gICAgICAgIDcwLFxuICAgICAgICAyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA1LFxuICAgICAgICA1OSxcbiAgICAgICAgMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc3LFxuICAgICAgICA2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM3LFxuICAgICAgICAzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNixcbiAgICAgICAgMTExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsU2QxQjlrUEsxMzFLWlZOZnRXTnNDZEtkazhnUVRJeDViZEt6dk5YMGJNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBN3ZGeWRIalFYNmREUW1pZzJZeTFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImIyOWI0ZWZjLWY2NDMtNGFlOS1iMjVhLTYzNWYxMzljNzVlY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICA3MyxcbiAgICAgIDEyLFxuICAgICAgNTUsXG4gICAgICAxMzksXG4gICAgICAxMzAsXG4gICAgICAyMTAsXG4gICAgICAxOCxcbiAgICAgIDIyNCxcbiAgICAgIDgsXG4gICAgICAyMCxcbiAgICAgIDIwMixcbiAgICAgIDIwLFxuICAgICAgMTk4LFxuICAgICAgMTAsXG4gICAgICAyMDMsXG4gICAgICA3MCxcbiAgICAgIDEwNixcbiAgICAgIDE5MCxcbiAgICAgIDEwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICA4OSxcbiAgICAgIDIyOCxcbiAgICAgIDExNSxcbiAgICAgIDE3MSxcbiAgICAgIDE2OSxcbiAgICAgIDIwMCxcbiAgICAgIDc5LFxuICAgICAgMTUyLFxuICAgICAgMTU5LFxuICAgICAgMTMzLFxuICAgICAgNSxcbiAgICAgIDMyLFxuICAgICAgMjM4LFxuICAgICAgODUsXG4gICAgICAxNTEsXG4gICAgICAxNDksXG4gICAgICAxMjEsXG4gICAgICA1NyxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05UVTNzMEhFSi9TMGJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid2lFOXR5aHhyd2pvZEE3T09RQWE4M3pSbnNiSUNFT2NPdDgra0ZWbmJpdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDcHhFSDlaWUJwTGUrLzRvV2pnVG9mbU1yNnVucXhzdlI4QXdaUFhOSC92RytlVG1HRVMrL2I5bFdVYXJNczZkU0VJZ0V0V3VwUHN6UisrR2pjTlBndz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEeXJodzA4Ky9YTmNQck1yRXhmcXpLMXNSYlFHUm95V1JHalBxSjk3RE90aGV0MEtvUGkxUzhMOUdvd2RYaXZhY3RLOFNZYmEyc0wvaytMa2wyYjhpZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwOTcyMzQ5MDU6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg0MDk1OTYzMjU5MDE6MzBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDk3MjM0OTA1OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4OTA1MTIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQmF3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCYXcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMZ1F0NlVCVk1NS0dIK1UyS2t5dVRnSC85ZTlpczZ4am5GN09nd0ZMcytrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDIwNzk4MjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODkwNTEyNzAyOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

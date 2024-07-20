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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_14_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgNzMsXG4gICAgICAgIDcyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICA4MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMixcbiAgICAgICAgMTc3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2LFxuICAgICAgICAyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDk4LFxuICAgICAgICAzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzksXG4gICAgICAgIDYsXG4gICAgICAgIDk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI5LFxuICAgICAgICA2MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRJejBNQjZXMkhzbi9wM1NXWVdGVlhpTlR0QW1ndk81dVpJZXR5TTBuYzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA5NzIzNDkwNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FFQzc4MjREOEQzNjQzRTQ5NTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDgxMjM2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA5NzIzNDkwNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E4RTVDRUYzRUQwMTIwNTU4MDNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDgxMjQwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImwydDNhMmdoUllpbmJ2anBIYWw2Q2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTYxYWU3NmQtNzU3OS00MTgzLThhZDUtMGQ0NjAyMDQ4ZGY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgNTgsXG4gICAgICAxODksXG4gICAgICAzOCxcbiAgICAgIDIxNCxcbiAgICAgIDg1LFxuICAgICAgMTY2LFxuICAgICAgMTM5LFxuICAgICAgMzMsXG4gICAgICAyNDgsXG4gICAgICAyNDEsXG4gICAgICAxMzEsXG4gICAgICA5LFxuICAgICAgMjA4LFxuICAgICAgNzQsXG4gICAgICA0MixcbiAgICAgIDEyMixcbiAgICAgIDEyMyxcbiAgICAgIDI1MCxcbiAgICAgIDE4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgMjA2LFxuICAgICAgMjUsXG4gICAgICAzMSxcbiAgICAgIDE4NCxcbiAgICAgIDY1LFxuICAgICAgMjUxLFxuICAgICAgOSxcbiAgICAgIDE2OSxcbiAgICAgIDEzMSxcbiAgICAgIDE3MyxcbiAgICAgIDEyMSxcbiAgICAgIDE0NyxcbiAgICAgIDE5MSxcbiAgICAgIDIwNyxcbiAgICAgIDIyMyxcbiAgICAgIDIwLFxuICAgICAgNjUsXG4gICAgICAyMzYsXG4gICAgICAxODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPLzUzTzRKRUkzdzdyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInAyUFFieDI3SXZQdkN4OFZXMHh6UThTSWtQTGFxbkUrOERDV0Fidlhaa289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZktXVmtmMzcxQlRub2hoUVBBZjNDWFpKT0pCa2srbFp5dklKWVJuYWcvYUFSTEc0b2hZS1hMeXFNaXFLV2VwWTN0WFZML3dRVEZNM3g3VnA4dHRKQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaTdyUUI3MlVoT21MNjV3RlJNMi9vYWI3NXk3ckRVcGRCVUMrbXgzOHdtWDJNemo4aE0veHRLblFIcDFRclJZUC81em9ockNlZVM4LytSbDdmNGJKaVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDk3MjM0OTA1OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NDA5NTk2MzI1OTAxOjMxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIldoaXRlaGF08J+TilwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA5NzIzNDkwNTozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ4MTIzMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlTSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVNILmpzb24iOiAie1wia2V5RGF0YVwiOlwiMzJ5Y1dvNThOTlgyc2VVMFVLS2pkY0tLY2R0dU5ycDNXbVJoSEsvRmlyND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNjQ4MTI4NzUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0ODEyMzQ3MzZcIn0iCn0="  // PUT your SESSION_ID 


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

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/f27136b9297d7452f3fbc.jpg" || "https://telegra.ph/file/f27136b9297d7452f3fbc.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Hillary" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/f27136b9297d7452f3fbc.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_36_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjExLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg3LFxuICAgICAgICA1OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAwLFxuICAgICAgICAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICA1MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MixcbiAgICAgICAgMTQxLFxuICAgICAgICA4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDY5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICA3NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0LFxuICAgICAgICAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxcVhMUFgxZXZvWjJrcVNXMXdTYmZwSC9XUy9nOTJ0RTVya0M4eWdRRWh3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoLVVJMUdYX1FCYURuTkZhTHVlTFB3XCIsXG4gIFwicGhvbmVJZFwiOiBcImEzNGQxZjZjLWUzMjgtNDNlOC05YjhkLTFkYTRlMWVhOWM4ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDE2MSxcbiAgICAgIDE4OSxcbiAgICAgIDIzNCxcbiAgICAgIDIzNyxcbiAgICAgIDE4NyxcbiAgICAgIDI0LFxuICAgICAgOTIsXG4gICAgICAxNjQsXG4gICAgICAyMCxcbiAgICAgIDMxLFxuICAgICAgMjEwLFxuICAgICAgMTAxLFxuICAgICAgMjU0LFxuICAgICAgMjQzLFxuICAgICAgMTM5LFxuICAgICAgMjI1LFxuICAgICAgMTQ5LFxuICAgICAgNjEsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMjEwLFxuICAgICAgMjU1LFxuICAgICAgMTMzLFxuICAgICAgMzMsXG4gICAgICAyMTIsXG4gICAgICAxMTcsXG4gICAgICA1LFxuICAgICAgNjAsXG4gICAgICAyNDYsXG4gICAgICAxNjYsXG4gICAgICAyMzgsXG4gICAgICAxNTcsXG4gICAgICAyNDgsXG4gICAgICAyMDYsXG4gICAgICA5MCxcbiAgICAgIDE0OSxcbiAgICAgIDc5LFxuICAgICAgMTE1LFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNERTQjRWVk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MDI3Nzk1Nzo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhpbGxhcnlcIixcbiAgICBcImxpZFwiOiBcIjE4ODUzMjM3MDk2ODgwNTo0M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMN2t1TDBFRU5MNWlMb0dHRThnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZJN2VnZ080WGRlSFZXRlRCekc0TUd3Nm5GWTJlMmtocUxFbzllaWNWQnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSjVGbU92VzlUamZJTy96L213MEhzSVJZcW9YMGRMMjRLaHhad1BiamEvV1V4eGszL0RkdmVMMEpBcWZrMFBCYnJ3UTR3cVF4RmlDKzljdlY2US9pQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieTlPRTdmYStQT1ZsUjZUYkVsM2xFZ3kweTNzV1NneVlzTXduQytOemM5eWk4OXVoSWdPeStwOVZDK09Fbm92enp6SnpMeHlBcC9OYldEalAwTks4aFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQwMjc3OTU3OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjM5NDE5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNGYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0ZiLmpzb24iOiAie1wia2V5RGF0YVwiOlwidC9ubktJeVRkWlZ5eER1Y1NPWkJkci9Ncy9jUkxRYnR0TUVwM2NmVEtjWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjAyNTk4NDYyLFwiY3VycmVudEluZGV4XCI6MjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTAsMjZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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

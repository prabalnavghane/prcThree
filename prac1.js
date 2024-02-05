var os=require('os'); 
console.log("Platform :"+os.platform()); 
console.log("Architecture :"+os.arch()); 
console.log("Hostname :"+os.hostname()); 
console.log("User Information: "+os.userInfo()); 
console.log("Type :"+os.type());
console.log("Free Memory: " + os.freemem() + " bytes");
console.log("Total Memory: " + os.totalmem() + " bytes");n
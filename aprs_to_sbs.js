var aprs = require("aprs-parser");
var moment = require("moment")
    
    var parser = new aprs.APRSParser();
const aprsFormat = parser.parse("SQ7PFS-10>APRS,TCPIP*,qAC,T2SYDNEY:@085502h4903.50N/07201.75W-PHG5132Hello world/A=001234");
console.log("SQ7PFS-10>APRS,TCPIP*,qAC,T2SYDNEY:@085502h4903.50N/07201.75W-PHG5132Hello world/A=001234");
console.log(aprsFormat);

const date = moment(aprsFormat.data.timestamp);
const time = date.format("HH:mm:ss.SSS");

let convertMSG = ''.concat('MSG,,,,', aprsFormat.from.call, ',,',date.format("YYYY/MM/DD"),",", time,",")
convertMSG = convertMSG.concat(date.format("YYYY/MM/DD"),",", time,",", aprsFormat.via[aprsFormat.via.length-1].call, ",");

convertMSG = convertMSG.concat(aprsFormat.data.altitude, ",,", aprsFormat.data.extension.directivityDeg, ",");
convertMSG = convertMSG.concat(aprsFormat.data.latitude, ",", aprsFormat.data.longitude, ",,,,,,,");
console.log(convertMSG)


// Parse a string containing an SBS1 message.
var sbs1 = require('sbs1');
var s = 'MSG,3,496,211,4CA2D6,10057,2008/11/28,14:53:50.594,2008/11/28,14:58:51.153,,37000,,,51.45735,-1.02826,,,0,0,0,0';
var msg = sbs1.parseSbs1Message(convertMSG);
console.log(msg);

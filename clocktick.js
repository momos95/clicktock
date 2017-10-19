// serveur HTTP
var memorizeTime = {};

function clocktick (request, response) {
    let currentDate = new Date();
    let currentMinute = currentDate.getMinutes();
    
    response.setHeader('Date', currentDate.toGMTString());
    currentDate.setSeconds(0);
    if(currentMinute+1 == 60){
        currentDate.setHours(currentDate.getHours()+1);
        currentDate.setMinutes(0);
    }
    else
        currentDate.setMinutes(currentMinute+1);

    response.setHeader('Expires', currentDate.toGMTString());
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Connection', 'keep-alive');
    response.setHeader('Content-Length', currentMinute.toString().length);
    
    console.log("Date : " + currentDate.toGMTString());
    response.end(currentMinute.toString());
    
}
require('http').createServer(clocktick).listen(8080);


//Challenge 1
var today = new Date();  
var day = today.getDay();  
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];  
console.log("Today is : " + daylist[day] + ".");  
var hour = today.getHours();  
var minute = today.getMinutes();  
var second = today.getSeconds();  
var prepand = (hour >= 12)? " PM ":" AM ";   
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);  
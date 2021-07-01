"use strict";
    
alert("Welcome Fellow Leaders!");

function closeCurrentTab(){
     var conf=confirm("Are you sure you want to leave my awesome webpage?");
     if(conf==true){
          close();
     }
}

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var ap = (hr < 12) ? "AM" : "PM";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
 
 var d=new Date()
 var theDay=d.getDay()
 switch (theDay)
 {
 case 1:
   document.write("Oh no, it's Monday.")
   break
 case 2:
   document.write("Just another Tuesday.")
   break
 case 3:
   document.write("HUMP DAY!")
   break
 case 4:
   document.write("<p id='greeting' >So close to Friday!</p>")
   break
 case 5:
   document.write("It's finally Friday!")
   break
 case 6:
   document.write("I love Saturdays.")
   break
 case 0:
   document.write("<p>Lazy Sunday.</p>")
   break
 default:
   document.write("I'm looking forward to this weekend!")
 }
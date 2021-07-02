var d=new Date()
var theDay=d.getDay()
switch (theDay)
{
case 1:
  document.write("<p id='greeting'>Oh no, it's Monday.</p>")
  break
case 2:
  document.write("<p id='greeting'>Just another Tuesday.</p>")
  break
case 3:
  document.write("<p id='greeting'>HUMP DAY!</p>")
  break
case 4:
  document.write("<p id='greeting'>So close to Friday!</p>")
  break
case 5:
  document.write("<p id='greeting'>It's finally Friday!</p>")
  break
case 6:
  document.write("<p id='greeting'>I love Saturdays.</p>")
  break
case 0:
  document.write("<p id='greeting'>Lazy Sunday.</p>")
  break
default:
  document.write("<p id='greeting'I'm looking forward to this weekend!</p>")
}
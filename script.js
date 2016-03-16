

$(document).ready(function() {
  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      var ampm = isAMorPM(h);
      h = changeMilitary(h);
      m = checkTime(m);
      s = checkTime(h);
      $('#txt').html(h + ":" + m + ":" + s + ampm);
      oddEven(m);
      background(m);
      changeFont(s);
      setTimeout(startTime, 500);
  };

  function isAMorPM(i) {
    var value;
    if (i >= 12) {
      value = "PM"
    } else {
      value = "AM"
    }
    return value;
  };

  function changeMilitary(i) {
    if (i > 12) {
      i = i - 12;
    }
    return i;
  };

  function checkTime(i) {
      if (i < 10) {i = "0" + i}; 
      return i;
  };

 function oddEven(i){
    if (i % 2 === 0) {$ ("#txt").css({color: "pink"}) 
  } else {
   $ ("#txt").css ({color: "red" })
  }
 }; 
 
 function background(i){
    if ((i <= 5)||(i > 10 && i <= 15)||(i>20 && i <=25)||(i>30 && 1<=35)||(i>40 && i<=45)||(i>50 && i<=55)) {
      $ ("body").css({backgroundColor: "purple"});
    } else { 
      $ ("body").css({backgroundColor: "blue" });
    }
 };

function changeFont(i) {
 console.log(i);
 var font = ["20px","25px","30px","35px","40px","45px","50px","55px","60px","70px","75px"];
 $("#txt").css("font-size", font[i-1]);

};

startTime();

});




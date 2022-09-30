/*for*/
addEventListener("DOMContentLoaded",(e)=>{
   function testinput(re, str) {
      var midstring;
      if (str.search(re) != -1) {
        midstring = ' contains ';
      } else {
        midstring = ' does not contain ';
      }
      console.log(str + midstring + re);
   }
   testinput();
});



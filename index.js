$('#close-btn').click(
function(){
    $('#menu-mobily').css("left", "-100%")
}

)
$('#burger-menu').click(
function(){
    $('#menu-mobily').css("left", "0%")
})


let oneb = document.getElementById("one-btn-bl-p");
let twob = document.getElementById("two-btn-bl-p");
let threeb = document.getElementById("three-btn-bl-p");
let fourb = document.getElementById("four-btn-bl-p");


let oneimg = document.getElementById("one-img-bl");
let twoimg = document.getElementById("two-img-bl");
let threeimg = document.getElementById("three-img-bl");
let fourimg = document.getElementById("four-img-bl");





document.getElementById("one-btn-bl").addEventListener("click", function(){

oneb.style.display = oneb.style.display === "block" ? "none" : "block";


oneimg.style.transform = oneimg.style.transform  === "rotate(-180deg)" ? "rotate(0deg)" : "rotate(-180deg)"

})


document.getElementById("two-btn-bl").addEventListener("click", function(){

twob.style.display = twob.style.display === "block" ? "none" : "block";


twoimg.style.transform = twoimg.style.transform  === "rotate(-180deg)" ? "rotate(0deg)" : "rotate(-180deg)"

})



document.getElementById("three-btn-bl").addEventListener("click", function(){

threeb.style.display = threeb.style.display === "block" ? "none" : "block";


threeimg.style.transform = threeimg.style.transform  === "rotate(-180deg)" ? "rotate(0deg)" : "rotate(-180deg)"

})



document.getElementById("four-btn-bl").addEventListener("click", function(){

fourb.style.display = fourb.style.display === "block" ? "none" : "block";


fourimg.style.transform = fourimg.style.transform  === "rotate(-180deg)" ? "rotate(0deg)" : "rotate(-180deg)"

})







function home(){
   const element = document.getElementById("second-container");
  element.scrollIntoView();
     const e = document.getElementById("menu-mobily");
  e.style.left = "-100%"
}
function service(){
   const element = document.getElementById("third-container");
  element.scrollIntoView();
     const e = document.getElementById("menu-mobily");
  e.style.left = "-100%"
}
  function price(){
   const element = document.getElementById("fiveth-container");
  element.scrollIntoView();
     const e = document.getElementById("menu-mobily");
  e.style.left = "-100%"
}
  function faq(){
   const element = document.getElementById("faq-block");
  element.scrollIntoView();
     const e = document.getElementById("menu-mobily");
  e.style.left = "-100%"
}
  function testinominals(){
   const element = document.getElementById("fourth-container");
  element.scrollIntoView();
     const e = document.getElementById("menu-mobily");
  e.style.left = "-100%"
}


function mail(){
  const element = document.getElementById("window-stick");
  element.style.display = "flex";
} 

function closeMail(){
const element = document.getElementById("window-stick");

element.style.display = "none";


} 



  function open1(){
    window.open("https://www.google.com")
   }
     function open1(){
    window.open("https://www.google.com")
   }
  $("#btn-send-gmail").click(

  
    function(){

      /*let inp1 = $("#1").val();
let inp2 = $("#input2").val();
let inp3 = $("#input3").val();
let inp4 = $("#input4").val();


   if(inp1 == 0 || inp2 == 0 || inp3 == 0 || inp4 == 0){

  alert("fields for submit empty")
   
 
   }


 
   else{
    
     Email.send({
       Host : "smtp.elasticemail.com",

    Username : "kabanchikgeorge@gmail.com",
    Password : "1E727E66B1A6B90A28D3EDD17AA1EF1B2783",
    To : "georgezvin@gmail.com",
    From : "kabanchikgeorge@gmail.com",
    Subject : "This is the subject",
    Body : "Move date: " + inp1 + "<br>Move size: " + inp2 + "<br>From Zip " + inp3 + "<br>To Zip " + inp4
}).then(

  location.reload()

)
alert("thanks for your apply!")

   }
   */
  })



document.getElementById("btn-send-gmail1").addEventListener("click", function(){



 



})




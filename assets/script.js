$(document).ready(function(){
$('.slider').slick({
    prevArrow:$('.leftArrow'),
    nextArrow:$('.rightArrow'),
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
    

// Set the date we're counting down to
var countDownDate = new Date("Jan 26, 2023 5:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + " " + hours + " "
  + minutes + " " + seconds + " ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


})

function sendEmail(id){
  let address=document.getElementById(id).value;
  Email.send({
    Host: "smtp.gmail.com",
    Username : "your email here",
    Password : "your password here",
    To : address,
    From : "usm43sal@gmail.com",
    Subject : "Ciyashop Newsletter",
    Body : "Congratulations You have successfully subscribe to Ciyashop newsletter notifications...",
    }).then(
      message => alert("mail sent successfully")
    );
}

function addToCart(){
  productType=document.activeElement.parentElement.parentElement.parentElement.children[1].children[0].textContent;
  productName=document.activeElement.parentElement.parentElement.parentElement.children[1].children[1].textContent;
  productPrice=document.activeElement.parentElement.parentElement.parentElement.children[1].children[2].children[0].textContent;
  debugger

  product = { name: productName, type: productType, price: productPrice, quantity: 1 }
  if (document.cookie == '')
  {
    document.cookie = JSON.stringify({products:[]})
  }
  allProducts = JSON.parse(document.cookie).products

  flag=true
  for(var i in allProducts)
  {
    if(allProducts[i].name==product.name){
      allProducts[i].quantity++;
      flag=false
    }
  }
  if (flag)
    allProducts.push(product)
  document.cookie = JSON.stringify({products:allProducts})
}
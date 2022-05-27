// // // // // // // // var demo = document.getElementById('demo');//one tag
// // // // // // // // var h1s = document.getElementsByTagName('h1');//HTMLCollection
// // // // // // // // var div = document.getElementsByTagName('div');
// // // // // // // // var x = document.getElementsByClassName('text-center'); //HTMLCollection
// // // // // // // // var y= document.getElementsByClassName('item'); //HTMLCollection
// // // // // // // // var z = document.getElementsByName('gender');//>> name attribute - nodeList  notttt array
// // // // // // // // var uname = document.getElementsByName('username');
// // // // // // // // //var x = document.querySelectorAll('any css selector');
// // // // // // // // var x = document.querySelectorAll('h1 , p');//nodeList
// // // // // // // // //var x = document.querySelector('any css selector');//one tag (first one)
// // // // // // // // var x = document.querySelector('.container p');//one tag (first one)

// // // // // // // // console.log(x);

// // // // // // // // // object[array - object - HTMLCollection]

// // // // // // // // //nodeList [list contain tags - text - attributes]

// // // // // // // // // HTMLCollection(index - loop - length) >>>> list >> not array

// // // // // // // // // HTMLCollection(list contain tags only)

// // // // // // // // // array (list contain any thing)

// //  addEventListener( event, anonymous func )

// // // // // // // // 1-tag?????
// // // // // // // // 2-event
// // // // // // // // 3-action (function)

// // // // // // // var x = document.querySelector("h1"); //one tag >>> object

// // // // // // // // h1.addEventListener("click", function () {
// // // // // // // //   alert("hello user!");
// // // // // // // // });

// // // // // // // function addProduct() {
// // // // // // //   alert("add product");
// // // // // // // }

// // // // // // // function deleteProduct(index) {
// // // // // // //   alert(index);
// // // // // // // }

// // // // // // // x.addEventListener("click", function (x) {
// // // // // // //   deleteProduct(100);

// // // // // // //   addProduct();
// // // // // // // })
// // // // // // // x.addEventListener("click", addProduct);

// // // // // // var h1s = document.getElementsByTagName("h1"); //all h1

// // // // // // console.log(h1s);

// // // // // // for (var i = 0; i < h1s.length; i++) {
// // // // // //   h1s[i].addEventListener("click", function () {
// // // // // //     alert("hello");
// // // // // //   });
// // // // // // }

// // // // // // // h1s[1].addEventListener('click' , function(){
// // // // // // //     alert('hello');
// // // // // // // })
// // // // // // // h1s[2].addEventListener('click' , function(){
// // // // // // //     alert('hello');
// // // // // // // })
// // // // // // // h1s[3].addEventListener('click' , function(){
// // // // // // //     alert('hello');
// // // // // // // })

// // // // // var h1 = document.querySelector('h1'); //one tag  >> object

// // // // // function test1(){
// // // // //     alert('test1')
// // // // // }

// // // // // function test2(){
// // // // //     alert('test2')
// // // // // }

// //  h1.onclick = test1;

// // // // // // h1.onclick = test2; //override >> property

// // // // // h1.addEventListener('click' , addprouct); //method

// // // // // h1.addEventListener('click' , display);

// // // // // // hnady el 2

// // // // // // test2 bs

// // // // // // test1 bs

// // // // /**

// // // // click - dblclick - mouseover - mouseleave - mousemove

// // // // keyboard
// // // // keyup -keydown -keypress (inputs - document)

// // // // input events >>> blur x focus - change >> value

// // // // scroll

// // // // drag

// // // // // 9:10 break

// // // // */
// // // // var div = document.querySelector("#demo");
// // // // var bodyTag = document.body;
// // // // var input = document.querySelector("input"); //onetag

// // // // div.addEventListener("drag", function () {
// // // //   console.log("drag");
// // // // });

// // // // document.addEventListener("keyup", function () {
// // // //   console.log("ay7aga");
// // // // });

// // // // div.addEventListener("scroll", function () {
// // // //   console.log("div scroll");
// // // // });

// // // // window.addEventListener("scroll", function () {
// // // //   console.log(1);
// // // // });

// // // // // bodyTag.addEventListener("mousemove", function () {
// // // // //   console.log("moving");
// // // // // });

// // // // var div = document.getElementById("demo");

// // // // var input = document.querySelector('input');

// // // // input.addEventListener('keyup' , function(e){
// // // //     console.log(e.key);

// // // // })

// // // // div.addEventListener("click", function (eventInfo) { //test >> obje contain all details about event
// // // //   console.log(e);
// // // // });

// // // // dom >>> change css

// // // div.addEventListener("dragend", function (e) {
// // //   console.log(e.clientX, e.clientY);

// // //   div.style.position = "absolute";
// // //   div.style.top = e.clientY + "px";
// // //   div.style.left = e.clientX + "px";
// // // });

// // // btn.addEventListener("click", function () {
// // //   //    tag.style.cssProperty = value;

// // //   var colors = ["green", "indigo", "teal", "tomato", "red"];

// // //   var x = Math.floor(Math.random() * 255);
// // //   var y = Math.floor(Math.random() * 255);
// // //   var z = Math.floor(Math.random() * 255);

// // //   console.log(x, y, z);

// // //   // hexadecima

// // //   //   abcef

// div.style.backgroundColor = `rgba(${x},${y},${z})`;

// // //   //   for (var i = 0; i < colors.length; i++) {
// // //   //     div.style.backgroundColor = colors[i];
// // //   //   }

// // //   //   div.style.backgroundColor = "red"; // >> //inlin style
// // //   //   div.style.width = "100%";
// // //   //   div.style.height = "100vh";
// // //   //   div.style.transition = "all 1s";

// // //   // random

// // //   // عايزا مل عك كليك باك جراوند جديده
// // // });

// // // // select >> event >>> change style >>> cnahneg attrobutes

// // tag.src

// // var btn = document.querySelector("#clicked");
// // var img = document.querySelector("img");
// // var link = document.querySelector("#mylink");

// // btn.addEventListener("click", function () {
// //   //var x = img.id
// //   // var x =link.getAttribute('href');

// // link.setAttribute('href' , '#about'); //override

// //   link.setAttribute("target", "_blank"); // law msh mwgod hzwdo

// //   //   link.setAttribute("merit", "hello"); // law msh mwgod hzwdo

// //   //   img.setAttribute("src", "images/asset 5.jpeg");

// //   // btn.setAttribute("disabled", "true");

// //   //   img.setAttribute("class", "rounded-circle"); //override

// //   img.classList.add("rounded-circle", "shadow-lg", "border", "border-danger");

// //   img.classList.remove("rounded-circle", "shadow-lg");
// //   img.classList.replace("w-50", "w-25");

// //   img.classList.toggle("rounded-circle");

// //   console.log(img.classList.contains("rounded-circle"));

// //   // if(img.getAttribute('class').includes('rounded-circle') == true){
// //   //     img.classList.remove("rounded-circle");

// //   // }
// //   // else{

// //   //     img.classList.add("rounded-circle");

// //   // }
// // });

// // link.addEventListener("click", function () {
// //   btn.removeAttribute("disabled");
// // });

// // // task >> dom >> slider

// // record

// // 95%

var h1 = document.querySelector("h1");
var btn = document.querySelector(".btn");
var demo = document.querySelector(".demo");

btn.addEventListener("click", function () {
  var h1 = document.createElement("h1");
  h1.innerHTML = "hello user";

  //   parent appendChild()

  //demo.appendChild(h1);
  //  demo.append(h1 , btn);

  // innHTML >>> string >>>>> parse(tag) >>> n7oto gwa el dom

  //    console.log(h1)

  // innerHTML
  //     //h1.innerHTML = 'merit'; //set value
  //    // h1.innerHTML = '<span>merit</span>'; //set value
  //  var x =   h1.innerHTML; //get value
  //   console.log(x);

  //h1.innerText = '<span>ahmed</span>';//set value
  //   var x = h1.innerText; //get value  >>text not tag

  //   console.log(x);
});

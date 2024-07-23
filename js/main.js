//console script
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener('readystatechange', function () {
if (this.readyState === this.DONE) {
console.log(this.responseText);
}
});

xhr.open('GET', 'https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P436359&preferedSku=2131803');
xhr.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
xhr.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');

xhr.send(data);

//form script
function results(event) {
  let xhttp = new XMLHttpRequest();
  let xhttpTwo = new XMLHttpRequest();
  let xhttpThree = new XMLHttpRequest();
  let xhttpFour = new XMLHttpRequest();
  let xhttpFive = new XMLHttpRequest();
  let xhttpSix = new XMLHttpRequest();
  let xhttpSeven = new XMLHttpRequest();
  let xhttpEight = new XMLHttpRequest();
  let xhttpNine = new XMLHttpRequest();

event.preventDefault();
xhttpThree.onreadystatechange = function() {
var formcheckA = document.getElementById("a-question");
var formcheckB = document.getElementById("b-question");
var formcheckC = document.getElementById("c-question");
var formcheckD = document.getElementById("d-question");
var formcheckE = document.getElementById("e-question");
var formcheckF = document.getElementById("f-question");

if(formcheckA.checked && formcheckD.checked == true) {
response = JSON.parse(xhttpThree.response);
document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
}
}
xhttpTwo.onreadystatechange = function() {
var formcheckA = document.getElementById("a-question");
var formcheckB = document.getElementById("b-question");
var formcheckC = document.getElementById("c-question");
var formcheckD = document.getElementById("d-question");
var formcheckE = document.getElementById("e-question");
var formcheckF = document.getElementById("f-question");

if(formcheckA.checked && formcheckE.checked == true) {
response = JSON.parse(xhttpTwo.response);
document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
}
}
xhttpFour.onreadystatechange = function() {
var formcheckA = document.getElementById("a-question");
var formcheckB = document.getElementById("b-question");
var formcheckC = document.getElementById("c-question");
var formcheckD = document.getElementById("d-question");
var formcheckE = document.getElementById("e-question");
var formcheckF = document.getElementById("f-question");
if(formcheckA.checked && formcheckF.checked == true) {
response = JSON.parse(xhttpFour.response);
document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
}
}
xhttpFive.onreadystatechange = function() {
var formcheckA = document.getElementById("a-question");
var formcheckB = document.getElementById("b-question");
var formcheckC = document.getElementById("c-question");
var formcheckD = document.getElementById("d-question");
var formcheckE = document.getElementById("e-question");
var formcheckF = document.getElementById("f-question");
if(formcheckB.checked && formcheckD.checked == true) {
response = JSON.parse(xhttpFive.response);
document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
}
}
xhttpSix.onreadystatechange = function() {
var formcheckA = document.getElementById("a-question");
var formcheckB = document.getElementById("b-question");
var formcheckC = document.getElementById("c-question");
var formcheckD = document.getElementById("d-question");
var formcheckE = document.getElementById("e-question");
var formcheckF = document.getElementById("f-question");
if(formcheckB.checked && formcheckE.checked == true) {
response = JSON.parse(xhttpSix.response);
document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
}
}
xhttpSeven.onreadystatechange = function() {
var formcheckA = document.getElementById("a-question");
var formcheckB = document.getElementById("b-question");
var formcheckC = document.getElementById("c-question");
var formcheckD = document.getElementById("d-question");
var formcheckE = document.getElementById("e-question");
var formcheckF = document.getElementById("f-question");
if(formcheckB.checked && formcheckF.checked == true) {
response = JSON.parse(xhttpSeven.response);
document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
}
}
xhttp.onreadystatechange = function() {
var formcheckA = document.getElementById("a-question");
var formcheckB = document.getElementById("b-question");
var formcheckC = document.getElementById("c-question");
var formcheckD = document.getElementById("d-question");
var formcheckE = document.getElementById("e-question");
var formcheckF = document.getElementById("f-question");
if(formcheckC.checked && formcheckD.checked == true) {
response = JSON.parse(xhttp.response);
document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
}
}
xhttpEight.onreadystatechange = function() {
var formcheckA = document.getElementById("a-question");
var formcheckB = document.getElementById("b-question");
var formcheckC = document.getElementById("c-question");
var formcheckD = document.getElementById("d-question");
var formcheckE = document.getElementById("e-question");
var formcheckF = document.getElementById("f-question");
if(formcheckC.checked && formcheckE.checked == true) {
response = JSON.parse(xhttpEight.response);
document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
}
}
xhttpNine.onreadystatechange = function() {
var formcheckA = document.getElementById("a-question");
var formcheckB = document.getElementById("b-question");
var formcheckC = document.getElementById("c-question");
var formcheckD = document.getElementById("d-question");
var formcheckE = document.getElementById("e-question");
var formcheckF = document.getElementById("f-question");
if(formcheckC.checked && formcheckF.checked == true) {
response = JSON.parse(xhttpNine.response);
document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
}
}
xhttp.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P431187&preferedSku=2046597", true);
xhttp.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
xhttp.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
xhttp.send(data);

xhttpTwo.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P411387&preferedSku=1863588", true);
xhttpTwo.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
xhttpTwo.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
xhttpTwo.send(data);

xhttpThree.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P443833&preferedSku=2211605", true);
xhttpThree.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
xhttpThree.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
xhttpThree.send(data);

xhttpFour.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P474937&preferedSku=2491413", true);
xhttpFour.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
xhttpFour.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
xhttpFour.send(data);

xhttpFive.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P461537&preferedSku=2382232", true);
xhttpFive.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
xhttpFive.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
xhttpFive.send(data);

xhttpSix.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P500618&preferedSku=2581601", true);
xhttpSix.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
xhttpSix.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
xhttpSix.send(data);

xhttpSeven.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P500614&preferedSku=2529675", true);
xhttpSeven.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
xhttpSeven.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
xhttpSeven.send(data);

xhttpEight.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P503634&preferedSku=2661239", true);
xhttpEight.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
xhttpEight.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
xhttpEight.send(data);

xhttpNine.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P469520&preferedSku=2421196", true);
xhttpNine.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
xhttpNine.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
xhttpNine.send(data);
}

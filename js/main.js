
//hamburger script

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
  let xhttpTen = new XMLHttpRequest();
  //moisturizer
  let xhttpEleven = new XMLHttpRequest();
  let xhttpTwelve = new XMLHttpRequest();
  let xhttpThirteen = new XMLHttpRequest();
  let xhttpFourteen = new XMLHttpRequest();

  event.preventDefault();
  var formcheckA = document.getElementById("a-question");
  var formcheckB = document.getElementById("b-question");
  var formcheckC = document.getElementById("c-question");
  var formcheckD = document.getElementById("d-question");
  var formcheckE = document.getElementById("e-question");
  var formcheckF = document.getElementById("f-question");
  var productBtn = document.getElementById("final-result");

  if(formcheckA.checked) {
    if(formcheckD.checked) {
      xhttpThree.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P443833&preferedSku=2211605", true);
      xhttpThree.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
      xhttpThree.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
      xhttpThree.send(data);

      xhttpThree.onreadystatechange = function() {
        console.log(xhttpThree.response);
        response = JSON.parse(xhttpThree.response);
        document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
      }
      setTimeout(() => {
        xhttpEleven.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P482006&preferedSku=2740637", true);
        xhttpEleven.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
        xhttpEleven.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
        xhttpEleven.send(data);
        xhttpEleven.onreadystatechange = function() {
          console.log(xhttpEleven.response);
          response = JSON.parse(xhttpEleven.response);
          document.getElementById("moisturizer").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
        }
      }, 1000)
    }
  }

  if(formcheckA.checked) {
    if(formcheckE.checked) {
      xhttpTwo.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P411387&preferedSku=1863588", true);
      xhttpTwo.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
      xhttpTwo.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
      xhttpTwo.send(data);

      xhttpTwo.onreadystatechange = function() {
        console.log(xhttpTwo.response);
        response = JSON.parse(xhttpTwo.response);
        document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
      }
      setTimeout(() => {
        xhttpTwelve.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P466153&preferedSku=2412856", true);
        xhttpTwelve.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
        xhttpTwelve.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
        xhttpTwelve.send(data);
        xhttpEleven.onreadystatechange = function() {
          console.log(xhttpTwelve.response);
          response = JSON.parse(xhttpTwelve.response);
          document.getElementById("moisturizer").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
        }
      }, 1000)
    }
  }
  if(formcheckA.checked) {
    if(formcheckF.checked) {
      xhttpFour.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P474937&preferedSku=2491413", true);
      xhttpFour.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
      xhttpFour.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
      xhttpFour.send(data);

      xhttpFour.onreadystatechange = function() {
        console.log(xhttpFour.response);
        response = JSON.parse(xhttpFour.response);
        document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
      }
      setTimeout(() => {
        xhttpThirteen.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P510561&preferedSku=2647568", true);
        xhttpThirteen.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
        xhttpThirteen.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
        xhttpThirteen.send(data);
        xhttpThirteen.onreadystatechange = function() {
          console.log(xhttpThirteen.response);
          response = JSON.parse(xhttpThirteen.response);
          document.getElementById("moisturizer").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
        }
      }, 1000)
    }
  }
  if(formcheckB.checked) {
    if(formcheckD.checked) {
      xhttpFive.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P461537&preferedSku=2382232", true);
      xhttpFive.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
      xhttpFive.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
      xhttpFive.send(data);

      xhttpFive.onreadystatechange = function() {
        console.log(xhttpFive.response);
        response = JSON.parse(xhttpFive.response);
        document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
      }
      setTimeout(() => {
        xhttpEleven.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P482006&preferedSku=2740637", true);
        xhttpEleven.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
        xhttpEleven.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
        xhttpEleven.send(data);
        xhttpEleven.onreadystatechange = function() {
          console.log(xhttpEleven.response);
          response = JSON.parse(xhttpEleven.response);
          document.getElementById("moisturizer").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
        }
      }, 1000)
    }
  }
  if(formcheckB.checked) {
    if(formcheckE.checked) {
      xhttpSix.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P500618&preferedSku=2581601", true);
      xhttpSix.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
      xhttpSix.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
      xhttpSix.send(data);

      xhttpSix.onreadystatechange = function() {
        console.log(xhttpSix.response);
        response = JSON.parse(xhttpSix.response);
        document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
      }
      setTimeout(() => {
        xhttpTwelve.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P466153&preferedSku=2412856", true);
        xhttpTwelve.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
        xhttpTwelve.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
        xhttpTwelve.send(data);
        xhttpTwelve.onreadystatechange = function() {
          console.log(xhttpTwelve.response);
          response = JSON.parse(xhttpTwelve.response);
          document.getElementById("moisturizer").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
        }
      }, 1000)
    }
  }
  if(formcheckB.checked) {
    if(formcheckF.checked) {
      xhttpSeven.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P500614&preferedSku=2529675", true);
      xhttpSeven.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
      xhttpSeven.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
      xhttpSeven.send(data);

      xhttpSeven.onreadystatechange = function() {
        console.log(xhttpSeven.response);
        response = JSON.parse(xhttpSeven.response);
        document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
      }
      setTimeout(() => {
        xhttpThirteen.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P510561&preferedSku=2647568", true);
        xhttpThirteen.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
        xhttpThirteen.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
        xhttpThirteen.send(data);
        xhttpThirteen.onreadystatechange = function() {
          console.log(xhttpThirteen.response);
          response = JSON.parse(xhttpThirteen.response);
          document.getElementById("moisturizer").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
        }
      }, 1000)
    }
  }
  if(formcheckC.checked) {
    if(formcheckD.checked) {
      xhttp.open('GET', 'https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P512265&preferedSku=2788222');
      xhttp.setRequestHeader('x-rapidapi-key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
      xhttp.setRequestHeader('x-rapidapi-host', 'sephora.p.rapidapi.com');
      xhttp.send(data);

      xhttp.onreadystatechange = function() {
        console.log(xhttp.response);
        response = JSON.parse(xhttp.response);
        document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
      }
      setTimeout(() => {
        xhttpFourteen.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P507952&preferedSku=2714863", true);
        xhttpFourteen.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
        xhttpFourteen.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
        xhttpFourteen.send(data);
        xhttpEleven.onreadystatechange = function() {
          console.log(xhttpFourteen.response);
          response = JSON.parse(xhttpFourteen.response);
          document.getElementById("moisturizer").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
        }
      }, 1000)
    }
  }
  if(formcheckC.checked) {
    if(formcheckE.checked) {
      xhttpEight.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P503634&preferedSku=2661239", true);
      xhttpEight.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
      xhttpEight.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
      xhttpEight.send(data);

      xhttpEight.onreadystatechange = function() {
        console.log(xhttpEight.response);
        response = JSON.parse(xhttpEight.response);
        document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
      }
      setTimeout(() => {
        xhttpEleven.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P466153&preferedSku=2412856", true);
        xhttpEleven.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
        xhttpEleven.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
        xhttpEleven.send(data);
        xhttpEleven.onreadystatechange = function() {
          console.log(xhttpEleven.response);
          response = JSON.parse(xhttpEleven.response);
          document.getElementById("moisturizer").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
        }
      }, 1000)
    }
  }
  if(formcheckC.checked) {
    if(formcheckF.checked) {
      xhttpNine.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P469520&preferedSku=2421196", true);
      xhttpNine.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
      xhttpNine.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
      xhttpNine.send(data);

      xhttpNine.onreadystatechange = function() {
        console.log(xhttpNine.response);
        response = JSON.parse(xhttpNine.response);
        document.getElementById("900098").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
      }
      setTimeout(() => {
        xhttpThirteen.open("GET", "https://sephora.p.rapidapi.com/us/products/v2/detail?productId=P510561&preferedSku=2647568", true);
        xhttpThirteen.setRequestHeader('X-RapidAPI-Key', '3c847760d5mshe01e3c882569eafp1ae715jsnbdcf5c7796ef');
        xhttpThirteen.setRequestHeader('X-RapidAPI-Host', 'sephora.p.rapidapi.com');
        xhttpThirteen.send(data);
        xhttpThirteen.onreadystatechange = function() {
          console.log(xhttpThirteen.response);
          response = JSON.parse(xhttpThirteen.response);
          document.getElementById("moisturizer").innerHTML = response.content.seoTitle + " " + response.content.seoMetaDescription;
        }
      }, 1000)
    }
  }
  if(productBtn.form) {
    xhttpTen.open("GET", "https://demo3919838.mockable.io/thanks", true);

    xhttpTen.send(data);

    xhttpTen.onreadystatechange = function() {
      response = JSON.parse(xhttpTen.response);
      console.log(response.userNote[0].type);
      document.getElementById("900099").innerHTML = response.userNote[0].type;
    }
  }
}

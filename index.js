//Request 1
fetch("https://restcountries.com/v3.1/lang/aze")
  .then((result) => result.json())
  .then((jsonData) => console.log(jsonData))
  .catch((error) => console.log("Error"));

// Request 2

fetch("https://ll.thespacedevs.com/2.2.0/agencies/225/", { method: "GET" })
  .then((spacedev) => spacedev.json())
  .then((spacedevJson) => console.log(spacedevJson))
  .catch((error) => console.log(error));

// Request 3

fetch("https://catfact.ninja/breeds")
  .then((info) => info.json())
  .then((jsonInfo) => console.log(jsonInfo))
  .catch((error) => console.log(error));

// Request 4

fetch("https://catfact.ninja/breeds")
  .then((api) => api.json())
  .then((jsonApi) => console.log(jsonApi))
  .catch((error) => consol.log(error));

// Request 5

fetch("https://api.nationalize.io?name=michael")
  .then((userInfo) => userInfo.json())
  .then((userJson) => console.log(userJson))
  .catch((error) => consol.log(error));

// Request 6

fetch("https://urlhaus-api.abuse.ch/v1/urls/recent/limit/3/")
  .then((limit) => limit.json())
  .then((jsonLimit) => console.log(jsonLimit))
  .catch((error) => consol.log(error));

// Request 7

fetch("https://api.punkapi.com/v2/beers")
  .then((beers) => limit.json())
  .then((beersJason) => console.log(beersJason))
  .catch((error) => console.log(error));

// Request 8

fetch("https://ifsc.razorpay.com/YESB0DNB002")
  .then((payInfo) => payInfo.json())
  .then((payJson) => console.log(payJson))
  .catch((error) => console.log(error));

// Request 9

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  .then((margarita) => margarita.json())
  .then((margaritaJson) => console.log(margaritaJson))
  .catch((error) => console.log(error));

// Resuqest 10
fetch("https://restcountries.com/v3.1/lang/azerbaijani")
  .then((result) => result.json())
  .then((jsonData) => console.log(jsonData))
  .catch((error) => console.log("Data can not be reached"));

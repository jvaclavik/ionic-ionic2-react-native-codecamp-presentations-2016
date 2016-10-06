function getMoviesFromApi(callback){
  // Do something
  var name = "Katka";
  callback(name);
}

function sayHelloTo(somebody){
  console.log("Hello!" + somebody)
}

getMoviesFromApi(sayHello)

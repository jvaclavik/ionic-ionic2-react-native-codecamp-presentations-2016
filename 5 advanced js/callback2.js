function getMoviesFromApi(callback){
  // Do something
  callback();
}

function sayHello(){
  console.log("Hello!")
}

getMoviesFromApi(sayHello)

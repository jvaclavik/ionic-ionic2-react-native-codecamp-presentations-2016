myNameSpace = function(){
  var init = function(){...}
  var verify = function(){...}
  init(); //Works
  verify(); //Works

  return{
    init: init
  }
}();


myNameSpace.init(); //It works
myNameSpace.verify(); //Doesn't work

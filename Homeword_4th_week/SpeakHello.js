(function (window){
  var helloSpeaker ={};
  var speakWord = "Good Bye";
  
  helloSpeaker.speak=function(names){
  console.log(speakWord+" "+names);
  }
  
  window.helloSpeaker=helloSpeaker;
})(window);



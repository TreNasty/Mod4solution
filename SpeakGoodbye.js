// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.


(function (window) {
  var speakWord = "Good Bye";
  var byeSpeaker = {};

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);



// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;

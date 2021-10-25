$(document).ready(function(){
  $("#word-form").submit(function(event) {
    event.preventDefault();
    let sentenceArray = [];
    sentenceArray = $("#word-input").val().split(" ");
    let newSentenceArray = [];
    sentenceArray.forEach(function(word) {
      if (word.length > 2) {
        newSentenceArray.push(word);
      }
    });
    const reversedArray = newSentenceArray.reverse();
    const result = reversedArray.join(" ")
    $("#word-output").text(result);
  });
});
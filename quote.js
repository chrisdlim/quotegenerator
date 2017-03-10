//using API and json
function getQuote(){
  //forismatic api for random quotes
  var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=123456&format=jsonp&lang=en&jsonp=?';
  var getQ = function(x){
    $("#quote").text(x.quoteText);
    if(x.quoteAuthor != ''){
      $("#author").text(x.quoteAuthor);
    }
    else{
      $("#author").text('Unknown');
    }
  }
  $.getJSON(url, getQ, 'jsonp');
  
  var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  
  var randomColorIndex = Math.floor(Math.random()*(colors.length - 1))+1;
  $("body").css("background-color", colors[randomColorIndex]);
  $(".words").css('color', colors[randomColorIndex]);
  $(".button").css("background-color", colors[randomColorIndex])
}

function generateQuote(){
     var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
   var randomQuote = [
   'A room without books is like a body without a soul. — Marcus Tullius Cicero',  
     'Inflation is as violent as a mugger, as frightening as an armed robber and as deadly as a hit man. — Ronald Wilson Reagan',
     'Ignorant people think it is the noise which fighting cats make that is so aggravating, but it aint so. It is the sickening grammar that they use. — Mark Twain',
     'O Rose, thou art sick! The invisible worm, That flies in the night, In the howling storm, Has found out thy bed Of crimson joy, And his dark secret love Does thy life destroy. — William Blake',
     'We are ready for an unforeseen event that may or may not occur. — Dan Quayle',
     'A man must not make another get up from his place and then occupy it himself, but you should spread out and make room. — Prophet Muhammad',
'The human race has one really effective weapon, and that is laughter. — Mark Twain',
'Among all forms of mistake, prophecy is the most gratuitous. — George Eliot',
'The basic ingredients of psychotherapy are religion, rhetoric, and repression, which are themselves mutually overlapping categories. — Thomas Szasz',
'Conditions are never just right. People who delay action until all factors are favorable do nothing. — William Feather'];
   
   var randomQuoteIndex = Math.floor(Math.random()*(randomQuote.length - 1)) + 1;
     
   var randomColorIndex = Math.floor(Math.random()*(colors.length - 1))+1;
   
   var quote = randomQuote[randomQuoteIndex];
   $("body").css("background-color", colors[randomColorIndex]);
   $(".words").css('color', colors[randomColorIndex]);
   $(".button").css("background-color", colors[randomColorIndex])
   $("#quote").html(quote);
   
   };
   

$(document).ready(function() {
  //generateQuote();
  //$('#quotebutton').on('click', generateQuote);
  getQuote();
  $("#quotebutton").on('click', getQuote);
 });
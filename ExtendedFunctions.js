var nextButton = null;
var like = null;
var numberOfLikesAlready = 0; // initial amount of likes before iteration
var numberOfDislikesAlready = 0; // initial amount of likes before iteration
var setNumbersOfIterations = 250;

//Find the next button to click
var allhrefNexts = document.getElementsByTagName('a');
var rawNext = null;
for(var i = 0; i<allhrefNexts.length; i++){
  if(allhrefNexts[i].textContent === 'Next'){
    rawNext = allhrefNexts[i].className;
    rawNext = rawNext.replace(" ", ".");
    rawNext = 'a.' + rawNext;
    }
}

nextButton = document.querySelector(rawNext);

//Find the like button
var allButtonsFromPage = document.getElementsByTagName('button');
var likeButtonFromPage = 'button.' + allButtonsFromPage[2].className.replace(" ", ".").trim();

//Find the follow button
var followButton = null;
var followButtonFromPage = "";

for(var i = 0; i<allButtonsFromPage.length; i++){

      if(allButtonsFromPage[i].textContent === 'Follow'){
        
        followButton = allButtonsFromPage[i].className;
        
    }
}

followButton = followButton.replace(/ +/g, " ");

console.log(followButton);


function likeAndGoNextRandomising(randomTimeToLike) {
    
    like = document.querySelector(likeButtonFromPage);
    var randomShouldLike = Math.random() >= 0.3;

    if(randomShouldLike){

        console.log('I liked this post\n');
        like.click();
        numberOfLikesAlready++;
    
    } else {

        console.log('I did not like this post');
        numberOfDislikesAlready++;

    }

    nextButton.click();

    console.log('Sum of likes already: ' + numberOfLikesAlready);
    console.log('Sum of dislikes already: ' + numberOfDislikesAlready);
    console.log('The next post is coming in: '+ randomTimeToLike +' miliseconds\n');
    console.log('__________________________________________');
    
}

(function main() {
    
    if(numberOfLikesAlready<setNumbersOfIterations){

    var min = 3000; // min 3 seconds
    var max = 8000; // max 8 seconds
    
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    setTimeout(function() {
            likeAndGoNextRandomising(random);
            main();  
    }, random);

}}());
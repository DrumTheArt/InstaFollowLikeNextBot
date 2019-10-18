var numberOfLikesAlready = 0; // initial amount of likes before iteration
var numberOfDislikesAlready = 0; // initial amount of likes before iteration
var numberOfNewFollowings = 0; // initial amount of followings
var setNumbersOfIterations = 250;
var likeButtonFromPage = "button.dCJp8.afkep";
var followButtonFromPage = "button.oW_lN.sqdOP.yWX7d.y3zKF";



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

var nextButton = document.querySelector(rawNext);

/** 
//Find the like button
var allButtonsFromPage = document.getElementsByTagName('button');
var likeButtonFromPage = "";
for(var i = 0; i<allButtonsFromPage.length; i++){
      if(allButtonsFromPage[i].textContent === 'Like'){
        likeButtonFromPage = likeButtonFromPage[i].className;
        likeButtonFromPage = likeButtonFromPage.replace(" ", ".");
        likeButtonFromPage = 'button.' + likeButtonFromPage;
        }
    }

//Find the follow button
var followButtonName = null;

for(var i = 0; i<allButtonsFromPage.length; i++){

      if(allButtonsFromPage[i].textContent === 'Follow'){
        
        followButtonName = allButtonsFromPage[i].className.replace(" ", ".").trim();
        
    }
}

var followButtonFromPage = 'button.' + followButtonName;
followButtonFromPage = followButtonFromPage.replace(/ +/g, " ");
followButtonFromPage= followButtonFromPage.replace(" ", ".");
followButtonFromPage= followButtonFromPage.replace(" ", ".");

*/

function likeAndGoNextRandomising(randomTimeToLike) {
    
    waitForElementToDisplay(likeButtonFromPage, 2000);
    console.log("likeNameButton " ,likeButtonFromPage);
    console.log("followbuttonname ", followButtonFromPage);

    var like = document.querySelector(likeButtonFromPage);
    var follow = document.querySelector(followButtonFromPage);
    
    var randomShouldLike = Math.random() >= 0.3;

    if(randomShouldLike){


	if (like != null) { 
        		
		like.click();
	}      
  
	if (follow != null) { 
        		
		follow.click();
	}      
  
numberOfLikesAlready++;
        numberOfNewFollowings++;
    
    } else {

        console.log('I did not like this post');
        numberOfDislikesAlready++;

    }

    nextButton.click();

    console.log('Sum of likes already: ' + numberOfLikesAlready);
    console.log('Sum of dislikes already: ' + numberOfDislikesAlready);
    console.log('Sum of new followings:  ' + numberOfNewFollowings);
    console.log('The next post is coming in: '+ randomTimeToLike +' miliseconds\n');
    console.log('__');
    
}

function waitForElementToDisplay(selector, time) {
    if(document.querySelector(selector)!=null) {
        console.log("The element is displayed, you can put your code instead of this alert.");
        return;
    }
    else {
        setTimeout(function() {
            waitForElementToDisplay(selector, time);
        }, time);
    }
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

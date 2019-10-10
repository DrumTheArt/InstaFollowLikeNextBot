var next = null;
var like = null;
var numberOfLikesAlreadyClicked = 0; // initial amount of likes before iteration
next = document.querySelector('a.HBoOv.coreSpriteRightPaginationArrow');

function doSomething(randomTimeToLike) {
    
    like = document.querySelector('button.dCJp8.afkep');
    
    if(like){
        console.log('click\n');
        like.click();
        numberOfLikesAlreadyClicked++;
    }

    next.click();

    console.log('waiting for '+randomTimeToLike+' miliseconds\n');
    console.log('Manolo, you already liked ' + numberOfLikesAlreadyClicked + ' posts with this iteration');
}

(function loop(amountOfRounds) {

    var j = amountOfRounds;
    var min = 3000; // min 3 seconds
    var max = 8000; // max 8 seconds
    
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    setTimeout(function() {
            doSomething(random);
            loop(2);  
    }, random);
}());
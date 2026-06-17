var j=0;
var arr1=[];
var arr2=[];
$("body").click(function(){
    if(j==0){
    j=j+1;
    $("#level-title").text("Level 1");
    nextsequence();
    }
});
function nextsequence(){
    arr2=[];
    const randomNumber = Math.floor(Math.random() * 4) + 1; 
    console.log("r",randomNumber);
    if (randomNumber==1){
    color="green";
    }
    else if(randomNumber==2){
    color="red";
    }
    else if(randomNumber==3){
        color="yellow";
    }
    else{
    color="blue";
    }
    buttoncolor(color);
    buttonAnimation(color);
    arr1.push(color);
    console.log("arr1",arr1);
}
$(".btn").click(function() {
var buttonName = this.id;
arr2.push(buttonName);
console.log("arr2",arr2);
buttoncolor(buttonName);
buttonAnimation(buttonName);
playerchoice(arr2.length-1);
});
function buttonAnimation(currentkey) {
    $("#" + currentkey).addClass("pressed");
    setTimeout(function() {
        $("#" + currentkey).removeClass("pressed");
    }, 200);
}
function playerchoice(index){
    if (arr1[index]!=arr2[index] && arr1.length!=arr2.length){
        $("h1").text("Game Over");
        var wrong=new Audio("./sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("pressed");
        setTimeout(function(){
            $("body").removeClass("pressed");
        },400);
        return
    }
    if (arr1.length==arr2.length){
        j=j+1;
        $("h1").text("Level "+j);
        setTimeout(function() {
        nextsequence();
    }, 1000);
    }
}
function buttoncolor(key){
    switch(key){
        case 'green':
            var green=new Audio("./sounds/green.mp3");
            green.play();
            break;
        case 'red':
            var red=new Audio("./sounds/red.mp3");
            red.play();
            break;
        case 'yellow':
            var yellow=new Audio("./sounds/yellow.mp3");
            yellow.play();
            break;
        case 'blue':
            var blue=new Audio("./sounds/blue.mp3");
            blue.play();
            break;
    }
}
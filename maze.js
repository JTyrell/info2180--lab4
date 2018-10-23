//var walls = document.querySelectorAll(".boundary");
//var start = document.querySelector("#start");
//var end = document.querySelector("#end");
//var status = document.querySelector("#status");
//var win = true;

//  start.addEventListener("mouseover", function() {
//    document.getElementById("status").innerHTML = "Move your mouse over the S to START!!!";
//    for (var c = 0; c < walls.length; c++) {
//     	walls[c].addEventListener("mouseover", function() {
//        win = false;
//        walls[c].style.background = "red";
//        alert("NOPE!!! YOU LOSE! START OVER!");
//        walls[c].style.background = "#eeeeee";
//        document.getElementById("status").innerHTML = "HA!!! YOU LOSE!"
//        stopPropagation();
//      });
//    }
//    
//  });
//
//end.addEventListener("mouseover", function() {
//  if (win == true) {
//    document.getElementById("status").innerHTML = "GREAT PLAYING, YOU WIN!";
//    alert("CONGRATULATIONS! YOU WIN!");
//  }
//  win = true;
//});
//

window.onload = function() {
    $("start").onmouseover = startHover;
    $("end").onmouseover = overEnd;
    $("maze").onmouseleave = Cheatproof;
    var gardenWalls = $$("div#maze div.boundary");
    for (var i = 0; i<gardenWalls.length; i++) {
        gardenWalls[i].onmouseover = overTheGardenWalls;
        gardenWalls[i].onmousleave = overTheGardenWalls;
    }
};

function overTheGardenWalls() { //cause why not call it that.
    var gWalls = document.getElementsByClassName("boundary");

    for (var i=0;i<x.length; i++) {
        gWalls[i].style.backgroundColor = "red";
        if (gWalls[i].style.backgroundColor == "red") {
            var s = document.getElementById("status").innerHTML = "NIGGA You Lose!";
        }
    }
}

function startHover() {
    var gGWalls = document.getElementsByClassName("boundary");

    for (var i = 0; i < x.length; i++) {
        gGWalls[i].style.backgroundColor = "#eeeeee";
        if (gGWalls[i].style.backgroundColor != "red") {
            var s = document.getElementById("status").innerHTML = "Move your mouse over the 'S' to begin.";
        }
    }
}

//Check if a nigga winning
function overEnd() {
    var gGWalls = document.getElementsByClassName("boundary");

    for (var i = 0; i<x.length; i++) {
        if (gGWalls[i].style.backgroundColor != "red") {
            var s = document.getElementById("status").innerHTML = "You win!";
        }
    }
}


//to make sure the the Garden Walls are protected LOL and cheatproof
function Cheatproof() {
    var gGWalls= document.getElementsByClassName("boundary");

    for (var i = 0; i<x.length; i++) {
        gGWalls[i].style.backgroundColor = "red";
        if (gGWalls[i].style.backgroundColor == "red") {
            var s = document.getElementById("status").innerHTML = "NOPE.... but nice try...";
        }
    }
}

let brate = 26;
let beculetePeBrat = 41;

var brateDiv = [];

for(let i = 0; i < brate; ++i) {
    document.getElementById("roata").innerHTML += `<div class="brat" id="brat${i + 1}"></div>`;
    brateDiv[i] = document.getElementById(`brat${i + 1}`);
    //brateDiv[i].style.transform = `translate(-50%, -50%) rotateZ(${360 / brate * i}deg) translateX(150%)`;
    brateDiv[i].style.transform = `rotateZ(${360 / brate * i}deg)`;
    brateDiv[i].style.animation = `transform: rotateZ(${360 / brate * i + 360}) linear 5s infinite;`
    //console.log(`@keyframes spin${i + 1} {\n0% {transform: rotateZ(${360 / brate * i + 360}deg)}\n}`);
    document.getElementById(`brat${i + 1}`).style.animation = `spin${i + 1} 12s linear infinite`;
    //document.getElementById(`brat${i + 1}`).style.animation = "example2 4s infinite";
    for(let j = 0; j < beculetePeBrat; ++j) {
        brateDiv[i].innerHTML += `<div class="beculet" id="beculet${i + 1}|${j + 1}"><div>`;
        document.getElementById(`beculet${i + 1}|${j + 1}`).style.left = (5 + j * 0.0014 * window.innerHeight) + "vh";
    }
}

let spinDeg = 0;
function spin() {
    spinDeg += 1;
    if(spinDeg >= 360)
        spinDeg -= 360;
    for(let i = 0; i < brate; ++i)
        document.getElementById(`brat${i + 1}`).style.transform = `translate(-50%, -50%) rotateZ(${360 / brate * i - spinDeg}deg) translateX(150%)`;
}

let nextFunction = true;

let bloomColors = ["rgba(0, 255, 0", "rgba(255, 255, 0", "rgba(255, 0, 255", "rgba(0, 255, 255", "rgba(255, 0, 0", "rgba(255, 255, 255"];
let bloomColorIndex = 0;

let bloomStep = 0;
function bloom() {
    bloomStep += 1;
    
    for(let i = 0; i < brate; ++i) {
        document.getElementById(`beculet${i + 1}|${bloomStep}`).style.backgroundColor = bloomColors[bloomColorIndex] + ", 1)";
        document.getElementById(`beculet${i + 1}|${bloomStep}`).style.borderColor = bloomColors[bloomColorIndex] + ", 0.1)";
    }

    if(bloomStep >= beculetePeBrat) {
        nextFunction = true;
        bloomStep = 0;
        bloomColorIndex++;
        if(bloomColorIndex == bloomColors.length)
            bloomColorIndex = 0;
    }
}

let implodeStep = beculetePeBrat;
function implode() {
    implodeStep -= 1;
    for(let i = 0; i < brate; ++i) {
        document.getElementById(`beculet${i + 1}|${implodeStep + 1}`).style.backgroundColor = bloomColors[bloomColorIndex] + ", 1)";
        document.getElementById(`beculet${i + 1}|${implodeStep + 1}`).style.borderColor = bloomColors[bloomColorIndex] + ", 0.1)";
    }

    if(implodeStep == 0) {
        nextFunction = true;
        implodeStep = beculetePeBrat;
        bloomColorIndex++;
        if(bloomColorIndex == bloomColors.length)
            bloomColorIndex = 0;
    }
}

let stairStep = 0;
function stair() {
    stairStep += 1;
    let iStop = stairStep;
    if(stairStep > brate)
        iStop = brate;

    for(let i = 0; i < iStop; ++i) {
        let jStop = stairStep - i;
        if(jStop > beculetePeBrat)
            jStop = beculetePeBrat;
        
        document.getElementById(`beculet${i + 1}|${jStop}`).style.backgroundColor = bloomColors[bloomColorIndex] + ", 1)";
        document.getElementById(`beculet${i + 1}|${jStop}`).style.borderColor = bloomColors[bloomColorIndex] + ", 0.1)";
    }
    
    if(stairStep == beculetePeBrat + brate) {
        nextFunction = true;
        stairStep = 0;
        bloomColorIndex++;
        if(bloomColorIndex == bloomColors.length)
            bloomColorIndex = 0;
    }
}

smileyStep = 0;
function smiley() {
    if(smileyStep == 0 && parseInt(Math.random() * 16) != 0) {
        nextFunction = true;
        return;
    }
    if(smileyStep == 0)
        for(let i = 0; i < brate; ++i)
            for(let j = 0; j < beculetePeBrat; ++j)
                if(j < 15 || j > 24 || ((i >= 0 && i <= 3 || i >= 6 && i <= 9 || i >= 12 && i <= 15) && j >=15 && j <= 24)) {
                    document.getElementById(`beculet${i + 1}|${j + 1}`).style.backgroundColor = bloomColors[1] + ", 1)";
                    document.getElementById(`beculet${i + 1}|${j + 1}`).style.borderColor = bloomColors[1] + ", 0.1)";
                } else {
                    document.getElementById(`beculet${i + 1}|${j + 1}`).style.backgroundColor = bloomColors[1] + ", 0)";
                    document.getElementById(`beculet${i + 1}|${j + 1}`).style.borderColor = bloomColors[1] + ", 0)";
                }
    
    smileyStep += 1;

    if(smileyStep == 450) {
        nextFunction = true;
        smileyStep = 0;
    }
}

candyCaneStep = 0;
function candyCane() {
    if(candyCaneStep == 0 && parseInt(Math.random() * 16) != 0) {
        nextFunction = true;
        return;
    }

    if(candyCaneStep == 0)
        for(let i = 0; i < brate; ++i)
            for(let j = 0; j < beculetePeBrat; ++j) {
                let difference;
                if(i < j)
                    difference = j - i;
                else
                    difference = i - j + brate / 4;

                if(difference % (brate / 2) < brate / 4) {
                    document.getElementById(`beculet${i + 1}|${j + 1}`).style.backgroundColor = bloomColors[4] + ", 1)";
                    document.getElementById(`beculet${i + 1}|${j + 1}`).style.borderColor = bloomColors[4] + ", 0.1)";
                } else {
                    document.getElementById(`beculet${i + 1}|${j + 1}`).style.backgroundColor = bloomColors[5] + ", 1)";
                    document.getElementById(`beculet${i + 1}|${j + 1}`).style.borderColor = bloomColors[5] + ", 0.1)";
                }
            }
    
    candyCaneStep += 1;
    
    if(candyCaneStep == 450) {
        nextFunction = true;
        candyCaneStep = 0;
    }
}

let options = 5,
    nowPlaying = 0;
function changeColors() {
    if(nextFunction == true) {
        nowPlaying = Math.floor(Math.random() * options);
        nextFunction = false;
    }
    switch(nowPlaying) {
        case 0: bloom(); break;
        case 1: implode(); break;
        case 2: stair(); break;
        case 3: smiley(); break;
        case 4: candyCane(); break;
    }
}

//setInterval(spin, 300);
setInterval(changeColors, 16.6 * 2);
//document.getElementById("brat1").style.animation = "example 10s linear infinte"
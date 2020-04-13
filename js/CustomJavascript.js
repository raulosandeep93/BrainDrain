/// <reference path="../Result.html" />
/// <reference path="../Result.html" />
var i, timer, divide, wait, waitTimer;
i = 0;
divide = 100;
wait = 0;

function pageLoad() {
    document.body.style.backgroundColor = "#BCF6A4";
}

function setup(e) {
    if (e.id == "btnStart") {
        loadNumber();
        e.setAttribute('id', 'btnRestart');
        document.getElementById("btnRestart").innerText = "Restart";
        startTimer();
    } else if (e.id == "btnRestart") {
        restartTimer();
    }
}

function loadNumber() {
    //find all the input tags
    var buttons = document.getElementsByTagName('input');

    var tempArray = [];
    while (tempArray.length != 25) {
        var randomNumber = parseInt(Math.ceil(Math.random() * 25));

        if (tempArray.indexOf(randomNumber) > -1)
            continue;

        tempArray.push(randomNumber);
    }

    for (var i = 0; i < tempArray.length; i++) {
        var button = buttons[i];
        button.setAttribute('value', tempArray[i]);
        button.setAttribute('id', "btn" + tempArray[i]);
    }
}

function startTimer() {
    running = 1;
    timer = self.setInterval("increment()", (1000 / divide));
}

function restartTimer() {
    i = 0;
    clearInterval(timer);
    timer = null;
    document.getElementById("lblTimer").innerText = "00:00";
    loadNumber();
    startTimer();
}

function stopTimer() {
    i = 0;
    localStorage.setItem("Result", document.getElementById("lblTimer").innerText);
    location.replace("../Result.html");
    //location.replace("https://goo.gl/dYaLki");
    //window.open("https://goo.gl/dYaLki","_self");
    clearInterval(timer);
    timer = null;
}

function increment() {
    i++;
    document.getElementById("lblTimer").innerHTML = (i / divide);
}

function loadResult() {
    document.getElementById("lblResult").innerText = localStorage.Result;
    stats();
}

function stats() {
    if (document.getElementById("lblResult").innerText < 15.00) {
        document.getElementById("lblStats").innerText = "You are not a normal human!";
    } else if (document.getElementById("lblResult").innerText > 15.00 && document.getElementById("lblResult").innerText <= 45.00) {
        document.getElementById("lblStats").innerText = "Wow!!! That was just awesome!";
    } else if (document.getElementById("lblResult").innerText > 45.00 && document.getElementById("lblResult").innerText <= 60.00) {
        document.getElementById("lblStats").innerText = "You were too close. Try one more time.";
    } else if (document.getElementById("lblResult").innerText > 60.00) {
        document.getElementById("lblStats").innerText = "You need to work a bit hard.";
    }
}

function makeNull(e) {
    e.setAttribute('value', " ");
    e.setAttribute('id', " ");
}

function numberChange(e) {
    if (e.id == "btn1") {
        e.setAttribute('value', 26);
        e.setAttribute('id', "btn26");
        document.body.style.backgroundColor = "#E395EC";
    }
    if (document.getElementById("btn1") == null && e.id == "btn2") {
        e.setAttribute('value', 27);
        e.setAttribute('id', "btn27");
    }
    if (document.getElementById("btn2") == null && e.id == "btn3") {
        e.setAttribute('value', 28);
        e.setAttribute('id', "btn28");
    }
    if (document.getElementById("btn3") == null && e.id == "btn4") {
        e.setAttribute('value', 29);
        e.setAttribute('id', "btn29");
    }
    if (document.getElementById("btn4") == null && e.id == "btn5") {
        e.setAttribute('value', 30);
        e.setAttribute('id', "btn30");
    }
    if (document.getElementById("btn5") == null && e.id == "btn6") {
        e.setAttribute('value', 31);
        e.setAttribute('id', "btn31");
    }
    if (document.getElementById("btn6") == null && e.id == "btn7") {
        e.setAttribute('value', 32);
        e.setAttribute('id', "btn32");
    }
    if (document.getElementById("btn7") == null && e.id == "btn8") {
        e.setAttribute('value', 33);
        e.setAttribute('id', "btn33");
    }
    if (document.getElementById("btn8") == null && e.id == "btn9") {
        e.setAttribute('value', 34);
        e.setAttribute('id', "btn34");
    }
    if (document.getElementById("btn9") == null && e.id == "btn10") {
        e.setAttribute('value', 35);
        e.setAttribute('id', "btn35");
    }
    if (document.getElementById("btn10") == null && e.id == "btn11") {
        e.setAttribute('value', 36);
        e.setAttribute('id', "btn36");
        document.body.style.backgroundColor = "#9895EC";
    }
    if (document.getElementById("btn11") == null && e.id == "btn12") {
        e.setAttribute('value', 37);
        e.setAttribute('id', "btn37");
    }
    if (document.getElementById("btn12") == null && e.id == "btn13") {
        e.setAttribute('value', 38);
        e.setAttribute('id', "btn38");
    }
    if (document.getElementById("btn13") == null && e.id == "btn14") {
        e.setAttribute('value', 39);
        e.setAttribute('id', "btn39");
    }
    if (document.getElementById("btn14") == null && e.id == "btn15") {
        e.setAttribute('value', 40);
        e.setAttribute('id', "btn40");
    }
    if (document.getElementById("btn15") == null && e.id == "btn16") {
        e.setAttribute('value', 41);
        e.setAttribute('id', "btn41");
    }
    if (document.getElementById("btn16") == null && e.id == "btn17") {
        e.setAttribute('value', 42);
        e.setAttribute('id', "btn42");
    }
    if (document.getElementById("btn17") == null && e.id == "btn18") {
        e.setAttribute('value', 43);
        e.setAttribute('id', "btn43");
    }
    if (document.getElementById("btn18") == null && e.id == "btn19") {
        e.setAttribute('value', 44);
        e.setAttribute('id', "btn44");
    }
    if (document.getElementById("btn19") == null && e.id == "btn20") {
        e.setAttribute('value', 45);
        e.setAttribute('id', "btn45");
    }
    if (document.getElementById("btn20") == null && e.id == "btn21") {
        e.setAttribute('value', 46);
        e.setAttribute('id', "btn46");
        document.body.style.backgroundColor = "#95BBEC";
    }
    if (document.getElementById("btn21") == null && e.id == "btn22") {
        e.setAttribute('value', 47);
        e.setAttribute('id', "btn47");
    }
    if (document.getElementById("btn22") == null && e.id == "btn23") {
        e.setAttribute('value', 48);
        e.setAttribute('id', "btn48");
    }
    if (document.getElementById("btn23") == null && e.id == "btn24") {
        e.setAttribute('value', 49);
        e.setAttribute('id', "btn49");
    }
    if (document.getElementById("btn24") == null && e.id == "btn25") {
        e.setAttribute('value', 50);
        e.setAttribute('id', "btn50");
    }
    if (e.id == "btn26" && document.getElementById("btn25") == null) {
        makeNull(e);
    }
    if (e.id == "btn27" && document.getElementById("btn26") == null) {
        makeNull(e);
    }
    if (e.id == "btn28" && document.getElementById("btn27") == null) {
        makeNull(e);
    }
    if (e.id == "btn29" && document.getElementById("btn28") == null) {
        makeNull(e);
    }
    if (e.id == "btn30" && document.getElementById("btn29") == null) {
        makeNull(e);
    }
    if (e.id == "btn31" && document.getElementById("btn30") == null) {
        makeNull(e);
        document.body.style.backgroundColor = "#95ECEC";
    }
    if (e.id == "btn32" && document.getElementById("btn31") == null) {
        makeNull(e);
    }
    if (e.id == "btn33" && document.getElementById("btn32") == null) {
        makeNull(e);
    }
    if (e.id == "btn34" && document.getElementById("btn33") == null) {
        makeNull(e);
    }
    if (e.id == "btn35" && document.getElementById("btn34") == null) {
        makeNull(e);
    }
    if (e.id == "btn36" && document.getElementById("btn35") == null) {
        makeNull(e);
    }
    if (e.id == "btn37" && document.getElementById("btn36") == null) {
        makeNull(e);
    }
    if (e.id == "btn38" && document.getElementById("btn37") == null) {
        makeNull(e);
    }
    if (e.id == "btn39" && document.getElementById("btn38") == null) {
        makeNull(e);
    }
    if (e.id == "btn40" && document.getElementById("btn39") == null) {
        makeNull(e);
    }
    if (e.id == "btn41" && document.getElementById("btn40") == null) {
        makeNull(e);
        document.body.style.backgroundColor = "#6BF7BF";
    }
    if (e.id == "btn42" && document.getElementById("btn41") == null) {
        makeNull(e);
    }
    if (e.id == "btn43" && document.getElementById("btn42") == null) {
        makeNull(e);
    }
    if (e.id == "btn44" && document.getElementById("btn43") == null) {
        makeNull(e);
    }
    if (e.id == "btn45" && document.getElementById("btn44") == null) {
        makeNull(e);
    }
    if (e.id == "btn46" && document.getElementById("btn45") == null) {
        makeNull(e);
    }
    if (e.id == "btn47" && document.getElementById("btn46") == null) {
        makeNull(e);
    }
    if (e.id == "btn48" && document.getElementById("btn47") == null) {
        makeNull(e);
    }
    if (e.id == "btn49" && document.getElementById("btn48") == null) {
        makeNull(e);
    }
    if (e.id == "btn50" && document.getElementById("btn49") == null) {
        makeNull(e);
        document.body.style.backgroundColor = "#6BF78C";
        stopTimer();
    }
}
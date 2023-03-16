const YEAR = new Date().getFullYear();
const PI = 3.14;
const EUR = 0.9423;
const MB = 1024;

function clear() {
    document.querySelector('.task').innerHTML = "";
}

function outputData(text) {
    alert(text);

    document.querySelector(".task").innerHTML += `<p>${text}</p>`;
}

function getYearOfBirth() {
    let age = "", text = "";
    age = + prompt("Enter an year of your birthday: ");
    if (Number.parseInt(age) > 0) {
        text = `You are ${YEAR - age}`;
    }
    else {
        text = 'You have entered incorrect data.';
    }
    outputData(text);
}

function getRadius() {
    // S = p r2
    let radius = "";
    radius = + prompt("Enter a radius of circle: ");
    if (Number.parseInt(radius) > 0) {
        text = `S = pi * r2;\nS = ${PI} * ${radius} * ${radius};\nS = ${(PI * Math.pow(radius, 2)).toFixed(2)};`;
    }
    else {
        text = 'You have entered incorrect data.';
    }
    outputData(text);
}

function getSpeed() {
    let km = "", time = "", text = "";
    km += prompt("Enter a distance between two cities: ");
    time += prompt("Enter a time:");
    if (Number.parseInt(km) > 0 && Number.parseInt(time) > 0) {
        text = `V = S / t;\nV = ${km} / ${time};\nV = ${(km / time).toFixed(2)};`;
    }
    else {
        text = 'You have entered incorrect data.';
    }
    outputData(text);
}

function getUsd() {
    let euro = "";
    euro += + prompt("Enter euro: ");
    if (Number.parseInt(euro) > 0) {
        text = `1 usd = 0.94 eur;\nYou have ${(euro * EUR).toFixed(2)} dolars from ${euro} euro;`;
    }
    else {
        text = 'You have entered incorrect data.';
    }
    outputData(text);
}

function getCountFiles() {
    let gb = "", file = 820;
    gb += prompt("Enter a capacity of a flash drive in GB");
    if (Number.parseInt(gb) > 0) {
        text = `1 GB = ${MB}MB;\nYou can save ${((Number.parseInt(gb) * MB) / file).toFixed(0)} files on flesh drive;`;
    }
    else {
        text = 'You have entered incorrect data.';
    }
    outputData(text);
}
import { artistList } from "./db.mjs";

var audioIn = false;

const links = [
  "https://open.spotify.com/artist/4cUfFbVZGSsJWdbfmkdxYq",
  "https://open.spotify.com/artist/4cUfFbVZGSsJWdbfmkdxYq",
  "https://open.spotify.com/artist/4cUfFbVZGSsJWdbfmkdxYq",
  "https://open.spotify.com/artist/7EWU4FhUJM1sZQgQKdENeT",
  "https://open.spotify.com/artist/6DVipHzYsPlIoA0DW8Gmns",
  "https://open.spotify.com/artist/3mUHAiDazZq75gh6If5zoD",
  "https://open.spotify.com/artist/1zxOrBQ8znO6qNSdVXNYJY",
  "https://open.spotify.com/artist/2P5sC9cVZDToPxyomzF1UH",
  "https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5",
  "https://open.spotify.com/artist/4xRYI6VqpkE3UwrDrAZL8L",
  "https://open.spotify.com/artist/3IstlZaHyUP9SONpulb4SM",
  "https://open.spotify.com/artist/6C1ohJrd5VydigQtaGy5Wa",
  "https://open.spotify.com/artist/4TCqgEIWd5RsCKItJqt8PL",
  "https://open.spotify.com/artist/68DWke2VjdDmA75aJX5C57",
  "https://open.spotify.com/artist/5YI7PJwny5JsO7djczHwhP",
  "https://open.spotify.com/artist/1LrWZc2qPhRCHyr6XtpBxq",
  "https://open.spotify.com/artist/3hEgzEeaZ0hb3UXx1U1JRR",
  "https://open.spotify.com/artist/1b5fazYV5ecKkQHKTlwLG8",
  "https://open.spotify.com/artist/6aaMZ3fcfLv4tEbmY7bjRM",
  "https://open.spotify.com/artist/5oFkj1qSlyBUmV5d6Edgtq",
  "https://open.spotify.com/artist/0g9vAlRPK9Gt3FKCekk4TW",
  "https://open.spotify.com/track/77loZpT5Y5PRP1S451P9Yz",
  "https://open.spotify.com/artist/1F5zdoXcwIB9XSNfitdo7x",
  "https://open.spotify.com/artist/30C5wgn4celhRP3Tytv7R6",
  "https://open.spotify.com/artist/3jK9MiCrA42lLAdMGUZpwa",
  "https://open.spotify.com/artist/5IcR3N7QB1j6KBL8eImZ8m",
  "https://open.spotify.com/track/2wGSgTmgSF3xjRrHkTc25R",
  "https://open.spotify.com/artist/0ABk515kENDyATUdpCKVfW",
  "https://open.spotify.com/artist/67gqUXxHedeUGDTxwBzdjS",
  "https://open.spotify.com/artist/4lPl9gqgox3JDiaJ1yklKh"
];

const songs = [
  "Resources/Rap Freestyle Type Beat - THC (Stoner Rap Beat).mp3",
  "Resources/I Am Oldschool HipHop Beat.mp3",
  "Resources/Desgarrada Instrumental Concertina Peter Lamego - Daniel Ribeiro.mp3",
  "Resources/[FREE]  Get Busy  HARD Trap Beat 2023 FreeTrap Rap Instrumental Beat 2023 Dark Beat FREEDL.mp3",
  "Resources/(FREE) 90s Old School Freestyle Boom Bap Rap Type Beat [2023] - Slang.mp3"
];

function checkRacist() {
  var e = document.getElementById("racist").value;
  var f = document.getElementById("racistcheck").value;
  if (e == 1 || f == 1) {
    localStorage.setItem("myId", artistList[0].id);
    window.location.href = "index1.html";
  } else {
    checkpizza();
  }
}

function checkpizza() {
  var e = document.getElementById("pizza").value;
  if (e == 1) {
    localStorage.setItem("myId", artistList[4].id);
    window.location.href = "index1.html";
  } else {
    checkKill();
  }
}

function checkKill() {
  var e = document.getElementById("kill").value;
  if (e == 1) {
    localStorage.setItem("myId", artistList[2].id);
    window.location.href = "index1.html";
  } else {
    checkRack();
  }
}

function checkRack() {
  var e = document.getElementById("rack").value;
  if (e == 1) {
    localStorage.setItem("myId", artistList[1].id);
    window.location.href = "index1.html";
  } else {
    localStorage.setItem("myId", artistList[3].id);
    window.location.href = "index1.html";
  }
}

function finURL() {
  let x = Math.floor(Math.random() * 30);
  let link = links[x];
  let a = document.getElementById("myb");
  a.setAttribute("href", link);
}


function playSong() {

  var x = Math.floor(Math.random() * 5);
  var song = songs[x];

  var con = document.getElementById("aud");

  if (audioIn) {
    var audio = document.getElementById("audio");
    audio.src = song;
    audio.play();
  } else {
    var aud = document.createElement("audio");
    aud.setAttribute("id", "audio");
    aud.setAttribute("src", song);
    con.appendChild(aud);
    audioIn = true;
    
    // Play the audio explicitly here to ensure it's triggered by a user interaction
    aud.play();
    console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  }
}


var btn = document.getElementById("submit-btn");
btn.addEventListener("click", checkRacist);

var a = document.getElementById("myb");
a.addEventListener("click", finURL);

var remix = document.getElementById("remix-btn");
remix.addEventListener('click', playSong);

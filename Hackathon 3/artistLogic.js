import { artistList } from "./db.mjs";

function showOneArtists(id) {
  var artist = getArtistById(id);
  getArtistName(artist);
  getMainImage(artist);
  getVideo(artist);
  showArtistName(artist);
  showHistory(artist);
  getInfluence(artist);
  influenceImage(artist);
  albumList(artist);
  getMerch(artist)
  //showAlbums(artist);
  //showSongs(artist);
  findAllSongByAlbum(artist.album[0]);
}
function getArtistName(artist) {
  let name = document.getElementById("artistName");
  var newText = document.createTextNode(`${artist.name}`);
  name.appendChild(newText);
}

function getMerch(artist) {
  let name = document.getElementById("mer");
  name.setAttribute('href', artist.merchandise)
}

function getMainImage(artist) {
  let image = document.getElementById("mainimage");
  image.setAttribute("src", `${artist.mainpic}`);
}

function getVideo(artist) {
  let image = document.getElementById("video");
  image.setAttribute("src", `${artist.video}`);
}

function getInfluence(artist) {
  let title = document.getElementById("title");
  var newText = document.createTextNode(`${artist.influence[0].name}`);
  title.appendChild(newText);
  let title2 = document.getElementById("title2");
  var newText2 = document.createTextNode(`${artist.influence[1].name}`);
  title2.appendChild(newText2);
  let title3 = document.getElementById("title3");
  var newText3 = document.createTextNode(`${artist.influence[2].name}`);
  title3.appendChild(newText3);

  let des = document.getElementById("des");
  var newText = document.createTextNode(`"${artist.influence[0].bio}"`);
  des.appendChild(newText);

  let des2 = document.getElementById("des2");
  var newText2 = document.createTextNode(`"${artist.influence[1].bio}"`);
  des2.appendChild(newText2);

  let des3 = document.getElementById("des3");
  var newText3 = document.createTextNode(`"${artist.influence[2].bio}"`);
  des3.appendChild(newText3);
}

function influenceImage(artist) {
  let image = document.getElementById("img");
  image.setAttribute("src", `${artist.influence[0].image}`);
  let image2 = document.getElementById("img2");
  image2.setAttribute("src", `${artist.influence[1].image}`);
  let image3 = document.getElementById("img3");
  image3.setAttribute("src", `${artist.influence[2].image}`);
}

function albumList(artist) {
  var num = 2;
  var first = true;
  artist.albumList.forEach((album) => {
    if (first) {
      let image1 = document.getElementById("album1");
      image1.setAttribute("src", album);
      first = false;
    } else {
      var carouselInner = document.querySelector('.carousel-inner'); 

      // Create the div element
      var divElement = document.createElement("div");
      divElement.setAttribute("class", "carousel-item");

      // Set the class attribute

      // Create the img element
      var imgElement = document.createElement("img");

      // Set the id, src, and class attributes for the img element
      imgElement.setAttribute("id", "album" + num);
      imgElement.setAttribute("src", album); // You can set the source dynamically
      imgElement.setAttribute("class", "d-block");

      // Append the img element to the div element
      divElement.appendChild(imgElement);

      // Append the div element to the container
      carouselInner.appendChild(divElement);
      num++;
    }
  });

  /* let image1 = document.getElementById("album1");
image1.setAttribute('src', `${artist.albumList[0]}`);
let image2 = document.getElementById("album2");
image2.setAttribute('src', `${artist.albumList[1]}`);
let image3 = document.getElementById("album3");
image3.setAttribute('src', `${artist.albumList[2]}`);
let image4 = document.getElementById("album4");
image4.setAttribute('src', `${artist.albumList[3]}`);
let image5 = document.getElementById("album5");
image5.setAttribute('src', `${artist.albumList[4]}`);
let image6 = document.getElementById("album6");
image6.setAttribute('src', `${artist.albumList[5]}`);
let image7 = document.getElementById("album7");
image7.setAttribute('src', `${artist.albumList[6]}`);
let image8 = document.getElementById("album8");
image8.setAttribute('src', `${artist.albumList[7]}`);
let image9 = document.getElementById("album9");
image9.setAttribute('src', `${artist.albumList[8]}`);
let image10 = document.getElementById("album10");
image10.setAttribute('src', `${artist.albumList[9]}`);
let image11 = document.getElementById("album11");
image11.setAttribute('src', `${artist.albumList[10]}`);
let image12 = document.getElementById("album12");
image12.setAttribute('src', `${artist.albumList[11]}`);
 */
}
function showArtistName(artist) {}

function showHistory(artist) {
  let bio = document.getElementById("about2");
  var newText = document.createTextNode(`${artist.bio}`);
  bio.appendChild(newText);
}

function showAlbums(artist) {}

function showSongs(artist) {}

function showReleaseDate(artist) {}

function showAllArtists() {}

function findAllSongByAlbum(album) {}
function getArtistById(id) {
  var artistToReturn = null;
  artistList.forEach((artist) => {
    if (artist.id == id) {
      artistToReturn = artist;
    } else {
    }
  });
  return artistToReturn;
}

// Retrieving data from localStorage on the new page
var myValue = localStorage.getItem("myId");
showOneArtists(myValue);

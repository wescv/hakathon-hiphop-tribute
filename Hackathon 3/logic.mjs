function showArtist(id) {
  localStorage.setItem('myId', id);
  window.location.href = "index1.html";
}


(function createEventListeners(){
  const images = document.querySelectorAll('.artists img');

  images.forEach( image => {
    image.addEventListener('click', () => {
      let x = image.getAttribute("id");
      console.log("hello");
      showArtist(x)
    })
  })
})();

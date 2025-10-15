function playTrack(i) {
  audio.src = tracks[i].src;
  audio.play();
  title.textContent = tracks[i].title;
  document.getElementById("currentCover").src = tracks[i].cover;

  [...carousel.children].forEach((item, idx) => {
    item.classList.toggle("active", idx === i);
  });
}

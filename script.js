const shareButton = document.getElementById("share-button");

shareButton.addEventListener("click", () => {
  let popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
});
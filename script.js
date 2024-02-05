const shareButton = document.getElementById("share-button");
const profile = document.getElementById("profile-content");
const popup = document.getElementById("share-content");

shareButton.addEventListener("click", () => {
  profile.replaceWith(popup);
});
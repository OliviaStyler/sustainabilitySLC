let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("openPopup");
  document.body.classList.add("popup-open");

}

function closePopup(){
  popup.classList.remove("openPopup");
  document.body.classList.remove("popup-open");


}

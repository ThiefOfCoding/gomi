function showPlayer(){
  document.getElementById("profile").classList.add("hidden");
  document.getElementById("player").classList.remove("hidden");
}

function hidePlayer(){
  document.getElementById("player").classList.add("hidden");
  document.getElementById("profile").classList.remove("hidden");
}

function openGallery(){
  document.getElementById("gallery").classList.add("show");
}

function closeGallery(){
  document.getElementById("gallery").classList.remove("show");
}

function openImg(src){
  document.getElementById("viewImg").src = src;
  document.getElementById("viewer").classList.add("show");
}

function closeImg(){
  document.getElementById("viewer").classList.remove("show");
}

function openPfp(){
  openImg("https://xatimg.com/image/tPYW1k4NxIeg.jpg");
}



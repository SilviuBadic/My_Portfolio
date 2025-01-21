let itImage = document.getElementById("it_image");

function myFunction() {
  let x = document.getElementById("skillsOne");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    itImage.style.marginRight ="160px";
    itImage.style.transitionDuration ="2s";
    itImage.style.transitionDelay = "0.2s";
    itImage.style.rotate = "5deg";
    
  }
  
}

function myFunction2() {
  let x = document.getElementById("skillsOne");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    itImage.style.marginLeft ="auto";
    itImage.style.marginRight ="auto";
    itImage.style.rotate = "0deg";
  }
}

function myFunction3() {
  let x = document.getElementById("skillsTwo");
  if (x.style.display === "block") {
    x.style.display = "none";
    
  } else {
    x.style.display = "block";
    x.style.marginLeft = "550px";
    itImage.style.opacity = "0.1";
    itImage.style.marginLeft ="auto";
    itImage.style.marginRight ="auto";
  }
    
  }
  

function myFunction4() {
  let x = document.getElementById("skillsTwo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    itImage.style.marginLeft ="auto";
    itImage.style.marginRight ="auto";
    itImage.style.opacity = "1";
  }
}


function myFunction5() {
  let x = document.getElementById("myHobbies");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.paddingLeft = "1050px";
    itImage.style.marginLeft ="160px";
    itImage.style.transitionDuration ="2s";
    itImage.style.transitionDelay = "0.2s";
    itImage.style.rotate = "-5deg";
  }
}

function myFunction6() {
  let x = document.getElementById("myHobbies");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    itImage.style.marginLeft ="auto";
    itImage.style.marginRight ="auto";
    itImage.style.rotate = "0deg";
  }
}
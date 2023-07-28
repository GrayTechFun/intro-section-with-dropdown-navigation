let featuresOpen = false;
let companyOpen = false;

const features = () => {
  if (featuresOpen == false) {
    document.getElementById("features-drop-down").style.display = "block";
    featuresOpen = true;
    document.getElementById("features-arrow").src = "images/icon-arrow-up.svg";
  } else {
    document.getElementById("features-drop-down").style.display = "none";
    featuresOpen = false;
    document.getElementById("features-arrow").src =
      "images/icon-arrow-down.svg";
  }
};

const company = () => {
  if (companyOpen == false) {
    document.getElementById("company-drop-down").style.display = "block";
    companyOpen = true;
    document.getElementById("company-arrow").src = "images/icon-arrow-up.svg";
  } else {
    document.getElementById("company-drop-down").style.display = "none";
    companyOpen = false;
    document.getElementById("company-arrow").src = "images/icon-arrow-down.svg";
  }
};

//For Mobile

const sidebarOpen = () => {
  document.getElementById("sidebar-menu").style.display = "block";
};

const sidebarClose = () => {
  document.getElementById("sidebar-menu").style.display = "none";
};

let featuresOpenM = false;
let companyOpenM = false;

const featuresM = () => {
  if (featuresOpenM == false) {
    document.getElementById("features-mobile").style.display = "block";
    featuresOpenM = true;
    document.getElementById("features-mobile-icon").src =
      "images/icon-arrow-up.svg";
  } else {
    document.getElementById("features-mobile").style.display = "none";
    featuresOpenM = false;
    document.getElementById("features-mobile-icon").src =
      "images/icon-arrow-down.svg";
  }
};

const companyM = () => {
  if (companyOpenM == false) {
    document.getElementById("company-mobile").style.display = "block";
    companyOpenM = true;
    document.getElementById("company-mobile-icon").src =
      "images/icon-arrow-up.svg";
  } else {
    document.getElementById("company-mobile").style.display = "none";
    companyOpenM = false;
    document.getElementById("company-mobile-icon").src =
      "images/icon-arrow-down.svg";
  }
};

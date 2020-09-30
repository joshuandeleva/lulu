const advocates = document.getElementById('advocates');
const lawfirm = document.getElementById('law-firms');
const lawschools = document.getElementById('lawschools-form');
const lawcourts = document.getElementById('lawcourts-form');



function advocate() {

    advocates.style.display = "flex";
    lawfirm.style.display = "none";
    lawschools.style.display = "none";
    lawcourts.style.display = "none";

}
function firms() {

    advocates.style.display = "none";
    lawfirm.style.display = "flex";
    lawschools.style.display = "none";
    lawcourts.style.display = "none";
}
function court() {

    advocates.style.display = "none";
    lawfirm.style.display = "none";
    lawschools.style.display = "none";
    lawcourts.style.display = "flex";
}

function school() {

    advocates.style.display = "none";
    lawfirm.style.display = "none";
    lawschools.style.display = "flex";
    lawcourts.style.display = "none";
}
document
    .querySelector(".menu-btn")
    .addEventListener("click", () =>
        document
            .querySelector(".nav-items")
            .classList.toggle("show")
    );





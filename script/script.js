var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1500,
    speedAsDuration: true
});

var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

var fecha = [day, month, year].join("-");
var carta = "carta";
var fileName = carta + "-" + fecha + ".pdf";

var fileURL = "./pdf/MENUD.pdf";

var menuForm = document.getElementById("menuForm");
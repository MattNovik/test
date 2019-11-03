var openMobMenu = document.getElementById("openMobMenu");
var mobCLose = document.querySelector(".mob_close");
var wrapperMobMenu = document.querySelector(".wrapper_mob_menu")
var wrapperMobMenuSecond = document.querySelector(".wrapper_mob_menu_second")
var arrowBack = document.querySelector(".mob_back");
var openSecond = document.querySelector(".open_second");

	openMobMenu.onclick = function () {
		wrapperMobMenu.style.display = "block";
	}
	mobCLose.onclick = function () {
		wrapperMobMenu.style.display = "none";
	}
	openSecond.onclick = function () {
		wrapperMobMenuSecond.style.display = "block";
	}
	arrowBack.onclick = function () {
		wrapperMobMenuSecond.style.display = "none";
	}

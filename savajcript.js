// HUGE thanks to w3schools tutorial which helped me develop this sidemenu that you'll see on each page. For more info: https://www.w3schools.com/howto/howto_js_sidenav.asp

// This getElementsByTagName comes from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_id

// Definitons
let sideNav = document.getElementsByTagName("div")[0].id;
let colorLayer = document.getElementById("colorLayer");
let classAs = document.getElementsByTagName("a");
let classmenu = document.getElementById("classmenu");
let juniorYearText = document.getElementById("juniorYearText");
let isClassMenuOpen = false;

// Checking for mobile screen
let screenWidth = window.innerWidth;
let isMobile = false;
if (screenWidth <= 800) {
	isMobile = true;
}

function openNav() {
	// Check if screen is mobile first
	if (isMobile) {
		console.log("Uh oh! How'd we get here?");
		openMobileNav();
	} else {
		// Menu Icon
		document.getElementById("menuicon").style.left = "10%";

		// Side Menu
		document.getElementById(sideNav).style.width = "20%";
		document.getElementById(sideNav).style.minWidth = "250px";

		// Class Menu
		classmenu.style.width = "20%";
		classmenu.style.minWidth = "250px";

		// Color Layer
		if (sideNav === "blueSidenav") {
			colorLayer.style.backgroundColor = "#3136C4";
		} else if (sideNav === "redSidenav") {
			colorLayer.style.backgroundColor = "#cc3e49";
		} else {
			colorLayer.style.backgroundColor = "#5b31c4";
		}

		colorLayer.style.opacity = "0.25";
		colorLayer.style.width = "100%";

		// Side Menu Elements
		for (let k = 0; k < 13; k++) {
			if (document.getElementsByTagName("a")[k].id === "MAMS_link") {
				document.getElementsByTagName("a")[k].style.fontSize = "1.5em";
			} else {
				document.getElementsByTagName("a")[k].style.fontSize = "2em";
			}
		}
	}
}

function closeNav() {

	// I'm going to give this function control of the class menu too when in mobile
	// If the screen is small AND the classmenu is open, this function controls the class menu, otherwise it closes the side menu
	if (isMobile & isClassMenuOpen) {
		// Class Menu
		classmenu.style.top = "100%";

		// Color Layer
		colorLayer.style.height = "0";
		colorLayer.style.opacity = "0";

		// Junior Year Text
		juniorYearText.style.backgroundColor = "#cc3e49";
		juniorYearText.style.border = "0px none white";
		juniorYearText.style.borderLeft = "0px none white";

	} else {
		// Side Menu
		document.getElementById(sideNav).style.width = "0";
		document.getElementById(sideNav).style.minWidth = "0px";

		// Class Menu
		classmenu.style.width = "0";
		classmenu.style.minWidth = "0px";

		// Color Layer
		colorLayer.style.width = "0";
		colorLayer.style.opacity = "0";

		// Menu Icon
		document.getElementById("menuicon").style.left = "0";

		// Side Menu Elements
		for (let k = 0; k < 13; k++) {
			document.getElementsByTagName("a")[k].style.fontSize = "0";
		}
	}
}

function expandClassBlock() {

	// Check if screen is small
	if (isMobile) {
		// Move the class menu ontop
		classmenu.style.top = "25%";

		// Make Color Layer display ontop of Side Menu 
		if (sideNav === "blueSidenav") {
			colorLayer.style.backgroundColor = "#3136C4";
		} else if (sideNav === "redSidenav") {
			colorLayer.style.backgroundColor = "#cc3e49";
		} else {
			colorLayer.style.backgroundColor = "#5b31c4";
		}

		colorLayer.style.opacity = "0.5";
		colorLayer.style.height = "100%";

	} else {
		// Menu width calculation
		let menuwidth = (20 * (window.innerWidth)) / 100;
		if (menuwidth < 250) {
			menuwidth = 250;
		}

		// Class Menu
		classmenu.style.left = menuwidth + "px";
	}

	// Junior Year Text
	juniorYearText.style.backgroundColor = "#ED5A9E";
	juniorYearText.style.border = "4px outset #ED5A9E";
	juniorYearText.style.borderLeft = "0px none white";

	// Report that the class menu is open
	isClassMenuOpen = true;

}

function closeClassBlock() {

	// Class Menu
	classmenu.style.left = "0";

	// Junior Year Text
	juniorYearText.style.backgroundColor = "#cc3e49";
	juniorYearText.style.border = "0px none white";
	juniorYearText.style.borderLeft = "0px none white";

}

function openMobileNav() {

	// Check if the screen is actually small
	if (isMobile) {
		// Side Menu
		document.getElementById(sideNav).style.width = "100%";
		document.getElementById(sideNav).style.minWidth = "100%";

		// Class Menu
		classmenu.style.width = "100%";
		classmenu.style.minWidth = "100%";
		classmenu.style.top = "100%";

		// Side Menu Elements
		for (let k = 0; k < 13; k++) {
			if (document.getElementsByTagName("a")[k].id === "MAMS_link") {
				document.getElementsByTagName("a")[k].style.fontSize = "1.5em";
			} else {
				document.getElementsByTagName("a")[k].style.fontSize = "2em";
			}
		}
	}
}

function closeMobileNav() {

	// Check if the screen is actually small
	if (isMobile) {
		// Side Menu
		document.getElementById(sideNav).style.width = "0";
		document.getElementById(sideNav).style.minWidth = "0px";

		// Class Menu
		classmenu.style.width = "0";
		classmenu.style.minWidth = "0px";

		// Color Layer
		colorLayer.style.height = "0";
		colorLayer.style.opacity = "0";

		// Junior Year Text
		juniorYearText.style.backgroundColor = "#cc3e49";
		juniorYearText.style.border = "0px none white";
		juniorYearText.style.borderLeft = "0px none white";

		// Side Menu Elements
		for (let k = 0; k < 13; k++) {
			document.getElementsByTagName("a")[k].style.fontSize = "0";
		}
	}

}

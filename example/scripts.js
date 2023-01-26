const openNav = () => {
  document.getElementById("sidenav").style.left = "0px";
}

const closeNav = () => {
	if (window.innerWidth <= 700)
  	document.getElementById("sidenav").style.left = "-250px";
}

window.onresize = () => {
	if (window.innerWidth > 700)
		openNav();
	else
		closeNav();
}
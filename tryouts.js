var open = false;
function openNav() {
    document.getElementById("mask").setAttribute('onclick', "closeNav()");
    document.getElementById("closebtn").style.transition = "0s";
    document.getElementById("closebtn").style.left = "15px";
    document.getElementById("closebtn").style.transition = "0.8s";
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("mySidenav").style.visibility = "visible";
    document.getElementById("mask").style.opacity = "0.5";
    document.getElementById("closebtn").style.webkitTransform = "rotate(180deg)";
    document.getElementById("closebtn").style.fontSize = "25px";

}

function closeNav() {
    if(open === true)
    {
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("mySidenav").style.width = "50px";
        document.getElementById("mask").style.opacity = "1";
        document.getElementById("closebtn").style.webkitTransform = "rotate(0deg)";
        document.getElementById("closebtn").style.fontSize = "10px"
        document.getElementById("closebtn").style.left = "50px"
        document.getElementById("mySidenav").style.visibility = "hidden";
        document.getElementById("closebtn").style.left = "50px";
        document.getElementById("mask").removeAttribute('onclick', "closeNav()")
        open = false;
    } else {
        open = true;
    }


}
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, navblink;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    navblink = document.getElementsByClassName("navblink");
    for (i = 0; i < navblink.length; i++) {
        navblink[i].className = navblink[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
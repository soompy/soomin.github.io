function ourService(evt, serviceName) {
    var i, tabcontent, tablinks, item;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    item = document.getElementsByClassName("item");
    for (i = 0; i < item.length; i++) {
        item[i].className = item[i].className.replace(" on", "");
        item[i].style.display = "block";
        item[i].style.left = "126px";
        item[i].style.zIndex = "20";
    }

    document.getElementById(serviceName).style.display = "block";
    evt.currentTarget.className += " active";
}



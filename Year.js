function Year() {
    var yearElement = document.getElementById("year");
    var year = yearElement.innerHTML;
    var thisYear = new String(new Date().getFullYear());
    if (year == "" || year == thisYear)
        yearElement.innerHTML = thisYear;
    else
        yearElement.innerHTML = year + "-" + thisYear.substring(2, 5);
}

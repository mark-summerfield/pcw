function UpdateCover(elementId) {
    element = document.getElementById(elementId);
    if (elementId == "coverimage") {
        issues = [
            "pcw-1978-02",
            "pcw-1978-05",
            "pcw-1978-07",
            ];
    }
    this.updateCover = function() {
        var index = Math.floor(Math.random() * issues.length);
        issue = issues[index];
        element.innerHTML = "<a href=\"" + issue + ".html\">" +
            "<img class=\"home_image\" src=\"images/" + issue + ".jpg\"" +
            " alt=\"" + issue.toUpperCase() + "\"/></a>";
    };
    this.updateCover();

    setInterval(this.updateCover, 1000 * 110); // < 2 mins
}

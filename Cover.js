function UpdateCover(elementId) {
    element = document.getElementById(elementId);
    if (elementId == "coverimage") {
        issues = [
            "pcw-1978-02",
            "pcw-1978-05",
            "pcw-1978-07",
            "pcw-1978-08",
            "pcw-1978-09",
            "pcw-1978-10",
            "pcw-1978-11",
            "pcw-1978-12",
            "pcw-1979-01",
            "pcw-1979-02",
            "pcw-1979-03",
            "pcw-1979-04",
            "pcw-1979-05",
            "pcw-1979-06",
            "pcw-1979-07",
            "pcw-1979-08",
            "pcw-1979-09",
            "pcw-1979-10",
            "pcw-1979-11",
            "pcw-1979-12",
            "pcw-1980-01",
            "pcw-1980-02",
            "pcw-1980-03",
            "pcw-1980-04",
            "pcw-1980-05",
            "pcw-1980-06",
            "pcw-1980-07",
            "pcw-1980-08",
            "pcw-1980-09",
            "pcw-1980-10",
            "pcw-1980-11",
            "pcw-1980-12",
            "pcw-1981-07",
            "pcw-1981-08",
            "pcw-1981-10",
            "pcw-1982-02",
            "pcw-1982-09",
            "pcw-1982-10",
            "pcw-1982-11",
            "pcw-1983-01",
            "pcw-1983-02",
            "pcw-1984-03",
            "pcw-1984-04",
            "pcw-1984-06",
            "pcw-1984-10",
            "pcw-1984-12",
            "pcw-1985-04",
            "pcw-1985-08",
            "pcw-1985-10",
            "pcw-1985-11",
            "pcw-1986-02",
            "pcw-1987-05",
            "pcw-1989-02",
            "pcw-1995-06",
            "pcw-1995-08",
            "pcw-1995-09",
            "pcw-1995-10",
            "pcw-1995-11",
            "pcw-1995-12",
            "pcw-1996-01",
            "pcw-1996-02",
            "pcw-1996-03",
            "pcw-1996-06",
            "pcw-1997-01",
            "pcw-1997-04",
            "pcw-1998-01",
            "pcw-1998-02",
            "pcw-1998-07",
            "pcw-1998-11",
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

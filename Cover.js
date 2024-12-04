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
	    "pcw-1981-01",
	    "pcw-1981-02",
	    "pcw-1981-03",
	    "pcw-1981-04",
	    "pcw-1981-05",
	    "pcw-1981-06",
	    "pcw-1981-07",
	    "pcw-1981-08",
	    "pcw-1981-09",
	    "pcw-1981-10",
	    "pcw-1981-11",
	    "pcw-1981-12",
	    "pcw-1982-01",
	    "pcw-1982-02",
	    "pcw-1982-03",
	    "pcw-1982-04",
	    "pcw-1982-05",
	    "pcw-1982-06",
	    "pcw-1982-07",
	    "pcw-1982-08",
	    "pcw-1982-09",
	    "pcw-1982-10",
	    "pcw-1982-11",
	    "pcw-1982-12",
	    "pcw-1983-01",
	    "pcw-1983-02",
	    "pcw-1983-03",
	    "pcw-1983-04",
	    "pcw-1983-05",
	    "pcw-1983-06",
	    "pcw-1983-07",
	    "pcw-1983-08",
	    "pcw-1983-09",
	    "pcw-1983-10",
	    "pcw-1983-11",
	    "pcw-1983-12",
	    "pcw-1984-01",
	    "pcw-1984-02",
	    "pcw-1984-03",
	    "pcw-1984-04",
	    "pcw-1984-05",
	    "pcw-1984-06",
	    "pcw-1984-07",
	    "pcw-1984-08",
	    "pcw-1984-09",
	    "pcw-1984-10",
	    "pcw-1984-11",
	    "pcw-1984-12",
	    "pcw-1985-01",
	    "pcw-1985-02",
	    "pcw-1985-03",
	    "pcw-1985-04",
	    "pcw-1985-05",
	    "pcw-1985-06",
	    "pcw-1985-07",
	    "pcw-1985-08",
	    "pcw-1985-09",
	    "pcw-1985-10",
	    "pcw-1985-11",
	    "pcw-1985-12",
	    "pcw-1986-01",
	    "pcw-1986-02",
	    "pcw-1986-03",
	    "pcw-1986-04",
	    "pcw-1986-05",
	    "pcw-1986-06",
	    "pcw-1986-07",
	    "pcw-1986-08",
	    "pcw-1986-09",
	    "pcw-1986-10",
	    "pcw-1986-11",
	    "pcw-1986-12",
	    "pcw-1987-01",
	    "pcw-1987-02",
	    "pcw-1987-03",
	    "pcw-1987-04",
	    "pcw-1987-05",
	    "pcw-1987-06",
	    "pcw-1987-07",
	    "pcw-1987-08",
	    "pcw-1987-09",
	    "pcw-1987-10",
	    "pcw-1987-11",
	    "pcw-1987-12",
	    "pcw-1988-01",
	    "pcw-1988-02",
	    "pcw-1988-03",
	    "pcw-1988-04",
	    "pcw-1988-05",
	    "pcw-1988-06",
	    "pcw-1988-07",
	    "pcw-1988-08",
	    "pcw-1988-09",
	    "pcw-1988-10",
	    "pcw-1988-11",
	    "pcw-1988-12",
	    "pcw-1989-01",
	    "pcw-1989-02",
	    "pcw-1989-03",
	    "pcw-1989-04",
	    "pcw-1989-05",
	    "pcw-1989-06",
	    "pcw-1989-07",
	    "pcw-1989-08",
	    "pcw-1989-09",
	    "pcw-1989-10",
	    "pcw-1989-11",
	    "pcw-1989-12",
	    "pcw-1990-01",
	    "pcw-1990-02",
	    "pcw-1990-03",
	    "pcw-1990-04",
	    "pcw-1990-05",
	    "pcw-1990-06",
	    "pcw-1990-07",
	    "pcw-1990-08",
	    "pcw-1990-09",
	    "pcw-1990-10",
	    "pcw-1990-11",
	    "pcw-1990-12",
	    "pcw-1991-01",
	    "pcw-1991-02",
	    "pcw-1991-03",
	    "pcw-1991-04",
	    "pcw-1991-05",
	    "pcw-1991-06",
	    "pcw-1991-07",
	    "pcw-1991-08",
	    "pcw-1991-09",
	    "pcw-1991-10",
	    "pcw-1991-11",
	    "pcw-1991-12",
	    "pcw-1992-01",
	    "pcw-1992-02",
	    "pcw-1992-03",
	    "pcw-1992-04",
	    "pcw-1992-05",
	    "pcw-1992-06",
	    "pcw-1992-07",
	    "pcw-1992-08",
	    "pcw-1992-09",
	    "pcw-1992-10",
	    "pcw-1992-11",
	    "pcw-1992-12",
	    "pcw-1993-01",
	    "pcw-1993-02",
	    "pcw-1993-03",
	    "pcw-1993-04",
	    "pcw-1993-05",
	    "pcw-1993-06",
	    "pcw-1993-07",
	    "pcw-1993-08",
	    "pcw-1993-09",
	    "pcw-1993-10",
	    "pcw-1993-11",
	    "pcw-1993-12",
	    "pcw-1994-01",
	    "pcw-1994-02",
	    "pcw-1994-03",
	    "pcw-1994-04",
	    "pcw-1994-05",
	    "pcw-1994-06",
	    "pcw-1994-07",
	    "pcw-1994-08",
	    "pcw-1994-09",
	    "pcw-1994-10",
	    "pcw-1994-11",
	    "pcw-1994-12",
	    "pcw-1995-01",
	    "pcw-1995-02",
	    "pcw-1995-03",
	    "pcw-1995-04",
	    "pcw-1995-05",
	    "pcw-1995-06",
	    "pcw-1995-07",
	    "pcw-1995-08",
	    "pcw-1995-09",
	    "pcw-1995-10",
	    "pcw-1995-11",
	    "pcw-1995-12",
	    "pcw-1996-01",
	    "pcw-1996-02",
	    "pcw-1996-03",
	    "pcw-1996-04",
	    "pcw-1996-05",
	    "pcw-1996-06",
	    "pcw-1996-07",
	    "pcw-1996-08",
	    "pcw-1996-09",
	    "pcw-1996-10",
	    "pcw-1996-11",
	    "pcw-1996-12",
	    "pcw-1997-01",
	    "pcw-1997-02",
	    "pcw-1997-03",
	    "pcw-1997-04",
	    "pcw-1997-05",
	    "pcw-1997-06",
	    "pcw-1997-07",
	    "pcw-1997-08",
	    "pcw-1997-09",
	    "pcw-1997-10",
	    "pcw-1997-11",
	    "pcw-1997-12",
	    "pcw-1998-01",
	    "pcw-1998-02",
	    "pcw-1998-03",
	    "pcw-1998-04",
	    "pcw-1998-05",
	    "pcw-1998-06",
	    "pcw-1998-07",
	    "pcw-1998-08",
	    "pcw-1998-09",
	    "pcw-1998-10",
	    "pcw-1998-11",
	    "pcw-1998-12",
	    "pcw-1999-01",
	    "pcw-1999-02",
	    "pcw-1999-03",
	    "pcw-1999-04",
	    "pcw-1999-05",
	    "pcw-1999-06",
	    "pcw-1999-08",
	    "pcw-1999-09",
	    "pcw-1999-10",
	    "pcw-1999-11",
	    "pcw-1999-12",
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

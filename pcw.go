// Copyright © 2024 Mark Summerfield. All rights reserved.

package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"

	"github.com/mark-summerfield/tdb"
	"github.com/otiai10/copy"
)

func main() {
	root, www := preparePaths()
	pcw := readDatabase(filepath.Join(root, "pcw.tdb"))
	fmt.Println(root, www)
	fmt.Println(pcw)
	/* TODO create
	- verify foreign keys & report any discrepencies
	- index.html
	- a page per issue with articles details + cover screenshot + pdf
		link
	- articles.html article index: each article may have multiple
		entries, e.g., by title, by language/title, etc.
	*/
}

func preparePaths() (string, string) {
	root := getRoot()
	www := filepath.Join(root, "www")
	_ = os.RemoveAll(www)
	CheckErr(os.Mkdir("www", 0750))
	CheckErr(copy.Copy(filepath.Join(root, "covers"),
		filepath.Join(www, "covers")))
	return root, www
}

func getRoot() string {
	cwd, err := os.Getwd()
	CheckErr(err)
	return cwd

}

func readDatabase(filename string) *PcwDatabase {
	raw, err := os.ReadFile(filename)
	CheckErr(err)
	pcw := PcwDatabase{}
	CheckErr(tdb.Unmarshal(raw, &pcw))
	return &pcw
}

func CheckErr(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

type PcwDatabase struct {
	About     []About
	Kinds     []Kind
	Languages []Language
	Volumes   []Volume
	Articles  []Article
}

type About struct{ About string }

type Kind struct {
	Kid  string
	Name string
}

type Language struct {
	Lid  string
	Name string
}

type Volume struct {
	Vid     string
	Volnum  string
	Pdflink string
	Notes   string
}

type Article struct {
	Vid    string
	Title  string
	Kid    string
	Lid    string
	Author string
}

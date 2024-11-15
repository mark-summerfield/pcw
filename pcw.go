// Copyright © 2024 Mark Summerfield. All rights reserved.

package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"

	"github.com/mark-summerfield/set"
	"github.com/mark-summerfield/tdb"
	"github.com/mark-summerfield/ureal"
	"github.com/otiai10/copy"
)

func main() {
	log.SetFlags(0)
	root, www := preparePaths()
	pcw := readDatabase(filepath.Join(root, "pcw.tdb"))
	fmt.Printf("Read %s volumes and %s articles\n",
		ureal.Commas(len(pcw.Volumes)), ureal.Commas(len(pcw.Articles)))
	fmt.Println(www) // TODO delete
	/* TODO create
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

func readDatabase(filename string) *Database {
	raw, err := os.ReadFile(filename)
	CheckErr(err)
	pcw := Database{}
	CheckErr(tdb.Unmarshal(raw, &pcw))
	CheckErr(pcw.Verify())
	return &pcw
}

func CheckErr(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

type Database struct {
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

func (me *Database) Verify() error {
	vids := set.New[string]()
	for _, volume := range me.Volumes {
		vids.Add(volume.Vid)
	}
	kids := set.New[string]()
	for _, kind := range me.Kinds {
		kids.Add(kind.Kid)
	}
	lids := set.New[string]()
	for _, language := range me.Languages {
		lids.Add(language.Lid)
	}
	for _, article := range me.Articles {
		if !vids.Contains(article.Vid) {
			return fmt.Errorf("invalid volume ID (vid) %#v %#v",
				article.Vid, article.Title)
		}
		if !kids.Contains(article.Kid) {
			return fmt.Errorf("invalid kind ID (kid) %#v %#v", article.Kid,
				article.Title)
		}
		if article.Lid != "" && !lids.Contains(article.Lid) {
			return fmt.Errorf("invalid language ID (lid) %#v %#v",
				article.Lid, article.Title)
		}
	}
	return nil
}

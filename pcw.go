// Copyright © 2024 Mark Summerfield. All rights reserved.

package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"

	"github.com/mark-summerfield/tdb"
	"github.com/mark-summerfield/ureal"
	"github.com/otiai10/copy"
)

func main() {
	log.SetFlags(0)
	root, www := prepare()
	mb := readMetabase(filepath.Join(root, "pcw.mag"))
	fmt.Printf("Read %s magazines and %s articles\n",
		ureal.Commas(len(mb.Magazines)), ureal.Commas(len(mb.Articles)))
	fmt.Println(www) // TODO delete
	//fmt.Println(mb)  // TODO delete
	/* TODO create
	- www/pcw.sqlite
	- www/index.html
	- a page per issue with articles details + cover screenshot + pdf
		link e.g., www/pcw-yyyy-mm.html
	- www/indexes.html full index: each article may have multiple
		entries, e.g., by title, by language/title, etc.
	*/
}

func prepare() (string, string) {
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

func readMetabase(filename string) *Metabase {
	raw, err := os.ReadFile(filename)
	CheckErr(err)
	db := Database{}
	CheckErr(tdb.Unmarshal(raw, &db))
	mb := Metabase{Database: db}
	mb.Initialize()
	mb.Verify()
	return &mb
}

func OnError(err error) { log.Fatal(err) }

func CheckErr(err error) {
	if err != nil {
		OnError(err)
	}
}

type Metabase struct {
	Database
	vids map[string]string
	aids map[string]string
	kids map[string]string
	lids map[string]string
	cids map[string]string
}

type Database struct {
	About     []About
	Kinds     []Kind
	Languages []Language
	Magazines []Magazine
	Computers []Computer
	Authors   []Author
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

type Author struct {
	Aid  string
	Name string
}

type Computer struct {
	Cid       string
	Make      string
	Model     string
	RamKb     float64
	RomKb     float64
	Lid       string
	PixW      int
	PixH      int
	CharW     int
	CharH     int
	Colors    int
	FloppyNum int
	FloppyKb  float64
	DiskKb    float64
	Cpu       string
	MHz       float64
	PriceGbp  float64
}

type Magazine struct {
	Mid      string // YYYY#MM (year#month)
	Volnum   string // V#I (volume#issue)
	Pdflink  string // web link to online PDF
	Filename string // my local copy of the PDF
	Have     bool   // whether I have a physical copy
	Notes    string
}

type Article struct {
	Mid      string
	Title    string
	Aid      string // either one Aid or two or more #-separated
	Kid      string // exactly one Kid
	Lid      string // either one Lid or two or more #-separated
	Cid      string // either one Cid or two or more #-separated
	Keywords string // either one keyword or two or more #-separated
}

func (me *Metabase) Initialize() {
	me.vids = map[string]string{}
	for _, magazine := range me.Magazines {
		me.vids[magazine.Mid] = magazine.Volnum
	}
	me.kids = map[string]string{}
	for _, kind := range me.Kinds {
		me.kids[kind.Kid] = kind.Name
	}
	me.aids = map[string]string{}
	for _, author := range me.Authors {
		me.aids[author.Aid] = author.Name
	}
	me.lids = map[string]string{}
	for _, language := range me.Languages {
		me.lids[language.Lid] = language.Name
	}
	me.cids = map[string]string{}
	for _, computer := range me.Computers {
		me.cids[computer.Cid] = computer.Model
	}
}

func (me *Metabase) Verify() {
	for _, article := range me.Articles {
		if _, ok := me.vids[article.Mid]; !ok {
			OnError(fmt.Errorf("invalid magazine ID (mid) %#v %#v",
				article.Mid, article.Title))
		}
		if _, ok := me.kids[article.Kid]; !ok {
			OnError(fmt.Errorf("invalid kind ID (kid) %#v %#v", article.Kid,
				article.Title))
		}
		CheckErr(verifyIds(article.Mid, me.vids, "Magazine", article.Title))
		CheckErr(verifyIds(article.Aid, me.aids, "Author", article.Title))
		CheckErr(verifyIds(article.Kid, me.kids, "Kind", article.Title))
		CheckErr(verifyIds(article.Lid, me.lids, "Language", article.Title))
		CheckErr(verifyIds(article.Cid, me.cids, "Computer", article.Title))
	}
}

func verifyIds(ids string, idset map[string]string,
	what, title string) error {
	for _, id := range GetIds(ids) {
		if _, ok := idset[id]; !ok {
			return fmt.Errorf("invalid %s ID %#v %#v", what, id, title)
		}
	}
	return nil
}

func GetIds(ids string) []string { return strings.Split(ids, "#") }

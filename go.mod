module github.com/mark-summerfield/pcw

go 1.23

replace github.com/mark-summerfield/ureal => /home/mark/app/golib/ureal

require github.com/mark-summerfield/ureal v1.0.0

replace github.com/mark-summerfield/utext => /home/mark/app/golib/utext

replace github.com/mark-summerfield/ufunc => /home/mark/app/golib/ufunc

replace github.com/mark-summerfield/ufile => /home/mark/app/golib/ufile

replace github.com/mark-summerfield/uutil => /home/mark/app/golib/uutil

replace github.com/mark-summerfield/uterm => /home/mark/app/golib/uterm

replace github.com/mark-summerfield/clip => /home/mark/app/golib/clip

replace github.com/mark-summerfield/set => /home/mark/app/golib/set

require github.com/mark-summerfield/set v1.0.0

replace github.com/mark-summerfield/tdb => /home/mark/app/golib/tdb

require (
	github.com/mark-summerfield/tdb v1.0.0
	github.com/otiai10/copy v1.14.0
)

require (
	github.com/mark-summerfield/tdb-go v0.9.10 // indirect
	golang.org/x/sync v0.9.0 // indirect
	golang.org/x/sys v0.27.0 // indirect
)

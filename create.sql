-- Copyright © Mark Summerfield 2024. All Rights Reserved.
-- The purpose of this database is to provide indexes into every 20th
-- Century issue of Personal Computer World magazine. The Adverts index
-- covers only “notable” advertisements. All other indexes are intended to
-- be comprehensive.
-- NULLs are not used; instead 0 or empty string for unknown.

CREATE TABLE Kinds (
    kid TEXT PRIMARY KEY NOT NULL,
    name TEXT UNIQUE NOT NULL
) WITHOUT ROWID;

CREATE TABLE Languages (
    lid TEXT PRIMARY KEY NOT NULL,
    name TEXT UNIQUE NOT NULL
) WITHOUT ROWID;

CREATE TABLE Authors (
    aid TEXT PRIMARY KEY NOT NULL,
    name TEXT UNIQUE NOT NULL
) WITHOUT ROWID;

CREATE TABLE Computers (
    cid TEXT PRIMARY KEY NOT NULL,
    make TEXT NOT NULL,
    model TEXT NOT NULL,
    ramkb REAL,
    romkb REAL,
    lid TEXT,
    pixw INTEGER,
    pixh INTEGER,
    charw INTEGER,
    charh INTEGER,
    colors INTEGER,
    floppynum INTEGER,
    floppykb REAL,
    diskkb REAL,
    cpu TEXT,
    mhz REAL,
    pricegbp REAL,

    FOREIGN KEY(lid) REFERENCES Languages(lid)
) WITHOUT ROWID;

CREATE TABLE Magazines (
    mid TEXT PRIMARY KEY NOT NULL, -- year#month, e.g., 1978#02
    volnum TEXT UNIQUE NOT NULL, -- volume#number, e.g., 1#1
    pdflink TEXT,
    filename TEXT,
    have BOOL,
    notes TEXT
) WITHOUT ROWID;

CREATE TABLE Articles (
    mid TEXT NOT NULL, -- year#month, e.g., 1978#02
    title TEXT UNIQUE NOT NULL,
    aids TEXT, -- #-separated author IDs
    kid TEXT NOT NULL,
    lids TEXT, -- #-separated language IDs
    cids TEXT, -- #-separated computer IDs
    keywords TEXT,

    PRIMARY KEY(mid, title),
    FOREIGN KEY(mid) REFERENCES Magazines(mid)
    FOREIGN KEY(kid) REFERENCES Kinds(kid)
);

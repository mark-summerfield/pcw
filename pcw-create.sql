-- Copyright © Mark Summerfield 2024. All Rights Reserved.
-- The purpose of this database is to provide indexes into every 20th
-- Century issue of Personal Computer World magazine. The Adverts index
-- covers only “notable” advertisements. All other indexes are intended to
-- be comprehensive.

CREATE TABLE Kinds (
    kid TEXT PRIMARY KEY NOT NULL,
    name TEXT UNIQUE NOT NULL
) WITHOUT ROWID;

CREATE TABLE Languages (
    lid TEXT PRIMARY KEY NOT NULL,
    name TEXT UNIQUE NOT NULL
) WITHOUT ROWID;

CREATE TABLE Volumes (
    vid TEXT PRIMARY KEY NOT NULL, -- year#month, e.g., 1978#02
    volnum TEXT UNIQUE NOT NULL, -- volume#number, e.g., 1#1
    pdflink TEXT,
    notes TEXT
) WITHOUT ROWID;

CREATE TABLE Articles (
    vid TEXT NOT NULL, -- year#month, e.g., 1978#02
    title TEXT UNIQUE NOT NULL,
    kid TEXT NOT NULL, -- article kind ID
    lid TEXT, -- language ID
    author TEXT,

    PRIMARY KEY(vid, title),
    FOREIGN KEY(vid) REFERENCES Volumes(vid)
    FOREIGN KEY(kid) REFERENCES Kinds(kid)
    FOREIGN KEY(lid) REFERENCES Languages(lid)
);

INSERT INTO Kinds (kid, name) VALUES ('F', 'Feature');
INSERT INTO Kinds (kid, name) VALUES ('B', 'Book Review');
INSERT INTO Kinds (kid, name) VALUES ('G', 'Game Review');
INSERT INTO Kinds (kid, name) VALUES ('H', 'Hardware Review');
INSERT INTO Kinds (kid, name) VALUES ('S', 'Software Review');
INSERT INTO Kinds (kid, name) VALUES ('L', 'Language Article');
INSERT INTO Kinds (kid, name) VALUES ('C', 'Code Listing');
INSERT INTO Kinds (kid, name) VALUES ('A', 'Advert');

INSERT INTO Languages(lid, name) VALUES  ('80', 'Assember/Z80');
INSERT INTO Languages (lid, name) VALUES ('86', 'Assember/8086');
INSERT INTO Languages (lid, name) VALUES ('88', 'Assember/8088');
INSERT INTO Languages (lid, name) VALUES ('6502', 'Assember/6502');
INSERT INTO Languages (lid, name) VALUES ('6800', 'Assember/6800');
INSERT INTO Languages (lid, name) VALUES ('6809', 'Assember/6809');
INSERT INTO Languages (lid, name) VALUES ('8000', 'Assember/Z8000');
INSERT INTO Languages (lid, name) VALUES ('8080', 'Assember/8080');
INSERT INTO Languages (lid, name) VALUES ('68000', 'Assember/68000');
INSERT INTO Languages (lid, name) VALUES ('80186', 'Assember/80186');
INSERT INTO Languages (lid, name) VALUES ('80286', 'Assember/80286');
INSERT INTO Languages (lid, name) VALUES ('80386', 'Assember/80386');
INSERT INTO Languages (lid, name) VALUES ('bas', 'BASIC');
INSERT INTO Languages (lid, name) VALUES ('vb', 'VisualBasic');
INSERT INTO Languages (lid, name) VALUES ('pas', 'Pascal');
INSERT INTO Languages (lid, name) VALUES ('fs', 'Forth');
INSERT INTO Languages (lid, name) VALUES ('c', 'C');
INSERT INTO Languages (lid, name) VALUES ('cpp', 'C++');

INSERT INTO Volumes (vid, volnum, pdflink) VALUES ('1978#02', '1#1',
    'https://www.worldradiohistory.com/UK/Personal-Computer-World/70s/Personal-Computer-World-Vol.1-No.1-S-OCR.pdf');

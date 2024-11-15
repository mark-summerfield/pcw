#!/usr/bin/env python3
# Copyright © Mark Summerfield 2024. All Rights Reserved.

import contextlib
import os
import shutil
import sys

sys.path.append(os.path.expanduser('~/app/py'))
import tdb

ROOT = os.path.abspath(os.path.dirname(__file__))
WWW = os.path.join(ROOT, 'www')


def main():
    with contextlib.suppress(FileNotFoundError):
        shutil.rmtree(WWW)
    os.mkdir(WWW)
    shutil.copytree('covers', os.path.join(WWW, 'covers'))
    pcw = tdb.load(os.path.join(ROOT, 'pcw.tdb'))
    pcw.dump(sys.stdout)

    # TODO create
    # - index.html
    # - a page per issue with articles details + cover screenshot + pdf link
    # - articles.html article index: each article may have multiple entries,
    #   e.g., by title, by language/title, etc.


if __name__ == '__main__':
    main()


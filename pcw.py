#!/usr/bin/env python3
# Copyright © Mark Summerfield 2024. All Rights Reserved.

import contextlib
import os
import shutil
import sys

sys.path.append(os.path.expanduser('~/app/py'))
import tdb

ROOT = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'www')


def main():
    with contextlib.suppress(FileNotFoundError):
        shutil.rmtree(ROOT)
    os.mkdir(ROOT)
    shutil.copytree('covers', os.path.join(ROOT, 'covers'))

    # TODO create
    # - index.html
    # - a page per issue with articles details + cover screenshot + pdf link
    # - articles.html article index: each article may have multiple entries,
    #   e.g., by title, by language/title, etc.


if __name__ == '__main__':
    main()

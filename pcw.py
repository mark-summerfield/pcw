#!/usr/bin/env python3
# Copyright © Mark Summerfield 2024. All Rights Reserved.

import contextlib
import os
import shutil
import sqlite3

ROOT = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'www')


def main():
    with contextlib.suppress(FileNotFoundError):
        shutil.rmtree(ROOT)
    os.mkdir(ROOT)
    shutil.copytree('covers', os.path.join(ROOT, 'covers'))


if __name__ == '__main__':
    main()

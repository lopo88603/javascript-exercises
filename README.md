# Introduction to Programming with JavaScript, Exercise Repository

One file per lesson, `lesson-01.js` through `lesson-09.js`. The questions wait inside each file as comments. Lesson 9 also uses `lesson-09.html`, which already loads its script with `defer`.

## Comment flags

This repository is written for the Better Comments extension in VS Code:

- `// TODO:` marks every exercise part, work beneath each one in order
- `// *` marks provided starter values and code
- `// !` marks lines that crash on purpose, keep them commented until their part tells you to uncomment them

Without the extension everything still reads fine, the flags just lose their colors.

## Setup, once

1. Clone this repository, then disconnect it from its origin and make it yours:

```console
$ git clone https://github.com/Leon-Arno/JS-Exercises.git
$ cd JS-Exercises
$ rm -rf .git
$ git init
$ git add .
$ git commit -m "Start of my JavaScript exercises"
```

2. Create an empty repository on your own GitHub account and publish:

```console
$ git remote add origin <your new repository address>
$ git push -u origin main
```

## Per lesson, every lesson

1. Create the branch and switch to it, for example `lesson-01-exercise`
2. Open the lesson file, work beneath each `TODO` in order, run with `node lesson-01.js` after every part (lesson 9 runs in the browser instead, open `lesson-09.html` with Live Server and keep the DevTools Console open)
3. Save deliberately, commit with a clear message, push the branch
4. Open a pull request into `main` and submit the pull request link for review

One branch, one reviewed pull request per lesson. The strict mode line already sits at the top of every file, leave it there.

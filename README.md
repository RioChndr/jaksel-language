# Jaksel Script

Jaksel Script is a new programming language, very modern, easy to learn, using Indonesia-slang language. No programming experience required.

Thank you for all your contributions, share, star, and everything.

## Table Of Content

- [Jaksel Script](#jaksel-script)
  - [Table Of Content](#table-of-content)
  - [Instalation](#instalation)
  - [Command](#command)
  - [Example](#example)
  - [Syntax](#syntax)
  - [Disclaimer](#disclaimer)
  - [Showcase](#showcase)
    - [Highlight Text Editor](#highlight-text-editor)

[github-markdown-toc](https://github.com/ekalinin/github-markdown-toc)



## Instalation

Install from npm

```bash
npm install -g jaksel-language
```

Or Clone this repository

```bash
git clone https://github.com/RioChndr/jaksel-language.git
```

## Command

### Run

you can run Jaksel File in terminal using `jaksel -r <filename...>` command

Run from NPM

```bash
jaksel -r example/example1.jaksel
```

Or run from this repository

```bash
node jaksel-interpreter.js -r example/example1.jaksel
```

### Compile

you can compile Jaksel File to Javascript File using `jaksel -c <filename...>` command

Compile from NPM

```bash
jaksel -c example/example1.jaksel
```

Or run from this repository

```bash
node jaksel-interpreter.js -c example/example1.jaksel
```

Example Output (`example1.jaksel` to `example1.js`)

```js
let umur = 21;
console.log("Umur lu " + umur);
if (umur > 20) {
  console.log("Elu tua");
  let umurgua = umur + 10;
  console.log("Kalo gua umurnya " + umurgua);
  if (umurgua > 30) {
    console.log("gua lebih tua");
  }
} else {
  console.log("dasar bocil");
}
console.log("Udahan ah");
```

**Note**: _you can Run or Compile multiple file, split by space_

_Example_

```bash
jaksel -r example/example1.jaksel example/example2.jaksel
```
## Example

Example :

```
literally umur itu 21
spill "Umur lu " + umur
kalo umur lebih gede 20
  spill "Elu tua"
  literally umurgua itu umur + 10
  spill "Kalo gua umurnya " + umurgua
  kalo umurgua lebih gede 30
    spill "gua lebih tua"
  udahan
kalogak
  spill "dasar bocil"
udahan
spill "Udahan ah"
```

```
literally jumlah itu 10
spill "Jumlah: " + jumlah

whichis jumlah itu 11
spill "Jumlah: " + jumlah

literally isHidup itu positive vibes
spill "is hidup :" + isHidup

fomo i endup 10
  kalo i lebih gede 3
    spill "loop ke " + i
  udahan
udahan
```

### Syntax

Some syntax just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.

- [List Jaksel Script syntax](Command.md)

### Disclaimer

This project just for fun, I don't want to hurt anyone. Just from idea "what if jaksel language is a programming language" and make it true. This project only for education purpose, not for production ready.

## Showcase

Some cool project from you, submit your project like highlight text, jaksel-to-js, etc. Make PR link to your repo !. Don't limit your creativity

### Highlight Text Editor

- [vim-jaksel](https://github.com/cocatrip/vim-jaksel) jaksel programming language plugin for (n)vim

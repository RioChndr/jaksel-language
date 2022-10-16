# Jaksel Script

Jaksel Script is a new programming language, very modern, easy to learn, using Indonesia-slang language. No programming experience required.

Thank you for all your contributions, share, star, and everything.

## Instalation & Run

Install from npm
```bash
npm install -g jaksel-language
```
Or Clone this repository

```bash
git clone https://github.com/RioChndr/jaksel-language.git
```

### Run

If you install from npm, run jaksel script using `jaksel` command

```bash
jaksel example/example1.jaksel
```

Or run from this repository
```
node jaksel-interpreter.js example/example1.jaksel
```

## Table Of Content

* [Jaksel Script](#jaksel-script)
   * [Instalation &amp; Run](#instalation--run)
   * [Table Of Content](#table-of-content)
   * [Example](#example)
   * [Command](#command)
  * [Disclaimer](#disclaimer)
   * [Showcase](#showcase)
      * [Highlight Text Editor](#highlight-text-editor)

[github-markdown-toc](https://github.com/ekalinin/github-markdown-toc)

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

### Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.

- [List Command](Command.md)

### Disclaimer

This project just for fun, I don't want to hurt anyone. Just from idea "what if jaksel language is a programming language" and make it true. This project only for education purpose, not for production ready.

## Showcase

Some cool project from you, submit your project like highlight text, jaksel-to-js, etc. Make PR link to your repo !. Don't limit your creativity

### Highlight Text Editor
- [vim-jaksel](https://github.com/cocatrip/vim-jaksel) jaksel programming language plugin for (n)vim
- [vscode-jaksel-language-support](https://github.com/ngupuk/vscode-jaksel-language-support) visual studio code extension for syntax highlighting, code snippet, and auto formatting

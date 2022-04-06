## Jaksel Programming Language

Jaksel programming language is a new programming language, very modern, easy to learn, using Indonesia-slang language. No programming experience required.

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

## Command

- `literally ... itu ...` = `let a = b`
- `spill` = `console.log`
- `kalo ... ... ...` = `if`
- `kalogak` = `else`
- `udahan` = close branch
- `worth it` = true
- `seriously ... itu ...` = `const a = b`

## Run

```
node jaksel-interpreter.js ./jaksel
```

## Todo

- [ ] Read from file

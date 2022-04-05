## Jaksel Programming Languange

Jaksel programming languange is a new programming languange, very modern, easy to learn, using Indonesia-slang languange. No programming experience required.

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

## Command

- `literally ... itu ...` = `let a = b`
- `spill` = `console.log`
- `kalo ... ... ...` = `if`
- `kalogak` = `else`
- `udahan` = close branch

## Run

```
node jaksel-interpreter.js ./jaksel
```

## Todo

- [ ] Read from file
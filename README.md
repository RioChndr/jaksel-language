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

## Run

Required nodejs

```
node jaksel-interpreter.js ./jaksel
```

## Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.
#### Variable

Assign variable
```
literally foo itu "hello world"
// let foo = "hello world"

seriously foo itu 123
// const foo = 123
```

Reassign variable
```
whichis foo itu "hello world 2"
// foo = "hello world 2"
```

**Boolean**

```
literally foo itu positive vibes
// let foo = true

literally foo itu worth it
// let foo = true

literally foo itu negative vibes
// let foo = false
```

#### Print / Console.log
```
spill "Hello world"
// console.log("Hello world")

spill foo
// console.log(foo)
```


#### Condition

```
kalo foo itu "Hello world"
  spill "its hello world"
udahan

// transform to
if(foo == "Hello world"){
  console.log("its hello world")
}
```

```
kalo foo lebih gede 3
  spill "its bigger than 3"
kalogak
  spill "its smaller than 3"
udahan

// transform to
if(foo > 3){
  console.log("its bigger than 3")
} else {
  console.log("its smaller than 3")
}
```

Comparison : 
- `itu`: ' == ',
- `lebih gede`: '>',
- `lebih kecil`: ' < ',
- `lebih gede sama dengan`: ' >= ',
- `lebih kecil sama dengan`: ' <= '

#### Loop

```
fomo i endup 10
  kalo i lebih gede 3
    spill "loop ke " + i
  udahan
udahan

// transform to
for (let i = 0; i < 10; i++) {
  if (i > 3){
    console.log("loop ke " + i);
  }
}
```

#### Disclaimer

This project just for fun, I don't want to hurt anyone. Just from idea "what if jaksel language is a programming language" and make it true. This project only for education purpose, not for production ready.
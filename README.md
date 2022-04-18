## Jaksel Programming Language

Jaksel programming language is a new programming language, very modern, easy to learn, using Indonesia-slang language. No programming experience required.

### Instalation

```bash
// globally
npm install -g jaksel-language

// locally
npm install jaksel-language
```

### Run

```bash
// globally
jaksel example/example1.jaksel

// locally
node jaksel-interpreter example/example1.jaksel
```

### Table Of Content

[TOC]

### Example

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

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.

#### Variable

**Assign variable**

<table>
<tr><td>.jaksel</td><td>.js</td></tr>
<tr>
<td>

```
literally foo itu "hello world"
seriously foo itu 123
```

</td>
<td>

```javascript
let foo = "hello world";
const foo = 123;
```

</td>
</tr>
</table>

**Reassign variable**

<table>
<tr><td>.jaksel</td><td>.js</td></tr>
<tr>
<td>

```
whichis foo itu "hello world 2"
```

</td>
<td>

```javascript
foo = "hello world 2";
```

</td>
</tr>
</table>

**Boolean**

<table>
<tr><td>.jaksel</td><td>.js</td></tr>
<tr>
<td>

```
literally foo itu positive vibes
literally foo itu worth it
literally foo itu negative vibes
```

</td>
<td>

```javascript
let foo = true;
let foo = true;
let foo = false;
```

</td>
</tr>
</table>

#### Print / Console.log

<table>
<tr><td>.jaksel</td><td>.js</td></tr>
<tr>
<td>

```
spill "Hello world"
spill foo
```

</td>
<td>

```javascript
console.log("Hello world");
console.log(foo);
```

</td>
</tr>
</table>

#### Condition

##### If condition

<table>
<tr><td>.jaksel</td><td>.js</td></tr>
<tr>
<td>

```
kalo foo itu "Hello world"
  spill "its hello world"
udahan
```

</td>
<td>

```javascript
if (foo == "Hello world") {
  console.log("its hello world");
}
```

</td>
</tr>
</table>

##### If Else condition

<table>
<tr><td>.jaksel</td><td>.js</td></tr>
<tr>
<td>

```
kalo foo lebih gede 3
  spill "its bigger than 3"
perhaps foo itu 3
  spill "foo is 3"
kalogak
  spill "its smaller than 3"
udahan
```

</td>
<td>

```javascript
if (foo > 3) {
  console.log("its bigger than 3");
} else if (foo == 3) {
  console.log("foo is 3");
} else {
  console.log("its smaller than 3");
}
```

</td>
</tr>
</table>

Comparison :

- `itu`: ' == ',
- `gak`: ' != ',
- `lebih gede`: ' > ',
- `lebih kecil`: ' < ',
- `lebih gede sama dengan`: ' >= ',
- `lebih kecil sama dengan`: ' <= '

#### Loop

<table>
<tr><td>.jaksel</td><td>.js</td></tr>
<tr>
<td>

```
fomo i endup 10
  kalo i lebih gede 3
    spill "loop ke " + i
  udahan
udahan
```

</td>
<td>

```javascript
for (let i = 0; i < 10; i++) {
  if (i > 3) {
    console.log("loop ke " + i);
  }
}
```

</td>
</tr>
</table>

#### Function

<table>
<tr><td>.jaksel</td></tr>
<tr>
<td>

```
so about my_story
    literally umur itu 21
    spill "Umur lu " + umur
thats it sih

call my_story

so about fungsi_param_banyak a b c
    spill "a: " + a
    spill "b: " + b
    spill "c: " + c
thats it sih

call fungsi_param_banyak 3 4 5
```

</td>
</tr>
</table>

#### Async Function

```
overthinking my_story
    literally umur itu 21
    spill "Umur lu " + umur
thats it sih

call my_story

so about fungsi_param_banyak a b c
    spill "a: " + a
    spill "b: " + b
    spill "c: " + c
thats it sih

call fungsi_param_banyak 3 4 5
```

#### Try Catch & Exception

<table>
<tr><td>.jaksel</td><td>.js</td></tr>
<tr>
<td>

```
trust issue
  spill "Something wrong"
  toxic "Error message"
backstab
  spill "Catch error"
yaudahlahya
  spill "finish finally"
udahan
```

</td>
<td>

```javascript
try {
  console.log("Something wrong");
  throw new Error("Error message");
} catch {
  console.log("Catch error");
} finally {
  console.log("finish finally");
}
```

</td>
</tr>
</table>

#### Disclaimer

This project just for fun, I don't want to hurt anyone. Just from idea "what if jaksel language is a programming language" and make it true. This project only for education purpose, not for production ready.

<!-- TABLE TEMPLATE -->
<!--

<table>
<tr><td>.jaksel</td><td>.js</td></tr>
<tr>
<td>

.jaksel source code here

</td>
<td>

.js source code here

</td>
</tr>
</table>

 -->

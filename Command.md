## Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.
### Variable

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

### Print / Console.log
```
spill "Hello world"
// console.log("Hello world")

spill foo
// console.log(foo)
```


### Condition

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
perhaps foo itu 3
  spill "foo is 3"
kalogak
  spill "its smaller than 3"
udahan

// transform to
if(foo > 3){
  console.log("its bigger than 3")
} else if (foo == 3) {
  console.log("foo is 3")
} else {
  console.log("its smaller than 3")
}
```

Comparison : 
- `itu`: ' == ',
- `gak`: ' != ',
- `lebih gede`: ' > ',
- `lebih kecil`: ' < ',
- `lebih gede sama dengan`: ' >= ',
- `lebih kecil sama dengan`: ' <= '

### Loop

#### **`For` loop**:
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

#### **`For of` loop**:
```
fomo semua foo dari bar
  spill foo
udahan

// transform to
for (const foo of bar) {
  console.log(foo);
}
```

#### **`break`** and **`continue`**:
```
stop
// break;

skip
// continue;
```

### Function
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

### Async Function
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

### Try Catch & Exception
```
trust issue
  spill "Something wrong"
  toxic "Error message"
backstab
  spill "Catch error"
yaudahlahya
  spill "finish finally"
udahan


// transform to
try {
  console.log("Something wrong");
  throw new Error("Error message");
} catch {
  console.log("Catch error");
} finally {
  console.log("finish finally");
} 
```

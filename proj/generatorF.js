function * demo(){
    console.log("first");
    yield 100;
    console.log("second");
    let Str = "javascript";
    yield Str;
    return 100;
}

let res = demo();
console.log(res);
console.log(res.next());
console.log(res.next());
console.log(res.next());
//or console.log(...res);

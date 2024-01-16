async function demo(){
    try{
        console.log("hello");
        return "I am resolved";
        const a = 100;
        a=900;
        console.log("bye");

    }catch(error){
        console.log(error);
    }
}


let x= demo();
console.log(x);

x.then(
    (d)=>{
        console.log(d);
    },
    (err) =>{
        console.log(err);
    }
);

let p =Promise.resolve("resolved");
console.log(p);

let ar = async () =>{
    console.log("hello");
    await p;
    console.log("bye");
};

console.log("hi");
console.log("hi");
console.log("hi");

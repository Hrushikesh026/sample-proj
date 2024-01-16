let parent = {
    name:"sachin",
    getName(){
        return this.name;
    },
    setName(n){
        this.name = n;
    },
};

let child={
    name:"sara",
};

child.__proto__=parent
//console.log(child);

child.setName("arjun");


//yes we can fetch without passing parameter using "arguments obj"
function demo(){
    let x = Array.from (arguments);
    console.log(x);
}
demo(10,20,30,40);

function fun(a,b,c){
    console.log(fun.length);
}
fun();
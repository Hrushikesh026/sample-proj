async function demo(){
    try{
        let data = await window.fetch("https://api.github.com/users");
        let finalData =await data.json();
         let tbody=document.querySelector("tbody");
        console.log(tbody);
        finalData.map(v,i) =>{
            console.log(v);
            
        }
        }
    }


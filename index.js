
      const cats = ["Milo","Otis","Garfield"];

// function BeforeEach(){

//     cats.length = 0;
//     cats.push("Milo","Otis","Garfield");
    
//     } 


function destructivelyAppendCat(name){

    
    name.push("Ralph");
    return name;
}

function destructivelyPrependCat(name){
   

    name.unshift("Bob");
    return name;
    
}


console.log(destructivelyPrependCat(cats));

 
//Writing a function that multiply each number under 70 by 2 in the following array.
const ages = [25, 31, 43, 77];

const PartD = ages.map((item)=>{
    if(item , 70){
         return item*2;
}else{
    return item;
}
});

console(PartD);
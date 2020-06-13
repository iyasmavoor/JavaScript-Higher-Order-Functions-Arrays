const companies=[
    {name:"one0",catogory:"finance", start:1689, end:1698},
    {name:"te",catogory:"s", start:65,end:78},
    {name:"w",catogory:"fingance", start:888,end:999},

    {name:"e",catogory:"finance", start:1669,end:1672},


];
const ages=[55,622,5,6226,46,46];
//for(let i=0; i<companies.length;i++){
//console.log(companies[i]);
//}
/*companies.forEach(function(e){
    console.log(e.name);
});
const candrink=[];
for(let i=0;i <ages.length;i++){
    if(ages[i]>=50){
        candrink.push(ages[i]);
        
    }
};
console.log(candrink);

const candrink= ages.filter(function(age){
    if(age>50){
        return true;
    }
});

const candrink=ages.filter(age => age>50);
console.log(candrink);
const sfinance=companies.filter(function(i){
if (i.catogory==='finance'){
    return true;
}
})
console.log(sfinance);
const finance=companies.filter(i => i.catogory==='finance');
console.log(finance);
companynames=companies.map(i=> `${i.name}[${i.start}]`);
console.log(companynames);*/
/*const sortcomp=companies.sort(function(a,b){
    if(a.start>b.start){
        return 1;
    }else{
        return -1;
    }
});
console.log(sortcomp);
const sortcomp=companies.sort((a,b)=>(a.start>b.start ? 1:-1));
console.log(sortcomp);

//const agess=ages.sort();
const agess= ages.sort((a,b)=> a-b);

console.log(agess);
const agesss= ages.sort((a,b)=> b-a);
console.log(agesss);
const totalage=ages.reduce(function(a,b){
    return a+b;
},100//\initial value
);
console.log(totalage);
const sumyear=companies.reduce((a,b)=>a+(b.end-b.start),0);
console.log(sumyear);*/
//compain all functions
const compained=ages
.map(a=>a*2)
.filter(a=> a>95)
.sort((a,b)=>a-b)
.reduce((a,b)=>a+b,0);

console.log(compained);

let Num =[67,5,6,4,7,9,7,6,4,3,1,4,9,90,8,6,4,43,];
let b=[];
let len=Num.length;
for(let i=0; i<len; i++)
{
    if(b.indexOf(Num[i]) === -1)
    {
        b.push(Num[i]);
    }
}

b.sort();
console.log(b);

class Animal
{
    num1:number;
    num2:number;
    total:number;
    

    fucmove(age:number)
    {
        console.log(`this Dog age ${age}`);
        
    }
    funmove(name:string)
    {
        console.log(`you Name is ${name}`);
        
    }
    sum(a:number,b:number=45)
    {
        this.num1=a;
        this.num2=b;
        console.log(this.total=this.num1+this.num2);     
        
        
    }
    loop(i:number)
    {
        for(let j=1;j<=i;j++)
        console.log(j);
        
    }
    sortarray()
    {
        var myarray=[97967,5757,64,565,363,464,47,48,68];
        var sort_value=myarray.sort();
        sort_value.forEach(element => {
            console.log(element);
        });
        
        
    }

}
class Dog extends Animal{
    bark()
    {
        console.log('woof wooof ');

        
    }
}

let dog1=new Dog();
dog1.bark();
dog1.fucmove(45);
dog1.funmove("sima")
dog1.bark();
dog1.sum(45);
dog1.loop(5);
dog1.sortarray();


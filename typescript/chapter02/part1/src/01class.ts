class Person{
    name: string = "test"; //实例属性

    static age:number = 18; //类属性

}
const per = new Person();
console.log(per.name);
console.log(Person.age);
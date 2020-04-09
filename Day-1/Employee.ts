//Create a class named Employee that contains properties for the name,color and birth year.Include get and set methods for these fields.Create a subclass named AdhocEmployee, which contains an additional field  that holds the number of hours he worked on and also write set and get method for the new field.Write a TypeScript application that demonstrates using objects of each class.
class Employee { 
    employeeName: string;
    colour: string;
    birthYear: string;
    constructor(name, colour, year) { 
        this.employeeName= name;
        this.colour = colour;
        this.birthYear = year;
    }
}

class AdHocEmployee extends Employee { 
    noOfHours: number;
    constructor(name, colour, year,hrs) { 
        super(name, colour, year);
        this.noOfHours = hrs;
    }
}

const emp = new Employee('Ramesh', 'Brown', '1986');
console.log(emp.birthYear);

const newEmp = new AdHocEmployee('Suresh', 'White', '1987', 6);
console.log(newEmp.colour);

console.log(newEmp.noOfHours);
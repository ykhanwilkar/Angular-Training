//Create a class Student with  properties enrollmentNumber and studentName.Write an arrow function display to display the student details.

class Student { 
    enrollmentNO: string;
    name: string;

    constructor(number, name) { 
        this.enrollmentNO = number;
        this.name = name;
    }

    display = () => { 
        console.log(this.enrollmentNO);
        console.log(this.name);
    }
}

var st = new Student('1000', 'Ibn-E-Batuta');
st.display();

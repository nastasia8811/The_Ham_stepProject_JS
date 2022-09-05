class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    get nameEmployee() {
        return this.name;
    }

    get ageEmployee() {
        return this.age;
    }

    get salaryEmployee() {
        return this.salary;
    }

    set nameEmployee1(name) {
        this.name = name;
    }

    set ageEmployee1(age) {
        this.age = age;
    }

    set salaryEmployee1(salary) {
        this.salary = salary;
    }
}

const EmployeeOne = new Employee('Nick', '25', '2500');
const EmployeeTwo = new Employee('Lolita', '35', '5000');
console.log(EmployeeOne);
console.log(EmployeeTwo);


class Programmer extends Employee {
    constructor(name,age,salary, lang) {
        super(name,age,salary);
        this.lang = lang;
    }

    get salaryEmployee() {
        return this.salary * 3;
    }
    }
console.log(Programmer);
const programmerOne = new Programmer('Nancy', '20', '2000', 'eng');
const programmerTwo = new Programmer('Jack', '30', '1000', 'ukr');
console.log(programmerOne);
console.log(programmerTwo);
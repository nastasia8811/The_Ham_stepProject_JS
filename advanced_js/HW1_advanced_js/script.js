class Employee {
constructor(name,age,salary) {
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

    set nameEmployee(value) {
        this.name = name;
    }
    set ageEmployee(value) {
        this.age = age;
    }
    set salaryEmployee(value) {
        this.salary = salary;
    }
}


class Programmer extends Employee {
    constructor(name,age,salary, lang) {
        super(name,age,salary);
        this.lang = lang;
    }
    new gsalaryEmployee() {
        return this.salary;
    }
    }


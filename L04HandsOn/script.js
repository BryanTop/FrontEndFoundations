class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }
    getName() {
        console.log(this.name.toUpperCase());
    }
    getSalary() {
        console.log(this.salary);
    }
    getHireDate() {
        console.log(this.hireDate);
    }
}

class Manager extends Employee {
    constructor(name, salary, hireDate, descriptionOfJob) {
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }

    jobDescription() {
        console.log(this.name+  ' was hired on ' + this.hireDate + 'and has a salary of ' + this.salary + " with a job description of " + this.descriptionOfJob);
    }
}

class Designer extends Employee {
    constructor(name, salary, hireDate, experience) {
        super(name, salary, hireDate);
        this.experience = experience;
    }

    yearsExperience() {
        console.log(this.name+ ' was hired on ' + this.hireDate + 'and has a salary of ' + this.salary + " with  " + this.experience + ' of experience');
    }
}


class SalesAssociate extends Employee {
    constructor(name, salary, hireDate, degrees) {
        super(name, salary, hireDate);
        this.degrees = degrees;
    }

    degreeCompleted() {
        console.log(this.name+ ' was hired on ' + this.hireDate + 'and has a salary of ' + this.salary + " with the degree of " + this.degrees);
    }
}


const saria = new Manager("Saria", 60000, "Sept. 6", "Managment");
saria.jobDescription();
const nick = new Designer("Nick", 45000, "Oct 5", 6);
nick.yearsExperience();
const john = new SalesAssociate("John", 25000, "Nov 5", "Art degree");
john.degreeCompleted();
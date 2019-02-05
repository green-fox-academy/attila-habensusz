class Person {
    name: string;
    age: number;
    gender: string;


    constructor(n, a, g) {
        this.name = n;
        this.age = a;
        this.gender = g;
    }

    introduce() {
        console.log(`Hi, i'm ${this.name}, ${this.age} year old, ${this.gender}` );
    }

    getGoal() {
        console.log("My goal is: live for the moment!");
    }

    person(){
        this.name = "Jane Doe";
        this.age = 30;
        this.gender = "female";
    }

}

class Student extends Person {
    previousOrganization: string;
    skippedDays: number;

    constructor(n, a, g, pog, skip = 0) {
        super(n, a, g);
        this.previousOrganization = pog;
        this.skippedDays = skip;
    }

    getGoal(){
        console.log("Be a junior software developer");
    }

    introduce(){
        console.log(`Hi, i'm ${this.name}, ${this.age} year old ${this.gender} from ${this.previousOrganization}, who skipped ${this.skippedDays} days. `);
    }

    skipDays(){
        this.skippedDays+= 1;
    }

    student(){
        this.name = "Jane Doe";
        this.age = 30;
        this.gender = "female";
        this.previousOrganization = "The school of life";
        this.skippedDays = 0;
    }

}

class Mentor extends Person {
    level: string;

    constructor(n, a, g, lvl){
        super(n, a, g);
        this.level = lvl;
    }

    getGoal(){
        console.log("Educate brilliant developers");
    }

    introduce(){
        console.log(`Hi, i'm ${this.name}, ${this.age} years old ${this.gender}, ${this.level} mentor`);
    }

    mentor(){
        this.name = "Jane Doe";
        this.age = 30;
        this.gender = "female";
        this.level = "intermediate";
    }
}

class Sponsor extends Person {
    company: string;
    hiredStudents: number;

    constructor(n, a, g, cmp, hired = 0) {
        super(n, a, g);
        this.company = cmp;
        this.hiredStudents = hired;
    }

    introduce(){
        console.log(`Hi, i'm ${this.name}, ${this.age} years old ${this.gender}, who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }

    hire(){
        this.hiredStudents += 1;
    }

    getGoal(){
        console.log("Hire brilliant devs");
    }

    sponsor(){
        this.name = "Jane Doe";
        this.age = 30;
        this.gender = "female";
        this.company = "Google";
        this.hiredStudents = 0;
    }
}

class Cohort {
    name: string;
    students: Student[];
    mentors: Mentor[];

    constructor(n){
        this.name = n;
        this.students = [];
        this.mentors = [];
    }

    addStudent(Student){
        this.students.push(new Student);
    }

    addMentor(Mentor){
        this.mentors.push(new Mentor);
    }

    info(){
        console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
    }
}

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

//mark.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

/* for (let i = 0; i < 4; i++) {
  Sponsor.hire();
} */

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(Student);
awesome.addStudent(john);
awesome.addMentor(Mentor);
awesome.addMentor(gandhi);
awesome.info();

console.log(people);



/* let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person("Example", 23, "female");
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
/* let student = new Student();
people.push(student); */
/* let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi); */
/* let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon); */

/* console.log(people); */ 
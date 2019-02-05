import {Person, Student, Sponsor, Mentor} from './class-exercise';

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

class Student {
    

    constructor(configName) {
        this.name = configName;
        this.IQ = 100;
    }

    learn() {
        this.IQ += 10;
    }

    question(teacher) {
        teacher.answer();
    }
}

class Teacher {
    constructor (configName) {
        this.name = configName;
        this.tiredness = 0;
    }

    teach(student) {
        student.learn();
    }

    answer() {
        this.tiredness += 1;
    }
}

let studentA = new Student ('Bela');
let teacherB = new Teacher ('Tanarba');

studentA.learn();
teacherB.teach(studentA);

console.log(studentA);
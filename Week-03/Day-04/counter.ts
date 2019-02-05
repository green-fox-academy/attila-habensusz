class Counter {
    integ: number;

constructor (int = 0) {
    this.integ = int;
}

add(num) {
    this.integ += num;
}

addMore(one = 1) {
    this.integ += one;
}

get() {
    console.log(`{this.integ}`);
}
reset() {
    this.integ = 0;
}
}

let newNum = new Counter(5);
newNum.addMore();
newNum.reset();


console.log(newNum);
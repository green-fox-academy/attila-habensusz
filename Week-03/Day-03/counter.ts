class Counter  {
    integer;

    constructor(int = 0) {
       this.integer = int;
    }

    add(num) {
    this.integer += num;
    }

    addOne(){
    this.integer += 1;
    }

    get() {
    let val = this.integer;
    val.toString();
    }

    reset() {
      this.integer -= 1;
    }


}

const num1 = new Counter ();
num1.addOne();
num1.get();
num1.reset();
console.log(num1);


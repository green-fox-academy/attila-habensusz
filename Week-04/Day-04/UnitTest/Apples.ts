class Apple {
    type: string;

    constructor(t = "apple"){
        this.type = t;
    }

    getApples(){
        return this.type;
    }

    sum(a, b){
        return a + b;
    }
}

export {Apple};
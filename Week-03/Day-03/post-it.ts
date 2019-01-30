/* Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!" */

class PostIt {
    backgroundColor;
    text;
    textColor;

    constructor(bCol, txt, txtCol) {
        this.backgroundColor = bCol;
        this.text = txt;
        this.textColor = txtCol;
    }
}

const examp1 = new PostIt("orange", "Idea 1", "blue");
const examp2 = new PostIt("pink", "Awesome", "black");
const examp3 = new PostIt("yellow", "Superb", "green");

//console.log(examp1);
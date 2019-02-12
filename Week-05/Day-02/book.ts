'use strict';

export class Book {
    title: string;
    author: string;
    releaseYear: number;
    pageNumber: number;
    weight: number;

    constructor(title, author, releaseYear, page) {
        this.title = title;
        this.author = author;
        this.releaseYear = releaseYear;
        this.pageNumber = page;
        
    }

    getinfo(){
        return `The author of this book is ${this.author}, and the title is ${this.title}, from the year ${this.releaseYear}`;
    }
}
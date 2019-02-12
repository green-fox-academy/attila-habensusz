'use strict';

import {Book} from './book';
import {Hardcover} from './hardcover';
import {Softcover} from './softcover';


class Bookshelf {
    books = [];

    addBooks(book: Book) {
        this.books.push(book);
    }

    lightestBook() {
        let lightestAuthor = this.books.sort((a, b) => a.weight - b.weight)[0].author;
    return lightestAuthor
  }

  authorWhoWroteTheMostPages() {
        let pagesByAuthor: Object = {};
        this.books.forEach(book => {
            if(pagesByAuthor[book.author]) {
                pagesByAuthor[book.author] += book.page;
            } else {
                pagesByAuthor[book.author] = book.page;
            }
        });
   
    let sortedNumberOfPages = Object.keys(pagesByAuthor)
    .map(author => {
        return {
            author,
            pages: pagesByAuthor[author]
        };
    })
    .sort((a, b) => b.pages - a.pages);

    return sortedNumberOfPages[0].author;
    }

}

let myBookshelf = new Bookshelf();
myBookshelf.addBooks(new Softcover('Egg', 'degg', 1980, 200));
myBookshelf.addBooks(new Hardcover('Legg', 'Mmpf', 1970, 300));

console.log(myBookshelf)


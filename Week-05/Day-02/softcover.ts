'use strict';

import {Book} from './book';

export class Softcover extends Book {
    constructor(title, author, releaseYear, page) {
        super(title, author, releaseYear, page);

        this.weight = 100 + page * 10;
    }
}
import { BlogPost } from '../Day-03/blog-post';

class Blog {
    blogs: BlogPost[];

    constructor() {
        this.blogs = [];
    }

    add(newPost: BlogPost) {
        this.blogs.push(newPost);
    }

    delete(rmPost) {
        this.blogs.splice((rmPost -1), 1);
    }

    update(rmPost: number, newPost: BlogPost) {
        this.blogs[(rmPost - 1)] = newPost;
    }
}

let Blog1 = new Blog;
let BlogPostA = new BlogPost('John Doe', 'Something', 'Blahbalala', '2005.05.05');
let BlogPostB = new BlogPost('John Doe1', 'Something1', 'Blahbalala', '2005.05.05');
let BlogPostC = new BlogPost('John Doe2', 'Something2', 'Blahbalala', '2005.05.05');
let BlogPostD = new BlogPost('John Doe3', 'Something3', 'Blahbalala', '2005.05.05');

Blog1.add(BlogPostA);
Blog1.add(BlogPostB);
Blog1.add(BlogPostC);
Blog1.add(BlogPostD);
console.log(Blog1);
Blog1.delete(2);
console.log(Blog1);
Blog1.update(1, BlogPostB);
console.log(Blog1);
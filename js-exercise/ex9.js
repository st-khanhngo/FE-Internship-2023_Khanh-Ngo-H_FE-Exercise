// 9.Write a JavaScript program that creates a class `Book` with properties for title, author, 
// and publication year. Include a method to display book details. Create a subclass called 'Ebook'
// that inherits from the 'Book' class and includes an additional property for book price. 
// Override the display method to include the book price. Create an instance of the 'Ebook' 
// class and display its details.

class Book {
  constructor(title, author, pub) {
    this.title = title;
    this.author = author;
    this.pub = pub;
  }
  display() {
    return this.title + ' by ' + this.author + ' was published in ' + this.pub;
  }
}

class Ebook extends Book {
  constructor(title, author, pub, price) {
    super(title, author, pub);
    this.price = price;
  }
  display() {
    return this.title + ' by ' + this.author + ' was published in ' + this.pub + ' | Price: $' + this.price;
  }
}

let book1 = new Ebook('Javascript', 'ST', 2019, 120);
console.log(book1.display());

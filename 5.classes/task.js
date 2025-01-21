class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  set state(newState) {
    this._state = Math.max(0, Math.min(100, newState));
  }

  fix() {
    let newState = this._state * 1.5;
    this.state = newState;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// 2 задание

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    book.state > 30 ? this.books.push(book) : "";
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex((book) => book.name === bookName);
    if (index !== -1) {
      return this.books.splice(index, 1)[0];
    }
    return null;
  }
}

// Создаем библиотеку
const library = new Library("Городская библиотека");

// Создаем книги и журналы
const book1 = new NovelBook("Лев Толстой", "Война и мир", 1869, 1225);
const book2 = new DetectiveBook("Артур Конан Дойл", "Шерлок Холмс", 1892, 300);
const book3 = new FantasticBook(
  "Дж. Р. Р. Толкин",
  "Властелин колец",
  1954,
  1216
);
const book1919 = new Book("Автор неизвестен", "Книга 1919", 1919, 250);
const magazine1 = new Magazine("Наука и жизнь", 2020, 100);
const magazine2 = new Magazine("Мир приключений", 2021, 80);

// Добавляем книги и журналы в библиотеку
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book1919);
library.addBook(magazine1);
library.addBook(magazine2);

// Проверяем количество книг в библиотеке
console.log("Книги в библиотеке:", library.books.length); // Должно быть 6

// Проверяем, что книга создана и добавлена
console.log(library.findBookBy("releaseDate", 1919));

// Выдаем книгу
const issuedBook = library.giveBookByName("Война и мир");
console.log("Выдана книга:", issuedBook.name); // Должно быть "Война и мир"

// Повреждаем выданную книгу
issuedBook.state = 20;
console.log(`Состояние книги "${issuedBook.name}":`, issuedBook.state); // Должно быть 20%

// Восстанавливаем выданную книгу
issuedBook.fix();
console.log(
  `Состояние книги "${issuedBook.name}" после восстановления:`,
  issuedBook.state
); // Должно быть 30%

// Пытаемся вернуть восстановленную книгу в библиотеку
library.addBook(issuedBook);
console.log(
  "Количество книг в библиотеке после возврата:",
  library.books.length
); // Должно быть 5

// Проверяем, что книга не добавлена из-за плохого состояния
const returnedBook = library.findBookBy("name", issuedBook.name);
console.log(
  "Возвращенная книга:",
  returnedBook ? returnedBook.name : "Книга не найдена"
); // Должно быть "Книга не найдена"

// 3 задание

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }

    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject] || this.marks[subject].length === 0) {
      return 0;
    }

    const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
    const average = sum / this.marks[subject].length;

    return average;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    }

    const totalAverage = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);

    return totalAverage / subjects.length;
  }
}

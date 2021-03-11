//Задача 1
class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
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
    type = "novel";
}

class FantasticBook extends Book {
    type = "fantastic";
}

class DetectiveBook extends Book {
    type = "detective";
}


//Задача 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            for (let j = 0; j < Object.entries(this.books[i]).length; j++) {
                if (type === Object.entries(this.books[i])[j][0] && value === Object.entries(this.books[i])[j][1]) {
                    return this.books[i];
                }
            }
            
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                let helper = this.books[i];
                this.books.splice(i, 1);
                return helper;
            }
        }
        return null;
    }
}

//Задача 3
class StudentLog {
    constructor(name) {
        this.name = name;
        this.arr = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (grade > 0 && grade < 6) {
            for (let i = 0; i < Object.entries(this.arr).length; i++) {
                if (Object.entries(this.arr)[i][0] === subject) {
                    Object.entries(this.arr)[i][1].push(grade);
                    return (Object.entries(this.arr)[i][1]).length;
                }
            }
            this.arr[subject] = [];
            return this.addGrade(grade, subject);
            
        } else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
            for (let i = 0; i < Object.entries(this.arr).length; i++) {
                if (Object.entries(this.arr)[i][0] === subject) {
                    return (Object.entries(this.arr)[i][1]).length;
                }
            }
            return 0;
        }
    }

    getAverageBySubject(subject) {
        for (let i = 0; i < Object.entries(this.arr).length; i++) {
            if (Object.entries(this.arr)[i][0] === subject) {
                let average = 0;
                for (let j = 0; j < (Object.entries(this.arr)[i][1]).length; j++) {
                    average += (Object.entries(this.arr)[i][1])[j];
                }
                return average / (Object.entries(this.arr)[i][1]).length;;
            }
        }
        return 0;
    }

    getTotalAverage() {
        let average = 0, counter = 0;
        for (let i = 0; i < Object.entries(this.arr).length; i++) {
            for (let j = 0; j < Object.entries(this.arr)[i][1].length; j++) {
                average += Object.entries(this.arr)[i][1][j];
                counter++;
            }
        }
        if (average != 0)
        {
            return average / counter;
        }
        return 0;
    }
}
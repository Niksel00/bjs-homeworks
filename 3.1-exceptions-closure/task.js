//Задача 1
function parseCount(number) {
    number = Number.parseInt(number);
    if (isNaN(number)) {
        throw new Error("Невалидное значение");
    }
    return number;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch(e) {
        return e;
    }
}

//Задача 2
class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const halfP = (this.a + this.b + this.c) / 2;
        const S = Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c));
        return parseFloat(S.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(e) {
        return {
            getArea()
            {
                return 'Ошибка! Треугольник не существует';
            },
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}
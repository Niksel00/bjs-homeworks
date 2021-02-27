"use strict";
function getResult(a,b,c) {
    // код для задачи №1 писать здесь
    "use strict";
    let D = Math.pow(b,2) - 4 * a * c;
    let x = [];
    if (D == 0) {
       x[0] = (-b) / (2*a);
       return(x);
   } else if (D > 0) {
       x = [((-b)+Math.sqrt(D))/(2*a), ((-b)-Math.sqrt(D))/(2*a)];
       return(x);
   }
     return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    if (marks.length > 5) {
    	marks = marks.slice(0, 5);
    } else if (marks.length == 0) {
        marks = 0;
        return (marks);
    }
    let averageMark = 0;
    for (let i=0; i < marks.length; i++) {
    	averageMark = averageMark + marks[i];
    }
    return averageMark/marks.length;
}

function askDrink(name,dateOfBirthday) {
    // код для задачи №3 писать здесь
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let result = "";
    if (age >= 18) {
    	result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
    	result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
    console.log(result);
    return result;
}
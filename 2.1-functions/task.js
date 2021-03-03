//Задача 1 
function  getSolutions(a, b, c) {
    let x1 = '';
    let x2 = '';
    let D = b**2 - 4 * a * c; 
    if (D < 0) { 
      return { 
        roots: [],
        D: D 
      };
    } else if (D == 0) {
      x1 = (-b + Math.sqrt(D)) / (2*a);
      return { 
        roots: [x1], 
        D: D 
      };
    } else if (D > 0) {
      x1 = (-b + Math.sqrt(D)) / (2*a) 
      x2 = (-b - Math.sqrt(D)) / (2*a);
      return { 
        roots: [x1, x2], 
        D: D 
      };
   }
}

function showSolutionsMessage(a, b, c) {
  let result =  getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) { 
  console.log("Уравнение не имеет вещественных корней")
  } else if (result.D == 0) {
       console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
  } else if (result.D > 0) {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
  }
}

//Задача 2
function getAverageScore(data) {
  let object = new Object();
  object.average = 0;
  let count = 0;
  for (let prop in data) {
    object[prop] = getAverageMark(data[prop]);
    object.average += getAverageMark(data[prop]);
    count++;
  }
  object.average = object.average / count;
  if (isNaN(object.average)) {
    object.average = 0;
  }
  return object;
}

function getAverageMark(marks) {
  let averageMark = 0;
  if (marks.length != 0) {
    for (let i = 0; i < marks.length; i++)
    {
      averageMark += marks[i];
    }
    return averageMark / marks.length;
  } else {
    return 0;
  }
}

//Задача 3
function getPersonData(secretData) {
    return {
        firstName: getDecodedValue(secretData.aaa), 
        lastName: getDecodedValue(secretData.bbb)
    }
}

function getDecodedValue(secret) {
    if (secret === 0) {
        return 'Родриго';
    }
    else if (secret === 1) {
        return 'Эмильо'
    }
}
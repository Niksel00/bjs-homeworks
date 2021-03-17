// Задача 1
console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(elem => elem.name);
}

function getCountReliableWeapons(durability) {
    return weapons.filter(elem => elem.durability > durability).length;
}

function hasReliableWeapons(durability) {
    return weapons.some(elem => elem.durability > durability);
}

function getReliableWeaponsNames(durability) {
    return weapons.filter(elem => elem.durability > durability).map(elem => elem.name);
}

function getTotalDamage() {
    return weapons.reduce((acc, elem) => acc + elem.attack, 0);
}

// Задача 2
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays( arr1, arr2 ) {
    return (arr1.length == arr2.length) && arr1.every((elem, index) => arr1[index] == arr2[index]);
}

function memorize(fn, limit) {
    const memory = [];
    return function fun(...arg) {
        const compareFinder = memory.find(elem => compareArrays(elem.args, arg));
        if(!!compareFinder) {
            return memory.find(elem => compareArrays(elem.args, arg)).result;
        } 
        const endOfFunction = fn(...arg);
        memory.push({args: arg, result: endOfFunction});
        if (memory.length > limit) {
            memory.shift();
        }
        return endOfFunction;
        
    };
}
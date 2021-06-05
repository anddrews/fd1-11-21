// one line  comments
/*
* many lines
* comment
*/
// console.log('console.log');

// boolean operartors AND (&&) OR (||)  NOT (!)

var a = false;
var b = true;

console.log('a = false b = true');

console.log('a && b', a && b);
console.log('!a && b', !a && b);
console.log('!a && !b', !a && !b);

console.log('a || b', a || b);
console.log('!a || b', !a || b);
console.log('a || !b', a || !b);

// conditional operators

// if () {

// } else if {

// } else {

// }
var foo = -5;

if (foo < 4 && foo > 0) {
    console.log('foo is less then 4 and positive');
} else if (foo < -3) {
    console.log('foo is less than -3');
} else if (foo < 0) {
    console.log('foo is negative');
} else {
    console.log('foo is bigger then 4');
}
// SWITCH CASE
console.log('switch/case foo === 3');
foo = 3;
switch(foo) {
    case 4: {
        console.log('foo === 4');
        break;
    }
    case 3: {
        console.log('foo === 3');
        break;
    }
    case 2: {
        console.log('foo === 2');
        break;
    }
    case 1: {
        console.log('foo === 1');
        break;
    }
    case 0: {
        console.log('foo === 0');
        break;
    }
    default: {
        console.log('default');
    }
}

var tmp = foo > 3
 ? '>3'
 : '<=3';

 console.log(tmp);

if (foo > 3) {
    tmp = '>3';
} else {
    tmp = '<=3'
}

console.log(tmp);

// LOOPS
// var i = 0;
// for(initialization; condition for ending; after iteration) {
//    ... any js code
// }

var i = 0;
for(; ;i++) {
    if (i === 4) {
        continue;
    }
   console.log(i);

   if (i === 5) {
       break;
   }
}


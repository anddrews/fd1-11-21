// one line  comments
/*
* many lines
* comment
*/
// console.log('console.log');

// boolean operartors AND (&&) OR (||)  NOT (!)
console.log('fnFoo(2, 3) = ', fnFoo(10, 10));
// console.log(notExist);
console.log('variable a ', a);

// fnBoo();
var a = false;
console.log('variable a ', a);

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

for(i = 5; i < 10; i++) {
    if (i === 4) {
        continue;
    }
   console.log(i);

   if (i === 5) {
       break;
   }
}

i = 10;
while (i < 10) {
    console.log('while ', i++);
};

do {
    console.log('do while ', i++);
} while (i < 10 );

var doo = 'doo above function;'
console.log(' foo above function ', foo);
function fnFoo(param1, param2) {
    console.log('doo in function ', doo);
    var boo = param1 * 2;
    var foo = param2 * 2;
    console.log('foo in function ', foo);

    return boo + foo;
}

console.log('fnFoo(2, 3) = ', fnFoo(2, 3));
console.log('"fnFoo(3, 3) = "', fnFoo(3, 3));

(function() {
    console.log('anonimus function');
})();

var fnBoo = function innerName() {
    console.log('function expression');
};

fnBoo();
// 1 3 
function fibonnachi(n) {
    if (n === 2) {
        return 1;
    }
    if (n <= 1) {
        return 0;
    }
    return fibonnachi(n - 1) + fibonnachi(n - 2);

}

for (var i = 1; i < 10; i++) {
    console.log(fibonnachi(i));
}


var obj = {
    green: 'yellow',
    '123kebab-case': 'kebab-case',
    tmp: {
        fn: {
            tmp: function() {
                console.log('Somewhere from deep');
            }
        }
    }
};

obj.tmp.fn.tmp();

var tmp = document.querySelector('p');
tmp.classList.add('warning');

var foo = document.querySelectorAll('p');

foo.forEach(function(item) {
    item.classList.add('warning');
})

// *
// **
// ***
// ****
// *****
// ******

//     *
//    ***
//   *****
//  *******
// *********


console.log('*\n**\n***\n****\n*****');
console.log('    *\n   ***\n  *****\n *******\n*********');
// console.log('**');
// console.log('***');
// console.log('****');
// console.log('*****');
// console.log('******');

tmp.innerHTML = '    *\n   ***\n  *****\n *******\n*********';

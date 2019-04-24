//5-1 Import

import {hello} from './functions.js'
import {showError} from './functions.js'
import mydefault from './functions.js'
hello()
showError('ceci est un message')
//mydefault()

// 5-2 Export
import {sum, sub, multiply, divide, pow} from './math.js'
const [a, b] = [7, 9]
console.log(sum(a, b));
console.log(sub(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));
console.log(pow(a ,b));

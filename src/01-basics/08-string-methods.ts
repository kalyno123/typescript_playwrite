let str: string = 'TechGlobal School';

console.log(str.length); // 17
console.log(str.toLowerCase()); // 'techglobal school'
console.log(str.toUpperCase()); // 'TECHGLOBAL SCHOOL'

// Getting a character 
//charAt() - returns the character at a specified index (position) in a string.
console.log(str.charAt(0)); // 'T'
console.log(str.charAt(5)); // 'l'

//charCodeAt() - returns the unicode(ASCII) of the char at a specified index in string.
console.log(str.charCodeAt(10)); // 32
console.log(str.charCodeAt(0)); // 84

// Property access with [] - THIS WAY IS PERFER/PROPER FOR GETTING A CHAR AT SPECIFIED INDEX
console.log(str[0]); // 'T'
console.log(str[10]); // ' '
console.log(str[25]); // this doesn't throw index out of bound error returns undefined 
console.log(str[-5]); // undefined

console.log('Hello'.indexOf('l')); // 2
console.log('Hello'.lastIndexOf('l')); // 3
console.log('Hello'.indexOf('A')); // -1
console.log('Hello'.lastIndexOf('A')); // -1 

console.log('Good morning'.indexOf('Good')); // 0
console.log('Good morning'.indexOf('GOOD')); // -1

console.log('Playwright'.includes('Play')); // true
console.log('Playwright'.includes('Cypress')); // false
console.log('Playwright'.includes('t')); // true

console.log('TypeScript'.startsWith('T')); // true
console.log('TypeScript'.startsWith('Type')); // true
console.log('TypeScript'.startsWith('TypeScript')); // true -- words starts with itself

console.log('JavaScript'.endsWith('t')); // true
console.log('JavaScript'.endsWith('Script')); // true
console.log('JavaScript'.endsWith('JavaScript')); // true -- words ends with itself

// words starts with & end with empty 
console.log('Well'.startsWith('')); // true
console.log('Well'.endsWith('')); // true
console.log('Well'.includes('')); // true


console.log('    Hello     '.trimStart()); // 'Hello     '
console.log('    Hello     '.trimEnd()); // '    Hello'
console.log('    Hello     '.trim()); // 'Hello'


console.log('TechGlobal'.slice(0, 4)); // 'Tech'
console.log('TechGlobal'.slice(4)); // 'Global'
console.log('TechGlobal'.slice(-3)); // 'bal'
console.log('TechGlobal'.slice(-1)); // 'l'
console.log('TechGlobal'.slice(-6)); // 'Global'

console.log('TypeScript'.slice(-5, -2)); // 'cri'


console.log('I like JavaScript and TypeScript'.split(' ')); // [ 'I', 'like', 'JavaScript', 'and', 'TypeScript' ]
console.log('I like JavaScript and TypeScript'.split(' ').length); // 5 
console.log('I like JavaScript and TypeScript'.split(' ')[0]); // 'I' 
console.log('I like JavaScript and TypeScript'.split(' ').at(-1)); // 'TypeScript' 


console.log('back to back'.replace('back', 'forward')); // 'forward to back'
console.log('back to back'.replaceAll('back', 'forward')); // 'forward to forward'

console.log('Hello'.replace('l', '#')); // 'He#lo'
console.log('Hello'.replaceAll('l', '#')); // 'He##o'


// Function chaining with strings
console.log('I like TypeScript'.split(' ').at(-1)?.slice(0, 4).toUpperCase()); // 'TYPE'
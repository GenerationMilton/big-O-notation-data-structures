const strings =['a','b','c','d'];

//4*4 = 16 bytes of storage

strings[2]

console.log(strings[2]);

//push
strings.push('e'); //O(1)
console.log(strings);

//pop

strings.pop();
strings.pop();//O(1)
 
console.log(strings);

//unshift inicio
strings.unshift('x'); //O(n)
console.log(strings);


//splice - mitad
strings.splice(2,0,'alien');//O(n/2)  -> O(n)
console.log(strings);

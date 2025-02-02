
//#1 -- For loop in Javascript.
console.log('example function good code an scalability')
const nemo = ['nemo'];

function findNemo(array){
    for(let i=0;i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('Found NEMO!');
        }
    }
}

//#2 -- For loop in Javascript. change complexity
console.log('example  2 function good code an scalability')
const nemo2 = ['nemo'];

const everyone=['dory','bruce','marlin','nemo','gill','bloat','nigel','squirt','darla','hank'];

const large = new Array(100000).fill('nemo');

function findNemo2(array){
    let t0= performance.now();
    for(let i=0;i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('Found NEMO!');
        }
    }
    let t1=performance.now();
    console.log('Call to find Nemo took ' + (t1-t0)+ ' millisenconds');

}
findNemo2(large)




findNemo(nemo);
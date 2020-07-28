function myFunction(callback1, callback2){
    callback1('hello world');
    if(callback2) callback2('hii');
}
function printSomething(){
    console.log('whats up');
}
function getData(){
    setTimeout(()=> {
        console.log('todays is a new day');
    },3000);
}
myFunction(getData, printSomething);
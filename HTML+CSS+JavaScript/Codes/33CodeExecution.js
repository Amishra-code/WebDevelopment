let a = 'Hello World';

function first(){
    console.log('Inside first function');
    second();
    console.log('Again inside second function');
}

function second(){
    console.log('Inside second function');
}

first();

//Inside first function
//Inside second function
//Again inside second function

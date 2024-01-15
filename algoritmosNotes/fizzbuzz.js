let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//FizzBuzz javaScript
function fizzbuzz(numbers){
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 3 == 0 && numbers[i] % 5 == 0) 
            console.log('fizz buzz');
        else if (numbers [i] % 3 == 0 )
            console.log('fizz');
        else if (numbers [i] % 5== 0) console.log('buzz');
        else console.log(numbers[i]);
    }
}

fizzbuzz(numbers);
           



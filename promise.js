$.get('http://numbersapi.com/random/trivia?json').then( data => {
    $('.num-fact').append($('<p>').text(data.text));
});


$.get('http://numbersapi.com/1..10').then( data => {
    data = JSON.parse(data);
    
    for(let numText in data){
        $('.num-fact').append($('<p>').text(data[numText]));
    }
});


let randomfacts = [];

for(let i = 0; i<4; i++){
    randomfacts.push($.get('http://numbersapi.com/5?json'));
}

console.log(randomfacts);

Promise.all(randomfacts).then((data) => {
    data.forEach(fact => {
        $('#facts-five').append($('<p>').text(fact.text));
    });
    
});

async function genFacts(){

    let randomFact = await $.get('http://numbersapi.com/random/trivia?json');
    $('.num-fact').append($('<p>').text(randomFact.text));

    let threeFacts = await $.get('http://numbersapi.com/1..10');
    threeFacts = JSON.parse(threeFacts);
    for(let txt in threeFacts){
        $('.num-fact').append($('<p>').text(threeFacts[txt]));
    }


    let randomfacts = [];

    for(let i = 0; i<4; i++){
        randomfacts.push($.get('http://numbersapi.com/5?json'));
    }

    randomfacts = await Promise.all(randomfacts);

    randomfacts.forEach(fact => {
        $('#facts-five').append($('<p>').text(fact.text));
    });


}

genFacts();
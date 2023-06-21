let deckAPI = 'https://deckofcardsapi.com/api/deck';

let deckID;

async function createDeck(){
    let deck = await $.get(deckAPI + '/new/shuffle/?jokers_enabled=true');
    deckID = deck.deck_id;
    $("#get-card").on("click", genCard);
}

async function genCard(e){

    e.preventDefault();
    let draw = await $.get(deckAPI + `/${deckID}/draw`);
    let card = draw.cards[0];
    let angle = Math.random() * 30 * (Math.round(Math.random()) ? 1 : -1);

    $cardIMG = $('<img>').attr('src', card.images.png)
                            .attr('class', 'card')
                            .attr('style', `transform:rotate(${angle}deg);`);
    
    $('.cards').append($cardIMG);

    if(draw.remaining == 0){
        $('.cards').append($('<h3>').text("NO MORE CARDS"));
        $('#get-card').prop('disabled');
    }

}

createDeck();




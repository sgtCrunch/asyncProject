let deckAPI = 'https://deckofcardsapi.com/api/deck';

let deckID;

$.get(deckAPI + '/new/shuffle/?jokers_enabled=true').then( data => {
    deckID = data.deck_id; 
})
.then(()=>{
    $("#get-card").on("click", genCard);
});

function genCard(e){
    e.preventDefault();
    $.get(deckAPI + `/${deckID}/draw`).then( deck => {
        let card = deck.cards[0];
        let angle = Math.random() * 30 * (Math.round(Math.random()) ? 1 : -1);
        $cardIMG = $('<img>').attr('src', card.images.png)
                             .attr('class', 'card')
                             .attr('style', `transform:rotate(${angle}deg);`);
        
        $('.cards').append($cardIMG);

        if(deck.remaining == 0){
            $('.cards').append($('<h3>').text("NO MORE CARDS"));
            $('#get-card').prop('disabled');
        }

    });
}




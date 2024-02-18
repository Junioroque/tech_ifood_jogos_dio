const state = {
    score: {
        playerSore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points")
    },
    cardSprites: {
        avatar: document.getElementById("card_image"),
        name: document.getElementById("card_name"),
        type: document.getElementById("card_type"),
    },
    fieldCards: {
        player: document.getElementById("player_field_card"),
        computer: document.getElementById("computer_field_card"),
    },
    actions: {
        button: document.getElementById("next_duel"),
    },
};



function init() {
    
}

init();
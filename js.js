document.addEventListener('DOMContentLoaded', () => {

    let numAttempts = 0;

    //Array storing all card Options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())
    //Select where the grid will be drawn
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const attemptDisplay = document.querySelector('#attempts');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //Create Board
    function createBoard() {
        for (let i=0; i<cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/pattern.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        }
    }

    //Count number of tries
    function increaseNoAttempts() {
       // numAttempts++;
        document.querySelector('#attempts').innerHTML = numAttempts.toString();

    }


    //Check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
            numAttempts++;

        } else {
            cards[optionOneId].setAttribute('src', 'images/pattern.png')
            cards[optionTwoId].setAttribute('src', 'images/pattern.png')
            increaseNoAttempts();
            alert('Sorry try again');
            numAttempts++;

        }
        cardsChosen = [];
        cardsChosenId = [];
        //Display Result
        resultDisplay.textContent = cardsWon.length;

        //Display Attempts
        attemptDisplay.textContent = numAttempts;
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congrats!!! You found all the cards';
        }
    }

    //Flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }


    createBoard();

})
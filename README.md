# _Casino_

#### _A page offering several games, including "Guess the Number", "Blackjack", "Slot Machine". 4-18-2019_

#### By _**Joe Barnes, Marc Davies, Mike Larragueta, Marina Poltorak**_

## Description

_On launch, user is presented with a landing page from which 3 games can be played:_

* _"Guess the Number"

_The goal of this game is to guess a number that was randomly set by the computer. Every time a number is entered, the game will return whether the random number is higher, lower or a match. The game also indicates how small or large the difference between the two numbers is. 3 difficulty levels are offered, which set a different range for the random number (0-100 for Easy, 0-1000 for Medium, 0-10000 for Hard.)_

* _"Blackjack"
Standard game of black jack. Objective is to get as close to 21 as possible with out going over. ability to hit, stay, double down and bet._

* _"Slot Machine"
pull the lever and match up the symbols. If you land all three, win a prize_

## Setup/Installation Requirements

* _Clone the repository from GitHub_
* _Launch index.html_
* _Alternatively, launch toofpaste.github.io/CasinoMaster_
* _The site can also be accessed at ..._

## Specs For Blackjack
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| Have use place bet amount | 100 | bank: - 100 |
| Two cards are dealt user selects "hit" | click "hit" | deal 1 more card and add up total |
| user selects "stay" | click "stay" | add up total, deal correct amount of cards for dealer |
| user selects "Double Down" | click "Double Down" | Double bet and deals user 1 card then deals correct amount of cards for dealer |
| Program checks for win | user: 10 dealer: 21 | Dealer wins |
| When user hits it checks for Aces and makes them 1 if user busts | Ace + 9 + 10 | change value to 20 from 30 |
| if user goes bankrupt | bank = 0; | give option to reset bank to 1000 |
| If user switches to slot machine | save bank value in cookies | transfer to slot machine |

## Specs For Slot machine
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| User places bet | Bet = $100 | bank - 100 |
| User Clicks spin | Slot machine rolls | image - image - image |
| program checks for win | image 1= image 2 = image 3 | payout 25 * bet amount = 2500 |
| program checks for cherries | cherry - cherry - cherry | payout 250 * bet amount = 25000 |
| User goes bankrupt | bank = 0 | give option to reset bank to 1000 |
| if user switches back to other game | save bank balance in cookies | transfer to correct page |

## Specs For Hot and Cold Game

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| Site offers the game at user selected level | Click on Easy, Medium or Hard | Game launches site at user selected difficulty level. |
| Game compares user inputted number (guessedNumber) to secretNumber | 50 | Game shows a percentage comparison of guessedNumber to secretNumber, states if < or >. |
| If guessedNumber is === to secretNumber, game shows "success" screen. | 75 | Game shows the success screen. |
| Game refreshes site and offers the game again, asking user to select level. | new game click | Site offers the game at user selected level. |


## Known Bugs

_For blackjack the double down button fades out slowly. you can hit it if youre quick. Also Blackjack pays out way to much money but thats kind of fun_

## Support and contact details

_Please contact us if you run into any issues or have questions, ideas or feedback._

## Technologies Used

_HTML, CSS, Javascript, Express, Node.js, Passport.js, MongoDB, Mongoose, EJS._

### License

*This software is licensed under the GPL license.*

Copyright (c) 2019 **Joe Barnes, Marc Davies, Mike Larragueta, Marina Poltorak**

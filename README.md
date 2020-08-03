# Tic Tac Toe

> A Front-End Project by [Bret Merritt](https://github.com/bretm9)
---
## Contents
1. [Overview and Goals](#overview)
1. [Technologies](#technologies)
1. [Features](#features)
1. [Challenges](#challenges)
1. [Successes](#successes)
---

## Overview
I am a Front-End student at Turing School of Software and Design. This project was my final assignment for Module 1, and a culmination of my learning up until that point. My focus during this project was to solidify my understanding of HTML, CSS and Javascript, and better integrate the various tools and strategies I've picked up throughout Module 1.

This website allows users to play games of Tic Tac Toe, and keep track of their wins. The page displays a gameboard and takes user input to update the data-model, which stores all aspects of the game-state. localStorage is utilitized in order to keep data persistant upon reloading the page.

### Goals

My goals, listed below, are taken directly from the Turing project rubric:

- Solidify and demonstrate your understanding of:
  - DRY JavaScript
  - localStorage to persist data
  - event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Iterate through/filter DOM elements using for loops
- Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

---

 ## Technologies

  - HTML
  - CSS
  - JavaScript
  - JSON-based local storage
  - Git


 > [Back to the top](#tic-tac-toe)
---

## Features
+ [Layout](#layout)
+ [Gameplay](#gameplay)
+ [Wins and Draws](#wins-and-draws)
+ [New Game](#new-game)
+ [Saved Wins](#saved-wins)
+ [Reloading The Page](#reloading-the-page)

> [Back to the top](#tic-tac-toe)
---

## Layout

+ The page is organized with the game-board in the center of the page with is a game status title above the game-board. This status title indicates who's turn it is, or if a player won the game. It also indicates if there is a draw. Player X's status (wins) is displayed on the left, and player O's status (wins) is displayed on the right.

> [Back to Features](#features)

## Gameplay

+ The user interaction is as one would expect from an online Tic Tac Toe game. The user clicks a space on the game-board to put down their token, and the turn switches to the next player. This repeats until one player's has three of their tokens in a row.

[starting layout image]

> [Back to Features](#features)

## Wins and Draws

+ Once a user gets three tokens in a row, the game is over! A win state is displayed at the top of the page which indicates which player won. The game is momentarily paused and unclickable so the players can take a few seconds to look at the board and understand who won.

[win image]

Contrastly, if the board is filled with tokens before either player gets three in a row, neither player wins. The game ends and a "Draw" message is displayed at the top of the page. Like what happens when there is a win, the game also pauses and is unclickable for a short moment when a draw occurs.

[draw image]

> [Back to Features](#features)

## New Game

+ Once a game ends from either a win or a draw, the board is reset after afformentioned brief pause and a new game begins. Whichever player won the last game goes first.

[new game with win for one player]

> [Back to Features](#features)

## Saved Wins

+ Once a game is won, the win count for winning player is updated on the page. This information is viewable in the player status columns on the right and left of the page.

[player wins]

> [Back to Features](#features)

## Reloading The Page

+ If the page is reloaded at any point during or after a game, all data persists from the state it was in before the refresh. Upon every action taken in the game, the game state is saved into localStorage. This is what allows it to be presented again once the page is reloaded.

> [Back to Features](#features)

---
 ## Challenges  
 
 + Working through the logic to check for a win really racked my brain. I am content with my solution, but I still feel like there might be ways to shrink the function down to be more consise. Currently it is rather large, but all functionality relates to checking for a win, so it still satisfies the SRP and therefore satisfies me! 
 + It still feels like there are a few instances of repeating code. I believe I succeeded in writing mostly DRY code, but there are still areas of improvement. Also, I realized towards the end that there are only a handful of functions that take in parameters. I think if I had approached building my function with parameters in mind, it might have led to DRYer code overall.
 
> [Back to the top](#tic-tac-toe)

---
 ## Successes
 
  + Something that really clicked for me was the Single Responsibility Principle. I realized that approaching the project as suggested and working exclusively on the data model first, I was able to link up the DOM with much more ease because the logic was already built. Additionally, when a bug would occur I could tell where I needed to look thanks to how separate all the roles of functionality were.
+ I also got more hands-on with the debugging tools in Chrome, which I really enjoyed. 
+ Another really satisfying moment was realizing a tic-tac-toe board is just a grid with a grid gap and no padding.
  
> [Back to the top](#tic-tac-toe)
 ---

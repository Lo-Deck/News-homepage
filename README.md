# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![screenshot desktop](https://github.com/Lo-Deck/News-homepage/blob/main/screenshot/News%20homepage-desktop.png).
![screenshot mobile](https://github.com/Lo-Deck/News-homepage/blob/main/screenshot/News%20homepage-mobile.png).
![screenshot mobile-menu](https://github.com/Lo-Deck/News-homepage/blob/main/screenshot/News%20homepage-menu.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/News-homepage).
- Live Site URL: [Website](https://lo-deck.github.io/News-homepage/).

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS


### What I learned


I used a `listener` and `click` to display the menu and an overlay to display a contrast on the page.


```js
open.addEventListener('click', function(){

    if(menu.style.visibility = 'hidden')
    {
        menu.style.visibility = 'visible';
        backgroundMenu.classList.toggle('overlay');

    }

});
```


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
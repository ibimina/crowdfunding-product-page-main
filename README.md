# Frontend Mentor - Crowdfunding product page solution

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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




## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Screenshot

![mobile](Capture81.png)
![desktop](Capture82.png)

### Links

- Solution URL: [https://github.com/ibimina/crowdfunding-product-page-main](https://github.com/ibimina/crowfunding-product-page-main)
- Live Site URL: [https://ibimina.github.io/crowdfunding-product-page-main/](https://ibimina.github.io/crowfunding-product-page-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned


This function displays the pledge page and activate the active state of the pledge box

```js
const selectRewardBtn = document.querySelectorAll(".select");
selectRewardBtn.forEach((element) => {
  // console.log(reward)
  element.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("p");
    let getRadioButton, radioIndex;
    if (element) {
      radioIndex = element.id;
      project();
      getRadioButton = radioBtn[radioIndex];

      getRadioButton.checked = true;
      getRadioButton.scrollIntoView();
      getRadioButton.parentElement.parentElement.parentElement.classList.add("box-bordercolor");
      getRadioButton.parentElement.parentElement.nextElementSibling.classList.add("block");
    } else {
      getRadioButton.parentElement.parentElement.parentElement.classList.remove("box-bordercolor");
      getRadioButton.parentElement.parentElement.nextElementSibling.classList.remove(
        "block"
      );
    }
  });
});
```


**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development
DOM Manipulation


### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author


- Frontend Mentor - [@ibimina](https://www.frontendmentor.io/profile/ibimina)
- Twitter - [@ibiminaaH](https://www.twitter.com/ibiminaaH)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

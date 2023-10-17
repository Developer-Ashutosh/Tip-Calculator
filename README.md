# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/solutions/tip-calculator-app-GTWV_q-ru8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Tip Calculator App](https://www.frontendmentor.io/solutions/tip-calculator-app-GTWV_q-ru8)
- Live Site URL: [Tip Calculator App](https://developer-ashutosh.github.io/Tip-Calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


## What I learned

```js
const bill = document.querySelector("#bill");
const customTip = document.querySelector("#custom-tip");
const people = document.querySelector("#people");
const sections = document.querySelectorAll(".sections"); // Container for different input sections
const tipValue = document.querySelectorAll(".tip-value"); // Container for tip values
const totalTip = document.querySelector("#tip-value");
const totalAmount = document.querySelector("#total-value");
const resetBtn = document.querySelector("#reset-btn");

const validateInput = () => {
    sections.forEach(section => {
        const input = section.querySelector("input");
        const error = section.querySelector(".error");

        input.addEventListener("input", () => {
            const inputValue = parseFloat(input.value);
            if (isNaN(inputValue) || inputValue < 0) {
                error.innerText = "Invalid";
            } else if (inputValue === 0) {
                error.innerText = "Can't be zero";
            } else {
                error.innerText = "";
                updateValue();
            }
        });
    });

    resetBtn.addEventListener("click", () => {
        sections.forEach(section => {
            const input = section.querySelector("input");
            const error = section.querySelector(".error");
            input.value = "";
            error.innerText = "";
        });
        updateValue();
    });
};

const tip = () => {
    tipValue.forEach(tip => {
        tip.addEventListener("click", () => {
            const value = tip.querySelector(".value").innerText;
            customTip.value = parseFloat(value) + "%";
            updateValue();
        });
    });
};

const updateValue = () => {
    const billValue = parseFloat(bill.value);
    const customTipValue = parseFloat(customTip.value);
    const peopleValue = parseFloat(people.value);

    if (!isNaN(billValue) && !isNaN(customTipValue) && !isNaN(peopleValue) && peopleValue > 0) {
        totalTip.innerText = ((billValue * customTipValue) / 100) / peopleValue;
        totalAmount.innerText = (billValue + ((billValue * customTipValue) / 100)) / peopleValue;
        resetBtn.classList.add("active");
    } else {
        totalTip.innerText = "0.00";
        totalAmount.innerText = "0.00";
        resetBtn.classList.remove("active");
    }
};

// Initialize the event listeners
validateInput();
tip();

```

## Author

- GitHub - [Ashutosh Kumar](https://www.github.com/Developer-Ashutosh/)
- Frontend Mentor - [@Ashutosh Kuamr](https://www.frontendmentor.io/profile/yourusername)

"use strict";

function Listen(selector, event, callback) {
    return selector.addEventListener(event, callback);
}

function Select(selector) {
    return document.querySelector(selector);
}

function SelectAll(selector) {
    return document.querySelectorAll(selector);
}

// Header fixed
const header = Select('header');

Listen(window, 'scroll', () => {
    let position = window.scrollY;
    if (position > 70) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
});
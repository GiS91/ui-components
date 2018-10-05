"use strict";

const $j = jQuery.noConflict();

$j(document).ready(function(e) {
// Get <ul> with list of tab links


const tabsList = $j('.tabs__list');

// Add click listener to whole link list

tabsList.on('click', ".tabs__item a",  function(event) {
	event.preventDefault();
	/* Act on the event */

const eventTarget = $j(event.target);

        // Get clicked tab list item
        const tabsItem = eventTarget.parent();
        // Get corresponding panel's ID via hash
        const targetId = eventTarget.attr('href').split('#')[1];
        // Get correct panel by ID
        const targetPanel = $j('#'+targetId);

        /**
         * Tabs menu
         */

        // Activate correct tabs menu item & remove active class from all items
        $j('.tabs__item.is-active').removeClass('is-active');
   
        // Add active class to clicked item
        tabsItem.addClass('is-active');
        

        /**
         * Panels
         */

        // Activate correct tabs panels & remove active class from all panels
        $j('.tabs__panel.is-active').removeClass('is-active');

        // Add active class to correct panel
        targetPanel.addClass('is-active');
   
});


});

// DA COMPLETARE
/*
* Accordion
 */

const accordion = $j('.accordion');

accordion.on('click', '.accordion__header a, .accordion__header a img', function(event) {
	event.preventDefault();
	/* Act on the event */

	const eventTarget = $j(event.target);
const targetHeader = eventTarget.get(0).tagName.toLowerCase() == "a" ? eventTarget.parent() : eventTarget.parent().parent();

        const targetPanel = targetHeader.next();

        // Panels
        const allPanels = $j('.accordion__panel');
        targetPanel.toggle('is-active');

        // Headers
        const allHeaders = $j('.accordion__header');
        targetHeader.toggle('is-active');

});

        
/*
 * Loaders
 */

const button = document.querySelector('button');

button.addEventListener('click', event => {
    document.querySelector('html').classList
        .add('is-loading', 'prevent-scroll');
});

function activateLoader() {
    document.querySelector('html').classList
        .add('is-loading', 'prevent-scroll');
}

function deactivateLoader() {
    document.querySelector('html').classList
        .remove('is-loading', 'prevent-scroll');
}

//activateLoader();

setTimeout(() => {
    deactivateLoader();
}, 1000);

/*
 * Modal
 */

const modal = document.querySelector('.modal');
const html = document.querySelector('html');

// Open Modal
function openModal() {
    const modalBox = modal.querySelector('.modal__box');
    modalBox.classList.remove('is-leaving');
    modal.classList.add('is-active');
    html.classList
        .add('prevent-scroll');
}

// Close Modal
function closeModal() {
    const modalBox = modal.querySelector('.modal__box');
    modalBox.classList.add('is-leaving');
    setTimeout(() => {
        modal.classList.remove('is-active');
        html.classList
            .remove('prevent-scroll');
    }, 350)
}

// Escape keypress
document.addEventListener('keydown', event => {
    if(event.key === 'Escape') {
        closeModal();
        deactivateLoader();
    }
});

modal.addEventListener('click', closeModal);
modal.querySelector('.modal__box').addEventListener('click', event => {
    event.stopPropagation();
});
    



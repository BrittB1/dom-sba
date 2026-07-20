# Britt's Favorite Foods 🍜 

A single-page web application where you can browse a gallery of my favorite
foods, click any dish to read more about it, and add your own favorite foods
using a validated form. Built with vanilla HTML, CSS, and JavaScript for the
SBA 316: The Document Object Model assessment.

## Features

- **Food gallery** — favorite foods are stored as data in JavaScript and
  rendered dynamically as clickable cards.
- **Click for details** — clicking a card shows that food's picture and
  description in a detail section, and highlights the selected card.
- **Add your own** — a form lets you add a new food (name, image URL, and
  description) to the gallery, with both built-in and custom validation.

## How to use

1. Open `index.html` in your web browser.
2. Click any food card to see its full description in the detail area.
3. Scroll to the "Add Your Own Favorite Food" form, fill in a name, image
   URL, and description, then click **Add Food** to see it appear in the
   gallery.

## Built with

- **HTML5** — semantic structure (`header`, `main`, `section`, `figure`)
- **CSS3** — flexbox gallery layout and simple responsive styling
- **JavaScript (DOM)** — no libraries or frameworks

## DOM & BOM techniques used

- Caching elements with `getElementById` and `querySelector` /
  `querySelectorAll`
- Creating and inserting elements with `createElement` and `appendChild`
- Iterating over collections with `forEach`
- Updating content with `innerHTML` and `textContent`
- Modifying classes and attributes with `classList` and `setAttribute`
- Handling `click` and `submit` events with event listeners
- Form validation using HTML attributes (`required`, `minlength`, `type="url"`)
  plus custom JavaScript validation

## Project structure

favorite-foods/
├── index.html        # page structure
├── pretty-stuff.css  # styling
├── fun-stuff.js      # DOM logic and data
└── images/           # food images
---

## Reflection

**What could you have done differently during the planning stages of your
project to make the execution easier?**

I definetly would have sketched out my ideas/layout first to make planning technical details easier.

<br>

**Were there any requirements that were difficult to implement? What do you
think would make them easier to implement in future projects?**

The form was a bit hard to impliment and took some review/research to understand.

<br>

**What would you add to, or change about your application if given more time?**

Given more time, I would probably impliment more foods, a feature that gets a food suggestion at random, and food categories.

<br>

**Use this space to make notes for your future self about anything that you
think is important to remember about this process, or that may aid you when
attempting something similar again:**

- Draw your ideas next time
- figure out color palettes, fonts, etc
- pick apart complex stuff instead of angrily walking away from computer

<br>

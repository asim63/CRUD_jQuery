# Grocery Bud – CRUD Application (jQuery)

## Overview

This project is a **Grocery List CRUD application** developed using **HTML, CSS, JavaScript, and jQuery**.  
It allows users to manage grocery items by performing **Create, Read, Update, and Delete (CRUD)** operations with data persistence using **Local Storage**.

The project focuses on understanding **DOM manipulation using jQuery**, modular JavaScript structure, and client-side data management.

---

## Features

- Add new grocery items
- Edit existing grocery items
- Delete individual items
- Mark items as completed
- Clear all items
- Persistent storage using browser Local Storage
- Modular JavaScript file structure
- Clean and responsive user interface

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- jQuery
- Local Storage API
- Google Fonts (Poppins)
- Font Awesome

---

## Project Structure

```
CRUD_JQUERY/
│
├── css/
│ ├── global.css
│ ├── form.css
│ ├── items.css
│ └── single_item.css
│
├── images/
│
├── js/
│ ├── app.js
│ ├── data.js
│ ├── form.js
│ ├── items.js
│ └── single_item.js
│
├── index.html
├── LICENSE
└── README.md
```

### index.html

- Main HTML file
- Loads CSS files, jQuery library, and JavaScript modules
- Contains the root container where the application is rendered

### css/

- **global.css** – Global styles and resets
- **form.css** – Styles related to the input form
- **items.css** – Styles for the grocery list container
- **single_item.css** – Styles for individual grocery items

### js/app.js

- Main application entry point
- Handles rendering logic
- Initializes the application on document ready
- Connects form and item components

### js/data.js

- Manages grocery data
- Handles Local Storage operations
- Stores and retrieves grocery items

### js/form.js

- Creates and manages the grocery input form
- Handles add and edit functionality

### js/items.js

- Manages the grocery list container
- Iterates over items and renders them

### js/single_item.js

- Handles individual grocery item UI
- Manages edit, delete, and completion logic

---

## How the Application Works

1. When the page loads, stored grocery items are retrieved from Local Storage.
2. The `render()` function dynamically creates the form and grocery list using jQuery.
3. Users can add new items using the input form.
4. Items can be edited or deleted individually.
5. Changes are immediately saved to Local Storage.
6. The UI updates automatically after every action.

---

## Learning Outcomes

- Understanding CRUD operations in client-side applications
- Practical use of jQuery for DOM manipulation
- Modular JavaScript architecture
- Local Storage integration
- Event handling and UI state management
- CSS structuring for scalable projects

---

## How to Run the Project

1. Clone the repository:
   git clone https://github.com/asim63/CRUD_jQuery.git

2. Open `index.html` in a browser

   or

3. Use a local development server (recommended)

---

## License

This project is licensed under the MIT License.  
See the `LICENSE` file for details.

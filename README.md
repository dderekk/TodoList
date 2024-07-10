
My Todo List
============

This project is a mobile application developed using React Native and Expo, designed to manage daily tasks efficiently. It features a user-friendly interface that allows users to add, delete, and mark tasks as complete.

Table of Contents
-----------------

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Contributing](#contributing)

Introduction
------------

My Todo List is a practical application aimed at enhancing productivity by allowing users to manage their daily tasks. Built with React Native, it leverages local storage to save task data across sessions, ensuring data persistence.

Features
--------

- Add, delete, and toggle the completion status of tasks
- Form validation to prevent the submission of empty tasks
- Expanding and collapsing task views for a cleaner user interface
- Use of FlatList for efficient rendering and scrolling of a large list of tasks
- Responsive design for both Android and iOS

Installation
------------

Ensure you have Expo CLI installed:
```bash
npm install -g expo-cli
```

Clone the repository and install dependencies:
```bash
git clone https://github.com/your-username/my-todo-list.git
cd my-todo-list
npm install
```

Usage
-----

To start the application, run:
```bash
expo start
```

This will open Expo Developer Tools in the browser. You can then run the app on an iOS simulator, Android emulator, or your mobile device.

Code Structure
--------------

- `components/`: Reusable UI components like Task, ButtonPrototype.
- `screens/`: Contains the Home screen and NewToDo screen for task management.
- `datamodel/`: Manages the data storage using AsyncStorage for local persistence.

### Client Side

#### Home.js

Responsible for:
- Displaying the list of tasks.
- Handling state management for task operations.

#### NewToDo.js

Responsible for:
- Adding new tasks.
- Validating form inputs to ensure that the fields are not empty.

Contributing
------------

Contributions are welcome! Feel free to fork the repository, make changes, and submit pull requests.

This project is open source and contributions are what make the open-source community such an amazing place to learn, inspire, and create.

# ml5-edtech-handgame

## Overview
This project is an interactive hand gesture game designed for educational purposes, utilizing the ml5.js library for hand pose detection and p5.js for rendering graphics. The game engages users by allowing them to interact with educational content through hand movements captured via their webcam.

## Project Structure
```
ml5-edtech-handgame
├── src
│   ├── index.html          # Main HTML file for the application
│   ├── sketch.js           # Main p5.js code for game logic and rendering
│   ├── handpose.js         # Hand pose detection implementation
│   └── assets
│       └── questions.json  # JSON file containing educational questions
├── package.json            # npm configuration file with dependencies
└── README.md               # Project documentation
```

## Installation
To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ml5-edtech-handgame
   ```

2. Install the necessary dependencies:
   ```
   npm install
   ```

## Running the Game
To run the game, open the `src/index.html` file in a web browser. Ensure that your webcam is accessible and allowed for use by the browser.

## Usage
- The game will prompt you with educational questions.
- Use your hand gestures to interact with the game, such as selecting answers or navigating through questions.
- The hand pose detection will track your movements and respond accordingly.

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, feel free to submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
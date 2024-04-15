# Raffle APP
1. Fork the repo 
2. Install the neccesary packages    `npm install react-router-dom dotenv axios bootstrap react`
3. Create an .env folder with the following    `REACT_APP_API_URL=http://localhost:3003`
4. Make sure to add .env to .gitignore

## Routes
Home `/`  
Will create a new Raffle and displays all raffles currently in the backend  
Clicking on the name of the raffle will take you to raffle page

Single Raffle `/raffles/:id`  
Displays a nav bar that shows All Raffles, Participants of the Raffle, Pick Winner pages, and add a Participant to the raffle

Raffle Participants `/raffles/:id/participants`
Displays all the participants of the raffle and the total

Pick Winner `/raffles/:id/winner`
Shows the winner of the raffle. If there is no winner it will display a form where you will need to enter the secret token to randomly pick a winner
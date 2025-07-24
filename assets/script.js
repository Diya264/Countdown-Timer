// event listener on the start button that triggers when it is clicked
document.getElementById('startBtn').addEventListener('click', function() {
    const endDate = new Date(document.getElementById('date').value); // retrieving the selected date and time from the input field and create a Date object
    const countdownElement = document.getElementById('countdown'); // getting references to the countdown display and message elements
    const messageElement = document.getElementById('message');

    // checking if the selected date is valid 
    if (isNaN(endDate)) {
        messageElement.textContent = 'Please select a valid date and time!'; // displaying an error message if invalid
        messageElement.style.display = 'block'; // making the message visible
        return;
    }

    // hiding any previous messages if the date is valid
    messageElement.style.display = 'none';

    // setting up an interval to update the countdown every second
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const timeRemaining = endDate.getTime() - now; // calculating the remaining time by subtracting the current time from the end time

        // if the remaining time is zero or less, stop the countdown
        if (timeRemaining <= 0) {
            clearInterval(interval); // clearing the interval to stop the updates
            countdownElement.style.display = 'none'; // hiding the countdown display
            messageElement.textContent = 'The countdown has ended!'; // displaying the end message
            messageElement.style.display = 'block'; // making the message visible
            return;
        }

        // to calculate the remaining days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        // updating the countdown display with the calculated values
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }, 1000);
});

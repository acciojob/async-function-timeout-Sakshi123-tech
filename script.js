
function delayMessage(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)); // Resolves after ms milliseconds
}

// Main function to handle button click
async function displayMessage() {
  const textInput = document.getElementById('text').value; // Get the message
  const delayInput = document.getElementById('delay').value; // Get the delay (in milliseconds)
  const outputDiv = document.getElementById('output'); // Output div where message will appear

  // Clear previous output
  outputDiv.textContent = '';

  // Ensure inputs are valid
  if (!textInput || !delayInput || delayInput < 0) {
    outputDiv.textContent = 'Please provide valid text and delay.';
    return;
  }

  await delayMessage(Number(delayInput)); // Wait for the specified delay
  outputDiv.textContent = textInput; // Display the message after the delay
}

// Attach event listener to the button
document.getElementById('btn').addEventListener('click', displayMessage);


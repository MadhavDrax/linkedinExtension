// Create the floating button
const connectAllButton = document.createElement('button');
connectAllButton.innerText = 'Connect with All';
connectAllButton.style.position = 'fixed';
connectAllButton.style.bottom = '20px';
connectAllButton.style.right = '20px';
connectAllButton.style.padding = '10px 20px';
connectAllButton.style.backgroundColor = 'rgb(0, 115, 177)';
connectAllButton.style.color = 'white';
connectAllButton.style.border = 'none';
connectAllButton.style.borderRadius = '5px';
connectAllButton.style.cursor = 'pointer';
connectAllButton.style.zIndex = '1000';

// Append the button to the body
document.body.appendChild(connectAllButton);

// Function to click all valid "Connect" buttons
function clickAllConnectButtons() {
    // Get all buttons that say "Connect" and avoid other buttons like "Join" or "Subscribe"
    const connectButtons = Array.from(document.querySelectorAll('button'))
        .filter(button => button.innerText.trim() === 'Connect' && button.classList.contains('artdeco-button--secondary'));

    if (connectButtons.length === 0) {
        alert('No connectable profiles found.');
        return;
    }

    // Click each "Connect" button with a delay
    connectButtons.forEach((button, index) => {
        setTimeout(() => {
            button.click();
        }, index * 2000); // Add 2-second delay between each request
    });
}

// Function to scroll and load more profiles
function scrollAndConnect() {
    clickAllConnectButtons(); // Click the visible "Connect" buttons
    setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom of the page
        setTimeout(clickAllConnectButtons, 3000); // Wait for new profiles to load and click again
    }, 5000); // Wait 5 seconds before scrolling to load more profiles
}

// Add event listener to the "Connect with All" button
connectAllButton.addEventListener('click', scrollAndConnect);
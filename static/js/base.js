function updateTime() {
    const timeElement = document.getElementById('current_time');
    const now = new Date();  // Get current time from client-side
    const formattedTime = 
        String(now.getHours()).padStart(2, '0') + ':' + 
        String(now.getMinutes()).padStart(2, '0')
    timeElement.innerText = formattedTime;
}

// Update time every second
setInterval(updateTime, 1000);

// Update time initially on page load
window.onload = updateTime;

function openGame(url) {
    const iframe = document.getElementById('game-frame');
    
    // Change the src of the iframe to the game URL
    iframe.src = url;
  
    // Make the iframe visible
    iframe.style.display = 'block'; // This makes the iframe visible
  }
  

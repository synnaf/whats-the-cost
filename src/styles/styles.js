const handleFirstTab = (e) => {
    if (e.keyCode === 9) { 
        document.body.classList.add('user--tabb');
        window.removeEventListener('keydown', handleFirstTab);
    }
}; 

window.addEventListener('keydown', handleFirstTab);

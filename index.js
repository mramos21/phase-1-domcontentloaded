// Your code goes here

document.addEventListener('DOMContentLoaded', function() {
    console.log('The DOM has loaded');
    const p = document.querySelector('p');
    p.textContent = 'This is really cool!'
    
});

console.log(
    'This console.log() fires when the index.js loads - before DOMContentloaded is triggered'
);
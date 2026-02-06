// Get URL parameters
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Play background music
document.addEventListener('DOMContentLoaded', function() {
    var bgMusic = document.getElementById('bg-music');
    if (bgMusic) {
        bgMusic.play().catch(function(error) {
            console.log('Autoplay prevented:', error);
        });
    }

    // For bouquet page, set name and animate flowers
    if (document.getElementById('greeting')) {
        var name = getParameterByName('name');
        document.getElementById('greeting').textContent = 'Happy Rose Day, ' + name + '!';

        // Animate flowers blooming
        var flowers = document.querySelectorAll('.flower');
        flowers.forEach(function(flower, index) {
            flower.style.setProperty('--delay', index);
        });
    }
});

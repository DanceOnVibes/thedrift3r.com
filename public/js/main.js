// The Drift3r — small helpers.
//
// 1) Click-to-load players.
//    YouTube and SoundCloud players are NOT loaded when the page opens.
//    They load only when someone presses play. That means the site sets
//    no cookies by itself, and the page opens faster.
document.querySelectorAll('[data-embed]').forEach(function (box) {
  var button = box.querySelector('.play');
  if (!button) return;
  button.addEventListener('click', function () {
    var frame = document.createElement('iframe');
    frame.src = box.getAttribute('data-src');
    frame.title = box.getAttribute('data-title') || 'Player';
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.loading = 'eager';
    box.innerHTML = '';
    box.appendChild(frame);
    box.classList.add('is-loaded');
  });
});

// 2) Keep the year in the footer current.
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

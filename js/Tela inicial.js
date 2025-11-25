// Menu suspenso
const btnTest = document.getElementById('dropdownBtnTest');
const contentTest = document.getElementById('dropdownContentTest');
btnTest.addEventListener('click', function (e) {
    e.stopPropagation();
    contentTest.style.display = contentTest.style.display === 'block' ? 'none' : 'block';
});
document.addEventListener('click', function () {
    contentTest.style.display = 'none';
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') contentTest.style.display = 'none';
});

// Loop de cartas — duplica as imagens pra rolar infinito
window.addEventListener('load', () => {
    const track = document.getElementById('cardTrack');
    const imgs = Array.from(track.children);
    imgs.forEach(img => {
        const clone = img.cloneNode(true);
        track.appendChild(clone);
    });
});
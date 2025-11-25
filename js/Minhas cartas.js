const btnTest = document.getElementById('dropdownBtnTest');
const contentTest = document.getElementById('dropdownContentTest');
btnTest.addEventListener('click', function (e) { e.stopPropagation(); contentTest.style.display = contentTest.style.display === 'block' ? 'none' : 'block'; });
document.addEventListener('click', function () { contentTest.style.display = 'none'; });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') contentTest.style.display = 'none'; });


// --- Settings modal logic for pagina2.html ---
const configBtn = document.getElementById('configBtn');
const settingsModal = document.getElementById('settingsModal');
const p_bgColor = document.getElementById('p_bgColor');
const p_textColor = document.getElementById('p_textColor');
const p_headerColor = document.getElementById('p_headerColor');
const p_footerColor = document.getElementById('p_footerColor');
const p_closeSettings = document.getElementById('p_closeSettings');

configBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    settingsModal.style.display = 'flex';
});
p_closeSettings.addEventListener('click', function () { settingsModal.style.display = 'none'; });
settingsModal.addEventListener('click', function (e) { if (e.target === settingsModal) settingsModal.style.display = 'none'; });

// realtime update handlers
p_bgColor.addEventListener('input', function (e) { document.body.style.background = e.target.value; document.body.style.backgroundImage = ''; });
p_textColor.addEventListener('input', function (e) { document.body.style.color = e.target.value; });
p_headerColor.addEventListener('input', function (e) { document.querySelector('.header').style.background = e.target.value; });
p_footerColor.addEventListener('input', function (e) { document.querySelector('.footer').style.background = e.target.value; });


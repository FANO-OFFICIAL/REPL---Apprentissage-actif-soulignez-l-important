var section = document.querySelector('section');
var textareaHTML = document.querySelector('.playable-html');
var reset = document.getElementById('reset');
var showResult = document.getElementById('show-result');

var codeResult = '<h1>Avis important</h1> \n<p>Le <strong>dimanche 9 janvier 2010</strong>, une bande de <em>barbares</em> a été repérée en train de voler <strong><em>plusieurs</em> nains de jardin</strong> dans un centre commercial du centre-ville de <strong>Milwaukee</strong>. Ils portaient tous des <em>combinaisons vertes</em> et des <em>chapeaux ridicules</em> et semblaient s\'amuser comme des fous. Si quelqu\'un a une <strong>quelconque</strong> information sur cet incident, veuillez contacter la police <strong>immédiatement</strong>.</p>';
var htmlCodeInit = '<h1>Avis important</h1>\n<p>Le dimanche 9 janvier 2010, une bande de barbares a été repérée en train de voler plusieurs nains de jardin dans un centre commercial du centre-ville de Milwaukee. Ils portaient tous des combinaisons vertes et des chapeaux ridicules et semblaient s\'amuser comme des fous. Si quelqu\'un a une quelconque information sur cet incident, veuillez contacter la police immédiatement.</p>';
textareaHTML.value = htmlCodeInit;

function fillCode() {
    section.innerHTML = textareaHTML.value;
}

reset.addEventListener('click', function () {
    textareaHTML.value = htmlCodeInit;
    fillCode();
});
showResult.addEventListener('click', function () {
    textareaHTML.value = codeResult;
    fillCode();
});

textareaHTML.addEventListener('input', fillCode);
window.addEventListener('load', fillCode);
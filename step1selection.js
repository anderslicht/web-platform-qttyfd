window.addEventListener('keydown', (event) => {
  //tilføjer en eventlistener der registrerer tastatur tryk når vinduet er i fokus og sender data videre i event
  var selected = document.querySelectorAll('.klienttypeSelected'); //variabel der indeholder alle elementer med klienttypeSelected class
  if (event.key == 1) {
    //Hvis knappen man trykker på er 1
    let et = document.getElementById('1'); //variabel der skaffer elementet med id 1
    console.log(et); //console log at man har trykket på 1 og at dette stykke kode er aktiveret
    selected.forEach((klienttypeSelected) => {
      //tager variablen selected og eksekverer næste linje det antal gange som der findes elementer
      klienttypeSelected.classList.remove('klienttypeSelected'); //fjerner klienttypeSelected class fra elementerne
    });
    et.classList.add('klienttypeSelected'); //tilføjer class klienttypeSelected tilsvarende den tast du har trykket på tastaturet
  } else if (event.key == 2) {
    let to = document.getElementById('2');
    console.log(to);
    selected.forEach((klienttypeSelected) => {
      klienttypeSelected.classList.remove('klienttypeSelected');
    });
    to.classList.add('klienttypeSelected');
  } else if (event.key == 3) {
    let tre = document.getElementById('3');
    console.log(tre);
    selected.forEach((klienttypeSelected) => {
      klienttypeSelected.classList.remove('klienttypeSelected');
    });
    tre.classList.add('klienttypeSelected');
  } else if (event.key == 4) {
    let fire = document.getElementById('4');
    console.log(fire);
    selected.forEach((klienttypeSelected) => {
      klienttypeSelected.classList.remove('klienttypeSelected');
    });
    fire.classList.add('klienttypeSelected');
  } else if (event.key == 5) {
    let fem = document.getElementById('5');
    console.log(5);
    selected.forEach((klienttypeSelected) => {
      klienttypeSelected.classList.remove('klienttypeSelected');
    });
    fem.classList.add('klienttypeSelected');
  } else if (event.key == 6) {
    let seks = document.getElementById('6');
    console.log(seks);
    selected.forEach((klienttypeSelected) => {
      klienttypeSelected.classList.remove('klienttypeSelected');
    });
    seks.classList.add('klienttypeSelected');
  } else if (event.key == 'Enter' || event.key == Enter) {
    console.log(event.key);
    window.location.href = 'step2.html';
  }
});

$(document).ready(
  function() {

    // Al click della freccia destra lo slider va avanti
    $('.next').click(
      function() {
        var sliderNext = visualizzareImmagineSeguente();
      }
    );

    // Al click della freccia sinistra lo slider torna indietro
    $('.prev').click(
      function() {

      }
    );


  }
);

// var test = visualizzareImmagineSeguente();

// FUNZIONI
// Rimuovo la classe .active all'immagine e all'icona corrente,
// La aggiungo alla immagine e icona successiva.
// Argomento: nessuno
// Return:
function visualizzareImmagineSeguente() {
  var immagineCorrente = $('.images img.active');
  var pallinoCorrente = $('.nav i.active');

  immagineCorrente.removeClass('active');
  pallinoCorrente.removeClass('active');

  // Quando l'elemento ha anche classe last, aggiungo
  // la classe active all'elemento con classe first.
  if ( immagineCorrente.hasClass('last') ) {
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }
  else {
    immagineCorrente.next('img').addClass('active');
    pallinoCorrente.next('i').addClass('active');
  }

}

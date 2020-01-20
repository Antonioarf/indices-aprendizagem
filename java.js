document.addEventListener('DOMContentLoaded', function() {
  let resp = coDesExtract()
 console.log(resp);
 var ati = [resp["1"],resp["5"],resp["9"],resp["13"],resp["17"],resp["21"],resp["25"],resp["29"],resp["33"],resp["37"],resp["41"]];
 var sem = [resp["2"],resp["6"],resp["10"],resp["14"],resp["18"],resp["22"],resp["26"],resp["30"],resp["34"],resp["38"],resp["42"]];
 var vis = [resp["3"],resp["7"],resp["11"],resp["15"],resp["19"],resp["23"],resp["27"],resp["31"],resp["35"],resp["39"],resp["43"]]; 
 var seq = [resp["4"],resp["8"],resp["12"],resp["16"],resp["20"],resp["24"],resp["28"],resp["32"],resp["36"],resp["40"],resp["44"]];
    // coDesReplace('.title_2', context)
var i;
var atiA = 0;
var atiB = 0;
var semA = 0;
var semB = 0;
var visA = 0;
var visB = 0;
var seqA = 0;
var seqB = 0;

var dict = { "ati" : ati, "sem" : sem, "vis": vis, "seq":seq};
var lists = [ati,sem,vis,seq]

for (i = 0; i < 12; i++) {
  if (ati[i] == "a") {
  atiA +=1;
} else if(ati[i] == "b"){
  	atiB +=1;
  }
if (sem[i] == "a") {
  semA +=1;
} else if(sem[i] == "b"){
  semB +=1;
  }

if (vis[i] == "a") {
  visA +=1;
} else if(vis[i] == "b"){
  	visB +=1
  }
if (seq[i] == "a") {
  seqA +=1;
} else if(seq[i] == "b"){
  seqB +=1
  }
}

console.log(atiA);
document.getElementById("um").value = atiA;
document.getElementById("dois").value = atiB;
document.getElementById("tres").value = visA;
document.getElementById("quatro").value = visB;

// var $form = $('form#test-form')
// var url = 'https://script.google.com/macros/s/AKfycbyB3jNa_c6tzicP5wvw2m94vhgEaH0QPkXLTp1HrIBGVZ0Mp2Dt/exec'
//



  const scriptURL = 'https://script.google.com/macros/s/AKfycbwCDfnkzr9PgGgXwW6tLMzIxjarZPAPWm1FntN0Eq0o7tOAEVTw/exec'
  const form = document.forms['submit-to-google-sheet']

  // form.addEventListener('submit', e => {
  //   e.preventDefault()
  //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //     .then(response => console.log('Success!', response))
  //     .catch(error => console.error('Error!', error.message))
  // })




})









// https://script.google.com/macros/s/AKfycbwCDfnkzr9PgGgXwW6tLMzIxjarZPAPWm1FntN0Eq0o7tOAEVTw/exec

// certo:
// https://script.google.com/macros/s/AKfycbwCDfnkzr9PgGgXwW6tLMzIxjarZPAPWm1FntN0Eq0o7tOAEVTw/exec
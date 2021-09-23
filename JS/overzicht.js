  
var bonPrijs = []; 
bonPrijs = JSON.parse(sessionStorage.getItem('bonPrijs'));



document.getElementById("labelVisfrietQtty").innerHTML = bonPrijs[0][0];
document.getElementById("labelVisfrietTotal").innerHTML = bonPrijs[0][1];

document.getElementById("labelZalmsnackQtty").innerHTML = bonPrijs[1][0];
document.getElementById("labelZalmsnackTotal").innerHTML = bonPrijs[1][1];

document.getElementById("labelKibQtty").innerHTML = bonPrijs[2][0];
document.getElementById("labelKibTotal").innerHTML = bonPrijs[2][1];

document.getElementById("labelVisKoekQtty").innerHTML = bonPrijs[3][0];
document.getElementById("labelVisKoekTotal").innerHTML = bonPrijs[3][1];

document.getElementById("labelRaviGotteQtty").innerHTML = bonPrijs[4][0];
document.getElementById("labelRaviGotteTotal").innerHTML = bonPrijs[4][1];

document.getElementById("labelVerseZalmmootQtty").innerHTML = bonPrijs[5][0];
document.getElementById("labelVerseZalmmootTotal").innerHTML = bonPrijs[5][1];

document.getElementById("labelDoradetQtty").innerHTML = bonPrijs[6][0];
document.getElementById("labelDoradeTotal").innerHTML = bonPrijs[6][1];

document.getElementById("labelVDDiscount").innerHTML = bonPrijs[7];
document.getElementById("totallab").innerHTML = bonPrijs[8];

function RedirectPersonalData(){
  window.location.href= "klantgegevens.html";
  document.getElementById("gotoPersonalDataBttn").disable = false;
}












 
 
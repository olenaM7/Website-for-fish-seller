var articles = [
    ["Visfriet bak van 250 gram", 3.50],
    ["Zalmsnack", 3.95],
    ["Kibbeling", 11.00],
    ["Viskoekje", 1.75],
    ["Ravigotte-, cocktail-, of knoflooksaus", 0.60],
    ["Verse Zalmmoot", 32.50],
    ["Dorade", 11.43],
];

var visfrietquantity, zalmsnackquantity, kibquantity, viskoekquantity, sausquantity, verseZalmmootquantity, doradequantity, totalPrice, sum, sumDiscount;

var quantitylist = [];


function calculateOrder() {

    visfrietquantity = document.getElementById("InputVisfrietAmount").value;
    zalmsnackquantity = document.getElementById("InputZalmsnackAmount").value;
    kibquantity = document.getElementById("InputKibAmount").value;
    viskoekquantity = document.getElementById("InputVKAmount").value;
    sausquantity = document.getElementById("InputSausAmount").value;
    verseZalmmootquantity = document.getElementById("InputVerseZalmmootAmount").value;
    doradequantity = document.getElementById("InputDoradeAmount").value;

    quantitylist = [[visfrietquantity,0], [zalmsnackquantity,0], [kibquantity,0], [viskoekquantity,0], [sausquantity,0], [verseZalmmootquantity,0], [doradequantity,0]];

      
    CalculateItemsSubPrice(quantitylist, articles);
    
    sumDiscount = ApplyDiscount(quantitylist);

    totalPrice = (sum - sumDiscount).toFixed(2);
    if (totalPrice == 0){
        alert("Please enter a quantity for one or more menu item to calculate the order.");
        return false;
    }
    storeproductList(quantitylist);

    document.getElementById("dicountlab").innerHTML = sumDiscount.toFixed(2);

    document.getElementById("totallab").innerHTML = "€ &nbsp; &nbsp;" + totalPrice;

    document.getElementById("printReceiptBttn").disabled = false;
    
    return true;
    
}


function storeproductList(productPrijsArray) {

    productPrijsArray.push(sumDiscount.toFixed(2), totalPrice);

    if (typeof(Storage) !== undefined){

        sessionStorage.setItem("bonPrijs", JSON.stringify(productPrijsArray));
    }
}



function CalculateItemsSubPrice(qttylist, articles) {
    var lab, itemSubPrice, i;
    sum = 0;
    for (i = 0; i < qttylist.length; i++) {
        lab = document.getElementById("lab" + i);
        itemSubPrice = parseFloat(qttylist[i][0] * articles[i][1]);
        sum = sum + itemSubPrice;
        qttylist[i][1] = itemSubPrice.toFixed(2);
        lab.innerHTML = "&nbsp; &nbsp;" + qttylist[i][1]; + "&nbsp; &nbsp;" + "€";

    }

    
}


function ApplyDiscount(qttylist) {
    var kortingVrietbak, kortingZalmsnack, kortingViskoekje, KortingSaus, totalDiscount;

    kortingVrietbak = (qttylist[0][0] / 3 - (qttylist[0][0] / 3) % 1);
    kortingZalmsnack = (qttylist[1][0] / 3 - (qttylist[1][0] / 3) % 1);
    kortingViskoekje = (qttylist[3][0] / 3 - (qttylist[3][0] / 3) % 1);
    KortingSaus = (qttylist[4][0] / 3 - (qttylist[4][0] / 3) % 1);

    totalDiscount = (kortingVrietbak + kortingZalmsnack + kortingViskoekje + KortingSaus) * 3 * 0.09;
    return totalDiscount;

}


function RedirectReceipt() {
    window.location.href = "overzicht.html";
    document.getElementById("printReceiptBttn").disabled = true;

   
}


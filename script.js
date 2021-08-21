// ======== set per procuct value =========================

function perProductCost(product, productCost) {
    const cost = document.getElementById(product + '-Cost');
    cost.innerText = productCost;
    calculation();
}

// ==========convert sting to number per product value============
function getInputValue(product){
    const perPrice = document.getElementById( product + '-Cost');
    const costValue = parseFloat(perPrice.innerText);
    return costValue ;
}

// ======== calculate total cost=====================================
function calculation(){
    const memoryPrice = getInputValue('memory');
    const storagePrice = getInputValue('storage');
    const deliveryPrice = getInputValue('delivery');
    const pcPrice = parseFloat(1299);
    
    const totalPrice = memoryPrice + storagePrice + deliveryPrice + pcPrice ;
    document.getElementById('totalCost').innerText = totalPrice ;
    document.getElementById('finalCost').innerText = totalPrice ;
}

//calculate total cost after using promo code 
function promoCode(promo){
    const errorMassage = document.getElementById('varify-fail');
    if (promo == 'stevekaku') {
        // if using correct promo code
        let totalcost = document.getElementById('totalCost').innerText;
        const discountAmount = totalcost * .2;
        const finalCost = totalcost - discountAmount;
        document.getElementById('finalCost').innerText = finalCost;
        errorMassage.style.display = 'none';

    }
    else{
        //if using wrong promocode
        errorMassage.style.display = 'block';
    }
}

// ========= initialize product value=========================================

document.getElementById('memory8gb-cost').addEventListener('click', function(){ 
    perProductCost('memory',0);

});
document.getElementById('memory16gb-cost').addEventListener('click', function(){ 
    perProductCost('memory', 180);

});

document.getElementById('ssd256gb-cost').addEventListener('click', function(){
    perProductCost('storage', 0);
   
});
document.getElementById('ssd512gb-cost').addEventListener('click', function(){
    perProductCost('storage', 100);
    
});
document.getElementById('ssd1tb-cost').addEventListener('click', function(){
    perProductCost('storage', 180);

});
document.getElementById('aug25-cost').addEventListener('click', function(){
    perProductCost('delivery', 0);

});
document.getElementById('aug21-cost').addEventListener('click', function(){
    perProductCost('delivery', 20);
    
});

// ========================= apply promo code ==========================
document.getElementById('apply-btn').addEventListener('click', function(){
    let promoText = document.getElementById('promoValue');
    const promo = promoText.value ;
    promoCode(promo);
    promoText.value = '';

})
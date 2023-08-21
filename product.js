
let totalPrice = 0;
function productClick(target){
    // console.log(target.childNodes[7].innerText);
    // console.log(target.childNodes[9].innerText.split(" ")[0]);

    const productTitle = document.getElementById('product-title');
    const productName = target.childNodes[7].innerText;
    const li = document.createElement('li');
    li.innerText = productName;
    productTitle.appendChild(li);

    const price = target.childNodes[9].innerText.split(" ")[0];
    totalPrice = parseFloat(totalPrice) + parseFloat(price);

 
     document.getElementById("total-price").innerText = totalPrice;
    
    const makePurchase = document.getElementById('make-Purchase');
    console.log(makePurchase);
    if (totalPrice > 0 ) {
     makePurchase.removeAttribute('disabled')
        
    }

    

    const applyBtn = document.getElementById('apply-btn');
    if (totalPrice >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    

    


    
document.getElementById('coupon-code').addEventListener('keyup', function(event){

    const text = event.target.value;
    // console.log(text);
    const couponBtn = document.getElementById('apply-btn')
    
    
    if (text == "SELL200")  {


       couponBtn.removeAttribute('disabled');

    }
    else{
        couponBtn.setAttribute('disabled', true);
    }  
    
    document.getElementById('apply-btn').addEventListener('click', function(){

        if (totalPrice >=200 ) {
        
        if (text == 'SELL200') {
            const discount = document.getElementById('discount');
        const discountAmount = (totalPrice * 0.2);
        const result = totalPrice - discountAmount
        discount.innerText = result.toFixed(2);
     
        

        
        const final = document.getElementById('final-total');
        const finalTotal =  totalPrice - result;
        final.innerText = finalTotal.toFixed(2);

            
        }
    }
    

    

    })
})
    

    




}

// document.getElementById('coupon-code').addEventListener('keyup', function(event){
//     const text = event.target.value;
//     // console.log(text);
//     const couponBtn = document.getElementById('apply-btn')
//     if (text == "SELL200")  {


//        couponBtn.removeAttribute('disabled');

//     }
//     else{
//         couponBtn.setAttribute('disabled', true);
//     }  
    
//     document.getElementById('apply-btn').addEventListener('click', function(){
//         if (text == 'SELL200') {
//             const discount = document.getElementById('discount');
//         const discountAmount = (totalPrice * 0.2);
//         const result = totalPrice - discountAmount
//         discount.innerText = result.toFixed(2);
        
//         const final = document.getElementById('final-total');
//         const finalTotal =  totalPrice - result;
//         final.innerText = finalTotal.toFixed(2);

            
//         }

    

//     })
// })

document.getElementById('go-home').addEventListener('click', function(){
    window.location.href = 'index.html';
})








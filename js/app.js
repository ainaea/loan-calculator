// alert('workingb');

const submit = document.querySelector("input[type='button']");
const amount = document.querySelector("input[name='amount']");
const rate = document.querySelector("input[name='rate']");
const months = document.querySelector("input[name='months']");
const payment = document.querySelector("input[name='payment']");
const tPayment = document.querySelector("input[name='tPayment']");
const tInterest = document.querySelector("input[name='tInterest']");
// const amount = document.querySelector("input[name='amount']");

submit.style.color = 'white';
// payment.style.color = 'red';
// console.log(amount,rate);

submit.addEventListener('click', evaluate);
amount.addEventListener('input', clearResults);
rate.addEventListener('input', clearResults);
months.addEventListener('input', clearResults);

function evaluate() {
    const inAmount = parseFloat(amount.value), inRate = parseFloat(rate.value)/1200, inMonths = parseFloat(months.value);
    
    if ( inAmount != inAmount || inMonths != inMonths || inRate != inRate || inAmount <= 0 || inRate <= 0 || inMonths <= 0){
        alert('Invalid entr(y/ies) detected \nMake correction and retry');
        return;
    }
    else{
        var monthly = ( inAmount * inRate * ((1 + inRate)**inMonths) )/( ((1 + inRate)**inMonths) -1 );
        monthly = Math.ceil(monthly*100)/100;

        payment.value =  monthly;
        tPayment.value = Math.floor((monthly * inMonths)*100)/100;
        tInterest.value = Math.floor(((monthly * inMonths) - inAmount)*100)/100;
    }
    // Math.floor(((monthly * inMonths) - inAmount)*100)/100
}

function clearResults() {
    tPayment.value = '';
    tInterest.value = '';
    payment.value = '';
}
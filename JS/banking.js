// get secondary input with a common function
function getInputValue(secondaryInputId){
    const secondaryInput = document.getElementById(secondaryInputId);
    const secondaryValue = secondaryInput.value;
    const secondaryAmount = parseFloat(secondaryValue);
    secondaryInput.value = ' ';
    return secondaryAmount;
};
// get primary text with a common function
function updatePrimaryText(primaryId, secondaryAmount){
    const primaryInput = document.getElementById(primaryId);
    const primaryText = primaryInput.innerText;
    const primaryAmount = parseFloat(primaryText);
    primaryInput.innerText = primaryAmount + secondaryAmount;
};
// get deposit and update deposit total
document.getElementById('deposit-button').addEventListener('click', function() {
    const secondaryAmount = getInputValue('deposit-secondary');
    updatePrimaryText('deposit-primary', secondaryAmount)
    //update balance with deposit input
    const balancePrimary = document.getElementById('balance-primary');
    const balancePrimaryText = balancePrimary.innerText;
    const balancePrimaryAmount = parseFloat(balancePrimaryText);
    balancePrimary.innerText = balancePrimaryAmount + secondaryAmount;
});
// get withdraw and update withdraw total
document.getElementById('withdraw-button').addEventListener('click', function(){
    const secondaryAmount = getInputValue('withdraw-secondary');
    updatePrimaryText('withdraw-primary', secondaryAmount)     
//update balance with withdraw input total
    const balancePrimary = document.getElementById('balance-primary');
    const balancePrimaryText = balancePrimary.innerText;
    const balancePrimaryAmount = parseFloat(balancePrimaryText);
    balancePrimary.innerText = balancePrimaryAmount - secondaryAmount;   
});



// get input
    // const secondaryInput = document.getElementById('deposit-secondary');
    // const secondaryValue = secondaryInput.value;
    // const secondaryAmount = parseFloat(secondaryValue);
    // update deposit input total field
    // const primaryInput = document.getElementById('deposit-primary');
    // const primaryText = primaryInput.innerText;
    // const primaryAmount = parseFloat(primaryText);
    // primaryInput.innerText = primaryAmount + secondaryAmount;


     // get withdraw
    // const secondaryInput = document.getElementById('withdraw-secondary');
    // const secondaryValue = secondaryInput.value;
    // const secondaryAmount = parseFloat(secondaryValue);
    // update withdraw input total field
    // const primaryInput = document.getElementById('withdraw-primary');
    // const primaryText = primaryInput.innerText;
    // const primaryAmount = parseFloat(primaryText);
    // primaryInput.innerText = primaryAmount + secondaryAmount;
    // clear the input field
    // secondaryInput.value = ' ';
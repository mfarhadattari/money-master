// Get Input Value by id Function
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId) ;
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseInt(inputFieldValueString) ;
    return inputFieldValue;
}

// Get Text Element Value By Id
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId) ;
    const elementValueString = element.innerText ;
    const elementValue = parseInt(elementValueString) ;
    return elementValue ;
}

// Number Validation Function
function isNumber(variable){
    if(isNaN(variable) == true){
        alert('Please Input Correct Amount')
    }
    else{
        return variable ;
    }
}

// Reset Function
function resetAll(){
    document.getElementById('income-field').value = '' ;
    document.getElementById('food-expanses-field').value = '' ;
    document.getElementById('rent-expanses-field').value = '' ;
    document.getElementById('clothes-expanses-field').value = '' ;
}


// Total Expenses Calculate Section
function totalExpensesCalculate(){
    const foodExpenses = getInputFieldValueById('food-expanses-field') ;
    const rentExpenses = getInputFieldValueById('rent-expanses-field') ;
    const clothesExpenses = getInputFieldValueById('clothes-expanses-field') ;
    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses ;
    return totalExpenses ;
}

function setTextElementValueById(elementId, setValue){
    const textElement =  document.getElementById(elementId) ;
    textElement.innerText = setValue ;
}


document.getElementById('calculate-btn').addEventListener('click',function(){
    const totalIncome = getInputFieldValueById('income-field') ;
    const totalExpenses =  totalExpensesCalculate() ;
    setTextElementValueById('total-expanses' , totalExpenses)
    const totalBalance = totalIncome - totalExpenses ;
    setTextElementValueById('total-balance', totalBalance) ;
})

document.getElementById('reset-btn').addEventListener('click',function(){
    resetAll() ;
})

document.getElementById('saving-btn').addEventListener('click', function(){
    const totalIncome = getInputFieldValueById('income-field') ;
    const savingRate = getInputFieldValueById('saving-rate-field') ;
    const savingAmount = totalIncome * (savingRate/100) ;
    setTextElementValueById('total-saving', savingAmount) ;

    const totalExpenses = totalExpensesCalculate() ;
    
    setTextElementValueById('total-expanses', totalExpenses) ;
    const totalBalance = totalIncome - totalExpenses ;
    setTextElementValueById('total-balance', totalBalance) ;

    const remainingBalance = totalBalance - savingAmount ;
    setTextElementValueById('remaining-balance', remainingBalance) ;
    
})
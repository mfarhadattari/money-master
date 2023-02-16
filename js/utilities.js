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

// Calculate Btn Event Handler
document.getElementById('calculate-btn').addEventListener('click',function(){
    const totalIncome = getInputFieldValueById('income-field') ;
    // Validation Total Income Field
    if(isNaN(totalIncome)){
        alert('Input Correct Income') ;
        return ;
    }

    const totalExpenses =  totalExpensesCalculate() ;
    // Validation Total Expenses Field
    if(isNaN(totalExpenses)){
        alert('Please Input Correct Amount') ;
        return ;
    }

    // total income and expense comparison
    if(totalExpenses>totalIncome){
        alert('Cut your coat according to your cloth.') ;
        return ;
    }
    
    setTextElementValueById('total-expanses' , totalExpenses)
    const totalBalance = totalIncome - totalExpenses ;
    setTextElementValueById('total-balance', totalBalance) ;
})


// Reset Btn Event Handler
document.getElementById('reset-btn').addEventListener('click',function(){
    resetAll() ;
})


// Saving Btn Event Handler
document.getElementById('saving-btn').addEventListener('click', function(){
    const totalIncome = getInputFieldValueById('income-field') ;

    // total income validation
    if(isNaN(totalIncome)){
        alert('Input Correct Income') ;
        return ;
    }
    
    const totalExpenses = totalExpensesCalculate() ;
    // total expense validation
    if(isNaN(totalExpenses)){
        alert('Please Input Correct Amount') ;
        return ;
    }

    // total income and expense comparison
    if(totalExpenses>totalIncome){
        alert('Cut your coat according to your cloth.') ;
        return ;
    }
    
    setTextElementValueById('total-expanses', totalExpenses) ;
    const totalBalance = totalIncome - totalExpenses ;
    setTextElementValueById('total-balance', totalBalance) ;

    
    const savingRate = getInputFieldValueById('saving-rate-field') ;

    // Saving Rate Number Validation
    if (isNaN(savingRate)){
        alert('Please Input Correct Saving Rate');
        return ;
    }
    const savingAmount = totalIncome * (savingRate/100) ;

    // saving rate and total number validation
    if(savingAmount > totalBalance){
        alert('Insufficient Balance') ;
        return ;
    }
    
    setTextElementValueById('total-saving', savingAmount) ;

    const remainingBalance = totalBalance - savingAmount ;
    setTextElementValueById('remaining-balance', remainingBalance) ;
    
})
function purchase(){
    let amount = document.getElementById('amount').value;
    let remainingAmount;
    if(amount >=80){
        remainingAmount = amount - 80;
        alert(
            'Amount left is' + remainingAmount,
        )
    } else if(amount>= 20){
        remainingAmount = amount -20
        alert('Amount left is ' + remainingAmount)
    } else if (amount == ''){
        alert('Enter Amount')
    } else {
        alert('Insufficient Amount')
    }
}
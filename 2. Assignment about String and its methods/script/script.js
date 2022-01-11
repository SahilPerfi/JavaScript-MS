function submit(){
    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var email = document.getElementById('emailId').value
    
    document.getElementById('firstNameOutput').innerHTML =
        firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
    document.getElementById('lastNameOutput').innerHTML =
        lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()
    document.getElementById('emailIdOutput').innerHTML = email
}

function ageOutput(){
    var age = document.getElementById('age').value
    if (age === '') {
        alert('Enter the age')
    } else if (age > 10) {
        alert('You are genuis')
    } else if (age <= 1) {
        alert('Invalid age')
    } else {
        alert('You are kid')
    }
}

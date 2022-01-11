var myDetails = {
    firstName: "Sahil",
    middleName:"Arvind",
    lastName: "Dhoble",
    designation: "Intern Consulting",
    contact:7447588896,
    address: {
        houseNo: 63,
        area: "Yogeshwar nagar, Dighori",
        cityName: "Nagpur",
        pinCode: 440034,
        state:"Maharashtra",
        country: "India",
    }
};

document.getElementById("myDetails").innerHTML = "My name is " + " " +myDetails.firstName + " " + myDetails.middleName +
" " + myDetails.lastName + " . " + "I am " + myDetails.designation + " at Perficient." + "You can reach out to me on "+ 
myDetails.contact + " and I live at " + myDetails.address.houseNo + " , " +  myDetails.address.area +
" , " + myDetails.address.cityName + " , " + myDetails.address.pinCode +" , " +  myDetails.address.country +" .";
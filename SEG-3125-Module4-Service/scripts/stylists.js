var serviceList = {
    haircut: ["MasStyle1", "MasStyle2", "SenStyle", "IntStyle"],
    colouring: ["MasStyle1", "MasStyle2"],
    highlighting: ["MasStyle1", "MasStyle2", "SenStyle"],
    styling: ["MasStyle1", "MasStyle2", "SenStyle", "IntStyle"]
}

var weekTimeSlots = {
    "MasStyle1": ["9 AM", "10 AM", "11 AM", "1 PM", "2 PM"],
    "MasStyle2": ["2 PM", "3 PM", "4 PM", "5 PM", "6 PM"],
    "SenStyle": ["12 PM", "1 PM", "2 PM", "3 PM"],
    "IntStyle": ["9 AM", "10 AM", "11 AM", "12 PM"]
}

var satTimeSlots = {
    "MasStyle1": ["12 PM", "1 PM", "2 PM", "3 PM"],
    "MasStyle2": ["10 AM", "11 AM", "12 PM", "1 PM"],
    "SenStyle": ["8 AM", "9 AM", "10 AM", "11 AM"],
    "IntStyle": ["8 AM", "9 AM", "10 AM", "11 AM"]
}

el_service = document.getElementById("userInputService"); //parent select element
el_stylist = document.getElementById("userInputHairstylist"); //child select element 1
el_timeslot = document.getElementById("userInputAppointmentTime"); //child select element 2
// el_date = document.getElementById("userInputAppointmentDate")

// Restricting stylists in select form based on service selected
el_service.addEventListener('change', function populate_child_stylist(e) {
    el_stylist.innerHTML = '';
    el_stylist.innerHTML += '<option selected disabled>Choose hairstylist</option>';

    serviceType = e.target.value;
    if (serviceType in serviceList) {
        for (i=0; i < serviceList[serviceType].length; i++) {
            el_stylist.innerHTML += '<option value="' + serviceList[serviceType][i] +'">' + serviceList[serviceType][i] + '</option>';
        }
    }
})

//Restricting timeslots in select form based on stylist selected
el_stylist.addEventListener('change', function populate_child_stylist(e) {
    el_timeslot.innerHTML = '';
    el_timeslot.innerHTML += '<option selected disabled>Choose time</option>';

    stylistSelected = e.target.value;
    if (serviceType in serviceList) {
        el_timeslot.innerHTML += '<option>' + stylistSelected + '</option>';
    }
})
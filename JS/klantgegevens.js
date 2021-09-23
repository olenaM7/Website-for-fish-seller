function postUserForm() {

    var voornaam = document.forms["RegForm"]["NaamInput"];
    var achternaam = document.forms["RegForm"]["AchternaamInput"];
    var phone = document.forms["RegForm"]["TelephoneInput"];
    var email = document.forms["RegForm"]["EmailInput"];
    var address = document.forms["RegForm"]["AddressInput"];
    var huisnummer = document.forms["RegForm"]["HuisnummerInput"];
    var postcode = document.forms["RegForm"]["PostcodeInput"];
    var woonplaats = document.forms["RegForm"]["WoonplaatsInput"];
    var what = document.forms["RegForm"]["SubjectInput"];

    if (voornaam.value == "") {
        window.alert("Voer alstublieft in uw voornaam.");
        voornaam.focus();
        return false;
    }


    if (achternaam.value == "") {
        window.alert("Voer alstublieft in uw achternaam.");
        achternaam.focus();
        return false;
    }


    if (phone.value == "") {
        window.alert("Voer alstublieft in uw telephonnummer.");
        phone.focus();
        return false;
    }else if (!validatePhonenumber(phone)) {
        return false;
    }


    if (email.value == "") {
        window.alert("Voer alstublieft in uw e-mail address.");
        email.focus();
        return false;
    }else if (!validateEmail(email)){
        return false;
    }


    if (address.value == "") {
        window.alert("Voer alstublieft in uw address");
        address.focus();
        return false;

    }

    if (huisnummer.value == "") {
        window.alert("Voer alstublieft in uw huisnummer");
        huisnummer.focus();
        return false;

    } else if (isNaN(huisnummer.value)) {
        window.alert("Voer alstublieft allen nummer character(s) voor de huisnummer");
        huisnummer.focus();
        return false;
    }

    if (postcode.value == "") {
        window.alert("Voer alstublieft in uw postcode");
        postcode.focus();
        return false;
    }

    if (woonplaats.value == "") {
        window.alert("Voer alstublieft in uw woonplaats");
        woonplaats.focus();
        return false;

    }

    if (what.selectedIndex < 1) {
        alert("Maak alstublieft uw keuze.");
        what.focus();
        return false;
    }


    var currentUser = new User(voornaam.value, achternaam.value, phone.value, email.value, address.value, huisnummer.value, postcode.value, woonplaats.value, what.value);
    sessionStorage.setItem("UserForm", JSON.stringify(currentUser));

    return true;

}

function validateEmail(emailInputtxt) {
    var atposition = emailInputtxt.value.indexOf("@");
    var dotposition = emailInputtxt.value.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= emailInputtxt.value.length) {
        alert("Voer alstublieft een geldig e-mailadress in" );
        emailInputtxt.focus();
        return false;
    }
    return true;
}

function validatePhonenumber(phoneInputtxt) {
    var phoneno = /^\d{10}$/;
    if (phoneInputtxt.value.match(phoneno) == null){
        alert("Voer alstublieft tien nummer voor de telefoonummer");
        phoneInputtxt.focus();
        return false;
    }
    return true;
}
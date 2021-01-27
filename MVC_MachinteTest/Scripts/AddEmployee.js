function Add() {
    var res = validate();
    if (res === false) {
        return false;
    }

    var day = $('#Days').find("option:selected").val();
    var month = $('#Months').find("option:selected").val();
    var year = $('#Years').find("option:selected").val();
    var empObj = {
        FirstName: $('#FirstName').val(),
        MiddleName: $('#MiddleName').val(),
        LastName: $('#LastName').val(),
        Email: $('#Email').val(),
        BirthDate: day +'-'+ month+'-'+ year
    };
    $.ajax({
        url: "/Employees/SaveEmployee",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            alert("Record Saved Successfully!");
            clearTextBox();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}  

function validate() {
    var isValid = true;

    
    if ($('#Days').find("option:selected").val().trim() ==="") {
        $('#Days').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Days').css('border-color', 'lightgrey');
    }

    if ($('#Months').find("option:selected").val().trim() === "") {
        $('#Months').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Months').css('border-color', 'lightgrey');
    }

    if ($('#Years').find("option:selected").val().trim() === "") {
        $('#Years').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Years').css('border-color', 'lightgrey');
    }

    if ($('#FirstName').val().trim() === "") {
        $('#FirstName').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#FirstName').css('border-color', 'lightgrey');
    }

    if ($('#MiddleName').val().trim() === "") {
        $('#MiddleName').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#MiddleName').css('border-color', 'lightgrey');
    }

    if ($('#LastName').val().trim() === "") {
        $('#LastName').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#LastName').css('border-color', 'lightgrey');
    }

    if ($('#Email').val().trim() == "") {
        $('#Email').css('border-color', 'Red');
        isValid = false;
    }
    else if(validateEmail($('#Email').val().trim()) == false){
        $('#Email').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Email').css('border-color', 'lightgrey');
    }
    return isValid;
}  

function clearTextBox() {
    $('#FirstName').val("");
    $('#MiddleName').val("");
    $('#LastName').val("");
    $('#Email').val("");
    $('#Days').val("");
    $('#Months').val("");
    $('#Years').val("");
    
    $('#FirstName').css('border-color', 'lightgrey');
    $('#MiddleName').css('border-color', 'lightgrey');
    $('#LastName').css('border-color', 'lightgrey');
    $('#Email').css('border-color', 'lightgrey');
    $('#Days').css('border-color', 'lightgrey');
    $('#Months').css('border-color', 'lightgrey');
    $('#Years').css('border-color', 'lightgrey');
} 
    function validateEmail($Email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        //alert(emailReg.test($Email));
        return emailReg.test($Email);
        
}


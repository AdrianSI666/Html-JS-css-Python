function checkForm(){
    var error=false; //to znaczy, że danych nie brakuje
    var contactName = document.getElementById("contactName");
    var contactSurName = document.getElementById("contactSurName");
    var contactEmail = document.getElementById("contactEmail");
    var contactInformacja = document.getElementById("contactInformacja"); //Pobieranie danych z pól

    if (contactName.value == ""){
        document.getElementById('errorName').className='alert alertdanger'; //Wkrywanie brakujących pól
        contactName.className='form-control red';
        error=true;
    }
    else
    {
        document.getElementById('errorName').className='hide'; //Ukrywanie po wpisaniu dobrze
        contactName.className='form-control green';
    }
    if (contactSurName.value == ""){
        document.getElementById('errorSurName').className='alert alertdanger';
        contactSurName.className='form-control red';
        error=true;
    }
    else
    {
        document.getElementById('errorSurName').className='hide';
        contactSurName.className='form-control green';
    }
    if (contactEmail.value == ""){
        document.getElementById('errorEmail').className='alert alertdanger';
        document.getElementById('errorFormaEmail').className='hide';
        contactEmail.className='form-control red';
        error=true;
    }
    else {
        document.getElementById('errorEmail').className='hide';
        var email = contactEmail.value;
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if(regex.test(email)==false)
        {
            document.getElementById('errorFormaEmail').className='alert alertdanger';
            contactEmail.className='form-control red';
            error=true;
        }
        else
        {
            document.getElementById('errorFormaEmail').className='hide';
            contactEmail.className='form-control green';
        }
    }
    if (contactInformacja.value == ""){
        document.getElementById('errorInformacja').className='alert alertdanger';
        contactInformacja.className='form-control red';
        error=true;
    }
    else
    {
        document.getElementById('errorInformacja').className='hide';
        contactInformacja.className='form-control green';
    }
    if (!error) return true;
    else{
        //alert ("Nie wypełniłeś następujących pól:\n" + errorText); 
        return false;
    } 
}

function onblurimie()
{
    var contactName = document.getElementById("contactName");
    if (contactName.value == ""){
        document.getElementById('errorName').className='alert alertdanger';
        contactName.className='form-control red';
    }
    else
    {
        document.getElementById('errorName').className='hide';
        contactName.className='form-control green';
    }
}

function onchangeimie() //zauważyłem, że onchange nie jest użyteczne, ponieważ zachodzi w tym samym momęcie jak onblur
{
    var contactName = document.getElementById("contactName");
    document.getElementById('errorName').className='hide';
    contactName.className='form-control';
}

function onblurnazwisko()
{
    var contactSurName = document.getElementById("contactSurName");
    if (contactSurName.value == ""){
        document.getElementById('errorSurName').className='alert alertdanger';
        contactSurName.className='form-control red';
    }
    else
    {
        document.getElementById('errorSurName').className='hide';
        contactSurName.className='form-control green';
    }
}

function onchangenazwisko()
{
    var contactSurName = document.getElementById("contactSurName");
    document.getElementById('errorSurName').className='hide';
    contactSurName.className='form-control';
}

function onblurinformacja()
{
    var contactInformacja = document.getElementById("contactInformacja");
    if (contactInformacja.value == ""){
        document.getElementById('errorInformacja').className='alert alertdanger';
        contactInformacja.className='form-control red';
    }
    else
    {
        document.getElementById('errorInformacja').className='hide';
        contactInformacja.className='form-control green';
    }
}

function onchangeinformacja()
{
    var contactInformacja = document.getElementById("contactInformacja");
    document.getElementById('errorInformacja').className='hide';
    contactInformacja.className='form-control';
}


function onbluremail()
{
    var contactEmail = document.getElementById("contactEmail");
    if (contactEmail.value == ""){
        document.getElementById('errorEmail').className='alert alertdanger';
        document.getElementById('errorFormaEmail').className='hide';
        contactEmail.className='form-control red';
        error=true;
    }
    else {
        document.getElementById('errorEmail').className='hide';
        var email = contactEmail.value;
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if(regex.test(email)==false)
        {
            document.getElementById('errorFormaEmail').className='alert alertdanger';
            contactEmail.className='form-control red';
            error=true;
        }
        else
        {
            document.getElementById('errorFormaEmail').className='hide';
            contactEmail.className='form-control green';
        }
    }
}

function onchangeemail()
{
    var contactEmail = document.getElementById("contactEmail");
    document.getElementById('errorEmail').className='hide';
    document.getElementById('errorFormaEmail').className='hide';
    contactEmail.className='form-control';
}
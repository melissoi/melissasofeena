function check(){
    var valid=true;

    if (document.comment.myEmail.value=='')
    {
        alert('Please fill in your email');
        document.comment.myEmail.focus();
        valid=false;
    }
    if ( (document.comment.myGender[0].checked==false) 
        && (document.comment.myGender[1].checked==false) 
        && (document.comment.myGender[2].checked==false))
{
        alert ('Please choose your gender');
                   valid=false;
}
return valid; 
}
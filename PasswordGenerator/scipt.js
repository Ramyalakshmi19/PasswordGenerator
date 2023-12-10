let passwordLength;
let checkDetails=document.getElementsByName('checkbox');
for(var i=0;i<checkDetails.length;i++)
{
    checkDetails[i].addEventListener("change",()=>
    {
        
        if(checkDetails[i].checked)
        {
            console.log(checkDetails[i].value);
        }
    })
}
function myfn(val)
{
    document.getElementById('DisplayLength').innerHTML=val;
    passwordLength=val;
    console.log(passwordLength);
}

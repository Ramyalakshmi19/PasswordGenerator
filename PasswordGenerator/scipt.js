let passwordLength,count=0,strength=0;
let selectedChars='';
let password='';
let uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
let numberChars = '0123456789';
let symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
let checkBox=document.getElementsByClassName('checkbox');
function myfn(val)
{
    document.getElementById('DisplayLength').innerHTML=val;
    passwordLength=val;
    console.log(val);
}
function generateOneChar(passchars)
{
    count+=1;
    let randIndex=Math.floor(Math.random()*passchars.length);
    password+=passchars.charAt(randIndex);
}
function displayStrength()
{
    let bar= document.getElementsByClassName('StrengthBar');
    let text="";
    for(i=0;i<4;i++)
    {
        bar[i].style.backgroundColor="#121117";
    }
    if((passwordLength>15) && (count==4))
    {
        strength=4;
    }
    else if((passwordLength>10)&&(count>=3))
    {
        strength=3;
    }
    else if((passwordLength>5)&&(count>=2))
    {
        strength=2;
    }
    else if((passwordLength<5)||(count<2))
    {
        strength=1;
    }
    for(var i=0;i<strength;i++)
    {
        if(strength==1)
        {
            bar[i].style.backgroundColor="red";
            text="VERY WEAK"
        }
        else if(strength==2)
        {
            text="WEAK"
            bar[i].style.backgroundColor="#F6CE97";
        }
        else if(strength==3)
        {
            bar[i].style.backgroundColor="#F6CE57";
            text="MEDIUM"
        }
        else
        {
            bar[i].style.backgroundColor="green";
            text="STRONG";
        }
    }
    document.getElementById('displayStrength').innerText=text;
}
document.getElementById('FinalClick').addEventListener('click',()=>
{
    password='';
    selectedChars='';
    count=0;

    for(let i=0;i<checkBox.length;i++)
    {
            if(checkBox[i].checked)
            {
                switch(checkBox[i].value)
                {
                    case 'up':
                        generateOneChar(uppercaseChars);
                        selectedChars+=uppercaseChars;
                        break;
                    case 'low':
                        generateOneChar(lowercaseChars);
                        selectedChars+=lowercaseChars;
                        break;
                    case 'num':
                        generateOneChar(numberChars);
                        selectedChars+=numberChars;
                        break;
                    case 'sym':
                        generateOneChar(symbolChars);
                        selectedChars+=symbolChars;
                        break;
                }
            }
    }
    for(let i=0;i<(passwordLength-count);i++)
    {
        let rand=0;
        rand=Math.floor(Math.random() * selectedChars.length);
        password+=selectedChars.charAt(rand);
    }
    displayStrength();
    document.getElementById('GeneratedPassword').innerHTML=password;

}
)
document.getElementById('copyIcon').addEventListener('click',()=>
{
    navigator.clipboard.writeText(password);
})

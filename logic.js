function Throw() 
{
    var a, b,result;
    result=document.querySelector("h1");
    a = (Math.floor(Math.random() * 6)) % 6 + 1;
    b = (Math.floor(Math.random() * 8)) % 6 + 1;
    var img1=document.querySelector("#one img");
    var img2=document.querySelector("#two img");
    img1.setAttribute("src","dice"+a+".png");
    img2.setAttribute("src","dice"+b+".png");
    
    if(a>b)
    {
       result.innerHTML="🚩 Player 1 Wins!";
    }
    else if(a===b)
    {
        result.innerHTML="DRAW &#x1F633"
    }
    else
    {
        result.innerHTML="Player 2 Wins! 🚩";
    }
}
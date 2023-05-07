let input=document.getElementById("input")
let Bg=document.body;



let changeBg=()=>{
   
    
    
    let colorN=input.value
    
    let h3=document.getElementById("h3");


    switch(colorN){
      case "Aries":
        Bg.style.backgroundColor="red";
        
        

        h3.innerText="#red"
      
        break;
    case "Taurus":
        Bg.style.backgroundColor="blue";
        h3.innerText="#blue"
        break;
        case "Gemini":
        Bg.style.backgroundColor="green";
        h3.innerText="#green"
        break;
        case "Cancer":
        Bg.style.backgroundColor="pink";
        h3.innerText="#pink"
        break;
        case "Leo":
        Bg.style.backgroundColor="yellow";
        h3.innerText="#yellow"
        break;
        case "Virgo":
        Bg.style.backgroundColor="#faebd7";
        h3.innerText="#faebd7"
        break;
        case "Libra":
        Bg.style.backgroundColor="red";
        h3.innerText="#red"
        break;
        case "Scorpius":
        Bg.style.backgroundColor="	#00ffff";
        h3.innerText="#00ffff"
        break;
        


    }
    }



const generateLuckyNumber = () =>{
    const input = document.getElementById("zodiac").value;
    const body = document.body;
    switch (input) {
        case "taurus":
            body.style.backgroundColor="blue";
            
            break;
            case "gemini":
            body.style.backgroundColor="green";
                
            break;
            case "taurus":
            body.style.backgroundColor="red";
            
            break;
            case "cancer":
            body.style.backgroundColor="purple";
            
            break;
            case "leo":
            body.style.backgroundColor="grey";
            
            break;
            case "scorpio":
            body.style.backgroundColor="yellow";
            
            break;
            case "virgo":
            body.style.backgroundColor="orange";
            
            break;
            case "libra":
            body.style.backgroundColor="pink";
            
            break;
            case "aries":
            body.style.backgroundColor="gold";
            
            break;
    
        default:
            break;
    }
    
}

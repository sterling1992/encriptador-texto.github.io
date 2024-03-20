// function ecrypt text input on textarea
function encripted(){
    // Create Regex for each letter of vocals
    const regularExpretionsA = /a/g;
    const regularExpretionsE = /e/g;
    const regularExpretionsI = /i/g;
    const regularExpretionsO = /o/g;
    const regularExpretionsU = /u/g;

    // Read text input for textarea ecrypt
    let textToEncrypt = document.getElementById('input-text-to-encrypt').value;
    let textReplace = textToEncrypt.replace(regularExpretionsA,'mz')
    .replace(regularExpretionsE,'pw')
    .replace(regularExpretionsI,'dx')
    .replace(regularExpretionsO,'lt')
    .replace(regularExpretionsU,'ch');

    // Put text read on textarea and show in uutput-textarea
    document.getElementById('output-text-uncriptar').innerText = textReplace;
}

// function copy output text on textarea
const copytextOutput = async() =>{
    let textOutput = document.getElementById('output-text-uncriptar').innerHTML;
    try{
        await navigator.clipboard.writeText(textOutput);
        console.log('Contenido copiado al portapapeles');
    }catch(err){
        console.log('error al copiar el texto', err);
    }
}


// function uncypt text
const uncryptTextOutput = () =>{

    // Ccreacion de las expresiones regulares
    const regularExpretionsUncriptA = /mz/g;
    const regularExpretionsUuncriptE = /pw/g;
    const regularExpretionsUuncriptI = /dx/g;
    const regularExpretionsUuncriptO = /lt/g;
    const regularExpretionsUuncriptU = /ch/g;
    
    // Se obtiene el texto ingresado por el usuario en el txtarea (en pantalla)
    let uncyptText = document.getElementById("input-text-to-encrypt").value;  

    // se reemplaza el texto captado con las expresiones regulares
    let textReplaceUncrypt =  uncyptText.replace(regularExpretionsUncriptA, 'a')
    .replace(regularExpretionsUuncriptE, 'e')
    .replace(regularExpretionsUuncriptI, 'i')
    .replace(regularExpretionsUuncriptO, 'o')
    .replace(regularExpretionsUuncriptU, 'u');
    
    // Se ponen los terminos reemplazados en la sesion de salida del texto desencriptado
    document.getElementById('output-text-uncriptar').innerText = textReplaceUncrypt;
}

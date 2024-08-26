//Definir constantes
const containerMessage = getElement('container-instructionMessage');
const textInput = getElement('text-input');
const message = getElement('instruction-message');
const encryptor = getElement('btn-encryptor');
const decryptor = getElement('btn-decryptor');
const sectionRight = getElement('main-right');
const munecoImg = getElement('muneco');
const textOutput = getElement('text-output');
const instruccionOut = getElement('instruction-output');
const buttonCopy = getElement('btn-copy');

let key = new Map([
	["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
]);

// Crear un Map para desencriptar basado en el Map de encriptar
const keyDecrytpor = reverseMap(key);

//----Funciones base

// Función para invertir un Map
function reverseMap(map) {
    return new Map([...map.entries()].map(([key, value]) => [value, key]));
}

// Construye una expresión regular a partir de las claves del Map
function buildRegularExpression(map) {
    return new RegExp([...map.keys()].join('|'), 'g');
}

// Reemplaza los textos basados en un Map de sustituciones
function setTextByMap(map,text) {
    const regex = buildRegularExpression(map);
    return text.replace(regex, (match) => map.get(match));
}
// -------------
// Función para definir constante para id
function getElement(id) {
    return document.getElementById(id);
}

// Función para modificar texto a través de un elemento constante
function setTextByElement(element, text) {
    if (element) {
        element.innerHTML = text;
    } else {
        console.warn("Funcion setTextByElement:Elemento no válido.");
    }
}

// Añadir una clase a un elemento constante
function addClass(element, className) {
    if (element) {
        if (!element.classList.contains(className)) {
            element.classList.add(className);
        }
    } else {
        console.warn("Función addClass:Elemento no válido.");
    }
}

// Remover una clase de un elemento constante
function removeClass(element, className) {
    if (element) {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        }
    } else {
        console.warn("Función removeClass: Elemento no válido.");
    }
}

//----Funciones 

//1.Verificiar contenido de texto
//2.Verificar mayusculas en texto
//3.Verificar caracteres especiales en texto
function verifyTextContent() {
    let text = textInput.value;
    let txt = text.normalize("NFD").replace(/[^\w\sñÑ]|[\u0300-\u036f]/g, "");

    if (text === "") {
        setTextByElement(message,"No se ha encontrado texto");
        addClass(containerMessage, "main__left__instructionsAlteration");
        addClass(message, "instructions__messageAlteration");

    } else if (text !== text.toLowerCase()) {
        setTextByElement(message,"No se aceptan mayúsculas");
        addClass(containerMessage, "main__left__instructionsAlteration");
        addClass(message, "instructions__messageAlteration");

    } else if (text !== txt) {
        setTextByElement(message,"No se aceptan carácteres especiales");
        addClass(containerMessage, "main__left__instructionsAlteration");
        addClass(message, "instructions__messageAlteration");

    } else {
        removeClass(containerMessage, "main__left__instructionsAlteration");
        removeClass(message, "instructions__messageAlteration");
        return true;
    }
}

//4.Añadir cambios
function addChanges () {
    decryptor.disabled = false;
    addClass(decryptor, "buttons__decryptorAlteration");
    setTextByElement(message, "Solo letras minúsculas y sin acentos");
    addClass(sectionRight, "main__rightReplace");
    addClass(textOutput, "main__right__textAlteration");
    addClass(munecoImg, "hide__element");
    addClass(instruccionOut, "hide__element");
    removeClass(buttonCopy, "hide__element");

}

//5.Remover cambios
function removeChanges () {
    decryptor.disabled = true;
    removeClass(decryptor, "buttons__decryptorAlteration");
    setTextByElement(message, "Solo letras minúsculas y sin acentos");
    removeClass(sectionRight, "main__rightReplace");
    removeClass(textOutput, "main__right__textAlteration");
    removeClass(munecoImg, "hide__element");
    removeClass(instruccionOut, "hide__element");
    addClass(buttonCopy, "hide__element");
}

//6.Encriptar texto
function textEncryptor(newtext) {
    return setTextByMap(key,newtext);
}

//7.Desencriptar texto
function textDecryptor(newtext) {
    return setTextByMap(keyDecrytpor,newtext);
}

//8.Evento de clic de boton de id "btn-encryptor"
encryptor.addEventListener('click', () => {
    if (verifyTextContent()) {
        let text = textInput.value;
        addChanges ();
        let textE = textEncryptor(text);
        setTextByElement (textOutput, textE);
    }
});

//9.Funcion de clic de boton de id "btn-encryptor"
decryptor.addEventListener('click', () => {
    if (verifyTextContent()) {
        addChanges ();
        let text2 = textInput.value;
        let textD = textDecryptor(text2);
        setTextByElement (textOutput, textD);
        
    }
});

//10. Funcion de clic de boton de id "btn-copy"
buttonCopy.addEventListener('click', () => {
    if (textOutput) {
        textOutput.select();

        try {
            document.execCommand('copy');
            alert('Se ha copiado correctamente el texto');
        } catch (error) {
            console.error('Error al copiar el texto: ', error);
            alert('Hubo un problema al copiar el texto.');
        }
        
        removeChanges();
        setTextByElement(textInput, '');
        setTextByElement(textOutput, '');
        decryptor.disabled = false;

    } else {
        console.warn('Elemento de texto no encontrado.');
    }
});
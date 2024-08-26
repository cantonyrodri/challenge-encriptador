/* 
Reglas de encriptado

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Son los "id" de los elementos en HTML:

container-instructionMessage (Es del elemento tipo "div" que contiene a "instruction-message")
text-input (Es del elemento tipo "textarea" donde se ingresa el texto)
instruction-message (Es del elemento tipo "h4" donde se indica la instruccion)
btn-encryptor (Es del elemento tipo "button" para encriptar)
btn-decryptor (Es del elemento tipo "button" para desencriptar)
main-right  (Es del elemento tipo "section")
muneco (Es del elemento tipo "img" del muñeco que se muestra)
text-output (Es del elemento tipo "textarea" donde se mostrara el texto encriptado)
instruction-output (Es del elemento tipo "p" donde hay un mensaje)
btn-copy (Es del elemento tipo "button" para copiar el texto)

Estas son los nombres de las clases adicionales en "CSS",
para agregar a los elementos mediante su "id":

.main__left__instructionsAlteration ->Modifica color de espacio que contiene a  "instruction-message".
.instructions__messageAlteration ->Agrega estilos a texto "instruction-message".
.buttons__decryptorAlteration ->Cambia el color cuando se habilita
.main__rightReplace ->justify content space between
.main__right__textAlteration ->Cuando se va a encriptar
.hide__element ->Clase para ocultar elemento

Funciones:
1.Verificiar contenido de texto
  Si no hay texto en el elemento de id "text-input": 
  -Modificar el texto en el HTML de "instruction-message" a
   "No se ha encontrado texto".
  -Añadir la clase ".main__left__instructionsAlteration" al
   elemento de id "container-instructionMessage".
  -Añadir la clase ".instructions__messageAlteration" al 
   elemento de id "instruction-message" 

2.Verificar mayusculas en texto
  Si el texto del elemento de id "text-input", 
  tiene mayusculas:
  -Modificar el texto en el HTML del elemento de id "instruction-message" 
   a "No se aceptan mayusculas".
  -Añadir la clase ".main__left__instructionsAlteration" al
   elemento de id "container-instructionMessage".
  -Añadir la clase ".instructions__messageAlteration" al 
   elemento de id "instruction-message" 

3.Verificar caracteres especiales en texto
  Si el texto del elemento de id "text-input", 
  tiene caracteres especiales:
  -Modificar el texto en el HTML del elemento de id "instruction-message" 
   a "No se aceptan carácteres especiales".
  -Añadir la clase ".main__left__instructionsAlteration" al
   elemento de id "container-instructionMessage".
  -Añadir la clase ".instructions__messageAlteration" al 
   elemento de id "instruction-message" 

4.Añadir cambios
  Se realizan los cambios:
  -Se remueve la propiedad "disabled" del elemento con id  
   "btn-decryptor".
  -Añadir la clase ".buttons__decryptorAlteration" al 
   elemento de id "btn-decryptor" 

  -Modificar el texto en el HTML del elemento de id "instruction-message" 
   a "Solo letras minúsculas y sin acentos".
  -Remover la clase ".main__left__instructionsAlteration" al
   elemento de id "container-instructionMessage".
  -Remover la clase ".instructions__messageAlteration" al 
   elemento de id "instruction-message" 

  -Añadir la clase ".main__rightReplace" al 
   elemento de id "main-right" 
  -Añadir la clase ".main__right__textAlteration" al 
   elemento de id "text-output" 

  -Añadir la clase ".hide__element" al 
   elemento de id "muneco" 
  -Añadir la clase ".hide__element" al 
   elemento de id "instruction-output" 

  -Remover la clase ".hide__element" al 
   elemento de id "btn-copy" 


5.Quitar cambios
  Se quitan todos los cambios añadidos, excepto:

  -Modificar el texto en el HTML del elemento de id "instruction-message" 
   a "Solo letras minúsculas y sin acentos".

6.Encriptar texto
  Se encripta el texto

7.Desencriptar texto
  Se desencripta

8.Funcion de clic de boton de id "btn-encryptor"
  Cuando se pulsa el boton se evaluan las funciones:
  -Verificiar contenido de texto
  -Verificar mayusculas en texto
  -Verificar caracteres especiales en texto

  Cuando se comprueba que son verdaderas:
  -Añadir cambios
  -Encriptar texto

9.Funcion de clic de boton de id "btn-encryptor"
  Cuando se pulsa el boton se evaluan las funciones:
  -Verificiar contenido de texto
  -Verificar mayusculas en texto
  -Verificar caracteres especiales en texto

  Cuando se comprueba que son verdaderas:
  -Añadir cambios
  -Desencriptar texto

10. Funcion de clic de boton de id "btn-copy"
  Se realiza lo siguiente:
  -Se copia el texto del elemento de id "text-output"
  -Se muestra alerta de mensaje "Se ha copiado correctamente el texto"
  -Quitar cambios

*/
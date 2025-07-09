// ejemplos.js - Ejemplos prácticos de los temas solicitados
window.onload = function() {
    // 1. Control de flujo y manejo de errores
    ejemploIfElse();
    ejemploSwitch();
    ejemploTryCatch();
    // 2. Bucles e iteración
    ejemploFor();
    ejemploWhile();
    ejemploDoWhile();
    // 3. Funciones
    ejemploFunciones();
    // 4. Expresiones y operadores
    ejemploOperadores();
    // 5. Números y fechas
    ejemploNumeros();
    ejemploMath();
    ejemploDate();
    // 6. Formateo de texto
    ejemploCadenas();
    ejemploString();
    // 7. Colecciones indexadas
    ejemploArreglos();
    ejemploArreglosTipados();
    // 8. DOM
    ejemploDomId();
    ejemploDomEtiqueta();
    ejemploDomClase();
    ejemploDomSelector();
    ejemploDomColeccion();
};

// 1. Control de flujo y manejo de errores
function ejemploIfElse() {
    let edad = 20;
    let mensaje = '';
    if (edad >= 18) {
        mensaje = 'Eres mayor de edad.';
    } else {
        mensaje = 'Eres menor de edad.';
    }
    const codigo = `let edad = 20;\nlet mensaje = '';\nif (edad >= 18) {\n  mensaje = 'Eres mayor de edad.';\n} else {\n  mensaje = 'Eres menor de edad.';\n}`;
    document.getElementById('ejemplo-if-else-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-if-else-resultado').innerHTML = `<div class=\"ejemplo-resultado\">${mensaje}</div>`;
}
function ejemploSwitch() {
    let dia = 3;
    let nombreDia;
    switch (dia) {
        case 1: nombreDia = 'Lunes'; break;
        case 2: nombreDia = 'Martes'; break;
        case 3: nombreDia = 'Miércoles'; break;
        case 4: nombreDia = 'Jueves'; break;
        case 5: nombreDia = 'Viernes'; break;
        default: nombreDia = 'Fin de semana';
    }
    const codigo = `let dia = 3;\nlet nombreDia;\nswitch (dia) {\n  case 1: nombreDia = 'Lunes'; break;\n  case 2: nombreDia = 'Martes'; break;\n  case 3: nombreDia = 'Miércoles'; break;\n  case 4: nombreDia = 'Jueves'; break;\n  case 5: nombreDia = 'Viernes'; break;\n  default: nombreDia = 'Fin de semana';\n}`;
    document.getElementById('ejemplo-switch-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-switch-resultado').innerHTML = `<div class=\"ejemplo-resultado\">${nombreDia}</div>`;
}
function ejemploTryCatch() {
    let resultado = '';
    try {
        throw new Error('Esto es un error de ejemplo');
    } catch (e) {
        resultado = e.message;
    }
    const codigo = `try {\n  throw new Error('Esto es un error de ejemplo');\n} catch (e) {\n  // ...\n}`;
    document.getElementById('ejemplo-try-catch-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-try-catch-resultado').innerHTML = `<div class=\"ejemplo-resultado\">${resultado}</div>`;
}
// 2. Bucles e iteración
function ejemploFor() {
    let resultado = '';
    for (let i = 1; i <= 5; i++) {
        resultado += i + ' ';
    }
    const codigo = `for (let i = 1; i <= 5; i++) {\n  resultado += i + ' ';\n}`;
    document.getElementById('ejemplo-for-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-for-resultado').innerHTML = `<div class=\"ejemplo-resultado\">${resultado}</div>`;
}
function ejemploWhile() {
    let i = 1, resultado = '';
    while (i <= 3) {
        resultado += i + ' ';
        i++;
    }
    const codigo = `let i = 1, resultado = '';\nwhile (i <= 3) {\n  resultado += i + ' ';\n  i++;\n}`;
    document.getElementById('ejemplo-while-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-while-resultado').innerHTML = `<div class=\"ejemplo-resultado\">${resultado}</div>`;
}
function ejemploDoWhile() {
    let i = 1, resultado = '';
    do {
        resultado += i + ' ';
        i++;
    } while (i <= 2);
    const codigo = `let i = 1, resultado = '';\ndo {\n  resultado += i + ' ';\n  i++;\n} while (i <= 2);`;
    document.getElementById('ejemplo-do-while-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-do-while-resultado').innerHTML = `<div class=\"ejemplo-resultado\">${resultado}</div>`;
}
// 3. Funciones
function ejemploFunciones() {
    function suma(a, b) { return a + b; }
    let a = 3, b = 4;
    let resultado = suma(a, b);
    const codigo = `function suma(a, b) {\n  return a + b;\n}\nlet a = 3, b = 4;\nlet resultado = suma(a, b);`;
    document.getElementById('ejemplo-funciones-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-funciones-resultado').innerHTML = `<div class=\"ejemplo-resultado\">${resultado}</div>`;
}
// 4. Expresiones y operadores
function ejemploOperadores() {
    let a = 5, b = 2;
    let suma = a + b;
    let resta = a - b;
    let mult = a * b;
    let div = a / b;
    let igual = (a == b);
    let mayor = (a > b);
    let logico = (a > 0 && b > 0);
    const codigo = `let a = 5, b = 2;\nlet suma = a + b;\nlet resta = a - b;\nlet mult = a * b;\nlet div = a / b;\nlet igual = (a == b);\nlet mayor = (a > b);\nlet logico = (a > 0 && b > 0);`;
    document.getElementById('ejemplo-operadores-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-operadores-resultado').innerHTML = `<div class=\"ejemplo-resultado\">a+b=${suma}, a-b=${resta}, a*b=${mult}, a/b=${div}, a==b? ${igual}, a>b? ${mayor}, (a>0 && b>0)? ${logico}</div>`;
}
// 5. Números y fechas
function ejemploNumeros() {
    let num = 42.567;
    let entero = Number.parseInt(num);
    let flotante = Number.parseFloat(num);
    const codigo = `let num = 42.567;\nlet entero = Number.parseInt(num);\nlet flotante = Number.parseFloat(num);`;
    document.getElementById('ejemplo-numeros-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-numeros-resultado').innerHTML = `<div class=\"ejemplo-resultado\">parseInt = ${entero}, parseFloat = ${flotante}</div>`;
}
function ejemploMath() {
    let raiz = Math.sqrt(16);
    let aleatorio = Math.random();
    const codigo = `let raiz = Math.sqrt(16);\nlet aleatorio = Math.random();`;
    document.getElementById('ejemplo-math-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-math-resultado').innerHTML = `<div class=\"ejemplo-resultado\">sqrt(16) = ${raiz}, random = ${aleatorio.toFixed(2)}</div>`;
}
function ejemploDate() {
    let ahora = new Date();
    const codigo = `let ahora = new Date();`;
    document.getElementById('ejemplo-date-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-date-resultado').innerHTML = `<div class=\"ejemplo-resultado\">${ahora.toLocaleString()}</div>`;
}
// 6. Formateo de texto
function ejemploCadenas() {
    let nombre = 'Juan';
    let saludo = `Hola, ${nombre}!`;
    const codigo = "let nombre = 'Juan';\nlet saludo = `Hola, ${nombre}!`;";

    document.getElementById('ejemplo-cadenas-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-cadenas-resultado').innerHTML = `<div class=\"ejemplo-resultado\">${saludo}</div>`;
}
function ejemploString() {
    let texto = 'JavaScript';
    let mayus = texto.toUpperCase();
    let minus = texto.toLowerCase();
    let sub = texto.substring(0,4);
    const codigo = "let texto = 'JavaScript';\nlet mayus = texto.toUpperCase();\nlet minus = texto.toLowerCase();\nlet sub = texto.substring(0,4);";

    document.getElementById('ejemplo-string-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-string-resultado').innerHTML = `<div class=\"ejemplo-resultado\">upper = ${mayus}, lower = ${minus}, sub = ${sub}</div>`;
}
// 7. Colecciones indexadas
function ejemploArreglos() {
    let arr = [1,2,3,4];
    arr.push(5);
    const codigo = "let arr = [1,2,3,4];\narr.push(5);";
    document.getElementById('ejemplo-arreglos-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-arreglos-resultado').innerHTML = `<div class=\"ejemplo-resultado\">[${arr.join(', ')}]</div>`;
}
function ejemploArreglosTipados() {
    let arrTipado = new Int16Array([10,20,30]);
    const codigo = "let arrTipado = new Int16Array([10,20,30]);";
    document.getElementById('ejemplo-arreglos-tipados-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-arreglos-tipados-resultado').innerHTML = `<div class=\"ejemplo-resultado\">[${Array.from(arrTipado).join(', ')}]</div>`;
}
// 8. DOM
function ejemploDomId() {
    const codigo = "let el = document.getElementById('ejemplo-dom-id-resultado');\nel.innerHTML = '...';";
    document.getElementById('ejemplo-dom-id-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    document.getElementById('ejemplo-dom-id-resultado').innerHTML = `<div class=\"ejemplo-resultado\">Este texto fue insertado usando getElementById</div>`;
}
function ejemploDomEtiqueta() {
    let p = document.createElement('p');
    p.textContent = 'Este párrafo fue creado con createElement y appendChild';
    const codigo = "let p = document.createElement('p');\np.textContent = '...';\ndocument.getElementById('ejemplo-dom-etiqueta-resultado').appendChild(p);";
    document.getElementById('ejemplo-dom-etiqueta-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    let resultadoDiv = document.getElementById('ejemplo-dom-etiqueta-resultado');
    resultadoDiv.innerHTML = '';
    resultadoDiv.className = 'ejemplo-resultado';
    resultadoDiv.appendChild(p);
}
function ejemploDomClase() {
    let div = document.createElement('div');
    div.className = 'clase-ejemplo';
    div.textContent = 'Elemento con clase: clase-ejemplo';
    const codigo = "let div = document.createElement('div');\ndiv.className = 'clase-ejemplo';\ndiv.textContent = '...';\ndocument.getElementById('ejemplo-dom-clase-resultado').appendChild(div);";
    document.getElementById('ejemplo-dom-clase-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    let resultadoDiv = document.getElementById('ejemplo-dom-clase-resultado');
    resultadoDiv.innerHTML = '';
    resultadoDiv.className = 'ejemplo-resultado';
    resultadoDiv.appendChild(div);
}
function ejemploDomSelector() {
    let span = document.createElement('span');
    span.textContent = 'Seleccionado por querySelector';
    span.style.color = 'green';
    const codigo = "let span = document.createElement('span');\nspan.textContent = '...';\nspan.style.color = 'green';\ndocument.getElementById('ejemplo-dom-selector-resultado').appendChild(span);";
    document.getElementById('ejemplo-dom-selector-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    let resultadoDiv = document.getElementById('ejemplo-dom-selector-resultado');
    resultadoDiv.innerHTML = '';
    resultadoDiv.className = 'ejemplo-resultado';
    resultadoDiv.appendChild(span);
}
function ejemploDomColeccion() {
    let lista = document.createElement('ul');
    for(let i=1;i<=3;i++){
        let li = document.createElement('li');
        li.textContent = 'Elemento ' + i;
        lista.appendChild(li);
    }
    const codigo = "let lista = document.createElement('ul');\nfor(let i=1;i<=3;i++){\n  let li = document.createElement('li');\n  li.textContent = 'Elemento ' + i;\n  lista.appendChild(li);\n}\ndocument.getElementById('ejemplo-dom-coleccion-resultado').appendChild(lista);";
    document.getElementById('ejemplo-dom-coleccion-codigo').innerHTML = `<div class=\"ejemplo-codigo\"><pre><code>${codigo}</code></pre></div>`;
    let resultadoDiv = document.getElementById('ejemplo-dom-coleccion-resultado');
    resultadoDiv.innerHTML = '';
    resultadoDiv.className = 'ejemplo-resultado';
    resultadoDiv.appendChild(lista);
}

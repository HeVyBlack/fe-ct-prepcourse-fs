/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  const array = [];
  Object.keys(objeto).forEach((k) => {
    array.push([k, objeto[k]]);
  });

  return array;
}

/**
 * @param {string} string
 */
function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  const letras = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    ñ: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };
  string.split("").forEach((l) => {
    letras[l]++;
  });

  Object.keys(letras).forEach((l) => {
    if (!letras[l]) delete letras[l];
  });

  return letras;
}
/**
 * @param {string} string
 */
function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  const upper = [];
  const lower = [];
  string.split("").forEach((l) => {
    if (l === l.toLocaleUpperCase()) {
      upper.push(l);
    } else lower.push(l);
  });
  return upper.concat(lower).join("");
}

/**
 * @param {string} frase
 */
function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  const split = frase.split(" ");
  const join = split.map((s) => s.split("").reverse().join("")).join(" ");
  return join;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  const string = String(numero);
  const reverse = string.split("").reverse().join("");
  if (string === reverse) return "Es capicua";
  else return "No es capicua";
}

/**
 * @param {string} string
 */
function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  const letras = ["a", "b", "c"];

  return string.split("").filter((l) => !letras.includes(l)).join("");
}

/**
 * @param {string[]} arrayOfStrings
 */
function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  for (let i = 0; i < arrayOfStrings.length; i++) {
    const i_aux = arrayOfStrings[i];
    for (let b = i; b < arrayOfStrings.length; b++) {
      const b_aux = arrayOfStrings[b];
      if (b_aux.length < i_aux.length) {
        const aux = b_aux;
        arrayOfStrings[b] = i_aux;
        arrayOfStrings[i] = b_aux;
      }
    }
  }
  return arrayOfStrings;
}

/**
 * @param {number[]} array1
 * @param {number[]} array2
 */
function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  const new_array = [];
  array1.forEach((n) => {
    if (array2.includes(n) && !new_array.includes(n)) new_array.push(n);
  });

  return new_array
}

buscoInterseccion([4, 2, 3], [1, 3, 4]);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

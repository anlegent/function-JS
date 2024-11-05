// 1
function addition(a, b) {
  return a + b;
}
console.log(addition(2, 3)); // Résultat attendu : 5

// 2
function salutation(nom) {
  return "bonjour" + " " + nom;
}
console.log(salutation("Alice")); // Résultat attendu : "Bonjour Alice"

// 3
function estPair(nombre) {
  return nombre / 1;
}
console.log(estPair(4)); // Résultat attendu : true
console.log(estPair(7)); // Résultat attendu : false

// 4
function aireRectangle(longueur, largeur) {
  return longueur * largeur;
}
console.log(aireRectangle(5, 3)); // Résultat attendu : 15

// 5
function estMajuscule(chaine) {
  return chaine == chaine.toUpperCase();
}
console.log(estMajuscule("HELLO")); // Résultat attendu : true
console.log(estMajuscule("Hello")); // Résultat attendu : false

// 6
function maxDeuxNombres(a, b) {
  return Math.max(a, b);
}
console.log(maxDeuxNombres(5, 10)); // Résultat attendu : 10

// 7
function diffDeuxNombres(a, b) {
  return b - a;
}
console.log(diffDeuxNombres(5, 10)); // Résultat attendu : 10

//8
function convertirEnCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log(convertirEnCelsius(100)); // Résultat attendu : 37.7778

//9
function estMajeur(age) {
  return;
}
console.log(estMajeur(20)); // Résultat attendu : true
console.log(estMajeur(16)); // Résultat attendu : false

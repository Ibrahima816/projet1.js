// =============================================
// Défis Edabit - Niveau Facile
// =============================================

/**
 * Retourne la somme de deux nombres
 * @param {number} a - Premier nombre
 * @param {number} b - Deuxième nombre
 * @returns {number} Somme des deux nombres
 */
function addition(a, b) {
    return a + b;
}

/**
 * Convertit des minutes en secondes
 * @param {number} minutes - Nombre de minutes
 * @returns {number} Nombre de secondes
 */
function convertirEnSecondes(minutes) {
    return minutes * 60;
}

/**
 * Vérifie si un nombre est pair
 * @param {number} num - Nombre à vérifier
 * @returns {string} "pair" ou "impair"
 */
function pairOuImpair(num) {
    return num % 2 === 0 ? "pair" : "impair";
}

// =============================================
// Défis Edabit - Niveau Moyen
// =============================================

/**
 * Compte le nombre de syllabes dans un mot
 * @param {string} mot - Mot à analyser
 * @returns {number} Nombre de syllabes
 */
function compterSyllabes(mot) {
    return mot.match(/[aeiouyàâäéèêëîïôöùûü]+/gi).length;
}

/**
 * Inverse un tableau
 * @param {Array} arr - Tableau à inverser
 * @returns {Array} Tableau inversé
 */
function inverserTableau(arr) {
    return [...arr].reverse();
}

/**
 * Filtre les chaînes d'un tableau
 * @param {Array} arr - Tableau mixte
 * @returns {Array} Tableau sans les chaînes
 */
function filtrerChaines(arr) {
    return arr.filter(item => typeof item !== 'string');
}

// =============================================
// Défis Edabit - Niveau Difficile
// =============================================

/**
 * Vérifie si une phrase est un pangramme
 * @param {string} phrase - Phrase à vérifier
 * @returns {boolean} True si pangramme
 */
function estPangramme(phrase) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const phraseMin = phrase.toLowerCase();
    return [...alphabet].every(lettre => phraseMin.includes(lettre));
}

/**
 * Trouve le nombre le plus proche de zéro
 * @param {number[]} nombres - Tableau de nombres
 * @returns {number} Nombre le plus proche de zéro
 */
function plusProcheDeZero(nombres) {
    return nombres.reduce((a, b) => 
        Math.abs(b) < Math.abs(a) ? b : Math.abs(b) === Math.abs(a) ? Math.max(a, b) : a
    );
}

/**
 * Crypte une chaîne (décalage +1)
 * @param {string} str - Chaîne à crypter
 * @returns {string} Chaîne cryptée
 */
function cryptage(str) {
    return str.split('').map(c => {
        if (/[a-y]/i.test(c)) {
            return String.fromCharCode(c.charCodeAt(0) + 1);
        } else if (c === 'z') return 'a';
        else if (c === 'Z') return 'A';
        else return c;
    }).join('');
}

// =============================================
// Exemples d'utilisation
// =============================================

console.log("=== Niveau Facile ===");
console.log(addition(3, 5)); // 8
console.log(convertirEnSecondes(3)); // 180
console.log(pairOuImpair(7)); // "impair"

console.log("\n=== Niveau Moyen ===");
console.log(compterSyllabes("programmation")); // 4
console.log(inverserTableau([1, 2, 3])); // [3, 2, 1]
console.log(filtrerChaines([1, "a", "b", 2])); // [1, 2]

console.log("\n=== Niveau Difficile ===");
console.log(estPangramme("Portez ce vieux whisky au juge blond qui fume")); // true
console.log(plusProcheDeZero([-5, 2, 1, -1, 3])); // 1
console.log(cryptage("Hello World!")); // "Ifmmp Xpsme!"
// QUESTION 121:
let num = 10;
for (let i = 1; i <= num; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
// QUESTION 122:
let number = 10;
while (number > 1) {
    if (number === 5) {
        break;
    }
    console.log(number);
    number--;
}
console.log("\n");
// // QUESTION 123:
function vowel(str) {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found ${char}`);
            break;
        }
        console.log(char);
    }
}
vowel("Hello World");
export {};

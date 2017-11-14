const startTime = Date.now();
const fs = require("fs");
const oWords = fs.readFileSync("words.txt").toString().split("\n");
const words = oWords.map(function(x) {
    return x.split("").sort().join("")
});
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const input = 'pspd';
for (i = 0; i < 26; i++) {
    var out = input.split("").map(function(x) {
        var t = letters.indexOf(x) + i;
        if (t > 25) t %= 26;
        return letters[t];
    }).sort().join("");
    var indexOf = words.indexOf(out)
    if(indexOf !== -1) console.log("Answer: " + oWords[indexOf])
}
console.log('Took ' + (Date.now() - startTime) + 'ms')

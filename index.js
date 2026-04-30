/* 🕯️ KINDRED ECHO 
   A digital bridge between modern noise and timeless wisdom.
   Final Assignment - Unit 0 Foundations
*/

// --- VALUES, DATA TYPES, AND OPERATIONS ---
// Initializing user state and data
let userName = `Stranger`; 
let userThought = `I am feeling a bit stuck and uninspired today.`; 
let isEchoMatched = false;

// --- BUILDING ARRAYS ---
// Group A: Deep & Philosophical (For when life feels "stuck" or "hard")
let stoicLibrary = [
  `The forest is quiet, but it does not mean nothing is happening. Growth is often silent.`,
  `You are the sky. Everything else—the weather, the storms—is just what passes through.`,
  `The stars are only visible because of the darkness. Do not fear the shadows in your path.`
];

// Group B: Artistic & Inspirational (For when the user feels "uninspired")
let creativeLibrary = [
  `A blank page is not a void; it is a door waiting for you to walk through it.`,
  `Your eyes see the world, but your hands tell the world what they saw. Keep creating.`,
  `Design is the silent ambassador of your soul. Speak clearly today.`
];

// Group C: Peace & Calm (The default "echo" for everything else)
let groundingLibrary = [
  `Take a breath. You are exactly where you are meant to be in this moment.`,
  `Ink on paper, feet on grass. Remind yourself that you are real and you are here.`,
  `The moon does not race to be full. It takes its time, and so should you.`
];

// --- STRINGING CHARACTERS TOGETHER ---
// Creating a tactile, designed header for the console output
let letterHeader = `
--------------------------------------------------
| FROM: THE KINDRED ECHO                         |
| TO:   ${userName.toUpperCase()}                |
--------------------------------------------------
`;
console.log(letterHeader);

// --- CONTROL STRUCTURES AND LOGIC ---
let matchedEcho = ``;

/* PSEUDOCODE:
   1. Analyze userThought for specific keywords.
   2. Assign a quote from the corresponding library.
   3. Update matching status.
*/

if (userThought.includes(`uninspired`) || userThought.includes(`creative`)) {
    // --- USING ARRAYS ---
    matchedEcho = creativeLibrary[1]; 
    isEchoMatched = true;
} else if (userThought.includes(`stuck`) || userThought.includes(`hard`)) {
    matchedEcho = stoicLibrary[0];
    isEchoMatched = true;
} else {
    matchedEcho = groundingLibrary[0];
    isEchoMatched = true;
}

// --- WORKING WITH LOOPS ---
// Simulating a "searching" process for atmospheric effect
console.log(`Searching the archives for a kindred thought...`);

for (let i = 0; i < 3; i++) {
    console.log(`...echoing...`); 
}

// --- FINAL DESIGNED OUTPUT ---
// Presenting the final "Echo" in a letter format using Template Literals
let finalLetter = `
"My dear ${userName}, 

You mentioned: '${userThought}'

After reflecting, here is a thought to carry with you:
> ${matchedEcho}

Stay grounded."
--------------------------------------------------
`;

console.log(finalLetter);.

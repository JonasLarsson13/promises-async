// Promises
const theDance = "polka";

function letsDance(danceStyle) {
    const whatDance = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(danceStyle === "polka") {
                resolve("Yes, polka is my thing!");
            } else {
                reject(`Ha! ${danceStyle} kan man ju inte dansa`);
            }
        }, 2000);
    });
    return whatDance;
};

// then & catch style..
/* letsDance(theDance)
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}); */

// Async / Await..
async function checkDance() {
    const dance = await letsDance(theDance);
    console.log(dance);
}
checkDance();





// Webbprojektet
function research() {
    const research = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Researcha målgruppen");
        }, 4000);
    });
    return research;
}

function designOnPaper() {
    const designOnPaper = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Skissa upp en design på papper");
        }, 2000);
    });
    return designOnPaper;
}

function figmaDesign() {
    const figmaDesign = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Gör skissen till pixel perfect mockup I Figma / XD");
        }, 3000);
    });
    return figmaDesign;
}

function code() {
    const code = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Koda");
        }, 3000);
    });
    return code;
}

function stackOverflow() {
    const stackOverflow = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Stackoverflow:a fel");
        }, 1000);
    });
    return stackOverflow;
}

function productTest() {
    const productTest = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Testa produkten");
        }, 2000);
    });
    return productTest;
}

function celebrate() {
    const celebrate = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fira lyckat projekt");
        }, 1000);
    });
    return celebrate;
}


// .then...
/* research().then((result) => {
    console.log(result);
});
designOnPaper().then((result) => {
    console.log(result);
});
figmaDesign().then((result) => {
    console.log(result);
});
code().then((result) => {
    console.log(result);
});
stackOverflow().then((result) => {
    console.log(result);
});
productTest().then((result) => {
    console.log(result);
});
celebrate().then((result) => {
    console.log(result);
}); */


// Async / Await
async function workProject() {
    const researchLog = await research();
    console.log(researchLog);
    const designOnPaperLog = await designOnPaper();
    console.log(designOnPaperLog);
    const figmaDesignLog = await figmaDesign();
    console.log(figmaDesignLog);
    const codeLog = await code();
    console.log(codeLog);
    const stackOverflowLog = await stackOverflow();
    console.log(stackOverflowLog);
    const productTestLog = await productTest();
    console.log(productTestLog);
    const celebrateLog = await celebrate();
    console.log(celebrateLog);
};

workProject();
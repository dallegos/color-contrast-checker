const ELEMENTS = {
    textContainer: document.getElementById("textContainer"),
    backgroundInput: document.getElementById("backgroundInput"),
    foregroundInput: document.getElementById("foregroundInput"),
    resultBoxes: {
        aaNormal: document.getElementById("aaNormal"),
        aaLarge: document.getElementById("aaLarge"),
        aaaNormal: document.getElementById("aaaNormal"),
        aaaLarge: document.getElementById("aaaLarge"),
    },
};

const RATIOS = {
    aaNormal: 0.22222,
    aaLarge: 0.33333,
    aaaNormal: 0.14285,
    aaaLarge: 0.22222,
};

export { ELEMENTS, RATIOS };

const ELEMENTS = {
    textContainer: document.getElementById("textContainer"),
    backgroundInput: document.getElementById("backgroundInput"),
    foregroundInput: document.getElementById("foregroundInput"),
};

document.body.addEventListener("input", (event) => {
    switch (event.target.dataset.ref) {
        case "background":
            ELEMENTS.backgroundInput.value = event.target.value;
            ELEMENTS.textContainer.style.backgroundColor = event.target.value;
            break;

        case "foreground":
            ELEMENTS.foregroundInput.value = event.target.value;
            ELEMENTS.textContainer.style.color = event.target.value;
            break;
    }
});

function getLuminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function getContrastRatio(rgb1, rgb2) {
    const frontLuminance = getLuminance(rgb1[0], rgb1[1], rgb1[2]);
    const backLuminance = getLuminance(rgb2[0], rgb2[1], rgb2[2]);
    return backLuminance > frontLuminance
        ? (frontLuminance + 0.05) / (backLuminance + 0.05)
        : (backLuminance + 0.05) / (frontLuminance + 0.05);
}

function convertHexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

function updateView() {}

const ratio = getContrastRatio(
    convertHexToRgb(foreground),
    convertHexToRgb(background)
);

const RATIOS = {
    aaNormal: 0.22222,
    aaLarge: 0.33333,
    aaaNormal: 0.14285,
    aaaLarge: 0.22222,
};

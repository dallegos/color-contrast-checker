import { ELEMENTS, RATIOS } from "./constants.js";
import { convertHexToRgb, getContrastRatio } from "./utils.js";

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

    updateView();
});

function updateView() {
    const contrastRatio = getContrastRatio(
        convertHexToRgb(ELEMENTS.foregroundInput.value),
        convertHexToRgb(ELEMENTS.backgroundInput.value)
    );

    Object.keys(RATIOS).forEach((key) => {
        ELEMENTS.resultBoxes[key].removeAttribute("class");
        ELEMENTS.resultBoxes[key].classList.add(
            contrastRatio < RATIOS[key] ? "valid" : "invalid"
        );
    });
}

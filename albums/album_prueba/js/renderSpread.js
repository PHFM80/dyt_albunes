import { renderFace } from "./renderFace.js";

function createSpreadButton(label, title, onClick, isDisabled = false) {
    const button = document.createElement("button");
    button.className = "album-spread__button";
    button.type = "button";
    button.textContent = label;
    button.title = title;
    button.setAttribute("aria-label", title);
    button.disabled = isDisabled;
    button.addEventListener("click", onClick);

    return button;
}

function createSpreadControls(albumActions) {
    const controls = document.createElement("div");
    controls.className = "album-spread__controls";

    controls.append(
        createSpreadButton("<", "Spread anterior", albumActions.onPrevious, !albumActions.canGoPrevious),
        createSpreadButton("X", "Cerrar álbum", albumActions.onClose),
        createSpreadButton(">", "Spread siguiente", albumActions.onNext, !albumActions.canGoNext)
    );

    return controls;
}

export function renderSpread(spread, albumActions) {
    const spreadElement = document.createElement("section");
    spreadElement.className = "album-spread";
    spreadElement.dataset.spreadId = spread.id;

    const faces = document.createElement("div");
    faces.className = "album-spread__faces";

    faces.append(
        renderFace(spread.left, "left"),
        renderFace(spread.right, "right")
    );

    spreadElement.append(createSpreadControls(albumActions), faces);

    return spreadElement;
}

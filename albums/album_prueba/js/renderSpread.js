import { renderFace } from "./renderFace.js";

export function renderSpread(spread) {
    const spreadElement = document.createElement("section");
    spreadElement.className = "album-spread";
    spreadElement.dataset.spreadId = spread.id;

    spreadElement.append(
        renderFace(spread.left, "left"),
        renderFace(spread.right, "right")
    );

    return spreadElement;
}

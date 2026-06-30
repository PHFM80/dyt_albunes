export function renderFace(face, side) {
    const faceElement = document.createElement("article");
    faceElement.className = `album-face album-face--${side} album-face--${face.type}`;
    faceElement.dataset.template = face.template;

    const content = document.createElement("div");
    content.className = "album-face__content";

    const title = document.createElement("h2");
    title.textContent = face.title;

    const text = document.createElement("p");
    text.textContent = face.text;

    content.append(title, text);
    faceElement.append(content);

    return faceElement;
}

export function renderCover(coverContent, albumActions) {
    const cover = document.createElement("section");
    cover.className = "album-cover";

    const content = document.createElement("div");
    content.className = "album-cover__content";

    const title = document.createElement("h1");
    title.textContent = coverContent.title;

    const subtitle = document.createElement("p");
    subtitle.textContent = coverContent.subtitle;

    const openButton = document.createElement("button");
    openButton.className = "album-cover__button";
    openButton.type = "button";
    openButton.textContent = "Abrir álbum";
    openButton.addEventListener("click", albumActions.onOpen);

    content.append(title, subtitle, openButton);
    cover.append(content);

    return cover;
}

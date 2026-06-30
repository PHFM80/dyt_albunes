export function renderCover(coverContent) {
    const cover = document.createElement("section");
    cover.className = "album-cover";

    const content = document.createElement("div");
    content.className = "album-cover__content";

    const title = document.createElement("h1");
    title.textContent = coverContent.title;

    const subtitle = document.createElement("p");
    subtitle.textContent = coverContent.subtitle;

    content.append(title, subtitle);
    cover.append(content);

    return cover;
}

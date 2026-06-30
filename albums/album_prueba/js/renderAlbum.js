import { renderCover } from "./renderCover.js";
import { renderSpread } from "./renderSpread.js";

function getCurrentSpread(albumState) {
    return albumState.album.spreads[albumState.currentSpreadIndex];
}

export function renderAlbum(stageElement, albumState) {
    const album = document.createElement("div");
    album.className = `album album--${albumState.status}`;

    if (albumState.status === "open") {
        album.append(renderSpread(getCurrentSpread(albumState)));
    } else {
        album.append(renderCover(albumState.album.cover));
    }

    stageElement.replaceChildren();
    stageElement.append(album);
}

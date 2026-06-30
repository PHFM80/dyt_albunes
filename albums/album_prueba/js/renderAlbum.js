import { renderCover } from "./renderCover.js";
import { renderSpread } from "./renderSpread.js";

function getCurrentSpread(albumState) {
    return albumState.album.spreads[albumState.currentSpreadIndex];
}

export function renderAlbum(stageElement, albumState, albumActions) {
    const album = document.createElement("div");
    album.className = `album album--${albumState.status}`;

    if (albumState.status === "open") {
        album.append(renderSpread(getCurrentSpread(albumState), albumActions));
    } else {
        album.append(renderCover(albumState.album.cover, albumActions));
    }

    stageElement.replaceChildren();
    stageElement.append(album);
}

import { createInitialAlbumState } from "./albumState.js";
import { renderAlbum } from "./renderAlbum.js";

const stageElement = document.querySelector("#album-stage");
const albumState = createInitialAlbumState();

renderAlbum(stageElement, albumState);

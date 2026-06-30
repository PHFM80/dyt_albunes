import { createAlbumController } from "./albumController.js";
import { createInitialAlbumState } from "./albumState.js";

const stageElement = document.querySelector("#album-stage");
const albumState = createInitialAlbumState();

createAlbumController(stageElement, albumState);

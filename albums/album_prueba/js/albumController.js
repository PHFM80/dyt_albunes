import {
    closeAlbum,
    goToNextSpread,
    goToPreviousSpread,
    hasNextSpread,
    hasPreviousSpread,
    openAlbum
} from "./albumState.js";
import { renderAlbum } from "./renderAlbum.js";

export function createAlbumController(stageElement, albumState) {
    function render() {
        renderAlbum(stageElement, albumState, {
            canGoNext: hasNextSpread(albumState),
            canGoPrevious: hasPreviousSpread(albumState),
            onClose: () => {
                closeAlbum(albumState);
                render();
            },
            onNext: () => {
                goToNextSpread(albumState);
                render();
            },
            onOpen: () => {
                openAlbum(albumState);
                render();
            },
            onPrevious: () => {
                goToPreviousSpread(albumState);
                render();
            }
        });
    }

    render();
}

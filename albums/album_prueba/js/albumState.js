const testAlbum = {
    cover: {
        title: "Álbum",
        subtitle: "Portada"
    },
    spreads: [
        {
            id: "spread-1",
            left: {
                type: "cover-inside",
                template: "cover-inside",
                title: "Contratapa",
                text: "Interior de la portada."
            },
            right: {
                type: "content",
                template: "single-placeholder",
                title: "Primera cara",
                text: "Espacio reservado para el primer contenido del álbum."
            }
        },
        {
            id: "spread-2",
            left: {
                type: "content",
                template: "two-placeholders",
                title: "Segunda cara",
                text: "Base preparada para una plantilla distinta."
            },
            right: {
                type: "content",
                template: "single-placeholder",
                title: "Tercera cara",
                text: "Otra cara de prueba dentro de un nuevo spread."
            }
        }
    ]
};

export function createInitialAlbumState() {
    return {
        status: "closed",
        currentSpreadIndex: 0,
        album: testAlbum
    };
}

export function createOpenAlbumState() {
    return {
        status: "open",
        currentSpreadIndex: 0,
        album: testAlbum
    };
}

export function openAlbum(albumState) {
    albumState.status = "open";
    albumState.currentSpreadIndex = 0;
}

export function closeAlbum(albumState) {
    albumState.status = "closed";
    albumState.currentSpreadIndex = 0;
}

export function hasPreviousSpread(albumState) {
    return albumState.currentSpreadIndex > 0;
}

export function hasNextSpread(albumState) {
    return albumState.currentSpreadIndex < albumState.album.spreads.length - 1;
}

export function goToPreviousSpread(albumState) {
    if (hasPreviousSpread(albumState)) {
        albumState.currentSpreadIndex -= 1;
    }
}

export function goToNextSpread(albumState) {
    if (hasNextSpread(albumState)) {
        albumState.currentSpreadIndex += 1;
    }
}

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

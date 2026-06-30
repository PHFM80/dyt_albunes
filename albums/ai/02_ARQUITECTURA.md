# 02_ARQUITECTURA.md

# Arquitectura del Proyecto

## Objetivo

Este documento describe la estructura general de DYT_ALBUMES y la función de cada uno de sus componentes.

Su finalidad es que cualquier desarrollador pueda comprender rápidamente cómo está organizado el proyecto antes de comenzar a trabajar.

---

# Arquitectura General

La aplicación está dividida en dos grandes áreas.

```
Aplicación
│
├── Escenario
│
└── Álbum
```

El escenario representa el entorno visual donde se muestra el álbum.

El álbum representa el libro interactivo que contiene las fotografías.

Ambos conceptos deben permanecer independientes.

---

# Escenario

El escenario corresponde al elemento `<main>` de la aplicación.

Su responsabilidad es:

* ocupar toda el área disponible de la pantalla;
* mostrar el fondo del álbum;
* centrar el libro en pantalla;
* adaptarse a distintos tamaños de dispositivos.

El escenario puede cambiar dependiendo del tipo de álbum.

Ejemplos:

* mesa de madera;
* fondo blanco;
* cielo;
* paisaje;
* colores personalizados.

Modificar el escenario nunca debe afectar el funcionamiento interno del álbum.

---

# Álbum

El álbum es el elemento principal mostrado dentro del escenario.

Debe permanecer centrado y mantener una relación de aspecto adecuada.

Dentro del álbum existirán distintos componentes.

```
Álbum
│
├── Cover
├── Spread
│   ├── Face Left
│   └── Face Right
└── Template
    ├── 1 foto
    ├── 2 fotos
    ├── 3 fotos
    └── ...
```

El álbum nunca contendrá código HTML escrito manualmente para cada hoja, cara o página.

Su contenido será generado dinámicamente.

---

# Cover

El cover representa la portada exterior del álbum.

Al ingresar al álbum, sólo deberá visualizarse la portada.

Al abrir la portada, el álbum pasará al primer spread.

El primer spread deberá mostrar:

* izquierda: contratapa de la portada;
* derecha: primera cara de contenido.

---

# Hojas o Spreads

La unidad principal del álbum será la hoja o spread.

Cada spread representa una vista abierta del álbum y estará compuesto por dos caras enfrentadas.

```
Spread
│
├── Face Left
└── Face Right
```

La navegación del sistema deberá realizarse siempre por spreads.

No se deberá navegar por páginas individuales como unidad principal.

Pasar hacia adelante o hacia atrás implica cambiar de spread completo.

---

# Caras o Faces

Cada cara representa una superficie visible del álbum.

Una cara puede estar ubicada a la izquierda o a la derecha de un spread.

Cada cara podrá contener diferentes distribuciones.

Ejemplos:

* una fotografía completa;
* dos fotografías;
* tres fotografías;
* collage;
* texto;
* portada especial.

Cada cara será creada dinámicamente según la información recibida desde los archivos de configuración.

---

# Plantillas o Templates

Las plantillas definen cómo se organizan las fotografías, textos u otros elementos dentro de una cara.

La plantilla pertenece a la cara, no al spread.

Esto permite que las dos caras de una misma hoja utilicen diseños distintos.

Ejemplo:

```
Hoja 8
│
├── Cara izquierda  → plantilla de 3 fotos
└── Cara derecha    → plantilla de 1 foto panorámica
```

---

# Archivos JSON

El contenido del álbum será definido mediante archivos JSON.

Estos archivos describen completamente el álbum.

Podrán contener información como:

* hojas o spreads;
* caras izquierda y derecha;
* plantilla utilizada por cada cara;
* fotografías;
* posición;
* tamaños;
* títulos;
* textos;
* configuraciones visuales.

JavaScript utilizará estos archivos como única fuente de información para construir el álbum.

---

# CSS

Los estilos estarán divididos por responsabilidad.

Ejemplos:

* estructura;
* layout;
* componentes;
* caras;
* plantillas;
* animaciones;
* efectos.

El archivo principal será `style.css`, que importará el resto de los módulos CSS.

---

# JavaScript

La aplicación utilizará módulos ES.

El punto de entrada será `main.js`.

Cada módulo tendrá una única responsabilidad.

Ejemplos:

* carga del álbum;
* lectura del JSON;
* generación de hojas;
* generación de caras;
* aplicación de plantillas;
* renderizado;
* navegación por spreads;
* efectos visuales.

---

# Recursos

Los recursos del álbum permanecerán organizados dentro de la carpeta `assets`.

Ejemplos:

* fotografías;
* música;
* imágenes decorativas;
* fondos.

Todo recurso utilizado por el álbum deberá obtenerse desde esta ubicación.

---

# Principio de diseño

Toda la arquitectura está pensada para que el contenido del álbum sea independiente del código de la aplicación.

Modificar un álbum no debe requerir modificar la lógica de la aplicación.

La aplicación debe limitarse a interpretar la información disponible y construir automáticamente la experiencia visual correspondiente.

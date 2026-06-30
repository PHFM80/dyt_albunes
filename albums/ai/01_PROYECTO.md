# 01_PROYECTO.md

# Pablo Álbumes

## Objetivo

Este proyecto consiste en el desarrollo de un álbum de fotografías digital con apariencia y comportamiento similar a un álbum físico.

El usuario accederá mediante una URL privada y podrá recorrer el álbum de forma interactiva, abriendo la portada y pasando hojas completas, disfrutando una experiencia visual agradable y fluida.

El objetivo principal es que el usuario sienta que está observando un álbum físico real y no una página web convencional.

El álbum deberá respetar el comportamiento de un libro físico:

* al ingresar se visualizará únicamente la portada;
* al abrir la portada se mostrará la contratapa de la portada a la izquierda y la primera cara de contenido a la derecha;
* desde ese momento el álbum permanecerá abierto mostrando siempre dos caras enfrentadas;
* la navegación se realizará siempre por hojas completas.

---

# Tecnologías

El proyecto se desarrolla utilizando únicamente tecnologías web estándar.

* HTML5
* CSS3
* JavaScript (ES Modules)

No se utilizarán frameworks JavaScript.

Bootstrap podrá utilizarse únicamente en la landing del sitio principal, pero **no deberá formar parte del desarrollo interno de los álbumes**, ya que estos requieren un diseño completamente personalizado.

---

# Filosofía de desarrollo

El proyecto debe mantenerse simple, limpio y fácil de mantener.

Se prioriza:

* código claro;
* reutilización;
* separación de responsabilidades;
* modularización;
* escalabilidad.

No se deben crear archivos excesivamente grandes o difíciles de mantener.

---

# Modularización

Todo el proyecto debe desarrollarse de forma modular.

## HTML

El archivo `index.html` debe contener únicamente la estructura principal de la aplicación.

No debe contener decenas o cientos de hojas o caras escritas manualmente.

El contenido del álbum será generado dinámicamente mediante JavaScript.

El HTML debe permanecer limpio y fácil de leer.

---

## CSS

Los estilos deben dividirse por responsabilidad.

Ejemplos:

* estructura general;
* layout;
* caras;
* plantillas;
* animaciones;
* componentes;
* efectos visuales.

El archivo principal (`style.css`) será el único enlazado desde el HTML y será responsable de importar el resto de los archivos CSS.

No se deben concentrar todos los estilos en un único archivo.

---

## JavaScript

Toda la lógica deberá dividirse en módulos independientes.

Cada módulo tendrá una única responsabilidad.

Ejemplos:

* carga del álbum;
* generación de hojas y caras;
* manejo de fotografías;
* efectos visuales;
* navegación;
* animaciones.

El archivo `main.js` será el punto de entrada de la aplicación e importará los demás módulos.

---

# Modelo del álbum

La unidad principal del álbum será la hoja o spread.

Cada hoja estará compuesta por dos caras:

* cara izquierda;
* cara derecha.

Cada cara podrá utilizar una plantilla distinta para organizar fotografías, textos u otros elementos.

La plantilla pertenece a la cara, no a la hoja.

Ejemplo:

```
Hoja 8
│
├── Cara izquierda  → plantilla de 3 fotos
└── Cara derecha    → plantilla de 1 foto panorámica
```

La navegación del sistema nunca deberá realizarse por páginas individuales, sino por hojas completas.

---

# Generación dinámica

Las hojas, caras y contenidos del álbum no deberán escribirse manualmente dentro del HTML.

JavaScript será responsable de construir el contenido del álbum dinámicamente utilizando la información disponible.

Esta arquitectura permitirá mantener un código limpio y facilitar futuras ampliaciones del proyecto.

---

# Calidad del código

Durante todo el desarrollo deberán respetarse las siguientes reglas:

* escribir código limpio y legible;
* evitar duplicación de código;
* crear funciones pequeñas y específicas;
* utilizar nombres descriptivos;
* comentar únicamente cuando aporte valor;
* evitar soluciones complejas cuando exista una alternativa más simple;
* mantener una estructura consistente en todo el proyecto.

Cada decisión de implementación debe favorecer la mantenibilidad y la escalabilidad del sistema.

## Configuración del álbum

El contenido del álbum será definido mediante uno o más archivos JSON.

Estos archivos contendrán toda la información necesaria para construir el álbum dinámicamente.

Entre otros datos, podrán definir:

* orden de las hojas;
* caras izquierda y derecha de cada hoja;
* tipo de plantilla que utilizará cada cara;
* fotografías que contiene cada cara;
* posición de cada fotografía dentro de su cara;
* tamaño de cada fotografía dentro de su cara;
* títulos;
* textos descriptivos;
* elementos decorativos;
* configuraciones específicas de cada cara.

El código JavaScript será el encargado de leer estos archivos JSON y generar automáticamente el contenido del álbum.

El HTML no deberá contener hojas, caras ni páginas escritas manualmente.

Toda la información del contenido deberá provenir de los archivos JSON, permitiendo que el álbum pueda modificarse simplemente cambiando dichos archivos sin necesidad de alterar el código fuente de la aplicación.

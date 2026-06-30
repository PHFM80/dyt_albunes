# 03_REGLAS.md

# Reglas de Desarrollo

Este documento define las normas que deben respetarse durante todo el desarrollo de DYT_ALBUMES.

Todas las implementaciones deberán seguir estas reglas para mantener un proyecto consistente, limpio y fácil de mantener.

---

# Principios generales

Se debe priorizar siempre:

* simplicidad;
* legibilidad;
* reutilización;
* modularización;
* mantenibilidad;
* escalabilidad.

No se deben implementar soluciones complejas cuando exista una alternativa más simple.

---

# HTML

El archivo `index.html` debe mantenerse limpio.

Su función es únicamente definir la estructura principal de la aplicación.

No debe contener:

* hojas o caras completas del álbum;
* fotografías escritas manualmente;
* contenido repetitivo;
* grandes bloques de código.

El contenido del álbum será generado dinámicamente mediante JavaScript.

---

# CSS

Los estilos deberán dividirse en archivos pequeños según su responsabilidad.

Ejemplos:

* layout;
* componentes;
* caras;
* plantillas;
* animaciones;
* efectos.

No se deberán crear archivos CSS excesivamente grandes.

El único archivo enlazado desde el HTML será `style.css`, el cual importará el resto de los módulos.

---

# JavaScript

Toda la lógica deberá dividirse en módulos independientes.

Cada archivo debe tener una única responsabilidad.

El punto de entrada será `main.js`.

Los demás módulos deberán ser importados desde este archivo.

Se deberán utilizar ES Modules (`import` / `export`).

---

# Funciones

Las funciones deberán:

* realizar una única tarea;
* ser pequeñas;
* tener nombres descriptivos;
* evitar efectos secundarios innecesarios.

Si una función comienza a realizar varias tareas distintas, deberá dividirse en funciones más pequeñas.

---

# Componentes

Cada componente deberá ser independiente.

Siempre que sea posible, un componente no deberá conocer el funcionamiento interno de otro.

La comunicación entre componentes deberá realizarse mediante parámetros o estructuras de datos claramente definidas.

---

# JSON

El contenido del álbum será definido mediante archivos JSON.

JavaScript nunca deberá depender de información escrita manualmente dentro del HTML.

Toda la información relacionada con:

* hojas o spreads;
* caras izquierda y derecha;
* fotografías;
* textos;
* plantillas;
* posiciones;
* configuraciones;

deberá obtenerse desde los archivos JSON.

---

# Modelo de navegación

La unidad principal del álbum será la hoja o spread.

Cada spread estará compuesto por dos caras:

* cara izquierda;
* cara derecha.

La navegación siempre deberá realizarse por spreads completos.

No se deberá implementar navegación basada en páginas individuales como unidad principal.

Cada cara podrá utilizar una plantilla distinta.

La plantilla pertenece a la cara, no al spread.

---

# Reutilización

Antes de crear código nuevo deberá verificarse si existe una función, componente o módulo que pueda reutilizarse.

No se deberá duplicar código.

---

# Organización

Cada archivo debe tener una responsabilidad clara.

Si un archivo comienza a crecer demasiado, deberá dividirse en nuevos módulos.

La modularización es un requisito del proyecto.

---

# Nombres

Utilizar nombres descriptivos y consistentes.

Evitar nombres genéricos como:

* data
* info
* temp
* prueba
* test

Siempre que sea posible, los nombres deberán indicar claramente su responsabilidad.

---

# Comentarios

Los comentarios deberán explicar el propósito del código y no describir lo que ya resulta evidente.

No comentar código innecesariamente.

Un código claro requiere pocos comentarios.

---

# Dependencias

No incorporar librerías, frameworks o dependencias externas sin una justificación técnica.

Toda nueva dependencia deberá ser propuesta antes de ser incorporada al proyecto.

---

# Calidad del código

Todo el código generado deberá ser:

* claro;
* ordenado;
* consistente;
* reutilizable;
* fácilmente mantenible.

La prioridad del proyecto es la calidad de la arquitectura antes que la velocidad de implementación.

---

# Control de versiones

Los cambios funcionales importantes deberán finalizar con un commit en Git.

Los commits deberán representar funcionalidades completas o cambios coherentes.

Se deberán evitar commits demasiado pequeños que no aporten una unidad clara de revisión.

El mensaje del commit deberá ser descriptivo y explicar claramente qué se implementó.

Antes de realizar un commit, se deberá mostrar el mensaje sugerido para aprobación.

No se deberán realizar commits automáticos sin confirmación.

El objetivo es mantener un historial claro del desarrollo y poder revisar la evolución del proyecto.

---

# Ante cualquier duda

Antes de realizar cambios importantes en la arquitectura, estructura de carpetas, organización del código o incorporación de nuevas tecnologías, se deberá consultar y obtener aprobación.

No se deberán tomar decisiones estructurales automáticamente.

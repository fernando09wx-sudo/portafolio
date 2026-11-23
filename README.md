# Portafolio · Fernando Acuña — Desarrollador Web (Guayaquil, Ecuador)

Colección de **4 landing pages** estáticas creadas como muestra de trabajo. Están hechas solo con **HTML + CSS + un poco de JavaScript (vanilla)**: sin frameworks, sin dependencias y sin paso de compilación. Basta con abrir `index.html` en el navegador o subir la carpeta a cualquier hosting estático (GitHub Pages, Netlify, Vercel, etc.).

> Los negocios, nombres, direcciones, precios y testimonios son **ficticios** y se usan solo con fines demostrativos. Las fotografías fueron generadas con IA para este portafolio.

## Proyectos

| Carpeta | Proyecto | Rubro | Secciones destacadas |
|---|---|---|---|
| `danza/` | **Ritmo Studio – Academia de Danza** | Academia de baile | Clases (salsa, bachata, ballet, urbano), tabla de horarios desplazable en móvil, profesores, testimonios, 3 planes de precios, formulario de inscripción y botón flotante de WhatsApp. |
| `mariscos/` | **El Muelle – Mariscos** | Restaurante | Carta con platos y precios en USD, historia del local, banner de ambiente, formulario de reservas con horario de atención y sección de ubicación con mapa ilustrativo (sin API). |
| `inmobiliaria/` | **Casa Norte Inmobiliaria** | Bienes raíces | Hero con buscador (comprar/alquilar, zona, tipo, precio), cifras, grilla de propiedades con precio, habitaciones, baños y m², servicios, testimonios y formulario de contacto. |
| `clinica-dental/` | **Sonrisa Clínica Dental** | Salud | Servicios con precios de referencia, por qué elegirnos, equipo médico, formulario para agendar cita, preguntas frecuentes en acordeón (JS) y botón de WhatsApp. |

`index.html` (raíz) es la portada del portafolio: presentación, tarjetas con vista previa de cada proyecto, servicios, proceso de trabajo y sección de contacto.

## Características comunes

- **Mobile-first y responsive**: se adaptan a celular, tablet y escritorio.
- **Menú hamburguesa** en móvil y **desplazamiento suave** entre secciones.
- **Accesibilidad**: textos alternativos en imágenes, `label` en todos los campos, contraste adecuado, enlace “Saltar al contenido”, estados de foco visibles y soporte para `prefers-reduced-motion`.
- **Formularios solo de front-end**: validan los campos requeridos, evitan el envío y muestran un mensaje de agradecimiento.
- **Identidad visual propia** en cada página (paleta de colores y tipografía de Google Fonts distintas).
- **Imágenes optimizadas** en JPG (máx. 1600 px, calidad ~80).

## Estructura

```
portafolio/
├── index.html, styles.css, main.js, img/
├── danza/           index.html, styles.css, main.js, img/
├── mariscos/        index.html, styles.css, main.js, img/
├── inmobiliaria/    index.html, styles.css, main.js, img/
└── clinica-dental/  index.html, styles.css, main.js, img/
```

## Personalización rápida

- **Colores**: cada `styles.css` define su paleta en variables CSS dentro de `:root`.
- **WhatsApp**: los botones apuntan por ahora a la sección de contacto/formulario de cada página. Para conectarlos, reemplaza el `href` por `https://wa.me/593XXXXXXXXX?text=Hola`.
- **Formularios**: para recibir los mensajes de verdad, conecta el `<form>` a un servicio como Formspree o Netlify Forms.

---

Diseñado y desarrollado por **Fernando Acuña** · Guayaquil, Ecuador.

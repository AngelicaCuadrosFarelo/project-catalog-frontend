# Catálogo Frontend – Colchonería

Aplicación frontend del sistema de catálogo para una colchonería.
Permite visualizar productos, categorías y detalles, consumiendo la API del backend.

# Descripción del Proyecto

Este repositorio contiene la aplicación web encargada de:

Visualizar el catálogo de productos (colchones, bases, cabeceros, accesorios)

- Filtrar por categorías

- Ver detalle de productos

- Consultar disponibilidad

- Interactuar con el backend mediante API REST

La aplicación está diseñada con enfoque en experiencia de usuario, diseño responsivo y arquitectura escalable.

- Arquitectura

Arquitectura basada en componentes:

Pages → Components → Services → API

# Estructura lógica:

Pages: Vistas principales (Home, Productos, Detalle, Admin)

Components: Componentes reutilizables (Header, Landing, Products, Footer, etc.)

Services: Conexión y consumo de API

Hooks / Store: Manejo de estado global.

# Funcionalidades Principales

✅ Listado de productos

✅ Filtro por categorías

✅ Vista detalle de producto

✅ Diseño responsivo

✅ Consumo dinámico de API

🛒 Preparado para futura integración de carrito de compras

🎨 Diseño

UI enfocada en experiencia de usuario

Adaptable a dispositivos móviles

Componentes reutilizables

Buenas prácticas de accesibilidad.

📈 Futuras Mejoras

Carrito de compras

Sistema de pagos

Panel administrativo completo

Sistema de reseñas

Wishlist

SEO optimizado

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

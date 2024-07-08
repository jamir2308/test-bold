# Proyecto de Dashboard en Next.js con TypeScript

Este proyecto es un dashboard desarrollado con Next.js y TypeScript que incluye funcionalidades como filtrado de datos, persistencia de filtros, y pruebas unitarias utilizando Jest y React Testing Library. El proyecto está diseñado para ser responsive y se adapta a diferentes dispositivos.

## Contenido

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Pruebas](#pruebas)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Características

- Filtrado de datos por "Hoy", "Esta Semana" y "Julio".
- Persistencia de filtros utilizando Session Storage.
- Diseño responsivo utilizando breakpoints de MUI y media queries.
- Pruebas unitarias con Jest y React Testing Library.

## Tecnologías

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI (MUI)](https://mui.com/)
- [styled-components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/tu-proyecto.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd tu-proyecto
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

## Ejecución

1. Inicia el servidor de desarrollo:

    ```bash
    npm run dev
    ```

2. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Pruebas

1. Ejecuta las pruebas unitarias:

    ```bash
    npm test
    ```

2. Para ejecutar las pruebas en modo watch:

    ```bash
    npm run test:watch
    ```

## Estructura del Proyecto

```plaintext
.
├── public
│   ├── payment
│   │   ├── bancolombia.jpg
│   │   ├── daviplata.svg
│   │   ├── mastercard.svg
│   │   ├── nequi.png
│   │   ├── pse.png
│   │   └── visa.svg
│   ├── filter-outline.svg
│   ├── info-circle.svg
│   ├── link.svg
│   ├── logo-bold.png
│   ├── question.svg
│   └── terminal.svg
├── src
│   ├── components
│   │   ├── FilterTabs
│   │   │   ├── Index.tsx
│   │   │   └── style.ts
│   │   ├── FilterModal
│   │   │   ├── Index.tsx
│   │   │   └── style.ts
│   │   ├── SalesCard
│   │   │   ├── Index.tsx
│   │   │   └── style.ts
│   │   ├── Table
│   │   │   ├── Index.tsx
│   │   │   └── style.ts
│   │   └── Header
│   │       ├── Index.tsx
│   │       └── style.ts
│   ├── pages
│   │   ├── api
│   │   │   └── transactions.ts
│   │   └── index.tsx
│   ├── styles
│   │   └── colors.ts
│   ├── utils
│   │   ├── constants.ts
│   │   └── sessionStorage.ts
│   └── types
│       └── transactions.ts
├── __tests__
│   ├── components
│   │   ├── FilterTabs
│   │   │   └── Index.test.tsx
│   │   ├── FilterModal
│   │   │   └── Index.test.tsx
│   │   ├── SalesCard
│   │   │   └── Index.test.tsx
│   │   ├── Table
│   │   │   └── Index.test.tsx
│   │   └── Header
│   │       └── Index.test.tsx
├── jest.config.js
├── jest.setup.ts
├── next-env.d.ts
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

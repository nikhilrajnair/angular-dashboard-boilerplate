# Angular Dashboard Boilerplate

### Structure of application

      src/
      ├── app/
      │   ├── core/
      │   │   ├── interceptors/
      │   │   └── services/
      │   ├── layout/
      │   │   ├── header/
      │   │   ├── footer/
      │   │   └── sidebar/
      │   ├── shared/
      │   │   ├── components/
      │   │   └── pipes/
      │   ├── modules/
      │   │   ├── dashboard/
      │   │   │   ├── dashboard.component.ts
      │   │   │   ├── dashboard.component.html
      │   │   │   ├── dashboard.component.scss
      │   │   │   └── dashboard-routing.module.ts
      │   │   └── other-modules/
      │   │       ├── other-module/
      │   │       │   ├── other-module.component.ts
      │   │       │   ├── other-module.component.html
      │   │       │   ├── other-module.component.scss
      │   │       │   └── other-module-routing.module.ts
      │   └── app-routing.module.ts
      │   └── app.component.ts
      │   └── app.component.html
      │   └── app.component.scss
      │   └── app.module.ts
      ├── assets/
      │   ├── images/
      │   └── styles/
      │       ├── variables.scss
      │       ├── mixins.scss
      │       ├── global.scss
      │       ├── light-theme.scss
      │       └── dark-theme.scss
      ├── environments/
      ├── index.html
      ├── main.ts
      ├── polyfills.ts
      ├── styles.scss
      ├── tsconfig.app.json
      ├── tsconfig.json
      └── tsconfig.spec.json


Here's a brief explanation of each folder and file:

    app/core: This folder contains the core functionality of your app, such as HTTP interceptors and services.

    app/layout: This folder contains the header, footer, and sidebar components that make up your app's layout.

    app/shared: This folder contains shared components and pipes that can be used throughout your app.

    app/modules: This folder contains lazy-loaded feature modules. Each module has its own folder with a routing module and a component file.

    app-routing.module.ts: This file defines the routes for your app.

    app.component.ts: This file defines the root component for your app.

    app.component.html: This file defines the template for the root component.

    app.component.scss: This file defines the styles for the root component.

    app.module.ts: This file defines the main module for your app.

    assets/images: This folder contains images used in your app.

    assets/styles: This folder contains the SCSS files for your app's styles.

    environments: This folder contains environment-specific configuration files.
    
    index.html: This file is the entry point for your app.

    main.ts: This file bootstraps your app.

    polyfills.ts: This file is required to support older browsers.

    styles.scss: This file imports the global styles for your app.

    tsconfig.app.json: This file is the TypeScript configuration for your app.

    tsconfig.json: This file is the global TypeScript configuration for your app.

    tsconfig.spec.json: This file is the TypeScript configuration for your app's tests.
    

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

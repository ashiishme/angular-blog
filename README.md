# Angular Blog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9 and it uses WordPress API to fetch blog content.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Setup WordPress Headless CMS

Download <a target="_blank" href="https://github.com/ashiishme/wordpress-headless-cms">WordPress Headless CMS</a> from my `wordpress-headless-cms` repository.

<a href="https://wordpress.org/download/">Download</a> & Install WordPress on your server and complete all setup.

Upload `wordpress-headless-cms` repository in your WordPress theme directory. 
`your-wp-dir > wp-content > themes`

Activate this theme.

Open `index.php` file and update the `header location url` to your own application url.

In Angular`blog-api.service` file. Update the `URL` for your api.

## WordPress Rest API

https://developer.wordpress.org/rest-api/

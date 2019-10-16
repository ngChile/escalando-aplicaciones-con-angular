[circle-ci-url]: https://circleci.com/gh/ngChile/escalando-aplicaciones-con-angular
[circle-ci-image]: https://circleci.com/gh/ngChile/escalando-aplicaciones-con-angular.svg?style=shield

[codecov-url]: https://codecov.io/gh/ngChile/escalando-aplicaciones-con-angular
[codecov-image]: https://codecov.io/gh/ngChile/escalando-aplicaciones-con-angular/branch/docs%2Fbadges-and-docs/graph/badge.svg

[greenkeeper-url]: https://greenkeeper.io/
[greenkeeper-image]: https://badges.greenkeeper.io/ngChile/escalando-aplicaciones-con-angular.svg

[![CircleCI][circle-ci-image]][circle-ci-url] [![Greenkeeper badge][greenkeeper-image]][greenkeeper-url] [![codecov][codecov-image]][codecov-url]

# Escalando Aplicaciones con Angular 
[![AngularChile](https://avatars0.githubusercontent.com/u/39106599?s=100&u=f1bc8a9d967080db189cd68d87aac1d900f65fd0&v=4)](https://medium.com/angular-chile)  ***Un repositorio con deuda técnica eterna***

Este repositorio es un proyecto vivo que busca lograr que toda la comunidad del software pueda colaborar enseñando a través de artículos, cursos personalizados, etc. e integrando sus códigos a este.

### Pre-requisitos
- Node.js >= 8
- Git básico
- Conocimiento Básico en Angular (sino te recomendamos el [Tutorial Oficial de Angular](https://angular.io/tutorial) para comenzar).

### Antes de comenzar
Para un mejor entendimiento de las herramientas seleccionadas te recomendamos leer la sección [Stack Tecnológico](docs/Stack.md).

### Proceso de Integración Continua
Existen una serie de herramientas gratuitas para proyectos de código libre. En nuestro caso utilizamos las siguientes:

**CircleCI**: Cada vez que alguien contribuye al proyecto se corre el proceso de integración continua y si todo sale bien, se genera una subida a producción.

**Heroku**: Plataforma donde desplegamos la aplicación para los ambientes *Staging* y *Producción*.
Puntualmente se utiliza [Heroku Registry](https://devcenter.heroku.com/articles/container-registry-and-runtime) para correr un contenedor Docker y una aplicación Express que sirve mocks en vez de datos reales (estos mismos mocks son utilizados en el proceso de desarrollo)

El estilo de control de versiones que utiliza este repositorio es `feature-branch` (para más información revisa [este link](https://martinfowler.com/bliki/FeatureBranch.html)) por la cual el flujo de integración continua esta pensado de la siguiente manera:

![Angular Chile proceso de Integración continua](docs/images/ng-angular-ci-style.png)

-   Enlace a ambiente de Staging: https://ng-chile-angular-staging.herokuapp.com/
-   Enlace a ambiente de Producción: https://ng-chile-angular.herokuapp.com/ 

### Contribuciones
Para poder contribuir a este proyecto lea estas [instrucciones](CONTRIBUTING.md).

### Autores
- [Gonzalo Pincheira](https://github.com/gpincheiraa)
- Nicolás Ávila
- Sebastián Jiménez
- Maikel Perez

### Contacto:

Siguenos en twitter: https://twitter.com/angularChile
Únete al slack de Comunidad Angular: angular-chile.slack.com

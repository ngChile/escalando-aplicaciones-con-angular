# Escalando Aplicaciones con Angular

> Un repositorio con deuda técnica eterna

![Portada](docs/images/repo-cover.png)

<p align="center">
  <a href="https://circleci.com/gh/ngChile/escalando-aplicaciones-con-angular">
    <img src="https://circleci.com/gh/ngChile/escalando-aplicaciones-con-angular.svg?style=shield" alt="Build Status on CircleCI" />
  </a>
  <a href="https://codecov.io/gh/ngChile/escalando-aplicaciones-con-angular">
    <img src="https://codecov.io/gh/ngChile/escalando-aplicaciones-con-angular/branch/docs%2Fbadges-and-docs/graph/badge.svg" alt="Unit tests Coverage" />
  </a>
  <a href="https://www.codefactor.io/repository/github/ngchile/escalando-aplicaciones-con-angular">
    <img src="https://www.codefactor.io/repository/github/ngchile/escalando-aplicaciones-con-angular/badge" alt="CodeFactor" />
  </a>
  <a href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/ngChile/escalando-aplicaciones-con-angular.svg" alt="Greenkeeper service enabled status" />
  </a>
  <a href="https://snyk.io/test/github/ngChile/escalando-aplicaciones-con-angular">
    <img src="https://snyk.io/test/github/ngChile/escalando-aplicaciones-con-angular/badge.svg" alt="Snyk service vulnerabilities reported" />
  </a>
  <a href="https://github.com/ngChile/escalando-aplicaciones-con-angular/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/ngChile/escalando-aplicaciones-con-angular.svg" alt="License" />
  </a>
</p>

Este repositorio es un proyecto vivo que busca lograr que toda la comunidad del software pueda colaborar enseñando a través de artículos, cursos personalizados, etc. e integrando sus códigos a este.

## Pre-requisitos

- Node.js >= 8
- Git básico
- Conocimiento Básico en Angular (sino te recomendamos el [Tutorial Oficial de Angular](https://angular.io/tutorial) para comenzar).

## Antes de comenzar

Para un mejor entendimiento de las herramientas seleccionadas te recomendamos leer la sección [Stack Tecnológico](docs/Stack.md).

## Proceso de Integración Continua

Existen una serie de herramientas gratuitas para proyectos de código libre. En nuestro caso utilizamos las siguientes:

- **CircleCI**: Cada vez que alguien contribuye al proyecto se corre el proceso de integración continua y si todo sale bien, se genera una subida a producción.
- **Heroku**: Plataforma donde desplegamos la aplicación para los ambientes _Staging_ y _Producción_.

Puntualmente se utiliza [Heroku Registry](https://devcenter.heroku.com/articles/container-registry-and-runtime) para correr un contenedor Docker y una aplicación Express que sirve mocks en vez de datos reales (estos mismos mocks son utilizados en el proceso de desarrollo)

El estilo de control de versiones que utiliza este repositorio es `feature-branch` (para más información revisa [este link](https://martinfowler.com/bliki/FeatureBranch.html)) por la cual el flujo de integración continua esta pensado de la siguiente manera:

![Angular Chile proceso de Integración continua](docs/images/ng-angular-ci-style.png)

- Enlace a ambiente de Staging: https://ng-chile-angular-staging.herokuapp.com/
- Enlace a ambiente de Producción: https://ng-chile-angular.herokuapp.com/

## Contribuciones

Para poder contribuir a este proyecto lea estas [instrucciones](CONTRIBUTING.md).

## Autores

- [Gonzalo Pincheira](https://github.com/gpincheiraa)
- [Nicolás Ávila](https://github.com/nicoavila)
- [Sebastián Jiménez](https://github.com/sbstn-jmnz)
- [Maikel Perez](https://github.com/mdperez86s)

### Contribuidores
Gracias a todos quienes han enviado un Pull Request a este repositorio.
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/gpincheiraa"><img src="https://avatars0.githubusercontent.com/u/5608336?v=4" width="100px;" alt="gpincheiraa"/><br /><sub><b>gpincheiraa</b></sub></a><br /><a href="https://github.com/ngChile/escalando-aplicaciones-con-angular/commits?author=gpincheiraa" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/mdperez86"><img src="https://avatars2.githubusercontent.com/u/13334210?v=4" width="100px;" alt="mdperez86"/><br /><sub><b>mdperez86</b></sub></a><br /><a href="https://github.com/ngChile/escalando-aplicaciones-con-angular/commits?author=mdperez86" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sbstn-jmnz"><img src="https://avatars1.githubusercontent.com/u/4334071?v=4" width="100px;" alt="sbstn-jmnz"/><br /><sub><b>sbstn-jmnz</b></sub></a><br /><a href="https://github.com/ngChile/escalando-aplicaciones-con-angular/commits?author=sbstn-jmnz" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/YerkoPalma"><img src="https://avatars1.githubusercontent.com/u/5105812?v=4" width="100px;" alt="YerkoPalma"/><br /><sub><b>YerkoPalma</b></sub></a><br /><a href="https://github.com/ngChile/escalando-aplicaciones-con-angular/commits?author=YerkoPalma" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/tacevedo"><img src="https://avatars0.githubusercontent.com/u/14237453?v=4" width="100px;" alt="tacevedo"/><br /><sub><b>tacevedo</b></sub></a><br /><a href="https://github.com/ngChile/escalando-aplicaciones-con-angular/commits?author=tacevedo" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/apps/greenkeeper"><img src="https://avatars3.githubusercontent.com/in/505?v=4" width="100px;" alt="greenkeeper[bot]"/><br /><sub><b>greenkeeper[bot]</b></sub></a><br /><a href="https://github.com/ngChile/escalando-aplicaciones-con-angular/commits?author=greenkeeper[bot]" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/llekn"><img src="https://avatars2.githubusercontent.com/u/2346636?v=4" width="100px;" alt="llekn"/><br /><sub><b>llekn</b></sub></a><br /><a href="https://github.com/ngChile/escalando-aplicaciones-con-angular/commits?author=llekn" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/JoZero"><img src="https://avatars3.githubusercontent.com/u/45615986?v=4" width="100px;" alt="JoZero"/><br /><sub><b>JoZero</b></sub></a><br /><a href="https://github.com/ngChile/escalando-aplicaciones-con-angular/commits?author=JoZero" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sebacaro"><img src="https://avatars2.githubusercontent.com/u/3081701?v=4" width="100px;" alt="sebacaro"/><br /><sub><b>sebacaro</b></sub></a><br /><a href="https://github.com/ngChile/escalando-aplicaciones-con-angular/commits?author=sebacaro" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/nicoavila"><img src="https://avatars0.githubusercontent.com/u/602639?v=4" width="100px;" alt="nicoavila"/><br /><sub><b>nicoavila</b></sub></a><br /><a href="https://github.com/ngChile/escalando-aplicaciones-con-angular/commits?author=nicoavila" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/booleanchile"><img src="https://avatars2.githubusercontent.com/u/46203382?v=4" width="100px;" alt="booleanchile"/><br /><sub><b>booleanchile</b></sub></a><br /><a href="https://github.com/ngChile/escalando-aplicaciones-con-angular/commits?author=booleanchile" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/glabrat"><img src="https://avatars2.githubusercontent.com/u/19995834?v=4" width="100px;" alt="glabrat"/><br /><sub><b>glabrat</b></sub></a><br /><a href="https://github.com/ngChile/escalando-aplicaciones-con-angular/commits?author=glabrat" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/snyk-bot"><img src="https://avatars2.githubusercontent.com/u/19733683?v=4" width="100px;" alt="snyk-bot"/><br /><sub><b>snyk-bot</b></sub></a><br /><a href="https://github.com/ngChile/escalando-aplicaciones-con-angular/commits?author=snyk-bot" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## Contacto

- Siguenos en Twitter: [https://twitter.com/angularChile](https://twitter.com/angularChile)
- Únete al slack de Comunidad Angular: [angular-chile.slack.com](angular-chile.slack.com)




##Tecnologías

- Angular 8
- Stubby
- Jest
- Cypress
- Docker


##Objetivos del Stack

- Buena experiencia de desarrollo
- Stack constantemente actualizado
- 0% dependencia de los servicios Backend

### Descripción

El stack seleccionado nace de los años de experiencia de los contribuidores de este repositorio y la idea es mantenerlo en constante actualización.

#### Ejecución de tareas a través del CLI
Cómo base utilizamos Angular >= 8 debido a que la comunidad Angular Chile mantiene 2 proyectos:
 - [ngx-devkit-cypress-builder](https://github.com/ngChile/ngx-devkit-cypress-builder)
 - [ngx-devkit-stubby-builder](https://github.com/ngChile/ngx-devkit-stubby-builder)

Estos aprovechan las ventajas de Architect Api de Angular que está disponible desde la versión 8 y nos permite extender las funcionalidades del CLI permitiendo que integremos Librerías ajenas al mundo Angular como es en este caso en el que extendemos las pruebas "E2E" cambiando el ejecutor que viene por defecto por [Cypress](https://www.cypress.io/) y la forma de servir la aplicación para no tener dependencias con el Backend utilizando la librería [Stubby](https://github.com/mrak/stubby4node)

El ejecutor de pruebas unitarias también se cambió por [Jest](https://jestjs.io/).

Las tareas principales para interactuar con este proyecto son 5:

`npm start` 

`npm test`

`npm run lint`

`npm run e2e`

`npm build`

### Despliegue

El despliegue se hace a través de Docker sobre el cual montamos un simple servidor escrito en NodeJS a través del framework Express que se encargará de servir el contenido estático generado por Angular como "Single Page Aplication".
Utilizamos Docker ya que nos permite estandarizar las condiciones en las cuales se despliega esta aplicación en ambientes distintos a producción y que en todos estos la experiencia sea la misma y a la vez permitiernos replicar localmente esas condiciones a través de una tecnología en Común (Docker).

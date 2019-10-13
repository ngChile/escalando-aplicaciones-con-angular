## Integración Continua

Cada vez que alguien contribuye al proyecto se corre el proceso de integración continua y si todo sale bien se genera una subida a producción.

Para los efectos de este repositorio se considera una *contribución* `cualquier código que sea mezclado en la rama master proveniente de una rama propia del repositorio o desde un repositorio clonado (fork).`

Una vez que un código es mezclado en la rama `master` se ejecuta un flujo de tareas representado en la siguiente figura:

<!-- TODO: figura basada en https://circleci.com/workflow-run/25bc5615-9ade-4ffb-916d-7c8ba5cec4fa -->

Como se observa en la figura existen 2 tipos de tareas: ejecutadas en paralelo o linealmente. A continuación de describen para estas tareas en que categoría se enmarcan y su finalidad.

####Tareas concurrentes
Cualquier error en alguna de estas tareas hará que el flujo se detenga y nos informe tempranamente si estamos incumpliendo los principales 

<!-- TODO: deberían incluirse otros 2 pilares fundamentales: Seguridad de las dependencias y A11y (que puede ser parte de la tarea e2e o por separado) -->

- **linter:** Esta tarea se encarga de ejecutar el linter de código que viene integrado por defecto en Angular y que se asegurará que se cumplen "Las reglas Ortográficas" y las buenas prácticas recomendadas por Angular.
    
    --
    <!-- TODO: en unit tests comentar también que existe la generación de un reporte de cobertura a través del servicio codecov el cual podemos ver en detalle en la interfaz de Circle CI -->
- **unit-tests:** Esta tarea se encarga de ejecutar pruebas unitarias definidas para el código fuente de la aplicación así como su integración con el árbol DOM. A diferencia de la tarea anterior en este caso se optó por cambiar la herramienta por defecto **Karma** por **Jest**. Todo esto a través del archivo de arquitectura de Angular para este proyecto `angular.json`
y el paquete `@angular-builders/jest`.

    --

- **e2e:** Esta tarea se encarga de ejecutar pruebas funcionales en donde a través de la herramienta **Cypress** y al igual que la tarea anterior esto fue configurado para reemplazar la herramienta por defecto **Protractor** y esto a través de los archivo `angular.json`, `cypress.json` y utilizando el paquete `ngx-devkit-cypress-builder`*.


####Tareas dependientes y Manuales

-  **build**
 
-  **staging-deploy** 

-  **smoke-test-staging**

-  **production-approval**

-  **smoke-test-production**

####Estrategias de cachés para mejor ejecución del Pipeline de Integración Continua en Circle CI

Para acelerar la ejecución de este pipeline se llevan a cabo algunas buenas prácticas como:
- Guardar y Restaurar como caché distribuido las dependencias instaladas asociadas al commit.
- Guardar y Restaurar el código empaquetado de la aplicación para su despliegue en los distintos ambientes disponibles: Staging y Producción.

####Referencias

\**Paquetes mantenidos por la comunidad Angular Chile*
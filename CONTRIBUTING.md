# Contribuyendo al proyecto

Gracias por tu interés en colaborar en este proyecto. Para que toda la comunidad se vea beneficiada de tu aporte te pedimos por favor seguir las siguientes guías para que se mantengan las pautas básicas definidas para este proyecto. Cualquier crítica o mejora a este proceso puedes contactarnos a través de los canales oficiales de la Comunidad Angular Chile y estaremos encantados de discutirlo.

### Contenidos
 - [Código de Conducta](#coc)
 - [¿Tienes Alguna duda relacionada a este Stack o sobre Angular?](#question)
 - [¿Encontraste un error?](#issue)
 - [Mejoras](#feature)
 - [Proceso de contribución](#submit)

## <a name="coc"></a> Código de conducta
Nuestra comunidad es totalmente inclusiva. Si quieres colaborar revisa nuestro [Código de Conducta](https://github.com/ngChile/code_of_conduct).

## <a name="question"></a> ¿Tienes Alguna duda relacionada a este Stack o sobre Angular?
No abras *Issues* para preguntas de soporte en general. De esta manera podremos enfocar nuestros esfuerzos en resolver los errores y apoyar todas las mejoras propuestas para este repositorio.
Siempre vamos a recomendar que cualquier tipo de duda ajena al contexto de este repositorio sea resuelta en [Stack Overflow](https://stackoverflow.com/questions/tagged/angular) donde encontrarás un toda la ayuda que necesites y si quieres contactarnos directamente te invitamos a unirte a nuestro [Slack](https://angular-chile.slack.com).


## <a name="issue"></a> ¿Encontraste un error?
Si encontraste un error por favor crear un *Issue* en nuestro proyecto principal. [Click acá](https://github.com/ngChile/escalando-aplicaciones-con-angular/issues/new)

## <a name="feature"></a> Mejoras
Si crees que tienes una idea que puede aportar o quieres solicitar a la comunidad que se haga una mejora en el repositorio crea un *Issue* con tu solicitud.
[Click acá](https://github.com/ngChile/escalando-aplicaciones-con-angular/issues/new)

## <a name="submit"></a> Guía de contribución

### <a name="submit-issue"></a> Genera un Issue

Cualquier contribución es considerada como una mejora o una solución a un error por lo cuál el primer paso para la contribución es crear un Issue.
Antes de crear un Issue por favor revisa si este ya fue reportado así no duplicamos información.

Si tu contribución esta resolviendo un error agrega a la descripción del Issue un ejemplo de como reproducir el caso de error.

### <a name="create-fork"></a> Crea un fork

Ya que para la comunidad no es tarea fácil tener el tiempo de manejar los permisos necesarios para que cada nuevo contribuidor pueda crear ramas en este repositorio, te pedimos hagas una copia (fork) de este proyecto utilizando tu cuenta personal y trabajes en tu contribución. Una vez lista podrás enviarnos un [Pull Request](#pull-request)


### <a name="create-branch"></a> Crea una rama con un identificador de su propósito

Una vez tengas la copia del repositorio es muy importante que crees una rama que siga el siguiente formato:

```
  <identificador>/<descripcion>
```

Ejemplos:

```
  feature/ngxs-integration
  bugfix/no-unsubscribe-memory-leak
  ci/new-job-visual-regression-tests
```

##### Identificador
Se considera obligatorio para el nombre de las ramas ya que definirá el tipo de aumento de versión basado en [Semantic Versioning](https://semver.org/). 
Valores posibles:
  - `feature`: Representa una nueva funcionalidad.
  - `bugfix`: Representa un error que será solucionado.
  - `docs`: Se agrega o edita la documentación.
  - `ci`: Representa alguna mejora o edición del Pipeline de este proyecto configurado a través de Circle Ci.
  - `test`: Representa una mejora exclusivamente relacionada a pruebas de software (las pruebas de software también deberían ser creadas en los features y bugfixes). Un ejemplo de esto podría ser agregar cobertura, cambiar ejecutor de pruebas, solucionar problemas en las pruebas y más.
  - `chore`: Representa cualquier tarea ajena a las descritas anteriormente. Por ejemplo actualizar las dependencias del proyecto.
 
##### Descripción

Cualquier nombre separado por el caractér `-` que represente en que se quiere colaborar.

Tanto `identificador` como `descripcion` deben ser preferentemente en lenguaje inglés. 
 
### <a name="pull-request"></a> 

Una vez que hayas completado el proceso y tu código esté listo debes crear un Pull Request a través del siguiente link. [Click Acá](https://github.com/ngChile/escalando-aplicaciones-con-angular/compare)
Fijarse que al lado izquierdo debemos seleccionar este repositorio `ngChile/escalando-aplicaciones-con-angular` en la rama `master` y al lado derecho `tuUsuarioDeGithub/escalando-aplicaciones-con-angular` en la rama `scope/description` creada siguiendo las pautas descritas en el punto anterior.

Para que tu Pull Request sea aceptado debe cumplir con pasar todo el proceso de Integración Continua sin errores.

### Gracias Totales

Muchas Gracias por tu tiempo y por ayudar a que la comunidad Angular Chile siga brindando el apoyo a toda la industria a partir de la experiencia de todas las personas que contribuyen a este proyecto.

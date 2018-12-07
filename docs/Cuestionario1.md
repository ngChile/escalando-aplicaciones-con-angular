**Preguntas Clase 1**

1 - ¿ Para que sirve definir la llave de configuración `imports` en un módulo de angular?
* Para incluir otros módulos.
* Para incluir servicios.
* Para incluir librerías externas como jQuery o Bootstrap.

2 - ¿ Por qué es importante definir que la llave de configuración `exports` si queremos que un módulo
    sea usado por otros módulos?
- Para contarle a Angular que quiero que mi módulo sea "público" en el contexto de mi aplicación.
- Para establecer como "privado" el módulo.
- Para exportar las librerías que fueron importadas en el módulo.

3 - ¿ Qué es un servicio y como importarlo en un módulo ?
* Un servicio es una clase que puede ser incluida como instancia cuando se crea un componente y debe ser "decorado" con `@injectable`
* Es una clase generica que por el hecho de ser definido con un nombre que incluya al final "Service" puede ser integrada en un componente.
* Es una directiva que debe ser definida con el formato `<nombreDirectiva-service>`.

4. ¿ Qué comando se debe utilizar para crear una versión "lista para producción" del proyecto?
* `npm run build`
* `npm run build --prod`
* `npm run project production`

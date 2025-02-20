# PokeApi

Este proyecto es una aplicación web desarrollada con Angular que consume la API pública de Pokémon para mostrar información detallada sobre diferentes Pokémon.

## Características

- **Angular**: Framework de desarrollo de aplicaciones web de una sola página.
- **Consumo de API REST**: Obtención de datos en tiempo real desde la API pública de Pokémon.
- **Interfaz de Usuario Dinámica**: Presentación interactiva y amigable de la información de los Pokémon.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Angular CLI](https://angular.io/cli) (versión 11.2.14 o superior)

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Franco-Abanto/poke-api.git
   ```

2. **Navegar al directorio del proyecto:**

   ```bash
   cd poke-api
   ```

3. **Instalar las dependencias:**

   ```bash
   npm install
   ```

## Ejecución del Servidor de Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
ng serve
```

Luego, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

## Generación de Componentes

Para generar un nuevo componente, utiliza el siguiente comando:

```bash
ng generate component nombre-del-componente
```

También puedes generar directivas, pipes, servicios, clases, guards, interfaces, enums y módulos con comandos similares.

## Construcción del Proyecto

Para compilar el proyecto, ejecuta:

```bash
ng build
```

Los archivos compilados se almacenarán en el directorio `dist/`. Usa el flag `--prod` para una compilación de producción.

## Ejecución de Pruebas Unitarias

Para ejecutar las pruebas unitarias, utiliza:

```bash
ng test
```

Esto ejecutará las pruebas a través de [Karma](https://karma-runner.github.io).

## Ejecución de Pruebas End-to-End

Para ejecutar las pruebas end-to-end, utiliza:

```bash
ng e2e
```

Esto ejecutará las pruebas utilizando la plataforma de tu elección.

## Contribuciones

Si deseas contribuir a este proyecto:

1. Realiza un fork del repositorio.
2. Crea una nueva rama con tu funcionalidad o corrección: `git checkout -b mi-nueva-funcionalidad`.
3. Realiza tus cambios y haz commit: `git commit -m 'Agregar nueva funcionalidad'`.
4. Envía tus cambios al repositorio remoto: `git push origin mi-nueva-funcionalidad`.
5. Abre una solicitud de pull en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

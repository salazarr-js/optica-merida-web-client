# Óptica Mérida - Comercio Electrónico

Aplicación web cliente para Comercio Electrónico de [**Óptica Mérida**](https://optica-merida.web.app)

## Pre-requisitos

Antes de empezar, asegúrese de que su entorno de desarrollo incluya `Node.js`, el administrador de paquetes `npm` y el sistema de control de versiones `GIT`

- [Node.js](https://nodejs.org/) versión LTS `12.19.0`
- [GIT](https://git-scm.com/)

## Dependencias

La aplicación fue desarrollada usando el [CLI](https://cli.angular.io/) de Angular, por esto se recomienda tenerlo previamente instalado.

```sh
npm install -g @angular/cli  # Instala el CLI de angular de manera global
npm install                  # Instala todas las dependencias del proyecto
```

## `Dev Server`

Ejecuta el comando `ng serve` para levantar un servidor de desarrollo. Navega a la `url` especificada, suele ser http://localhost:4200/. La aplicación se recargara automaticamente si se realiza algun cambio al codigo fuente.

## `Build`

Ejecuta el comando `ng build` para compilar el proyecto. El proyecto compilado se guardara en la carpeta `dist/`. Usa la bandera `--prod` para compilar con parametros para producción.

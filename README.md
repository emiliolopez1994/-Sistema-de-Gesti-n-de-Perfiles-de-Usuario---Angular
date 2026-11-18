# Sistema de Gestión de Perfiles de Usuario - Angular

## Descripción

Aplicación web desarrollada con Angular y TypeScript para la visualización y administración de información de perfiles de usuario.

El proyecto implementa diferentes técnicas de interpolación de objetos en plantillas HTML, permitiendo acceder a propiedades simples y anidadas, manejar valores nulos y actualizar información de manera reactiva mediante Angular Signals.

## Tecnologías utilizadas

- Angular 20
- TypeScript
- HTML5 y CSS3
- Angular Signals
- Angular Pipes
- Componentes Standalone
- Node.js y npm

## Estructura del proyecto

La aplicación está organizada en componentes y modelos para mantener una estructura de código clara.

- `src/app/models/`: Interfaces TypeScript que definen la información de los usuarios.
- `src/app/componentes/perfil-usuario/`: Componente encargado de mostrar y gestionar los perfiles.
- `src/app/app.component.ts`: Componente principal de la aplicación.
- `src/main.ts`: Inicialización de Angular.
- `src/styles.css`: Estilos generales.
- `public/`: Archivos estáticos de la aplicación.

## Funcionalidades

- Visualización de información de perfiles de usuario.
- Acceso a propiedades mediante interpolación.
- Consulta de información anidada.
- Manejo de propiedades opcionales con el operador `?.`.
- Representación de valores nulos mediante `??`.
- Formato de fechas, valores monetarios y texto.
- Actualización reactiva de información mediante Signals.
- Visualización de objetos completos en formato JSON.
- Carga asíncrona de información.

## Interpolación de objetos

### Notación por punto

Permite acceder directamente a las propiedades de un objeto desde una plantilla HTML.

Ejemplo:

`{{ usuario.nombreCompleto }}`

`{{ usuario.ubicacion.ciudad }}`

### Navegación segura

El operador `?.` permite consultar propiedades de objetos que pueden encontrarse sin información, evitando errores al acceder a valores nulos o indefinidos.

Ejemplo:

`{{ usuarioAsincrono?.nombreCompleto }}`

### Operador Nullish Coalescing

El operador `??` permite mostrar un valor alternativo cuando una propiedad contiene `null` o `undefined`.

Ejemplo:

`{{ usuario.telefono ?? 'Sin número registrado' }}`

### Angular Pipes

Se utilizan Pipes para presentar información con formatos específicos:

- `uppercase`: Conversión de texto a mayúsculas.
- `date`: Formato de fechas.
- `currency`: Formato de valores monetarios.
- `json`: Visualización de objetos en formato JSON.

### Angular Signals

Se implementan Signals para gestionar datos reactivos y actualizar las propiedades de un perfil de usuario.

Las modificaciones realizadas sobre los datos reactivos se reflejan automáticamente en la interfaz.

## Instalación y ejecución

Para ejecutar la aplicación es necesario contar con Node.js y npm.

**1.** Abrir el proyecto en Visual Studio Code.

**2.** Abrir una terminal dentro de la carpeta principal del proyecto.

**3.** Instalar las dependencias:

```bash
npm install
```

**4.** Iniciar el servidor de desarrollo:

```bash
npm start
```

**5.** Acceder desde el navegador a:

http://localhost:4200

## Funcionamiento

La aplicación presenta diferentes perfiles de usuario con información personal, ubicación, contacto y datos adicionales.

Se utilizan objetos TypeScript
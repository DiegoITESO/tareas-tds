# API DE NOTICIAS

Este proyecto consiste en una API para consumir noticias. El proyecto en si es un wrapper de la sistema de [NewsAPI](https://newsapi.org). 
El proyecto esta hecho bajo la siguiente estructura:
```bash
dist/ ---------> codigo compilado en JavaScript
src/  ---------> codigo original en TypeScript
.env  ---------> variables de entorno
package.json --> configuracion de node
tsconfig.json -> configuracion de tsc
```

## Requerimentos
- Node v23

## Como correr el proyecto
1. Descargar el proyecto a tu carpeta local.
2. Crear un archivo .env con el siguiente contenido:
```bash
API_KEY=<tu_api_key_aqui>
```
3. Descargar las librerias con el comando
```bash
npm install
```
4. Compilar el codigo con el comando
```bash
npm run scripts
```
5. Correr el proyecto con el comando
```bash
node .
```

## Como consumir la API

La api consta de 3 endpoints:  
### /news
- Requiere el query param "q", representando palabras claves para eficientar la busqueda de noticias.
### /top-headlines
- Requiere al menos un parametro
    - Country: Pais de las noticias
    - Category: Categoria de las noticias
    - Sources: Fuentes especificas
    - q: palabras claves para la busqueda
### /top-headlines/sources
- No requiere ningun parametro pero se pueden usar:
    - Country
    - Category
    - Language


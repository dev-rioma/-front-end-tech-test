# ShoppinCart ECOMSUR 2021

### Por favor, empezar la prueba después de haber leído este documento completo.

  - [Requerimientos mínimos](#requerimientos-mínimos)
  - [Instalar y Correr la aplicación](#instalar-y-correr-la-aplicación)
  - [Descripción del proyecto](#descripción-del-proyecto)
  

## Requerimientos mínimos

Node 14.15.0

## Instalar y Correr la aplicación

## Paso 1: Clonar el repositorio

Primero, debemos `clonar` el repositorio que contiene la aplicación en nuestra computadora. Para hacer esto, abrimos una terminal y escribimos el siguiente comando:

bash
Copy code
```
git@github.com:dev-rioma/-front-end-tech-test.git
```

## Paso 2: Instalar Node.js y npm

Para ejecutar la aplicación, necesitamos tener Node.js y npm instalados en nuestra computadora. 
Si ya tienes estas herramientas instaladas, puedes pasar al siguiente paso. 
Si no, puedes descargarlas e instalarlas desde el sitio web oficial de Node.js: https://nodejs.org/es/


## Paso 3: Instalar las dependencias y correr la aplicacion
Esto instalará todas las dependencias especificadas en el archivo `package.json.`

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. Regresa al directorio root `cd ..`.

La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

`npm run dev`

Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.

- CRA se encuentra en:
  `http://localhost:3000/`
 y se ve de la siguiente forma:
 
 # Desktop 
 ![image](https://user-images.githubusercontent.com/92890830/223019167-5c155de5-1f94-4336-9ab7-f114903941b3.png)
 ![image](https://user-images.githubusercontent.com/92890830/223019493-5874b2da-c05f-4d9f-8a61-f329c8d279cb.png)
 ![image](https://user-images.githubusercontent.com/92890830/223019580-d9d1c6a6-d255-4f5c-b94a-97fe0f53ddc3.png)



 
 # Mobile
 ![image](https://user-images.githubusercontent.com/92890830/223019704-c5eb50ae-ee6e-4ea2-a823-c8b20b8f0217.png)
 ![image](https://user-images.githubusercontent.com/92890830/223019744-ac10310c-dd13-49ca-8b36-fedfac13e95e.png)
 ![image](https://user-images.githubusercontent.com/92890830/223019654-81753693-55fc-417a-a843-6e6148bb1db4.png)





- El servidor se encuentra en:
  `http://localhost:5000/`

- La lista de productos se encuentra:
  `http://localhost:5000/api/products`

- Puedes encontrar cada producto por su ID:
  `http://localhost:5000/api/products/1`

- Las imágenes se encuentran en:|
  `http://localhost:5000/images/{{nombre-de-la-imagen}}`

## Descripción del proyecto

 implementacion de un carrito de compras simple que consume toda la info del API local se uso Reactjs para la creacion del front y express para el backend




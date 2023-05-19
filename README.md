![Logo](./assets/img/logo.svg)

## Getting Started

Para comenzar con la simulación en local:

1. Instale todas las dependencias necesarias:
```bash
npm i
```
2. Configure el .env con las variables de entorno necesarias para la conexión con la base de datos. Debe proporcionar URL, Nombre, Usuario, Password, Host y Post. También se almacena la url del dominio principal (en local: 'http://localhost:3000/' ) y la clave que cifra los token JWT.

3. Recree una base de datos local con ayuda de XAMP, WAMP or MAMP. La base de datos debe de ser SQL y deberá contener las 6 tablas que componen el proyecto. Para ayudarse a recrearla consulte el archivo de documentación que acompaña al proyecto:"Proyecto-MealWeek-Pedro Jesus Cruces Almendro.docx"

4. Monte la aplicación con:
```bash
npm run dev
```

5. Ingrese en [http://localhost:3000](http://localhost:3000) para iniciar la aplicación.

## Deploy on Vercel

Este proyecto se encuentra en el repositorio de github: [https://github.com/PJxDev/mealweek](https://github.com/PJxDev/mealweek)

Y el deploy de Vercel se puede consultar en: [https://mealweek-pjxdev.vercel.app/](https://mealweek-pjxdev.vercel.app/)

o en: [https://mealweekproject.vercel.app/](https://mealweekproject.vercel.app/)



Para más información, consulte el archivo: "Proyecto-MealWeek-Pedro Jesus Cruces Almendro.docx"

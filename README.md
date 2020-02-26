# Atención de Menú

Implementación de reto técnico PCM

## Proceso
### Diseño de aplicación:
Publicado en: [https://xd.adobe.com/view/c6210cb6-c2c2-4aa8-7fd9-98d6008b829f-b010/grid/](https://xd.adobe.com/view/c6210cb6-c2c2-4aa8-7fd9-98d6008b829f-b010/grid/)

### Diseño inicial de base de datos:
![modelos](https://user-images.githubusercontent.com/1207421/74784452-eb446200-5275-11ea-9c1d-c3963262b3da.png)

### Diseño final base de datos:
![database_final](https://user-images.githubusercontent.com/1207421/75362400-a7111d00-5886-11ea-8616-c52d4a5721a7.png)

## Backend

### Requisitos
- Python 3.6 o superior

### Instalación
```
$ pip install -r requirements.txt
$ python manage.py migrate
$ python manage.py createsuperuser
```

### Ejecución
```
$ python manage.py runserver
```
Aplicación en: `htto://localhost:8000`

## Frontend

### Requisitos
- Node.js 12.14.1 o superior
- Angular Cli 9.0.3

### Instalación
```
$ cd frontend
$ npm install
```

### Ejecución
```
$ ng serve
```
Aplicación en: `htto://localhost:4200`
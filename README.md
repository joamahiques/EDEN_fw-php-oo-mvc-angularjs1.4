# FRAMEWORK PHP OO MVC AngularJS_1.4

##### Continuación del proyecto EDEN MVC: Migramos Cliente a AngularJS, SIN JQuery
##### Proyecto Buscador de casas rurales, con buscador, carrito, favoritos, login...

###### **Funcionalidad de la aplicación:**
* ORM
* PATHS
* ROUTING
* PRETTIES URLs CLIENTE/SERVIDOR
* AUTOLOAD
* JWT
* LOGS
* MAILGUN (alta, cambioContraseña, contacto, nuevaContraseña, admin, compra)
* Arquitectura MVC
* Home con infinite-scroll de los productos, ordenados por provincias, con loading.
* Login y registro (desde aplicación (angularjs) y redes sociales(PHP y logout en angularjs).
* Perfil (Actualización de datos, dropzone, lista d favoritos, lista de compras(con descarga de PDF))
* Tienda con paginación, con vista lista o vista en mapa de todas las casas o los resultados del buscador( mapa de Google maps en js y con infowindows(con details y favoritos)).
* Carrito (con tabla de carro de cada usuario, que se borra con la compra y se inserta en la tabla compras)
* Contact con formulario de contacto con validación y MailGun y mapa de ubicación.
* Modal ngDialog para details y login, para toda la aplicación, como Component.
* Translate con Angular-Translate(i18n).
* Search para toda la aplicación para mostrar los resultados en Shop ( y en mapa ).
* Directiva propia CompareTo en el login.
* Directiva propia clubrural, para  home y shop.
* Directiva DropZone
* Slider para el header propio.
* apiconnector.
* token y tokenMail (token se borra con el logout)
* Funcion general Generate_token, función update_token(login, profile, cart)
* Update de token en acciones conflictivas.
* Cambio de tabla en bbdd al confirmpurchase.
* Diferentes vistas en relación al usuario ( menú, cambiar contraseña en el perfil).
* Logout(session destroy, insert_cart, delete_token)
* validación contra base de datos, (validación del formulario de login),
* validación formularios angularjs
* Constantes js para Keys
* Constantes php para Keys
* APIS para Provincias, buscador de casas rurales y google maps
* Respaldo en xml en fallo de API GEOAPI.
* Módulos:
    * Home
    * CRUD (solo migrado el list y el delete a FW PHP)
    * Login (aplicacion y Auth0)
    * Profile 
    * Shop
    * Contact
    * Cart

###### **Otras tecnologías:**
* [ui-Boostrap] (https://angular-ui.github.io/bootstrap/)
    * [Pagination] (https://github.com/angular-ui/bootstrap/tree/master/src/pagination)
    * [Typeahead] (https://github.com/angular-ui/bootstrap/tree/master/src/typeahead)
* Hash password y verify password
* API [Clubrural.com](https://www.clubrural.com/api.php) (Por geolocalización y por provincias)
* API [geoapi.es](https://geoapi.es/documentacion)
* Google Maps (ubicacion, localización de casas)
* [Toastr] (https://github.com/Foxandxss/angular-toastr)
* [Gravatar](https://es.gravatar.com/)
* Moesif CORS.
* [ngDialog](https://likeastore.github.io/ngDialog/)
* [Angular-Translate](https://angular-translate.github.io/)
* [Auth0](https://auth0.com/)
* [Mailgun](https://www.mailgun.com/)
* [ngInfinite-Scroll](https://sroze.github.io/ngInfiniteScroll/)
* Componenetes:
    * Modal
    * Favorites
    * APIs
    * Search
    * Translate

* * *

###### **Functionality of the application:**
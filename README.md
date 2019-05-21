# FRAMEWORK PHP OO MVC AngularJS_1.4

##### Continuación del proyecto EDEN MVC: 
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
* Home con infinite-scroll de los productos([ngInfinite-Scroll](https://sroze.github.io/ngInfiniteScroll/))
* Login y registro (desde aplicación y redes sociales.)(con [Auth0](https://auth0.com/) en PHP y logout en js)
* Perfil (Actualización de datos, dropzone, lista d favoritos, lista de compras(con descarga de PDF))
* Tienda con paginación, con vista lista o vista en mapa de todas las casas o los resultados del buscador( mapa de Google maps en js y con infowindows).
* Carrito (con tabla de carro de cada usuario, que se borra con la compra y se inserta en la tabla compras)
* Contact con formulario de contacto con validación y MailGun y mapa de ubicación.
* Modal para details, para toda la aplicación, como Component.[ngDialog](https://likeastore.github.io/ngDialog/)
* Translate con Angular-Translate(i18n). [Angular-Translate](https://angular-translate.github.io/)
* Search para toda la aplicación para mostrar los resultados en Shop.
* Directiva CompareTo en el login.
* apiconnector.
* token y tokenMail (token se borra con el logout)
* Funcion general Generate_token, función update_token(login, profile, cart)
* Update de token en acciones conflictivas.
* Respaldo en xml en fallo de APIs.
* Cambio de tabla en bbdd al confirmpurchase.
* Diferente menú en relación al usuario.
* Logout(session destroy, insert_cart, delete_token)
* validación contra base de datos, (validación del formulario de login),
* validación formularios angularjs,
* 404 y 503
* Delete y Deleta All
* APIS para Provincias, buscador de casas rurales y google maps
* Buscador en todas las páginas.
* Idiomas en js y json
* Proteccion de URL para CRUD
* Logout inactividad.
* Módulos:
    * Home
    * CRUD (solo migrado el list y el delete a FW PHP)
    * Login (aplicacion y Auth0)
    * Profile 
    * Shop
    * Contact
    * Cart

###### **Otras tecnologías:**

* [Datatables.net](https://datatables.net/)
* Hash password y verify password
* API [Clubrural.com](https://www.clubrural.com/api.php) (Por geolocalización y por provincias)
* API [geoapi.es](https://geoapi.es/documentacion)
* Google Maps (ubicacion, localización de casas)
* Slider en páguina Home
* Toastr AngularJS
* DropZone
* Constantes js para Keys
* Constantes php para Keys
* [Gravatar](https://es.gravatar.com/)
* Moesif CORS.
* Auth0(https://auth0.com/)
* Mailgun(https://www.mailgun.com/)
* Pagination
* Componenetes:
    * Modal
    * Favoritos
    * APIs
    * Buscador

* * *

###### **Functionality of the application:**
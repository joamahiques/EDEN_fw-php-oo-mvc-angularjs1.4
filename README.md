# FRAMEWORK PHP OO MVC, JS, JQ, HTML, CSS  

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
* CRUD
* Home con infinite-scroll de los productos
* Login y registro (desde aplicación y redes sociales con Auth0)
* Perfil (Actualización de datos, dropzone, lista d favoritos, lista de compras(con descarga de PDF))
* Tienda con paginación, con lista o vista en mapa (posibilidad e filtrado con el buscador)
* Carrito, con js y php (guardado de carro logout y read en login)
* token y tokenMail
* Funcion general Generate_token, función update_token(login, profile, cart)
* Update de token en acciones conflictivas.
* Respaldo en xml en fallo de APIs.
* Cambio de tabla en bbdd al confirmpurchase.
* Diferente menú en relación al usuario(js)
* Logout(session destroy, insert_cart, delete_token)
* validación contra base de datos, PHP,
* validación en js (con radios y checkbox),
* 404 y 503
* Delete y Deleta All
* APIS para Provincias, buscador de casas rurales y google maps
* Buscador en todas las páginas.
* Idiomas en js y json
* Proteccion de URL para CRUD
* Logout inactividad.
* Módulos:
    * Home
    * CRUD (solo migrado el list y el delete)
    * Login (aplicacion y Auth0)
    * Profile 
    * Shop
    * Contact
    * Cart

###### **Otras tecnologías:**

* [Datatables.net](https://datatables.net/)
* [Jqwidgets.com] (https://www.jqwidgets.com/)(solución al problema en páginas donde no hay selector en el DOM)
* [Jqueryui.com](https://jqueryui.com/datepicker/) Datepicker
* $AJAX
* Serialize
* Hash password y verify password
* API [Clubrural.com](https://www.clubrural.com/api.php) (Por geolocalización y por provincias)
* API [geoapi.es](https://geoapi.es/documentacion)
* Google Maps (ubicacion, localización de casas)
* Slider en páguina Home en jq (sin plugin)
* Toastr, [Code-Seven](https://github.com/CodeSeven/toastr)
* Css
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

* Architecture MVC
* CRUD
* Login y register.
* Cart, width js and php.
* Access control for favorites and purchase.
* Change of table in bbdd when buying.
* Different menu in relation to the user
* Logout, session destroy
* Validation against database, PHP,
* Validation in js (with radios and checkbox),
* 404 and 503.
* Delete and Deleta All.
* Separate components.
* $AJAX.
* APIS for Provinces, search of rural houses and google maps.
* searcher on all pages.
* languages in js and json.
* URL protect.
* Logout inactivity.
* Modules:
    * Home
    * Homes (CRUD)
    * Userfavorites (favorites for each user)
    * Contact
    * Shop
    * Cart


###### **Other technologies:**

* [Datatables.net](https://datatables.net/)
* [Jqwidgets.com](https://www.jqwidgets.com/)(solution to the problem on pages where there is no selector in the sun)
* [jqueryui.com](https://jqueryui.com/datepicker/) Datepicker
* $AJAX
* Serialize
* Hash password and verify password
* API [Clubrural.com](https://www.clubrural.com/api.php) (by geolocation and by provinces)
* API [geoapi.es](https://geoapi.es/documentacion)
* Google Maps
* Slider in page Home in jq (without plugin)
* Toastr, [Code-Seven](https://github.com/CodeSeven/toastr)
* Css
* Const js for keys
* [Gravatar](https://es.gravatar.com/)
* Moesif CORS.
* Components:
    * Modal
    * Favorites
    * APIs
    * Seeker
    * Login y register
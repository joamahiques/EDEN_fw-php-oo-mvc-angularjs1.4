# FRAMEWORK PHP OO MVC AngularJS_1.4

##### Continuación del proyecto EDEN MVC: Migramos Cliente a AngularJS, SIN JQuery
##### Proyecto Buscador de casas rurales, con buscador, carrito, favoritos, login...
##### Continuation of the EDEN MVC project: Migrate Client to AngularJS, WITHOUT JQuery
##### Search engine for rural houses, with search engine, cart, favorites, login ...

![imagen cabecera](/frontend/assets/img/readme.png)

### **Funcionalidad de la aplicación:**
 **SERVIDOR FW PHPOO**
* ORM
* PATHS
* ROUTING
* PRETTIES URLs
* AUTOLOAD
* JWT
    * token y tokenMail (token se borra con el logout)
    * Funcion general Generate_token, función update_token(login, profile, cart)
    * Update de token en acciones conflictivas.
* LOGS
* Arquitectura MVC
* Constantes php para Keys

**CLIENTE: ANGULARJS 1.4**
* APICONNECTOR
* Factory en common.services.js, cart, contact, login(localStorage.services y login.services), shop, apis, favorites,modal y search
* Directiva propia clubrural, para  home y shop.
* Directiva DropZone
* Slider para el header propio en common.services.js.
* validación contra base de datos, (validación del formulario de login),
* validación formularios angularjs
* Constantes js para Keys
---------------
 Módulos:
 -------------

    * Home
    * CRUD (solo migrado el list y el delete a FW PHP)
    * Login (aplicacion y Auth0)
    * Profile 
    * Shop
    * Contact
    * Cart


* Home: listado de los productos con details en modal y favoritos. Infinite-scroll con loading. Directiva: API con productos de CLUBRURAL (en PHP) con productos en un radio máximo de 80km de la ubicacón del usuario.
* Login y registro:
    * Manual desde aplicación (angularjs).
    * Redes sociales con Auth0 de Github y Gmail(PHP y logout en angularjs).
    * Recuperar contraseña, con email y redirección a página para crear una contraseña nueva.
    * Diferentes vistas en relación al usuario ( menú, cambiar contraseña en el perfil).
    * Logout(session destroy, insert_cart, delete_token)
* Perfil:
    * Perfil: Autorelleno de datos, dependent dropdowns con Api de Geoapi con respaldo de archivos xml(Geoapi en js, respaldo en PHP), cambiar contraseña ( oculto para clientes-rs ), directiva dropzone.
    * Favoritos: lista con paginación de productos favoritos del usuario, con filtro de búsqueda y opción de eliminar el favorito.
    * Compras: reservas hechas por el usuario, con paginación y filtrado, opción de descarga en PDF.
* Tienda: 
    * Vista en lista: listado de productos con details en modal y favoritos. Paginación de los productos. Filtrado de búsqueda desde Search, desde toda la aplicación. Directiva: API con productos de CLUBRURAL (en PHP) filtrados desde Search (Si no hay búsqueda en Search saca productos en un radio de 80 km máximo a la ubicación del usuario. Si hay filtros de búsqueda saca productos palicando dichos filtros). 
    * Vista en Mapa: Mapa Google para ubicación de los productos, con infowindow con details en modal. Filtrado de los productos desde Search
* Carrito:
    * Autorelleno de carrito con login y autoguardado de carrito con logout si hay reservas sin confirmar.
    * Suma y resta para actualizar cantidad de noches, actulización automática del precio total, imposible cantidad 0 o negativa en el número de noches, opción delete para borrar la reserva, boton confirmar compra solo es visible si hay productos en el carro.
    * Con 5 o más reservas descuento del 10%.
    * Icono del carrito con número del total de productos.
    * Confirmar compra con modal, con precios de base de datos.
    * Services en localstorage. Se crea una tabla para cada usuario con su carro. Al confirmar compra se borra dicha tabla y se añaden los productos a la tabla compras. EL precio siempre es de Base de datos.
* Contact:Formulario de contacto con validación y MailGun y mapa Google de ubicación con infowindow.
------------
Componentes
------------
    * Modal
    * Favoritos
    * Search
    * Translate
    * Apis

* Modal (component):
    * Details: detalles del producto, botón cantidad y añadir al carro.
    * Login: con pestañas login y register, boton login con redes sociales.
    * Confirmar reservas (comprar) con detalles de la compra y boton para confirmar.
* Translate (component) con Angular-Translate(i18n). Cambia el menú, search y footer.
* Search (component) para toda la aplicación para mostrar los resultados en Shop ( y en mapa ). Con dependent dropdowns y dependent autocomplete.
* Favoritos (component): read favorites con el login para pintar los corazones de favoritos, add y delete favorites clickando en los corazones.
* APIS (component):
    * Geoapi:Provincias y municipios, en js, con respaldo de archivos xml desde php.
    * ClubRuaul: productos de clubrural, con enlace a su pagina de details. Productos por geolocalización del usuario y por filtrado de búsqueda.
    * Google Maps.

------------------

### **Otras tecnologías:**
* [ui-Boostrap] (https://angular-ui.github.io/bootstrap/)
    * [Typeahead] (https://github.com/angular-ui/bootstrap/tree/master/src/typeahead)
* [angular-utils] (https://github.com/michaelbromley/angularUtils)
    * [Pagination] (https://github.com/michaelbromley/angularUtils/tree/master/src/directives/pagination)
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
* [Mailgun](https://www.mailgun.com/)(alta, cambioContraseña, contacto, nuevaContraseña, admin, compra).
* [ngInfinite-Scroll](https://sroze.github.io/ngInfiniteScroll/)
-----------------------
----------------------------------
### **Functionality of the application:**
**SERVER FW PHPOO**
* ORM 
* PATHS
* ROUTING
* PRETTIES URLs
* AUTOLOAD
* JWT
    * token and tokenMail (token is deleted with the logout)
    * Generate_token general function, update_token function (login, profile, cart)
    * Update of token in conflicting actions.
* LOGS
* MVC Architecture
* Php constants for Keys

**CLIENT: ANGULARJS 1.4**
* APICONNECTOR
* Clubrural own directive, for home and shop.
* DropZone directive
* Factory common.services.js, cart, contact, login(localStorage.services & login.services), shop, apis, favorites, modal & search.
* Slider for the own header.
* Validation against database, (validation of the login form),
* angularjs validation forms
* Constants js for Keys

-----------
 Modules:
 --------------------

    * Home
    * CRUD (only migrated the list and the delete to FW PHP)
    * Login (application and Auth0)
    * Profile
    * Shop
    * Contact
    * Cart

* Home: list of products with details in modal and favorites. Infinite-scroll with loading. Directive: API with CLUBRURAL products (in PHP) with products within a maximum radius of 80km from the user's location.
* Login and registration:
    * Manusl from application (angularjs).
    * Social networks with Auth0 of Github and Gmail (PHP and logout in angularjs).
    * Recover password, with email and redirect to page to create a new password.
    * Different views in relation to the user (menu, change password in the profile).
    * Logout (session destroy, insert_cart, delete_token)
* Profile:
    * Profile: Autorelleno of data, dependent dropdowns with Api of Geoapi with backup of xml files (Geoapi in js, backup in PHP), change password (hidden for clients-rs), directive dropzone.
    * Favorites: list with pagination of the user's favorite products, with search filter and option to delete the favorite.
    * Purchases: reservations made by the user, with paging and filtering, PDF download option.
    * Store:
    * List view: list of products with details in modal and favorites. Pagination of the products. Search filtering from Search, from the entire application. Directive: API with CLUBRURAL products (in PHP) filtered from Search (If there is no search in Search it takes products within a radius of 80 km maximum to the user's location.) If there are search filters, remove products by palicing said filters.
    * View on Map: Google Map for product location, with infowindow with details in modal. Filtering the products from Search
* Cart:
    * Auto-filled cart with login and auto-save cart with logout if there are unconfirmed reservations.
    * Addition and subtraction to update the number of nights, automatic updating of the total price, impossible number 0 or negative in the number of nights, delete option to delete the reservation, confirm purchase button is only visible if there are products in the car.
    * With 5 or more reservations discount of 10%.
    * Cart icon with total product number.
    * Confirm purchase with modal, with database prices.
    * Services in localstorage. A table is created for each user with his car. When confirming purchase, the said table is deleted and the products are added to the purchasing table. The price is always from Database.
* Contact: Contact form with validation and MailGun and Google location map with infowindow.

---------------
Components:
----------------------

    * Modal
    * Favorites
    * Search
    * Translate
    * Apis

* Modal (component):
    * Details: product details, quantity button and add to the cart.
    * Login: with login and resiter tabs, login button with social networks.
    * Confirm reservations (buy) with details of the purchase and button to confirm.
    * Translate (component) with Angular-Translate (i18n). Change the menu, search and footer.
* Search (component) for the whole application to show the results in Shop (and on map). With dependent dropdowns and dependent autocomplete.
* Favorites: read favorites with the login to paint the hearts of favorites, add and delete favorites by clicking on the hearts.
* APIS:
    * Geoapi: Provinces and municipalities, in js, with support for xml files from php.
    * ClubRuaul: clubrural products, with a link to its details page. Products by user geolocation and by search filtering.
    * Google Maps.
--------------------
### **Other technologies:**
* [ui-Boostrap] (https://angular-ui.github.io/bootstrap/)
    * [Typeahead] (https://github.com/angular-ui/bootstrap/tree/master/src/typeahead)
* [angular-utils] (https://github.com/michaelbromley/angularUtils)
    * [Pagination] (https://github.com/michaelbromley/angularUtils/tree/master/src/directives/pagination)
* Hash password y verify password
* API [Clubrural.com](https://www.clubrural.com/api.php) (By geolocation and by provinces.)
* API [geoapi.es](https://geoapi.es/documentacion)
* Google Maps (location, location of houses)
* [Toastr] (https://github.com/Foxandxss/angular-toastr)
* [Gravatar](https://es.gravatar.com/)
* Moesif CORS.
* [ngDialog](https://likeastore.github.io/ngDialog/)
* [Angular-Translate](https://angular-translate.github.io/)
* [Auth0](https://auth0.com/)
* [Mailgun](https://www.mailgun.com/)(user registration, change Password, contact, new Password, admin, purchase).
* [ngInfinite-Scroll](https://sroze.github.io/ngInfiniteScroll/)
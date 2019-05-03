-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 29-04-2019 a las 19:16:35
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `altaCasas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `casas`
--

CREATE TABLE `casas` (
  `ID` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `localidad` varchar(60) NOT NULL,
  `provincia` varchar(100) NOT NULL,
  `nombrePropietario` varchar(100) NOT NULL,
  `dni` varchar(9) NOT NULL,
  `email` varchar(60) NOT NULL,
  `telefono` int(20) NOT NULL,
  `capacidad` int(5) NOT NULL,
  `habitaciones` int(5) NOT NULL,
  `entera` varchar(5) NOT NULL,
  `servicios` text,
  `actividades` text,
  `fecha` varchar(20) NOT NULL,
  `fechacons` varchar(20) NOT NULL,
  `edadcasa` int(3) NOT NULL,
  `precionoche` int(4) NOT NULL,
  `latitud` varchar(20) NOT NULL,
  `longitud` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `casas`
--

INSERT INTO `casas` (`ID`, `nombre`, `localidad`, `provincia`, `nombrePropietario`, `dni`, `email`, `telefono`, `capacidad`, `habitaciones`, `entera`, `servicios`, `actividades`, `fecha`, `fechacons`, `edadcasa`, `precionoche`, `latitud`, `longitud`) VALUES
(9, 'La casa Gran', 'Montaverner', 'VALENCIA', 'Joana', '48600973H', 'joamahiques@gmail.com', 690032781, 100, 10, 'si', 'comidas:', 'yoga:', '12/15/2018', '12/01/2005', 13, 50, '38.89021', '-0.49582'),
(11, 'MasQi', 'Banyeres de Mariola', 'ALICANTE', 'Sonia Gomez', '47500268H', 'info@masqi.com', 680505098, 30, 10, 'no', 'comidas:piscina:masajes:', 'yoga:meditacion:senderismo:', '28-12-2018', '05/01/2015', 3, 50, '38.715036', '-0.649462'),
(12, 'La Maga', 'XÃ¡tiva', 'VALENCIA', 'Lorena Castell', '49622541L', 'lorena@lamaga.com', 692258741, 500, 100, 'no', 'piscina:', 'yoga:', '28/12/2018', '08/01/2003', 15, 23, '38.985754', '-0.51806'),
(14, 'Els horts del Palomar', 'Estarrona', 'ÃLAVA', 'Josefa Santacatalina', '48600951J', 'josefasanta@gmail.com', 685235966, 30, 10, 'no', 'comidas:piscina:mascotas si:', 'senderismo:', '29/12/2018', '05/04/2002', 16, 45, '42.866791', '-2.748079'),
(19, 'Casa Albets', 'Lladurs', 'TARRAGONA', 'Jose Albets', '52630985M', 'casaalbets@gmail.com', 658814520, 25, 10, 'no', 'comidas:piscina:mascotas si:', 'senderismo:', '30/11/2018', '01/02/2019', 0, 50, '42.0448251', '1.507736'),
(20, 'Casa Rural Ahora', 'Malaga', 'MÃLAGA', 'Toni Sanchez', '47500123D', 'ahora@gmail.com', 652214785, 20, 10, 'no', 'comidas:piscina:gimnasio:', 'yoga:senderismo:', '22/08/2018', '08/02/2000', 18, 40, '36.722151', '-4.386553'),
(21, 'La Casa Toya', 'Zaragoza', 'ZARAGOZA', 'Amador Hernandez', '45966235A', 'info@lacasatoya.com', 651142332, 35, 15, 'si', 'comidas:masajes:', 'meditacion:tai chi:senderismo:', '30/12/2018', '12/05/2004', 14, 35, '41.701043', '-0.93206'),
(29, 'Superior', 'Amurrio', 'ÃLAVA', 'Loli', '48600973H', 'loli@gmial.com', 690032781, 50, 20, 'no', 'piscina:mascotas si:', 'senderismo:', '30/12/2018', '12/01/2010', 8, 100, '43.052616', '-3.001556'),
(31, 'Kakiko', 'Denia', 'ALICANTE', 'Kiko', '48500671D', 'kiko@gmail.com', 690032781, 50, 50, 'no', 'comidas:mascotas si:', 'yoga:', '02/01/2019', '06/06/1997', 21, 0, '38.834526', '0.121994'),
(32, 'Set Milles', 'Valdelinares', 'TERUEL', 'Agueda Bataller', '4875632D', 'info@setmilles.com', 652214441, 100, 40, 'no', 'comidas:mascotas si:', 'senderismo:', '04/01/2019', '01/01/2000', 19, 0, '40.3909', '-0.604001'),
(33, 'Las casas de Ali', 'Alicante', 'ALICANTE', 'Hector Garcia', '74500123S', 'lascasasdeali@gmail.com', 654412147, 200, 30, 'no', 'comidas:piscina:mascotas si:', 'senderismo:', '02/01/2018', '10/04/2000', 18, 0, '38.348127', '-0.496041'),
(34, 'Alqueria Blanca', 'Cazorla', 'JAEN', 'Valeriano', '48600975S', 'valeriano@gmail.com', 692258741, 18, 9, 'no', 'comidas:', 'meditacion:', '16/01/2019', '04/01/2005', 13, 30, '37.9126466', '-3.002713'),
(35, 'Madre Pepa', 'Cabrales', 'PRINCIPADO DE ASTURIAS', 'Valeriano', '48600975S', 'valeriano@gmail.com', 692258741, 18, 9, 'no', 'masajes:', 'tai chi:', '16/01/2019', '01/01/2000', 19, 0, '43.300805', '-4.824747'),
(36, 'Villa Ambasaguas', 'Cangas de Onis', 'PRINCIPADO DE ASTURIAS', 'Mercedes', '52368741A', 'ambasahuas@info.com', 632258963, 21, 14, 'si', 'masajes:', 'meditacion:', '16/01/2019', '01/01/2000', 19, 0, '43.314529', '-5.066568'),
(37, 'Masia de la Carrasca', 'Navajas', 'CASTELLÃ“N', 'Nuria Ferri', '62300147P', 'ingo@lacarrasca.com', 625587412, 100, 35, 'no', 'comidas:piscina:masajes:mascotas si:', 'yoga:senderismo:', '18/01/2019', '03/01/2000', 18, 0, '39.876611', '-0.500174'),
(38, 'Gamioko Borda', 'Ziga', 'COMUNIDAD FORAL DE NAVARRA', 'Xavi Cisco', '48600521S', 'info@gamioko.com', 652232563, 10, 4, 'si', 'mascotas si:', 'senderismo:', '22/01/2019', '01/01/2015', 4, 0, '43.119023', '-1.572242'),
(39, 'La aldea', 'Altea', 'ALICANTE', 'Paquito Salas', '48500214R', 'paquito@mmmmm.com', 630021458, 120, 50, 'no', 'comidas:piscina:mascotas si:', 'yoga:senderismo:', '22/01/2019', '09/11/2005', 13, 0, '38.621279', '-0.025343'),
(40, 'La masia de la carrasca', 'Montaverner', 'VALENCIA', 'Irma Soler', '74500214L', 'masiadelacarrasca@gmail.com', 632202221, 60, 20, 'no', 'comidas:piscina:hidromasaje:mascotas si:', 'yoga:senderismo:', '30/01/2019', '11/04/2006', 12, 0, '38.884718', '-0.489789'),
(41, 'Luz de Hadas', 'Corbera', 'VALENCIA', 'Rafa Segrelles', '96522321Q', 'luzdehadas@gamil.com', 980620455, 10, 4, 'si', 'masajes:mascotas si:', 'senderismo:', '31/01/2019', '04/01/2016', 2, 0, '39.159046', '-0.35955'),
(42, 'Terra Blanca del Benicadell', 'Beniatjar', 'VALENCIA', 'Jose Soler', '56233102F', 'terrablanca@gmail.com', 658131985, 10, 5, 'si', 'piscina:mascotas si:', 'senderismo:', '09/02/2019', '11/06/2007', 11, 0, '38.848008', '-0.416858'),
(44, 'Casa Domi', 'Santa Cruz de Tenerife', 'SANTA CRUZ DE TENERIFE', 'Pedro GuzmÃ¡n', '56788951F', 'info@domi.com', 652212123, 4, 2, 'si', 'piscina:mascotas si:', 'senderismo:', '21/02/2019', '03/02/2009', 9, 0, '28.474783', '-16.261715'),
(45, 'Casa Solana', 'Montaverner', 'VALENCIA', 'Piluka Soler', '48600985F', 'info@solanamontaverner.com', 690032587, 10, 4, 'si', 'piscina:mascotas si:', 'senderismo:', '03/03/2019', '02/03/1965', 0, 25, '38.889367', '-0.498491'),
(47, 'Sandomera', 'Montaverner', 'VALENCIA', 'Sandy', '48622315D', 'sandy@gmail.com', 692255874, 20, 15, 'no', 'comidas:mascotas si:', 'senderismo:', '03/03/2019', '12/03/2002', 16, 45, '38.887424', '-0.491173'),
(48, 'Casa Rural Romari', 'Castielfabib', 'VALENCIA', 'Romari', '49522146R', 'romari@gmail.com', 610029874, 10, 4, 'si', 'comidas:piscina:mascotas si:', 'yoga:senderismo', '21/02/2019', '21/02/1060', 59, 32, '40.131012', '-1.304884'),
(49, 'Casa Taure', 'Chelva', 'VALENCIA', 'Taure', '49522146T', 'taure@gmail.com', 637029874, 10, 5, 'si', 'comidas:piscina:mascotas si:', 'yoga:senderismo', '21/02/2019', '21/02/1060', 59, 25, '39.749356', '-0.999946'),
(50, 'Casa Rural Torralba', 'Cofrentes', 'VALENCIA', 'JoseM', '49522146J', 'torralba@gmail.com', 630029874, 24, 17, 'si', 'comidas:piscina:mascotas si:', 'yoga:senderismo', '21/02/2019', '21/02/1060', 59, 30, '39.228559', '-1.064228'),
(52, 'La casa de abajo', 'Alborache', 'VALENCIA', 'Benito', '49522146L', 'Beni@gmail.com', 630525874, 49, 18, 'si', 'comidas:piscina:mascotas si:', 'yoga:senderismo', '21/02/2019', '21/02/1999', 20, 30, '39.393557', '-0.774172'),
(53, 'El Puente', 'Bolbaite', 'VALENCIA', 'Maria', '49522146P', 'casaelpuente@gmail.com', 630025774, 8, 3, 'si', 'comidas:piscina:mascotas si:', 'yoga:senderismo', '21/02/2019', '21/02/2000', 19, 14, '39.061917', '-0.673312');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `codigo` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_user` varchar(50) NOT NULL,
  `id_product` int(3) NOT NULL,
  `cantidad` int(3) NOT NULL,
  `precio` int(3) NOT NULL,
  `total` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`codigo`, `fecha`, `id_user`, `id_product`, `cantidad`, `precio`, `total`) VALUES
(4, '2019-04-27 16:49:16', 'joa', 31, 1, 50, 50),
(5, '2019-04-27 16:49:16', 'joa', 11, 3, 0, 0),
(7, '2019-04-27 16:57:35', '49456209', 14, 1, 45, 45),
(9, '2019-04-27 16:57:35', '49456209', 33, 1, 45, 45);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritos1`
--

CREATE TABLE `favoritos1` (
  `user_id` varchar(100) NOT NULL,
  `home_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `favoritos1`
--

INSERT INTO `favoritos1` (`user_id`, `home_id`) VALUES
('115910746561766016533', 19),
('115910746561766016533', 44),
('49456209', 11),
('49456209', 36),
('49456209', 47),
('joa', 11),
('joa', 31),
('joa', 35);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `joa`
--

CREATE TABLE `joa` (
  `ID` int(3) NOT NULL,
  `IDclient` varchar(20) NOT NULL,
  `IDproducto` int(4) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `cantidad` int(3) NOT NULL,
  `precio` int(4) NOT NULL,
  `total` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `joa`
--

INSERT INTO `joa` (`ID`, `IDclient`, `IDproducto`, `nombre`, `cantidad`, `precio`, `total`) VALUES
(1, 'joa', 33, 'Las casas de Ali', 4, 45, 180);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users2`
--

CREATE TABLE `users2` (
  `IDuser` varchar(100) NOT NULL,
  `user` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `type` varchar(45) NOT NULL,
  `avatar` longtext NOT NULL,
  `activate` tinyint(1) NOT NULL DEFAULT '0',
  `tokenMail` longtext NOT NULL,
  `token` longtext CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `phone` varchar(20) NOT NULL,
  `city` varchar(50) NOT NULL,
  `province` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users2`
--

INSERT INTO `users2` (`IDuser`, `user`, `email`, `password`, `type`, `avatar`, `activate`, `tokenMail`, `token`, `phone`, `city`, `province`) VALUES
('115910746561766016533', 'joamahiques', 'joamahiques@gmail.com', '$2y$10$44hxJHMCxPLPdVJo8vtFmuZYcraMk6DeVIL/Woxh8TswYZGt7JTiy', 'client_rs', 'https://lh3.googleusercontent.com/-Wywr2PvIc5w/AAAAAAAAAAI/AAAAAAAAAPE/CV3-hBBBTkk/photo.jpg', 1, 'eyJ0eXAiOiJKV1QiLCAiYWxnIjoiSFMyNTYifQ.ewogICAgICAgICJpYXQiOiIxNTU2NTI5NjU1IiwgCiAgICAgICAgImV4cCI6IjE1NTY1MzMyNTUiLAogICAgICAgICJuYW1lIjpqb2FtYWhpcXVlcwogICAgICAgfQ.dO5OSu3Nv9WC1D9MAmJUBMAhvagCBknNqdqEQDh66Pk', '', '', '', ''),
('49456209', 'joamahiques', 'joamahiques@gmail.com', '$2y$10$vLGJO1EV1M9p5SiPwT8EW.3HCaIiGAc3g.Z/.KUs.3U6RRq2SQIRO', 'client_rs', 'https://avatars0.githubusercontent.com/u/49456209?v=4', 1, '', '', '690032785', '', ''),
('joa', 'joa', 'joamahiques@gmail.com', '$2y$10$eG4JwRspgfj518OdedDCcO585nY7F2ktGyyunhKajT4PJtBxu7KmK', 'admin', '/www/EDEN_ANGULARJS/media/1547267173-joana.jpeg', 1, '', 'eyJ0eXAiOiJKV1QiLCAiYWxnIjoiSFMyNTYifQ.ewogICAgICAgICJpYXQiOiIxNTU2NTUyNjIyIiwgCiAgICAgICAgImV4cCI6IjE1NTY1NTYyMjIiLAogICAgICAgICJuYW1lIjpqb2EKICAgICAgIH0.5QxLW8DRilmlQa99Z_-K2BZTbtshEUIidUmVaDMqxwE', '690032780', '', ''),
('pilu', 'pilu', 'joamahiques@gmail.com', '$2y$10$fpv4/IUF4O2TtGkC2firXuGKjYBffDUD3VcmZASF65AELsQPfBqJq', 'client', '/www/EDEN_ANGULARJS/media/1486592972-IMG_5726.jpg', 1, 'eyJ0eXAiOiJKV1QiLCAiYWxnIjoiSFMyNTYifQ.ewogICAgImlhdCI6dGltZSgpLCAKICAgICJleHAiOnRpbWUoKSArICg2MCo2MCksCiAgICAibmFtZSI6cGlsdQogICAgfQ.dHSAzW9Qv1TOQnbseXF_mdyjZv_BKjRp9hoKlhVwdsA', '', '695521480', '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `casas`
--
ALTER TABLE `casas`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD UNIQUE KEY `codigo` (`codigo`);

--
-- Indices de la tabla `favoritos1`
--
ALTER TABLE `favoritos1`
  ADD PRIMARY KEY (`user_id`,`home_id`);

--
-- Indices de la tabla `joa`
--
ALTER TABLE `joa`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `users2`
--
ALTER TABLE `users2`
  ADD PRIMARY KEY (`IDuser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `casas`
--
ALTER TABLE `casas`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `joa`
--
ALTER TABLE `joa`
  MODIFY `ID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

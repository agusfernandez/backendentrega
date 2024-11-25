-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 25-11-2024 a las 23:38:28
-- Versión del servidor: 8.0.35
-- Versión de PHP: 8.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `electrodomesticos2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int NOT NULL,
  `nombre_categoria` varchar(100) NOT NULL,
  `descrip_categoria` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `nombre_categoria`, `descrip_categoria`) VALUES
(1, 'Pequeños Electrodomésticos', 'Dispositivos compactos y prácticos diseñados para facilitar tareas específicas en el hogar, como cocinar, limpiar o preparar alimentos, con portabilidad y eficiencia energética.'),
(2, 'Refrigeradores', 'Electrodomésticos para la conservación de alimentos'),
(3, 'Lavado', 'Electrodomésticos para lavar ropa'),
(4, 'Climatización', 'Dispostivos para la climatización del ambiente'),
(5, 'Cocción', 'Dispositivos para la cocción'),
(6, 'Dispensadores y Purificadores\nDispensadores y Purificadores\nDispensadores y Purificadores', 'Equipos diseñados para proporcionar agua potable de manera eficiente '),
(7, 'Otros', 'Categoría para productos variados');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int NOT NULL,
  `nombre_producto` varchar(100) NOT NULL,
  `marca_producto` varchar(100) DEFAULT NULL,
  `descrip_producto` text,
  `precio_producto` int NOT NULL,
  `estado_producto` varchar(50) DEFAULT NULL,
  `stock_producto` int NOT NULL,
  `imagen_producto` varchar(50) DEFAULT NULL,
  `id_categoria` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre_producto`, `marca_producto`, `descrip_producto`, `precio_producto`, `estado_producto`, `stock_producto`, `imagen_producto`, `id_categoria`) VALUES
(1, 'Cafetera Expresso', 'Atma', 'Cafetera de gran calidad para preparar los cafes mas deliciosos', 40000, 'nuevo', 1000, '1.jpg', 1),
(2, 'Pava Electrica', 'Atma', 'dsdsadas', 2222, 'nuevo', 1000, NULL, 1),
(3, 'Pava Electrica 2', 'Atma', 'dadasdas', 2222, 'nuevo', 1020, NULL, 1),
(4, 'Cepillo', 'Atma', 'sdsadnsjdnjsdas', 4000, 'nuevo', 1000, NULL, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE DATABASE  IF NOT EXISTS `sebuah_DB`;
USE `sebuah_DB`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
);

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Peralatan Mandi'),
(2, 'Mie Instan'),
(3, 'Olahan Daging');

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category_id` int(11) NOT NULL
);


SELECT * FROM `categories`;
SELECT * FROM `product`;

DROP TABLE `product`;

INSERT INTO `product` (`id`, `name`, `category_id`) VALUES
(1, 'Shampo', 1),
(2, 'Sikat Gigi', 1),
(3, 'Indomie', 2),
(4, 'Mie sedap', 2),
(5, 'Nuget', 3);


SELECT categories.id, categories.name AS category_name, GROUP_CONCAT(product.name) AS products FROM categories JOIN product ON product.category_id = categories.id GROUP BY categories.id;

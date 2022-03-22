-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 17 mars 2022 à 14:55
-- Version du serveur :  5.7.31
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `villes`
--

-- --------------------------------------------------------

--
-- Structure de la table `citoyen`
--

DROP TABLE IF EXISTS `citoyen`;
CREATE TABLE IF NOT EXISTS `citoyen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `tel` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `citoyen`
--

INSERT INTO `citoyen` (`id`, `nom`, `prenom`, `tel`) VALUES
(1, 'Le grand', 'stéphane', '06235487'),
(2, 'Dubois', 'stéphane', '063654789'),
(3, 'Ben brahim', 'samira', '0725412368'),
(4, 'Francis', 'Adama', '0702365412'),
(5, 'Yang', 'yi', '0614563287'),
(6, 'Dubois', 'amélie', '0632587412'),
(7, 'Romano', 'silvio', '0636521498');

-- --------------------------------------------------------

--
-- Structure de la table `departement`
--

DROP TABLE IF EXISTS `departement`;
CREATE TABLE IF NOT EXISTS `departement` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `code` int(2) NOT NULL,
  `region_id` int(2) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `population` int(8) NOT NULL,
  `superficie` decimal(7,2) NOT NULL,
  `densite` decimal(7,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `region_id` (`region_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `departement`
--

INSERT INTO `departement` (`id`, `code`, `region_id`, `nom`, `population`, `superficie`, `densite`) VALUES
(1, 75, 1, 'Paris', 2165423, '105.40', '20545.00'),
(2, 92, 1, 'Hauts-de-Seine', 1624357, '176.00', '9229.00'),
(3, 77, 1, 'Seine-et-Marne', 1421197, '5915.00', '240.00'),
(4, 78, 1, 'Yvelines', 1448207, '2284.40', '634.00'),
(5, 91, 1, 'Essonne', 1301659, '1804.00', '722.00'),
(6, 93, 1, 'Seine-Saint-Denis', 1644903, '236.00', '6970.00'),
(7, 2, 2, 'Aisne', 531345, '7361.68', '72.00'),
(8, 59, 2, 'Nord', 2608346, '5743.00', '454.00'),
(9, 60, 2, 'Oise', 829419, '5860.00', '142.00'),
(10, 62, 2, 'Pas-de-Calais', 1465278, '6671.00', '220.00'),
(11, 80, 2, 'Somme', 570559, '6170.00', '92.00'),
(12, 14, 3, 'Calvados', 694905, '5535.00', '126.00'),
(13, 27, 3, 'Eure', 599507, '6040.00', '99.00'),
(14, 50, 3, 'Manche', 495045, '83.00', '5938.00'),
(15, 61, 3, 'Orne', 279942, '6103.00', '46.00'),
(16, 76, 3, 'Seine-Maritime', 1255633, '6278.00', '200.00'),
(19, 8, 4, 'Ardennes', 270582, '5229.00', '52.00'),
(20, 10, 4, 'Aube', 310242, '6004.00', '52.00'),
(21, 51, 4, 'Marne', 566855, '8169.10', '69.00'),
(22, 52, 4, 'Haute-Marne', 172512, '6211.00', '28.00'),
(25, 54, 4, 'Meurthe-et-Moselle', 733760, '5246.00', '140.00'),
(26, 55, 4, 'Meuse', 18083, '6211.00', '30.00'),
(29, 57, 4, 'Moselle', 1046543, '168.00', '6216.00'),
(30, 88, 4, 'Vosges', 364499, '5874.00', '62.00');

-- --------------------------------------------------------

--
-- Structure de la table `region`
--

DROP TABLE IF EXISTS `region`;
CREATE TABLE IF NOT EXISTS `region` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `population` int(8) NOT NULL,
  `superficie` decimal(7,2) NOT NULL,
  `densite` decimal(7,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `region`
--

INSERT INTO `region` (`id`, `nom`, `population`, `superficie`, `densite`) VALUES
(1, 'Île-de-France', 12262544, '12011.00', '1021.00'),
(2, 'Hauts-de-France', 6004947, '31806.00', '189.00'),
(3, 'Normandie', 3325032, '29906.00', '111.00'),
(4, 'Grand Est', 5556219, '57441.00', '97.00');

-- --------------------------------------------------------

--
-- Structure de la table `responsabilite`
--

DROP TABLE IF EXISTS `responsabilite`;
CREATE TABLE IF NOT EXISTS `responsabilite` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `role` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `responsabilite`
--

INSERT INTO `responsabilite` (`id`, `role`) VALUES
(1, 'maire'),
(2, 'préfet'),
(3, 'président du conseil régional');

-- --------------------------------------------------------

--
-- Structure de la table `responsable`
--

DROP TABLE IF EXISTS `responsable`;
CREATE TABLE IF NOT EXISTS `responsable` (
  `id` int(7) NOT NULL AUTO_INCREMENT,
  `role_id` int(2) DEFAULT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `dat_naiss` date NOT NULL,
  `dat_deb` date NOT NULL,
  `dat_fin` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `responsable`
--

INSERT INTO `responsable` (`id`, `role_id`, `nom`, `prenom`, `dat_naiss`, `dat_deb`, `dat_fin`) VALUES
(1, 1, 'Gacquerre', 'Olivier', '1980-03-24', '2022-01-01', '2026-01-01'),
(2, 1, 'Cuvillier \r\n', 'Frédéric', '1970-06-17', '2022-01-01', '2026-01-01'),
(3, 1, 'Bouchart', 'Natacha', '1965-03-26', '2022-01-01', '2026-01-01'),
(4, 1, 'Robert', 'Sylvain', '1945-06-10', '2022-01-01', '2026-01-01'),
(5, 1, 'Ducrocq', 'Pierre', '1978-07-20', '2022-01-01', '2026-01-01'),
(6, 1, 'Decoster', 'François', '1983-06-22', '2022-01-01', '2022-01-01'),
(7, 1, 'Leturque', 'Frédéric', '1952-06-17', '2022-01-01', '2026-01-01'),
(8, NULL, 'Christian', 'julien', '1965-03-10', '2022-03-10', '2026-03-10'),
(9, NULL, 'Dumont', 'Yvonne', '1958-08-19', '2022-03-26', '2026-05-21');

-- --------------------------------------------------------

--
-- Structure de la table `ville`
--

DROP TABLE IF EXISTS `ville`;
CREATE TABLE IF NOT EXISTS `ville` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `depart_id` int(2) NOT NULL,
  `maire_id` int(7) NOT NULL,
  `cod_post` int(5) NOT NULL,
  `population` int(8) NOT NULL,
  `superficie` decimal(7,2) NOT NULL,
  `densite` decimal(7,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `depart_id` (`depart_id`),
  KEY `maire_id` (`maire_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `ville`
--

INSERT INTO `ville` (`id`, `nom`, `depart_id`, `maire_id`, `cod_post`, `population`, `superficie`, `densite`) VALUES
(1, 'Béthune', 10, 1, 62400, 354428, '9.43', '2655.00'),
(2, 'Boulogne-sur-Mer', 10, 2, 62200, 84676, '8.42', '4780.00'),
(3, 'Calais', 10, 3, 62100, 130730, '33.50', '2164.00'),
(4, 'Lens', 10, 4, 62300, 503966, '11.70', '2689.00'),
(5, 'Montreuil', 10, 5, 62170, 1935, '2.85', '679.00'),
(6, 'Saint-Omer', 10, 6, 62500, 14903, '16.40', '909.00'),
(7, 'Arras', 10, 7, 62000, 87215, '11.63', '3585.00');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `departement`
--
ALTER TABLE `departement`
  ADD CONSTRAINT `departement_ibfk_1` FOREIGN KEY (`region_id`) REFERENCES `region` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `responsable`
--
ALTER TABLE `responsable`
  ADD CONSTRAINT `responsable_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `responsabilite` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `ville`
--
ALTER TABLE `ville`
  ADD CONSTRAINT `ville_ibfk_1` FOREIGN KEY (`depart_id`) REFERENCES `departement` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ville_ibfk_2` FOREIGN KEY (`maire_id`) REFERENCES `responsable` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

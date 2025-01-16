-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2024 at 03:23 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stage`
--

-- --------------------------------------------------------

--
-- Table structure for table `affaire`
--

CREATE TABLE `affaire` (
  `id` int(11) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `prix_unitaire` int(11) NOT NULL,
  `qte_vendu` int(11) NOT NULL,
  `anne` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `affaire`
--

INSERT INTO `affaire` (`id`, `libelle`, `prix_unitaire`, `qte_vendu`, `anne`) VALUES
(1, 'iphone', 3499, 198, '2020'),
(2, 'Galaxy', 3399, 257, '2021'),
(3, 'asus', 1899, 255, '2022'),
(4, 'dell', 2199, 201, '2023'),
(5, 'epson', 399, 98, '2024'),
(6, 'hp', 499, 178, '2024'),
(7, 'xiaomi', 159, 178, '2024'),
(10, 'GPU RTX', 2599, 12, '2024'),
(11, 'GPU GTX', 899, 255, '2024'),
(12, 'GALAXY FOLD', 4599, 26, '2023'),
(13, 'SSD', 149, 125, '2022');

-- --------------------------------------------------------

--
-- Table structure for table `chart`
--

CREATE TABLE `chart` (
  `id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `userGain` int(11) NOT NULL,
  `userLost` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chart`
--

INSERT INTO `chart` (`id`, `year`, `userGain`, `userLost`) VALUES
(1, 2016, 80000, 823),
(2, 2017, 45677, 345),
(3, 2018, 78888, 555),
(4, 2019, 90000, 4555),
(9, 2020, 45000, 3000);

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `id_client` int(11) NOT NULL,
  `nom_client` varchar(255) DEFAULT NULL,
  `prenom_client` varchar(255) NOT NULL,
  `tel_client` int(11) NOT NULL,
  `adr_client` varchar(255) NOT NULL,
  `codePostale_client` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id_client`, `nom_client`, `prenom_client`, `tel_client`, `adr_client`, `codePostale_client`) VALUES
(14, 'hayder', '', 0, '', 0),
(15, 'hayder', '', 0, '', 0),
(16, 'amira', '', 0, '', 0),
(17, 'amira', '', 0, '', 0),
(18, 'amine', '', 0, '', 0),
(19, 'fares', '', 0, '', 0),
(20, 'roua', '', 0, '', 0),
(21, 'roua', '', 0, '', 0),
(22, 'mokhtar', '', 0, '', 0),
(23, 'haouala', '', 0, '', 0),
(24, 'haouala', '', 0, '', 0),
(25, 'haouala', '', 0, '', 0),
(26, '', '', 0, '', 0),
(27, '', '', 0, '', 0),
(28, '', '', 0, '', 0),
(29, 'sirine', 'yahmdi', 22026015, 'Ariana', 0);

-- --------------------------------------------------------

--
-- Table structure for table `commande`
--

CREATE TABLE `commande` (
  `num_commande` int(11) NOT NULL,
  `Id_prod` int(11) NOT NULL,
  `id_cli` int(11) DEFAULT NULL,
  `quantite_commande` int(11) NOT NULL,
  `prix_commande` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `commande`
--

INSERT INTO `commande` (`num_commande`, `Id_prod`, `id_cli`, `quantite_commande`, `prix_commande`) VALUES
(4, 0, NULL, 0, 0),
(5, 0, NULL, 0, 0),
(6, 0, NULL, 0, 0),
(7, 0, NULL, 0, 0),
(8, 0, NULL, 0, 0),
(9, 0, NULL, 0, 0),
(15, 0, 14, 0, 0),
(16, 0, 15, 0, 0),
(17, 0, 16, 0, 0),
(18, 0, 17, 0, 0),
(19, 0, 18, 0, 0),
(20, 0, 19, 0, 0),
(21, 0, 20, 0, 0),
(22, 0, 21, 0, 0),
(23, 0, 22, 0, 0),
(24, 0, 23, 0, 0),
(25, 0, 24, 0, 0),
(26, 0, 25, 0, 0),
(27, 0, 26, 0, 0),
(28, 0, 27, 0, 0),
(29, 0, 28, 0, 0),
(30, 0, 29, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `compte`
--

CREATE TABLE `compte` (
  `id` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `date_n` varchar(15) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `mdp` varchar(100) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `compte`
--

INSERT INTO `compte` (`id`, `nom`, `prenom`, `date_n`, `mail`, `mdp`, `status`) VALUES
(1, 'admin', '', '0/0/0', 'admin', 'admin', ''),
(2, 'feres', 'brahmi', '2005-11-11', 'feres@gmail.com', 'Feres123', ''),
(4, 'aaa', 'aaaa', '2005-12-15', 'feres@gmail.com', 'Feres123', ''),
(11, 'kir4a', 'aaa', '2005-12-29', 'kira@gmail.com', 'feres123', 'Delete');

-- --------------------------------------------------------

--
-- Table structure for table `com_prod`
--

CREATE TABLE `com_prod` (
  `id_client` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `com_prod`
--

INSERT INTO `com_prod` (`id_client`, `id_produit`) VALUES
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(22, 1),
(23, 1),
(24, 1),
(29, 1),
(21, 2);

-- --------------------------------------------------------

--
-- Table structure for table `produit`
--

CREATE TABLE `produit` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `prix` float NOT NULL,
  `quantité` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produit`
--

INSERT INTO `produit` (`id`, `nom`, `description`, `prix`, `quantité`) VALUES
(1, 'airpods', 'kit bluetooth', 299, 0),
(2, 'lenovo', 'ROG', 123.6, 2),
(3, 'Laptop_ASUS', 'i7 12th\r\n16ram\r\n512 gb_ssd', 1899, 12),
(4, 'Laptop_HP', 'i7 11th\r\n16ram\r\n512 gb_ssd', 1799, 3);

-- --------------------------------------------------------

--
-- Table structure for table `ramassage`
--

CREATE TABLE `ramassage` (
  `id_ramassage` int(11) NOT NULL,
  `id_commande` int(11) NOT NULL,
  `date_ramassage` date NOT NULL,
  `heure_ouverture` int(11) DEFAULT NULL,
  `heure_fermeture` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `affaire`
--
ALTER TABLE `affaire`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chart`
--
ALTER TABLE `chart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id_client`);

--
-- Indexes for table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`num_commande`),
  ADD KEY `id_cli` (`id_cli`),
  ADD KEY `fk_id_prod` (`Id_prod`);

--
-- Indexes for table `compte`
--
ALTER TABLE `compte`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `com_prod`
--
ALTER TABLE `com_prod`
  ADD PRIMARY KEY (`id_produit`,`id_client`),
  ADD KEY `id_client` (`id_client`);

--
-- Indexes for table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ramassage`
--
ALTER TABLE `ramassage`
  ADD PRIMARY KEY (`id_ramassage`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `affaire`
--
ALTER TABLE `affaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `chart`
--
ALTER TABLE `chart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=552;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id_client` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `commande`
--
ALTER TABLE `commande`
  MODIFY `num_commande` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `compte`
--
ALTER TABLE `compte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `produit`
--
ALTER TABLE `produit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ramassage`
--
ALTER TABLE `ramassage`
  MODIFY `id_ramassage` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `commande_ibfk_1` FOREIGN KEY (`id_cli`) REFERENCES `client` (`id_client`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_prod` FOREIGN KEY (`Id_prod`) REFERENCES `produit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `com_prod`
--
ALTER TABLE `com_prod`
  ADD CONSTRAINT `com_prod_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`),
  ADD CONSTRAINT `com_prod_ibfk_2` FOREIGN KEY (`id_produit`) REFERENCES `produit` (`id`);

--
-- Constraints for table `ramassage`
--
ALTER TABLE `ramassage`
  ADD CONSTRAINT `ramassage_ibfk_1` FOREIGN KEY (`id_ramassage`) REFERENCES `commande` (`num_commande`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

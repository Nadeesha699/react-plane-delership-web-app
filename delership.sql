-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2024 at 08:44 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `delership`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` bigint(20) NOT NULL,
  `status` varchar(10) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `last_modified_by` bigint(20) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `last_modified_at` datetime(6) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `contact_no` varchar(100) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender_type` varchar(100) DEFAULT NULL,
  `nic` varchar(100) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `country` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `status`, `created_by`, `last_modified_by`, `created_date`, `created_at`, `last_modified_at`, `first_name`, `last_name`, `contact_no`, `age`, `gender_type`, `nic`, `email`, `country`) VALUES
(1, 'A', NULL, NULL, '2024-04-04', '2024-04-04 19:48:02.471771', '2024-04-04 19:48:02.471771', 'Fraddy', 'Appolo', '1234567890', 23, 'M', '123456789V', 'johndoe@example.com', NULL),
(2, 'A', NULL, NULL, '2024-05-19', '2024-05-19 08:58:00.000000', '2024-05-19 08:58:00.000000', 'Nadeesha', 'Ruwandima', '097654312', 23, 'M', '345667867', 'nadeesha@gmail.com', 'Sri lanka'),
(3, 'A', NULL, NULL, '2024-05-19', '2024-05-19 09:09:19.000000', '2024-05-19 09:09:19.000000', 'Nadeesha', 'Ruwandima', '21345678', 34, 'M', '23456789', 'fd@gmail.com', 'Sri Lanka'),
(4, 'A', NULL, NULL, '2024-05-19', '2024-05-19 09:31:49.000000', '2024-05-19 09:31:49.000000', 'Saman', 'kumara', '23456789', 56, 'M', '23456789', 'saman@gmail.com', 'Sri Lanka'),
(5, 'A', NULL, NULL, '2024-05-19', '2024-05-19 09:43:29.000000', '2024-05-19 09:43:29.000000', 'Iara', 'fad', '223456789', 34, 'F', '34567890-', 'ira@gmail.com', 'Sri Lanka'),
(6, 'A', NULL, NULL, '2024-05-19', '2024-05-19 09:51:06.000000', '2024-05-19 09:51:06.000000', 'Hasrt', 'ert', '4567', 45, 'M', '34567890', 'vsgxvgsxvg@gmail.com', 'gfgfgh'),
(7, 'A', NULL, NULL, '2024-05-19', '2024-05-19 10:01:27.000000', '2024-05-19 10:01:27.000000', 'hadf', 'ghgh', '45678', 45, 'M', 'sfdghj', 'fghj', 'retgh'),
(8, 'A', NULL, NULL, '2024-05-19', '2024-05-19 10:04:36.000000', '2024-05-19 10:04:36.000000', 'ertghjk', 'wertyhjk', '45678', 556, 'M', 'retyu', 'ertyu', 'ertyu'),
(9, 'A', NULL, NULL, '2024-05-19', '2024-05-19 10:11:42.000000', '2024-05-19 10:11:42.000000', 'rtyui', 'dsfgy', '345678456', 456, 'M', 'werty', 'sfhg', 'erty'),
(10, 'A', NULL, NULL, '2024-05-19', '2024-05-19 10:17:59.000000', '2024-05-19 10:17:59.000000', 'Fraddy', 'Appolo', '1234567890', 23, 'M', '123456789V', 'johndoe@example.com', NULL),
(11, 'A', NULL, NULL, '2024-05-19', '2024-05-19 11:09:16.000000', '2024-05-19 11:09:16.000000', 'fdrgthyui', 'dfghj', '43567', 45, 'M', '34567', 'dsfg', 'sdfg'),
(12, 'A', NULL, NULL, '2024-05-26', '2024-05-26 15:43:28.000000', '2024-05-26 15:43:28.000000', 'Jamas', 'Fernando', '0711765243', 23, 'M', '12345', 'jamas@gmail.com', 'Sri Lanaka'),
(13, 'A', NULL, NULL, '2024-05-28', '2024-05-28 18:36:41.000000', '2024-05-28 18:36:41.000000', 'Nadeesha', 'Jamal', '0711764232', 23, 'M', '123456789V', 'mama@gmail.com', 'Sri Lanaka');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` bigint(20) NOT NULL,
  `status` varchar(10) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `last_modified_by` bigint(20) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `last_modified_at` datetime(6) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `contact_no` varchar(100) DEFAULT NULL,
  `date_join` date DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender_type` varchar(100) DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `nic` varchar(100) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `religion` varchar(20) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `user_logging` varchar(200) DEFAULT NULL,
  `pass_word` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `status`, `created_by`, `last_modified_by`, `created_date`, `created_at`, `last_modified_at`, `first_name`, `last_name`, `contact_no`, `date_join`, `age`, `gender_type`, `nationality`, `nic`, `image`, `religion`, `email`, `user_logging`, `pass_word`) VALUES
(1, 'A', NULL, NULL, '2024-03-13', '2024-03-13 17:39:48.617269', '2024-03-13 20:13:40.948046', 'fraddy', 'Appolo', '1234567890', '2024-03-13', 30, 'M', 'American', '123456789V', 'https://example.com/profile.jpg', 'Christian', 'johndoe@example.com', NULL, NULL),
(2, 'A', NULL, NULL, '2024-04-13', '2024-04-13 11:50:17.458099', '2024-04-13 11:50:17.458099', 'Fraddy', 'Appolo', '1234567890', '2024-04-13', 23, 'M', 'Srilankan', '123456789V', 'https://example.com/profile.jpg', 'Buddishim', 'test@gmail.com', NULL, 'testpasword'),
(3, 'A', NULL, NULL, '2024-05-12', '2024-05-12 00:00:31.000000', '2024-05-12 00:00:31.000000', 'Nadeesha', 'Ruwandima', '1234567890', '2024-05-12', 23, 'M', 'Srilankan', '123456789V', 'https://example.com/profile.jpg', 'Buddishim', 'nadee@gmail.com', NULL, 'Nadisha123'),
(5, 'A', NULL, NULL, '2024-05-28', '2024-05-28 07:47:08.000000', '2024-05-28 07:47:08.000000', 'Amal', 'Perera', '093426', '2024-05-28', 23, 'M', 'Sri lanka', '12345678', 'https://example.com/profile.jpg', 'Sri Lanaka', 'amal@gmail.com', NULL, '1234');

-- --------------------------------------------------------

--
-- Table structure for table `flyway_schema_history`
--

CREATE TABLE `flyway_schema_history` (
  `installed_rank` int(11) NOT NULL,
  `version` varchar(50) DEFAULT NULL,
  `description` varchar(200) NOT NULL,
  `type` varchar(20) NOT NULL,
  `script` varchar(1000) NOT NULL,
  `checksum` int(11) DEFAULT NULL,
  `installed_by` varchar(100) NOT NULL,
  `installed_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `execution_time` int(11) NOT NULL,
  `success` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `flyway_schema_history`
--

INSERT INTO `flyway_schema_history` (`installed_rank`, `version`, `description`, `type`, `script`, `checksum`, `installed_by`, `installed_on`, `execution_time`, `success`) VALUES
(1, '1.0', 'create emp', 'SQL', 'V1.0__create_emp.sql', 167874191, 'root', '2024-03-12 11:13:13', 27, 1),
(2, '1.1', 'alter emp', 'SQL', 'V1.1__alter_emp.sql', -1061266742, 'root', '2024-03-15 03:01:12', 44, 1),
(3, '1.2', 'create plane', 'SQL', 'V1.2__create_plane.sql', 1598527059, 'root', '2024-03-15 03:11:03', 39, 1),
(4, '1.3', 'create customer', 'SQL', 'V1.3__create_customer.sql', 2139015433, 'root', '2024-03-19 03:03:25', 58, 1),
(5, '1.4', 'create sale order', 'SQL', 'V1.4__create_sale_order.sql', 649193771, 'root', '2024-04-04 09:14:43', 80, 1);

-- --------------------------------------------------------

--
-- Table structure for table `plane`
--

CREATE TABLE `plane` (
  `id` bigint(20) NOT NULL,
  `status` varchar(10) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `last_modified_by` bigint(20) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `last_modified_at` datetime(6) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `sheet` int(11) DEFAULT NULL,
  `image` blob DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  `old` int(11) DEFAULT NULL,
  `weight` varchar(100) DEFAULT NULL,
  `fuel` varchar(100) DEFAULT NULL,
  `speed` varchar(100) DEFAULT NULL,
  `range` varchar(200) DEFAULT NULL,
  `primary` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plane`
--

INSERT INTO `plane` (`id`, `status`, `created_by`, `last_modified_by`, `created_date`, `created_at`, `last_modified_at`, `name`, `sheet`, `image`, `price`, `old`, `weight`, `fuel`, `speed`, `range`, `primary`) VALUES
(1, 'A', NULL, NULL, '2024-05-12', '2024-05-12 00:44:33.000000', '2024-05-18 20:29:10.000000', 'Airbus A380', 40, 0x706c616e655f41697262757320413338302e6a7067, '140000000', 8, '150000.0', 'AV', 'H', 'S', 'P'),
(2, 'A', NULL, NULL, '2024-05-18', '2024-05-18 18:15:08.000000', '2024-05-18 18:33:57.000000', 'Sky Sovereign', 60, 0x706c616e655f536b7920536f7665726569676e2e6a7067, '160000000', 4, '155000.0', 'AV', 'H', 'S', 'P'),
(3, 'A', NULL, NULL, '2024-05-18', '2024-05-18 18:43:38.000000', '2024-05-18 18:43:38.000000', 'Air Avenger', 180, 0x706c616e655f416972204176656e6765722e6a7067, '40000000', 14, '180000.0', 'JF', 'M', 'L', 'B'),
(4, 'A', NULL, NULL, '2024-05-18', '2024-05-18 20:38:48.000000', '2024-05-18 20:38:48.000000', 'Cloud Chaser', 80, 0x706c616e655f436c6f7564204368617365722e6a7067, '60000000', 18, '160000.0', 'AV', 'S', 'S', 'S'),
(5, 'A', NULL, NULL, '2024-05-18', '2024-05-18 20:54:43.000000', '2024-05-18 20:54:43.000000', 'Horizon Voyager', 120, 0x706c616e655f486f72697a6f6e20566f79616765722e6a7067, '80000000', 12, '185000.0', 'JF', 'S', 'L', 'S'),
(6, 'A', NULL, NULL, '2024-05-18', '2024-05-18 20:59:31.000000', '2024-05-18 20:59:31.000000', 'Stratosphere Sentinel', 100, 0x706c616e655f53747261746f7370686572652053656e74696e656c2e6a7067, '100000000', 3, '175000.0', 'JF', 'M', 'L', 'B'),
(7, 'A', NULL, NULL, '2024-05-18', '2024-05-18 21:06:00.000000', '2024-05-18 21:06:00.000000', 'Falcon Flyer', 130, 0x706c616e655f46616c636f6e20466c7965722e6a7067, '120000000', 7, '195000.0', 'JF', 'M', 'S', 'S'),
(8, 'A', NULL, NULL, '2024-05-18', '2024-05-18 21:19:25.000000', '2024-05-18 21:19:25.000000', 'Jetstream Titan', 140, 0x706c616e655f4a657473747265616d20546974616e2e6a7067, '140000000', 13, '165000.0', 'AV', 'H', 'L', 'P'),
(9, 'A', NULL, NULL, '2024-05-18', '2024-05-18 21:25:34.000000', '2024-05-18 21:25:34.000000', 'Skyward Seeker', 20, 0x706c616e655f536b7977617264205365656b65722e6a7067, '180000000', 6, '200000.0', 'AV', 'H', 'L', 'P'),
(10, 'A', NULL, NULL, '2024-05-18', '2024-05-18 21:34:15.000000', '2024-05-18 21:34:15.000000', 'Aeroblade', 90, 0x706c616e655f4165726f626c6164652e6a7067, '80000000', 9, '170000.0', 'JF', 'S', 'S', 'B'),
(11, 'A', NULL, NULL, '2024-05-18', '2024-05-18 21:43:36.000000', '2024-05-18 21:43:36.000000', 'Thunderbolt', 110, 0x706c616e655f5468756e646572626f6c742e6a7067, '40000000', 6, '190000.0', 'JF', 'M', 'S', 'S'),
(12, 'A', NULL, NULL, '2024-05-18', '2024-05-18 21:56:49.000000', '2024-05-18 21:56:49.000000', 'Altitude Ascender', 30, 0x706c616e655f416c74697475646520417363656e6465722e6a7067, '60000000', 5, '170000.0', 'AV', 'S', 'L', 'B'),
(13, 'A', NULL, NULL, '2024-05-18', '2024-05-18 22:05:05.000000', '2024-05-18 22:05:05.000000', 'Nimbus Navigator', 50, 0x706c616e655f4e696d627573204e6176696761746f722e6a7067, '160000000', 10, '180000.0', 'AV', 'H', 'S', 'S'),
(14, 'A', NULL, NULL, '2024-05-18', '2024-05-18 23:34:10.000000', '2024-05-18 23:34:10.000000', 'Velocity Viper', 70, 0x706c616e655f56656c6f636974792056697065722e6a7067, '120000000', 11, '155000.0', 'JF', 'S', 'S', 'B'),
(15, 'A', NULL, NULL, '2024-05-18', '2024-05-18 23:59:52.000000', '2024-05-18 23:59:52.000000', 'Cirrus Star', 150, 0x706c616e655f43697272757320537461722e6a7067, '100000000', 13, '190000.0', 'AV', 'M', 'L', 'B'),
(16, 'A', NULL, NULL, '2024-05-19', '2024-05-19 00:06:11.000000', '2024-05-19 00:06:11.000000', 'Comet Cruiser', 160, 0x706c616e655f436f6d657420437275697365722e6a7067, '180000000', 15, '175000.0', 'JF', 'S', 'L', 'P'),
(17, 'A', NULL, NULL, '2024-05-19', '2024-05-19 07:53:19.000000', '2024-05-19 07:53:19.000000', 'Eagle Eye', 170, 0x706c616e655f4561676c65204579652e6a7067, '80000000', 16, '200000.0', 'AV', 'H', 'S', 'B'),
(18, 'A', NULL, NULL, '2024-05-19', '2024-05-19 07:57:19.000000', '2024-05-19 07:57:19.000000', 'Zenith Zephyr', 190, 0x706c616e655f5a656e697468205a65706879722e6a7067, '100000000', 17, '190000.0', 'JF', 'S', 'L', 'B'),
(19, 'A', NULL, NULL, '2024-05-19', '2024-05-19 08:01:57.000000', '2024-05-19 08:01:57.000000', 'Sky Glider', 200, 0x706c616e655f536b7920476c696465722e6a7067, '120000000', 19, '200000.0', 'AV', 'M', 'S', 'P'),
(20, 'A', NULL, NULL, '2024-05-19', '2024-05-19 08:05:15.000000', '2024-05-19 08:05:15.000000', 'Turbo Falcon', 20, 0x706c616e655f547572626f2046616c636f6e2e6a7067, '180000000', 20, '155000.0', 'JF', 'H', 'L', 'S'),
(21, 'A', NULL, NULL, '2024-05-19', '2024-05-19 08:09:31.000000', '2024-05-19 08:09:31.000000', 'Azure Arrow', 40, 0x706c616e655f417a757265204172726f772e6a7067, '80000000', 4, '160000.0', 'AV', 'S', 'S', 'P'),
(22, 'A', NULL, NULL, '2024-05-19', '2024-05-19 08:14:01.000000', '2024-05-19 08:14:01.000000', 'Atmosphere Ace', 50, 0x706c616e655f41746d6f737068657265204163652e6a7067, '100000000', 6, '165000.0', 'JF', 'H', 'L', 'S'),
(23, 'A', NULL, NULL, '2024-05-19', '2024-05-19 08:19:18.000000', '2024-05-19 08:19:18.000000', 'Sky Knight', 70, 0x706c616e655f536b79204b6e696768742e6a7067, '120000000', 8, '175000.0', 'AV', 'S', 'S', 'P'),
(24, 'A', NULL, NULL, '2024-05-19', '2024-05-19 08:22:32.000000', '2024-05-19 08:22:32.000000', 'Stellar Streak', 80, 0x706c616e655f5374656c6c61722053747265616b2e6a7067, '140000000', 10, '185000.0', 'JF', 'M', 'L', 'S'),
(25, 'A', NULL, NULL, '2024-05-19', '2024-05-19 08:25:13.000000', '2024-05-19 08:25:13.000000', 'Tempest Talon', 90, 0x706c616e655f54656d706573742054616c6f6e2e6a7067, '160000000', 13, '195000.0', 'AV', 'H', 'L', 'P');

-- --------------------------------------------------------

--
-- Table structure for table `sales_order`
--

CREATE TABLE `sales_order` (
  `id` bigint(20) NOT NULL,
  `status` varchar(10) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `last_modified_by` bigint(20) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `last_modified_at` datetime(6) DEFAULT NULL,
  `order_price` varchar(100) DEFAULT NULL,
  `date_time` date DEFAULT NULL,
  `customer_id` bigint(20) DEFAULT NULL,
  `employee_id` bigint(20) DEFAULT NULL,
  `plane_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales_order`
--

INSERT INTO `sales_order` (`id`, `status`, `created_by`, `last_modified_by`, `created_date`, `created_at`, `last_modified_at`, `order_price`, `date_time`, `customer_id`, `employee_id`, `plane_id`) VALUES
(2, 'A', NULL, NULL, '2024-05-19', '2024-05-19 08:29:58.000000', '2024-05-19 08:29:58.000000', '200000000', '2024-05-19', 1, 1, 1),
(3, 'A', NULL, NULL, '2024-05-19', '2024-05-19 09:05:56.000000', '2024-05-19 09:05:56.000000', '100000000', '2024-05-19', 2, 2, 2),
(4, 'A', NULL, NULL, '2024-05-19', '2024-05-19 09:09:32.000000', '2024-05-19 09:09:32.000000', '100000000', '2024-05-19', 2, 2, 2),
(6, 'A', NULL, NULL, '2024-05-19', '2024-05-19 09:43:34.000000', '2024-05-19 09:43:34.000000', '200000000', '2024-05-19', 3, 3, 3),
(11, 'A', NULL, NULL, '2024-05-19', '2024-05-19 11:13:47.000000', '2024-05-19 11:13:47.000000', '20000000', '2024-05-19', 5, 3, 3),
(12, 'A', NULL, NULL, '2024-05-28', '2024-05-28 18:36:56.000000', '2024-05-28 18:36:56.000000', '20000000', '2024-05-28', 2, 3, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flyway_schema_history`
--
ALTER TABLE `flyway_schema_history`
  ADD PRIMARY KEY (`installed_rank`),
  ADD KEY `flyway_schema_history_s_idx` (`success`);

--
-- Indexes for table `plane`
--
ALTER TABLE `plane`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales_order`
--
ALTER TABLE `sales_order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_id_fk` (`employee_id`),
  ADD KEY `customer_id_fk` (`customer_id`),
  ADD KEY `plane_id_fk` (`plane_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `plane`
--
ALTER TABLE `plane`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `sales_order`
--
ALTER TABLE `sales_order`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `sales_order`
--
ALTER TABLE `sales_order`
  ADD CONSTRAINT `customer_id_fk` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  ADD CONSTRAINT `employee_id_fk` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`),
  ADD CONSTRAINT `plane_id_fk` FOREIGN KEY (`plane_id`) REFERENCES `plane` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

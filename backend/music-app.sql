-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3308
-- Thời gian đã tạo: Th6 04, 2025 lúc 11:10 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `music-app`
--
CREATE DATABASE IF NOT EXISTS `music-app` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `music-app`;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `artist_songs`
--

CREATE TABLE `artist_songs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `song_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `artist_songs`
--

INSERT INTO `artist_songs` (`id`, `song_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(2, 2, 1, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(3, 3, 1, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(4, 4, 1, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(5, 5, 2, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(6, 6, 2, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(7, 7, 2, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(8, 8, 11, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(9, 9, 15, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(10, 10, 12, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(11, 11, 13, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(12, 12, 14, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(13, 13, 3, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(14, 14, 3, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(15, 15, 3, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(16, 16, 3, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(17, 17, 3, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(18, 18, 3, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(19, 19, 4, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(20, 20, 4, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(21, 21, 4, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(22, 22, 4, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(23, 23, 4, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(24, 24, 4, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(25, 25, 4, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(26, 26, 4, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(27, 27, 4, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(28, 28, 4, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(29, 29, 5, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(30, 30, 5, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(31, 31, 5, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(32, 32, 5, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(33, 33, 5, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(34, 34, 5, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(35, 35, 5, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(36, 36, 5, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(37, 37, 5, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(38, 38, 5, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(39, 39, 6, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(40, 40, 6, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(41, 41, 6, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(42, 42, 7, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(43, 43, 8, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(44, 44, 8, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(45, 45, 8, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(46, 46, 8, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(47, 47, 9, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(48, 48, 9, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(49, 49, 9, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(50, 50, 9, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(51, 51, 10, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(52, 52, 10, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(53, 53, 10, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(54, 54, 10, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(55, 55, 10, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(56, 56, 10, '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(57, 57, 10, '2025-06-04 02:06:58', '2025-06-04 02:06:58');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `artist_user`
--

CREATE TABLE `artist_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `artist_id` int(11) NOT NULL,
  `is_follow` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `favorites`
--

CREATE TABLE `favorites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `song_id` int(11) NOT NULL,
  `isFavorite` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `genres`
--

CREATE TABLE `genres` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `genres`
--

INSERT INTO `genres` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'pop', 'nothing to desc', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(2, 'ballad', 'nothing to desc', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(3, 'rap', 'nothing to desc', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(4, 'r&b', 'nothing to desc', '2025-06-04 02:06:58', '2025-06-04 02:06:58');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_04_11_164323_create_personal_access_tokens_table', 1),
(5, '2025_04_21_071715_add_publish_to_users_table', 1),
(6, '2025_04_23_121228_create_songs_table', 1),
(7, '2025_05_14_155230_create_genres_table', 1),
(8, '2025_05_14_161518_create_artist_songs_table', 1),
(9, '2025_05_15_181444_create_favorites_table', 1),
(10, '2025_05_21_025031_create_artist_user_table', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `songs`
--

CREATE TABLE `songs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `genre` int(11) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `release_date` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `songs`
--

INSERT INTO `songs` (`id`, `title`, `genre`, `duration`, `release_date`, `path`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Mơ', 2, '402', '22:53:17', 'song_audio/mo.mp3', 'song_image/mo.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(2, 'Từng là', 2, '369', '06:56:21', 'song_audio/tungla.mp3', 'song_image/tungla.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(3, 'Vết mưa', 2, '238', '13:37:47', 'song_audio/vetmua.mp3', 'song_image/vetmua.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(4, 'Người bình thường', 2, '322', '02:49:42', 'song_audio/nguoibinhthuong.mp3', 'song_image/nguoibinhthuong.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(5, 'Cause I Love You', 1, '417', '14:26:05', 'song_audio/causeiloveyou.mp3', 'song_image/causeiloveyou.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(6, 'Những kẻ mộng mơ', 1, '476', '21:21:29', 'song_audio/nhungkemongmo.mp3', 'song_image/nhungkemongmo.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(7, 'Mãi mãi bên nhau', 1, '409', '17:06:10', 'song_audio/maimaibennhau.mp3', 'song_image/maimaibennhau.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(8, 'Không Thể Say', 3, '210', '05:00:07', 'song_audio/khongthesay.mp3', 'song_image/khongthesay.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(9, 'Ngõ Chạm', 3, '333', '02:03:58', 'song_audio/ngocham.mp3', 'song_image/ngocham.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(10, 'Chắc Anh Đang', 1, '253', '09:35:20', 'song_audio/chacanhdang.mp3', 'song_image/chacanhdang.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(11, 'NGỰA Ô', 3, '420', '06:49:59', 'song_audio/nguao.mp3', 'song_image/nguao.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(12, 'Mộng Yu', 3, '277', '13:34:40', 'song_audio/mongyu.mp3', 'song_image/mongyu.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(13, 'Tìm lại bầu trời', 1, '223', '05:29:11', 'song_audio/timlaibautroi.mp3', 'song_image/timlaibautroi.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(14, 'Anh yêu em', 2, '414', '17:48:12', 'song_audio/anhyeuem.mp3', 'song_image/anhyeuem.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(15, 'Gấp đôi yêu thương', 2, '485', '07:25:29', 'song_audio/gapdoiyeuthuong.mp3', 'song_image/gapdoiyeuthuong.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(16, 'Nắm lấy tay anh', 1, '221', '08:47:28', 'song_audio/namlaytayanh.mp3', 'song_image/namlaytayanh.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(17, 'Chiếc khăn phiêu', 4, '221', '08:01:50', 'song_audio/chieckhanphieu.mp3', 'song_image/chieckhanphieu.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(18, 'Cầu vòng khuyết', 4, '366', '01:04:21', 'song_audio/cauvongkhuyet.mp3', 'song_image/cauvongkhuyet.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(19, 'Đừng làm trái tim anh đau', 2, '272', '19:19:38', 'song_audio/dunglamtraitimanhdau.mp3', 'song_image/dunglamtraitimanhdau.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(20, 'Âm thầm bên em', 2, '427', '16:58:52', 'song_audio/amthambenem.mp3', 'song_image/amthambenem.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(21, 'Nơi này có anh', 2, '392', '13:48:29', 'song_audio/noinaycoanh.mp3', 'song_image/noinaycoanh.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(22, 'Buông đôi tay nhau ra', 3, '249', '03:35:54', 'song_audio/buongdoitaynhaura.mp3', 'song_image/buongdoitaynhaura.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(23, 'Chúng ta của hiện tại', 1, '284', '10:44:41', 'song_audio/chungtacuahientai.mp3', 'song_image/chungtacuahientai.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(24, 'Muộn rồi mà sao còn', 2, '338', '16:00:47', 'song_audio/muonroimasaocon.mp3', 'song_image/muonroimasaocon.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(25, 'Chúng ta của tương lai', 4, '232', '14:39:16', 'song_audio/chungtacuatuonglai.mp3', 'song_image/chungtacuatuonglai.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(26, 'Chúng ta không thuộc về nhau', 4, '347', '13:49:32', 'song_audio/chungtakhongthuocvenhau.mp3', 'song_image/chungtakhongthuocvenhau.jpeg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(27, 'Có chắc yêu là đây', 4, '371', '22:48:52', 'song_audio/cochacyeuladay.mp3', 'song_image/cochacyeuladay.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(28, 'Nắng ấm xa dần', 1, '398', '23:23:49', 'song_audio/nangamxadan.mp3', 'song_image/nangamxadan.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(29, 'Beauty and a beat', 1, '377', '12:13:31', 'song_audio/beautyandabeat.mp3', 'song_image/beautyandabeat.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(30, 'Sorry', 2, '436', '19:19:53', 'song_audio/sorry_justin.mp3', 'song_image/sorry_justin.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(31, 'Love yourself', 4, '230', '19:57:21', 'song_audio/loveyourself.mp3', 'song_image/loveyourself.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(32, 'Stay', 4, '361', '03:31:15', 'song_audio/stay.mp3', 'song_image/stay.png', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(33, 'Confident', 3, '406', '11:45:26', 'song_audio/confident.mp3', 'song_image/confident.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(34, 'Ghost', 4, '209', '16:42:14', 'song_audio/ghost.mp3', 'song_image/ghost.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(35, 'Baby', 2, '312', '03:08:07', 'song_audio/baby.mp3', 'song_image/baby.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(36, 'What do you mean', 1, '420', '13:58:28', 'song_audio/whatdoyoumean.mp3', 'song_image/whatdoyoumean.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(37, 'I don\'t care', 4, '495', '10:03:30', 'song_audio/idontcare.mp3', 'song_image/idontcare.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(38, 'That should be me', 4, '209', '21:05:52', 'song_audio/thatshouldbeme.mp3', 'song_image/thatshouldbeme.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(39, 'Phép màu', 4, '367', '15:59:35', 'song_audio/phepmau.mp3', 'song_image/phepmau.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(40, 'Bầu trời mới', 2, '391', '01:04:23', 'song_audio/bautroimoi.mp3', 'song_image/bautroimoi.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(41, 'Những ngày nắng đẹp', 1, '497', '08:03:21', 'song_audio/nhungngaynangdep.mp3', 'song_image/nhungngaynangdep.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(42, 'Nơi ta chờ em', 1, '304', '01:32:56', 'song_audio/noitachoem.mp3', 'song_image/noitachoem.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(43, 'Bình yên', 2, '337', '06:01:17', 'song_audio/binhyen.mp3', 'song_image/binhyen.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(44, 'Cơn mưa cuối', 2, '346', '00:32:04', 'song_audio/conmuacuoi.mp3', 'song_image/conmuacuoi.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(45, 'Hit me up', 3, '377', '21:57:39', 'song_audio/hitmeup.mp3', 'song_image/hitmeup.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(46, 'Cho Mình Em', 3, '367', '00:31:26', 'song_audio/chominhem.mp3', 'song_image/chominhem.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(47, 'Dancing in the dark', 4, '462', '07:42:48', 'song_audio/dancinginthedark.mp3', 'song_image/dancinginthedark.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(48, 'Giá như', 2, '408', '15:04:37', 'song_audio/gianhu.mp3', 'song_image/gianhu.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(49, 'Thắng năm', 2, '326', '22:05:06', 'song_audio/thangnam.mp3', 'song_image/thangnam.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(50, 'Vài lần đón đưa', 1, '295', '04:54:39', 'song_audio/vailandondua.mp3', 'song_image/vailandondua.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(51, 'Một bài hát không vui mấy', 4, '227', '09:35:50', 'song_audio/motbaihatkhongvuimay.mp3', 'song_image/motbaihatkhongvuimay.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(52, 'Ánh sao và bầu trời', 2, '213', '05:44:23', 'song_audio/anhsaovabautroi.mp3', 'song_image/anhsaovabautroi.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(53, 'Chúng ta sau này', 1, '330', '16:46:55', 'song_audio/chungtasaunay.mp3', 'song_image/chungtasaunay.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(54, 'Sau chia tay ai cũng khác', 2, '435', '00:46:20', 'song_audio/sauchiatayaicungkhac.mp3', 'song_image/sauchiatayaicungkhac.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(55, 'Lặng im và tan vỡ', 3, '406', '18:14:29', 'song_audio/langimvatanvo.mp3', 'song_image/langimvatanvo.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(56, 'Mỗi khi em nhìn anh', 3, '256', '07:04:39', 'song_audio/moikhiemnhinanh.mp3', 'song_image/moikhiemnhinanh.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58'),
(57, 'Trở Thành Quá Khứ', 2, '473', '00:37:40', 'song_audio/trothanhquakhu.mp3', 'song_image/trothanhquakhu.jpg', '2025-06-04 02:06:58', '2025-06-04 02:06:58');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `province_id` varchar(10) DEFAULT NULL,
  `district_id` varchar(10) DEFAULT NULL,
  `ward_id` varchar(10) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `publish` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `province_id`, `district_id`, `ward_id`, `address`, `birthday`, `image`, `description`, `role`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `publish`) VALUES
(1, 'Vũ Cát Tường', 'vucattuong@gmail.com', '09123123123', NULL, NULL, NULL, 'Quận 6 HCM city', NULL, 'user_image/vucattuong.jpg', NULL, 'artist', '2025-06-04 02:06:34', '$2y$12$Xnp86iQdW2ocflJeVVsThuXFPvVqhi7rtmClDpsdnH3s4mFhl4Do.', 'Cx8sqqQ0mO', '2025-06-04 02:06:34', '2025-06-04 02:06:34', 1),
(2, 'Noo Phước Thịnh', 'noophuocthinh@gmail.com', '12312312312', NULL, NULL, NULL, 'Quận 6 HCM city', NULL, 'user_image/noophuocthinh.jpg', NULL, 'artist', '2025-06-04 02:06:35', '$2y$12$V.nQhHApCOB1NiU4YfBvF.2ifC8q/KnfhkNibnf54RSJOTvLApDvq', 'dJMuXT8nEj', '2025-06-04 02:06:35', '2025-06-04 02:06:35', 1),
(3, 'Tuấn Hưng', 'tuanhung@gmail.com', '12312312312', NULL, NULL, NULL, 'Quận 6 HCM city', NULL, 'user_image/tuanhung.jpg', NULL, 'artist', '2025-06-04 02:06:36', '$2y$12$YYEPjuF2XoLxzh.GMkndZezFHF/O4XFiwr24xCSZXuKdspI9xtI2i', 'hWubACQRbg', '2025-06-04 02:06:36', '2025-06-04 02:06:36', 1),
(4, 'Sơn Tùng', 'sontung@gmail.com', '12312312312', NULL, NULL, NULL, 'Quận 6 HCM city', NULL, 'user_image/sontung.jpg', NULL, 'artist', '2025-06-04 02:06:37', '$2y$12$9AhcIs/D5r7BiS7yn.FnDentVvz/8YC4aEXi.ZNXBwErase2Q/jN2', 'MYdemR1z9i', '2025-06-04 02:06:37', '2025-06-04 02:06:37', 1),
(5, 'Justin Bieber', 'justinbieber@gmail.com', '12312312312', NULL, NULL, NULL, 'Quận 6 HCM city', NULL, 'user_image/justin_bieber.jpg', NULL, 'artist', '2025-06-04 02:06:38', '$2y$12$/LcvSM6GNKpjyvDtkoPtce.fll6u1RnmD9Jg2XMJU4YFEkQAhViVi', 'mzKQ50GgCO', '2025-06-04 02:06:39', '2025-06-04 02:06:39', 1),
(6, 'Minh Tốc', 'minhtoc@gmail.com', '12312312312', NULL, NULL, NULL, 'Quận 6 HCM city', NULL, 'user_image/minhtoc.jpg', NULL, 'artist', '2025-06-04 02:06:39', '$2y$12$0X45C5pdWz.n6cawqLHJkOHkrs096BcXFVa08k2ywIOXiiiAXj2uO', 'M6a3PgUIvK', '2025-06-04 02:06:40', '2025-06-04 02:06:40', 1),
(7, 'Will', 'will@gmail.com', '12312312312', NULL, NULL, NULL, 'Quận 6 HCM city', NULL, 'user_image/will.jpg', NULL, 'artist', '2025-06-04 02:06:40', '$2y$12$evYH5O.JwcHg88Saj47q5ut5tDJEZe3ftvPCOjKjXzMfBpLsPYL3q', 'xusDitLr8C', '2025-06-04 02:06:41', '2025-06-04 02:06:41', 1),
(8, 'Binz', 'binz@gmail.com', '12312312312', NULL, NULL, NULL, 'Quận 6 HCM city', NULL, 'user_image/binz.jpg', NULL, 'artist', '2025-06-04 02:06:41', '$2y$12$G1pIQuV/c9y5Nuc9TZ8dKOUP6e97rMDUGXge/tSayOnmGs4/i9DNa', 'Dq7ie6ES7G', '2025-06-04 02:06:42', '2025-06-04 02:06:42', 1),
(9, 'Sobin Hoàng Sơn', 'sobinhoangson@gmail.com', '12312312312', NULL, NULL, NULL, 'Quận 6 HCM city', NULL, 'user_image/sobinhoangson.jpg', NULL, 'artist', '2025-06-04 02:06:42', '$2y$12$gVJHFFgsUa3XiCdo0Oy5euBnG4.LOvjZoO5L9hDv4wNbecL1.Bw1i', 'XCxXCrn0Cd', '2025-06-04 02:06:43', '2025-06-04 02:06:43', 1),
(10, 'Trí', 'tri@gmail.com', '12312312312', NULL, NULL, NULL, 'Quận 6 HCM city', NULL, 'user_image/tri.jpg', NULL, 'artist', '2025-06-04 02:06:43', '$2y$12$yKiXOmSqHqLgcLwj9cb52.reLO9RgZinyYkmate.De/UvFBAufFxu', 'QtSSs1FVs6', '2025-06-04 02:06:44', '2025-06-04 02:06:44', 1),
(11, 'Hiếu Thứ Hai', 'hieuthu2@gmail.com', '0385623512', NULL, NULL, NULL, 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức', NULL, 'user_image/hieuthuhai.jpg', NULL, 'artist', '2025-06-04 02:06:44', '$2y$12$d4dd6.sETX3bOWQvP3mtvuirETUTaW8QhSZEYpu8nnTBIGhVNKxWC', 'JlBPQwV7NP', '2025-06-04 02:06:45', '2025-06-04 02:06:45', 1),
(12, 'Tiên Tiên', 'toctien@gmail.com', '0385623512', NULL, NULL, NULL, 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức', NULL, 'user_image/toctien.jpg', NULL, 'artist', '2025-06-04 02:06:45', '$2y$12$5zvMG0esjknOHslO0/SezuuT4lvWCw0.0wPdAOTfkhewAoV1EJ5PS', 'UFwaImEymL', '2025-06-04 02:06:46', '2025-06-04 02:06:46', 1),
(13, 'Đăng Răng To', 'dangrangto@gmail.com', '0385623512', NULL, NULL, NULL, 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức', NULL, 'user_image/dangrangto.jpg', NULL, 'artist', '2025-06-04 02:06:46', '$2y$12$EeoC202Y1.J95kHKmu0RtuqTGlTayYtv1PMK2Og.RLAR/fVLC3BLC', 'fzWyki9b1R', '2025-06-04 02:06:47', '2025-06-04 02:06:47', 1),
(14, 'Amme', 'amme@gmail.com', '0385623512', NULL, NULL, NULL, 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức', NULL, 'user_image/amme.jpg', NULL, 'artist', '2025-06-04 02:06:47', '$2y$12$XOj7SXCMQoLxGY.LsLzsDu8G/7dIY5NcwAqdUEqZFR9JZZOzbIKny', 'D5laJsk9Et', '2025-06-04 02:06:48', '2025-06-04 02:06:48', 1),
(15, 'Big daddy', 'bigdaddy@gmail.com', '0385623512', NULL, NULL, NULL, 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức', NULL, 'user_image/bigdaddy.jpg', NULL, 'artist', '2025-06-04 02:06:48', '$2y$12$dbYw7bhSY8XFhr/S3YWbq.4U2GSbFR1vo0f.90iOUvGEOlthOoHse', 'dTi57dzbI9', '2025-06-04 02:06:48', '2025-06-04 02:06:48', 1),
(16, 'Trần Văn Tuấn', 'tuantran280504@gmail.com', '0978476115', NULL, NULL, NULL, 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức', NULL, 'user_image/noavtar.jpg', NULL, 'admin', '2025-06-04 02:06:49', '$2y$12$729MnrvW5dVYXthlcd.HIOZUbdVm/sKVLlMmCbvgoqe7LzxLBBaRq', 'hQsh2WSUpH', '2025-06-04 02:06:49', '2025-06-04 02:06:49', 1),
(17, 'Test', 'test@gmail.com', '0385623512', NULL, NULL, NULL, 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức', NULL, 'user_image/noavtar.jpg', NULL, 'user', '2025-06-04 02:06:49', '$2y$12$dIVne9BOI29BtUS2d/TmE.leJQz2njPcA8WQs0Xv/.cZ9o2tIhQTi', 'bJqoR6U60y', '2025-06-04 02:06:50', '2025-06-04 02:06:50', 1),
(18, 'Tillman King', 'wwhite@example.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:50', '$2y$12$LTPW7STl/WZ0sAtFYovtV.AxBC6vBUjWuy8G3CiA1mR3a8TXLCGTW', 'mCI6blSCQ4', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(19, 'Lilyan Jacobs DDS', 'rath.toy@example.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:50', '$2y$12$Eu8AuS6D1v4DOliYL9lxyOOI2q0P.rpp3dzaoa2/eMj/ZjJvMXSMa', 'zcu3HPt9fy', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(20, 'Merlin Weissnat', 'okuneva.bertram@example.org', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:51', '$2y$12$N2PCh0Qxg8vkqHjR7KnFHeI5ZlQen2INaDMVpZvel8X5aqQztlD/a', '37Am0ddaHo', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(21, 'Andreane Legros', 'elise.sporer@example.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:51', '$2y$12$y5a6M30UTRkMGkbgBWyfk.e63qPKznVeqa7ukVzHEFlvp3ZXqmi8a', '5CHue6IA0G', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(22, 'Rogers Smitham', 'joelle.turcotte@example.net', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:51', '$2y$12$LsGbKS.xtWMrsIA63ZFx.eOD5iSzF1gMsr4X13e0MzsoiRNrxwbXe', 'HS1QUULKLw', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(23, 'Prof. Damian Blanda I', 'zechariah34@example.org', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:52', '$2y$12$z5b.01muR0iXaL9VymG5/.r1BRADn2hxBODrXyBKYttHKdv7nSFFq', 'SzSRLOjfBb', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(24, 'Schuyler Flatley DVM', 'shanie.mante@example.org', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:52', '$2y$12$wT1Wpn/ga2zShEcZh8SXP.g4qTGN6VJjDCeMhJodJlVRHhMrMJgr.', 'ne87nnts1w', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(25, 'Penelope Bechtelar', 'klesch@example.net', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:53', '$2y$12$lprWOOvqqdky2sv6xt6OvuLgz2zPUUnGk89ViLzwsygP8edOakbEm', 'NAsDDOfLPO', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(26, 'Carroll Nitzsche', 'walter.jovany@example.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:53', '$2y$12$0GNbutOIXzxdSpxLAdoiTux01viqQD8mk3xS9bp9vFLVfrsvrsXKa', 'cQFnPBYi92', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(27, 'Mr. Kiel Bahringer', 'iwatsica@example.org', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:53', '$2y$12$V9eQVgdhzTLbW0ORLJAwB.I2ZhlY9Lm0jRuPUI8Mnxgjv77D6PUV2', 'xzT5awfrlm', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(28, 'Tito Schmeler', 'dhermann@example.org', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:54', '$2y$12$kTuJokhn3UQF4NuWk4RdC.06NkavKN.l99cTMsUSPBfSFCozR9y7y', 'qdRaNkA3FB', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(29, 'Gisselle Waters', 'otorp@example.net', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:54', '$2y$12$.suf/xK8FQtG2fsu19iXtuDp3CEbYbx69VPPRqB4jGd..5LAO1S/O', 'HJKMbzCSZ8', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(30, 'Meggie Herzog', 'apaucek@example.net', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:55', '$2y$12$PM2A5chxFu1LXVUHsLMe6e.TOwm/gWZtIVmqjz92UqYp0MDVQoTAq', 'HeQUiK38IS', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(31, 'Gerard Rutherford', 'armstrong.gideon@example.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:55', '$2y$12$nZfYnn08X0GrSziT/58PE.bJ//h4aKSFQwXLRUMhzU7JUNNciulX6', 'qVLDfLk0B8', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(32, 'Dr. Laney Price II', 'selena05@example.org', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:55', '$2y$12$BcrH.zUuYzSSRd14cuUP/O9IPCK6n4EpAlJYLlAkEeqUEES.uFXUG', 'Z7Ljad4GwG', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(33, 'Mr. Jerel Konopelski', 'francis58@example.net', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:56', '$2y$12$N2n9JNxP6.1CS2breurssuyl90al2HSQ0bwCvSxdGsu8iyuzXctCS', 'J7txbVDzLJ', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(34, 'Miss Lilliana Beahan', 'sshields@example.net', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:56', '$2y$12$Y.uBkT1.5lsUAjmdT8aCFOcBL.fnrWXMM.isP9qhKUsaaYGB4bz.e', 'qCvRwpkgLM', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(35, 'Gavin Powlowski', 'janae.labadie@example.org', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:57', '$2y$12$UhApWLkeI3rYCnommEufGe1QiZn5OuHzh2CufEoLBHLpBYWwSD77y', 'v8O8GHp9pz', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(36, 'Rosemarie Kassulke DVM', 'gcremin@example.org', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:57', '$2y$12$UoZ5PSvBmo4byf17qQExbOaMhTp2WVFuIitQhYNwetdOfiSF61k4S', '4xGSNdjZjC', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1),
(37, 'Dr. Letha Wintheiser', 'jenifer.pacocha@example.net', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'user', '2025-06-04 02:06:57', '$2y$12$HHPsU4KJ7g2yQUP7IiSo5.LoR6.H9pycU2joExUXZClMu5np/i03m', 'FA1RSHDIxI', '2025-06-04 02:06:58', '2025-06-04 02:06:58', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `artist_songs`
--
ALTER TABLE `artist_songs`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `artist_user`
--
ALTER TABLE `artist_user`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Chỉ mục cho bảng `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Chỉ mục cho bảng `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Chỉ mục cho bảng `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `artist_songs`
--
ALTER TABLE `artist_songs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT cho bảng `artist_user`
--
ALTER TABLE `artist_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `genres`
--
ALTER TABLE `genres`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `songs`
--
ALTER TABLE `songs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

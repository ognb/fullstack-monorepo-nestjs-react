-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(200) NOT NULL,
    `lastName` VARCHAR(200) NOT NULL,
    `email` VARCHAR(200) NOT NULL,
    `password` VARCHAR(500) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mname` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `attr` MEDIUMINT NOT NULL,
    `name` VARCHAR(300) NOT NULL,
    `order_num` TINYINT NOT NULL,
    `description` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

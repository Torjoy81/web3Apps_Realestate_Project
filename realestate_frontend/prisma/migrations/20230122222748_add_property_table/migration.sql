-- CreateTable
CREATE TABLE `Properties` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `property_title` VARCHAR(191) NOT NULL,
    `property_address` VARCHAR(191) NOT NULL,
    `price` DECIMAL(8, 2) NOT NULL DEFAULT 0.00,
    `description` VARCHAR(191) NOT NULL,
    `sqft` INTEGER NOT NULL,
    `bedroom` INTEGER NOT NULL,
    `bathroom` INTEGER NOT NULL,
    `ImageSM` VARCHAR(191) NULL,
    `ImageLG` VARCHAR(191) NULL,
    `ImageMG` VARCHAR(191) NULL,
    `agentID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agent` (
    `id` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone_no` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Agent_email_phone_no_key`(`email`, `phone_no`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Properties` ADD CONSTRAINT `Properties_agentID_fkey` FOREIGN KEY (`agentID`) REFERENCES `Agent`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

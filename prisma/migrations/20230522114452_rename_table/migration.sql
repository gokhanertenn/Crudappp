-- DropForeignKey
ALTER TABLE `listings` DROP FOREIGN KEY `Listings_category_id_fkey`;

-- AddForeignKey
ALTER TABLE `listings` ADD CONSTRAINT `listings_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

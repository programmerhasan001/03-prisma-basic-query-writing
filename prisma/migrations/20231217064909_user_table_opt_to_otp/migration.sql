/*
  Warnings:

  - You are about to drop the column `opt` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `opt`,
    ADD COLUMN `otp` VARCHAR(50) NOT NULL DEFAULT '0';

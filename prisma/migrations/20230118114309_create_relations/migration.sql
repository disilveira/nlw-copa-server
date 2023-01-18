-- AlterTable
ALTER TABLE `day_habits` MODIFY `day_id` VARCHAR(191) NOT NULL,
    MODIFY `habit_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `habit_week_days` ADD CONSTRAINT `habit_week_days_habit_id_fkey` FOREIGN KEY (`habit_id`) REFERENCES `habits`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `day_habits` ADD CONSTRAINT `day_habits_day_id_fkey` FOREIGN KEY (`day_id`) REFERENCES `days`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `day_habits` ADD CONSTRAINT `day_habits_habit_id_fkey` FOREIGN KEY (`habit_id`) REFERENCES `habits`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

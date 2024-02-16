<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240215191348 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE dish CHANGE dish_category_id dish_category_id INT NOT NULL');
        $this->addSql('ALTER TABLE dish_category CHANGE dish_id dish_id INT NOT NULL');
        $this->addSql('ALTER TABLE formula CHANGE menu_id menu_id INT NOT NULL');
        $this->addSql('ALTER TABLE user CHANGE reservation_id reservation_id INT NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE dish CHANGE dish_category_id dish_category_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE dish_category CHANGE dish_id dish_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE formula CHANGE menu_id menu_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE reservation_id reservation_id INT DEFAULT NULL');
    }
}

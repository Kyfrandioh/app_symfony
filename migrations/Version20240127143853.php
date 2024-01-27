<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240127143853 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE dish_category ADD dish_id INT NOT NULL');
        $this->addSql('ALTER TABLE dish_category ADD CONSTRAINT FK_1FB098AA148EB0CB FOREIGN KEY (dish_id) REFERENCES dish (id)');
        $this->addSql('CREATE INDEX IDX_1FB098AA148EB0CB ON dish_category (dish_id)');
        $this->addSql('ALTER TABLE user CHANGE reservation_id reservation_id INT NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE dish_category DROP FOREIGN KEY FK_1FB098AA148EB0CB');
        $this->addSql('DROP INDEX IDX_1FB098AA148EB0CB ON dish_category');
        $this->addSql('ALTER TABLE dish_category DROP dish_id');
        $this->addSql('ALTER TABLE user CHANGE reservation_id reservation_id INT DEFAULT NULL');
    }
}

<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240117201650 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, guest_number INT NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE dish ADD dish_category_id INT NOT NULL');
        $this->addSql('ALTER TABLE dish ADD CONSTRAINT FK_957D8CB8C057AE07 FOREIGN KEY (dish_category_id) REFERENCES dish_category (id)');
        $this->addSql('CREATE INDEX IDX_957D8CB8C057AE07 ON dish (dish_category_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE user');
        $this->addSql('ALTER TABLE dish DROP FOREIGN KEY FK_957D8CB8C057AE07');
        $this->addSql('DROP INDEX IDX_957D8CB8C057AE07 ON dish');
        $this->addSql('ALTER TABLE dish DROP dish_category_id');
    }
}

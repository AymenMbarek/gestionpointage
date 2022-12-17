<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221018224119 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE smartphone (id INT AUTO_INCREMENT NOT NULL, chantier_id INT DEFAULT NULL, emie VARCHAR(255) NOT NULL, designation VARCHAR(255) NOT NULL, actif TINYINT(1) DEFAULT NULL, INDEX IDX_26B07E2ED0C0049D (chantier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE smartphone ADD CONSTRAINT FK_26B07E2ED0C0049D FOREIGN KEY (chantier_id) REFERENCES chantier (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE smartphone DROP FOREIGN KEY FK_26B07E2ED0C0049D');
        $this->addSql('DROP TABLE smartphone');
    }
}

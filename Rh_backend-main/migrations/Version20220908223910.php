<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220908223910 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE pays (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE chantier ADD pays_id INT DEFAULT NULL, DROP pays');
        $this->addSql('ALTER TABLE chantier ADD CONSTRAINT FK_636F27F6A6E44244 FOREIGN KEY (pays_id) REFERENCES pays (id)');
        $this->addSql('CREATE INDEX IDX_636F27F6A6E44244 ON chantier (pays_id)');
        $this->addSql('ALTER TABLE list_activite CHANGE budget_heure budget_heure INT NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE chantier DROP FOREIGN KEY FK_636F27F6A6E44244');
        $this->addSql('DROP TABLE pays');
        $this->addSql('DROP INDEX IDX_636F27F6A6E44244 ON chantier');
        $this->addSql('ALTER TABLE chantier ADD pays VARCHAR(255) NOT NULL, DROP pays_id');
        $this->addSql('ALTER TABLE list_activite CHANGE budget_heure budget_heure INT DEFAULT NULL');
    }
}

<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220828231609 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE list_activite (id INT AUTO_INCREMENT NOT NULL, activite_id INT DEFAULT NULL, chantier_id INT DEFAULT NULL, actif TINYINT(1) NOT NULL, budget_heure VARCHAR(255) NOT NULL, quantite DOUBLE PRECISION NOT NULL, INDEX IDX_C61866759B0F88B1 (activite_id), INDEX IDX_C6186675D0C0049D (chantier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE personnel (id INT AUTO_INCREMENT NOT NULL, personne_id INT DEFAULT NULL, chantier_id INT DEFAULT NULL, UNIQUE INDEX UNIQ_A6BCF3DEA21BD112 (personne_id), INDEX IDX_A6BCF3DED0C0049D (chantier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE list_activite ADD CONSTRAINT FK_C61866759B0F88B1 FOREIGN KEY (activite_id) REFERENCES activity (id)');
        $this->addSql('ALTER TABLE list_activite ADD CONSTRAINT FK_C6186675D0C0049D FOREIGN KEY (chantier_id) REFERENCES chantier (id)');
        $this->addSql('ALTER TABLE personnel ADD CONSTRAINT FK_A6BCF3DEA21BD112 FOREIGN KEY (personne_id) REFERENCES personne (id)');
        $this->addSql('ALTER TABLE personnel ADD CONSTRAINT FK_A6BCF3DED0C0049D FOREIGN KEY (chantier_id) REFERENCES chantier (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE list_activite DROP FOREIGN KEY FK_C61866759B0F88B1');
        $this->addSql('ALTER TABLE list_activite DROP FOREIGN KEY FK_C6186675D0C0049D');
        $this->addSql('ALTER TABLE personnel DROP FOREIGN KEY FK_A6BCF3DEA21BD112');
        $this->addSql('ALTER TABLE personnel DROP FOREIGN KEY FK_A6BCF3DED0C0049D');
        $this->addSql('DROP TABLE list_activite');
        $this->addSql('DROP TABLE personnel');
    }
}

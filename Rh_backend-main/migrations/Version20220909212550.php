<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220909212550 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE presence (id INT AUTO_INCREMENT NOT NULL, personne_id INT DEFAULT NULL, pointage_id INT DEFAULT NULL, nb_heure DOUBLE PRECISION NOT NULL, heure_debut TIME DEFAULT NULL, heure_fin TIME DEFAULT NULL, INDEX IDX_6977C7A5A21BD112 (personne_id), INDEX IDX_6977C7A5E58DA11D (pointage_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE presence ADD CONSTRAINT FK_6977C7A5A21BD112 FOREIGN KEY (personne_id) REFERENCES personne (id)');
        $this->addSql('ALTER TABLE presence ADD CONSTRAINT FK_6977C7A5E58DA11D FOREIGN KEY (pointage_id) REFERENCES pointage (id)');
        $this->addSql('ALTER TABLE contrat DROP FOREIGN KEY FK_603499931A9791C9');
        $this->addSql('DROP INDEX idx_603499931a9791c9 ON contrat');
        $this->addSql('CREATE INDEX IDX_6034999361B20C56 ON contrat (personne_externe_id)');
        $this->addSql('ALTER TABLE contrat ADD CONSTRAINT FK_603499931A9791C9 FOREIGN KEY (personne_externe_id) REFERENCES personne (id)');
        $this->addSql('ALTER TABLE pointage ADD chantier_id INT DEFAULT NULL, DROP chantier, DROP nb_heure, DROP personne');
        $this->addSql('ALTER TABLE pointage ADD CONSTRAINT FK_7591B20D0C0049D FOREIGN KEY (chantier_id) REFERENCES chantier (id)');
        $this->addSql('CREATE INDEX IDX_7591B20D0C0049D ON pointage (chantier_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE presence DROP FOREIGN KEY FK_6977C7A5A21BD112');
        $this->addSql('ALTER TABLE presence DROP FOREIGN KEY FK_6977C7A5E58DA11D');
        $this->addSql('DROP TABLE presence');
        $this->addSql('ALTER TABLE contrat DROP FOREIGN KEY FK_6034999361B20C56');
        $this->addSql('DROP INDEX idx_6034999361b20c56 ON contrat');
        $this->addSql('CREATE INDEX IDX_603499931A9791C9 ON contrat (personne_externe_id)');
        $this->addSql('ALTER TABLE contrat ADD CONSTRAINT FK_6034999361B20C56 FOREIGN KEY (personne_externe_id) REFERENCES personne (id)');
        $this->addSql('ALTER TABLE pointage DROP FOREIGN KEY FK_7591B20D0C0049D');
        $this->addSql('DROP INDEX IDX_7591B20D0C0049D ON pointage');
        $this->addSql('ALTER TABLE pointage ADD chantier VARCHAR(255) DEFAULT NULL, ADD nb_heure VARCHAR(255) NOT NULL, ADD personne VARCHAR(255) NOT NULL, DROP chantier_id');
    }
}

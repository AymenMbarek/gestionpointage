<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220910005608 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pointage ADD personne_id INT DEFAULT NULL, ADD nb_heure INT NOT NULL');
        $this->addSql('ALTER TABLE pointage ADD CONSTRAINT FK_7591B20A21BD112 FOREIGN KEY (personne_id) REFERENCES personne (id)');
        $this->addSql('CREATE INDEX IDX_7591B20A21BD112 ON pointage (personne_id)');
        $this->addSql('ALTER TABLE presence DROP FOREIGN KEY FK_6977C7A5E58DA11D');
        $this->addSql('DROP INDEX IDX_6977C7A5E58DA11D ON presence');
        $this->addSql('ALTER TABLE presence DROP pointage_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pointage DROP FOREIGN KEY FK_7591B20A21BD112');
        $this->addSql('DROP INDEX IDX_7591B20A21BD112 ON pointage');
        $this->addSql('ALTER TABLE pointage DROP personne_id, DROP nb_heure');
        $this->addSql('ALTER TABLE presence ADD pointage_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE presence ADD CONSTRAINT FK_6977C7A5E58DA11D FOREIGN KEY (pointage_id) REFERENCES pointage (id)');
        $this->addSql('CREATE INDEX IDX_6977C7A5E58DA11D ON presence (pointage_id)');
    }
}

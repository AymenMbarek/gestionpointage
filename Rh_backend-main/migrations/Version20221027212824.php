<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221027212824 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE media_object CHANGE file_path file_path VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE personne DROP FOREIGN KEY FK_FCEC9EF3DA5256D');
        $this->addSql('DROP INDEX IDX_FCEC9EF3DA5256D ON personne');
        $this->addSql('ALTER TABLE personne ADD image LONGTEXT DEFAULT NULL, DROP image_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE media_object CHANGE file_path file_path TEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE personne ADD image_id INT DEFAULT NULL, DROP image');
        $this->addSql('ALTER TABLE personne ADD CONSTRAINT FK_FCEC9EF3DA5256D FOREIGN KEY (image_id) REFERENCES media_object (id)');
        $this->addSql('CREATE INDEX IDX_FCEC9EF3DA5256D ON personne (image_id)');
    }
}

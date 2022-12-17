<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221015003108 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE absence DROP FOREIGN KEY FK_765AE0C9A4AEAFEA');
        $this->addSql('DROP INDEX IDX_765AE0C9A4AEAFEA ON absence');
        $this->addSql('ALTER TABLE absence ADD debut DATE NOT NULL, ADD fin DATE NOT NULL, DROP entreprise_id, DROP date');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE absence ADD entreprise_id INT DEFAULT NULL, ADD date DATE DEFAULT NULL, DROP debut, DROP fin');
        $this->addSql('ALTER TABLE absence ADD CONSTRAINT FK_765AE0C9A4AEAFEA FOREIGN KEY (entreprise_id) REFERENCES entreprise (id)');
        $this->addSql('CREATE INDEX IDX_765AE0C9A4AEAFEA ON absence (entreprise_id)');
    }
}

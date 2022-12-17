<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221012005335 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE absence (id INT AUTO_INCREMENT NOT NULL, personne_id INT DEFAULT NULL, entreprise_id INT DEFAULT NULL, date DATE DEFAULT NULL, type VARCHAR(255) DEFAULT NULL, statut TINYINT(1) DEFAULT NULL, INDEX IDX_765AE0C9A21BD112 (personne_id), INDEX IDX_765AE0C9A4AEAFEA (entreprise_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE activity (id INT AUTO_INCREMENT NOT NULL, groupe_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_AC74095A7A45358C (groupe_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE admin (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_880E0D76F85E0677 (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE banque (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categorie (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE certification (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) NOT NULL, designation VARCHAR(255) DEFAULT NULL, validite VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE chantier (id INT AUTO_INCREMENT NOT NULL, category_id INT DEFAULT NULL, pays_id INT DEFAULT NULL, responsable_securite_id INT DEFAULT NULL, responsable_general_id INT DEFAULT NULL, actif TINYINT(1) DEFAULT NULL, code VARCHAR(255) NOT NULL, denomination VARCHAR(255) DEFAULT NULL, groupe VARCHAR(255) DEFAULT NULL, numero VARCHAR(255) NOT NULL, adresse VARCHAR(255) NOT NULL, code_postale VARCHAR(255) NOT NULL, ville VARCHAR(255) NOT NULL, xgps VARCHAR(255) DEFAULT NULL, ygps VARCHAR(255) DEFAULT NULL, remarque VARCHAR(255) DEFAULT NULL, INDEX IDX_636F27F612469DE2 (category_id), INDEX IDX_636F27F6A6E44244 (pays_id), INDEX IDX_636F27F6778583C0 (responsable_securite_id), INDEX IDX_636F27F624CB37F1 (responsable_general_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contact (id INT AUTO_INCREMENT NOT NULL, entreprise_id INT DEFAULT NULL, actif TINYINT(1) DEFAULT NULL, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, n_mobile VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, type_de_contact VARCHAR(255) DEFAULT NULL, notification_embauche TINYINT(1) DEFAULT NULL, remarque VARCHAR(255) DEFAULT NULL, INDEX IDX_4C62E638A4AEAFEA (entreprise_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contrat (id INT AUTO_INCREMENT NOT NULL, personne_externe_id INT DEFAULT NULL, employeur_id INT DEFAULT NULL, qualification_id INT DEFAULT NULL, chantier_id INT DEFAULT NULL, actif TINYINT(1) DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, date_debut DATE DEFAULT NULL, date_fin DATE DEFAULT NULL, taux VARCHAR(255) DEFAULT NULL, heures_max VARCHAR(255) NOT NULL, prime1 VARCHAR(255) DEFAULT NULL, valeur1 VARCHAR(255) DEFAULT NULL, prime2 VARCHAR(255) DEFAULT NULL, valeur2 VARCHAR(255) DEFAULT NULL, prime3 VARCHAR(255) DEFAULT NULL, prime4 VARCHAR(255) DEFAULT NULL, valeur3 VARCHAR(255) DEFAULT NULL, valeur4 VARCHAR(255) DEFAULT NULL, formation_securite TINYINT(1) DEFAULT NULL, validite_formation_securite DATE DEFAULT NULL, statut TINYINT(1) DEFAULT NULL, visit TINYINT(1) DEFAULT NULL, date_visit DATE DEFAULT NULL, valide_par VARCHAR(255) DEFAULT NULL, INDEX IDX_6034999361B20C56 (personne_externe_id), INDEX IDX_603499935D7C53EC (employeur_id), INDEX IDX_603499931A75EE38 (qualification_id), INDEX IDX_60349993D0C0049D (chantier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE demande (id INT AUTO_INCREMENT NOT NULL, chantier_id INT DEFAULT NULL, qualification_id INT DEFAULT NULL, code VARCHAR(255) DEFAULT NULL, nb_personne INT DEFAULT NULL, date_debut DATE DEFAULT NULL, date_fin DATE DEFAULT NULL, statut TINYINT(1) DEFAULT NULL, INDEX IDX_2694D7A5D0C0049D (chantier_id), INDEX IDX_2694D7A51A75EE38 (qualification_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE entreprise (id INT AUTO_INCREMENT NOT NULL, actif TINYINT(1) DEFAULT NULL, code VARCHAR(255) NOT NULL, denomination VARCHAR(255) DEFAULT NULL, tel VARCHAR(255) DEFAULT NULL, numero VARCHAR(255) DEFAULT NULL, adresse VARCHAR(255) DEFAULT NULL, code_postale VARCHAR(255) DEFAULT NULL, ville VARCHAR(255) DEFAULT NULL, pays VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE evaluation (id INT AUTO_INCREMENT NOT NULL, personne_id INT DEFAULT NULL, donne_par_id INT DEFAULT NULL, actif TINYINT(1) DEFAULT NULL, type VARCHAR(255) DEFAULT NULL, date_evaluation DATE DEFAULT NULL, nb_etoile INT NOT NULL, remarque VARCHAR(255) DEFAULT NULL, valide_par VARCHAR(255) DEFAULT NULL, statut TINYINT(1) DEFAULT NULL, INDEX IDX_1323A575A21BD112 (personne_id), INDEX IDX_1323A57572F28D9B (donne_par_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE groupe (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE list_activite (id INT AUTO_INCREMENT NOT NULL, activite_id INT DEFAULT NULL, chantier_id INT DEFAULT NULL, actif TINYINT(1) NOT NULL, budget_heure INT NOT NULL, quantite DOUBLE PRECISION NOT NULL, INDEX IDX_C61866759B0F88B1 (activite_id), INDEX IDX_C6186675D0C0049D (chantier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE objet (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) NOT NULL, designation VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE objet_remis (id INT AUTO_INCREMENT NOT NULL, objet_id INT DEFAULT NULL, personne_id INT DEFAULT NULL, contrat_id INT DEFAULT NULL, actif TINYINT(1) DEFAULT NULL, date_donne DATE DEFAULT NULL, date_rendu DATE DEFAULT NULL, retourner TINYINT(1) DEFAULT NULL, type VARCHAR(255) NOT NULL, INDEX IDX_7BD6F025F520CF5A (objet_id), INDEX IDX_7BD6F025A21BD112 (personne_id), INDEX IDX_7BD6F0251823061F (contrat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pays (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE personne (id INT AUTO_INCREMENT NOT NULL, qualification_id INT DEFAULT NULL, certification_id INT DEFAULT NULL, type VARCHAR(255) NOT NULL, code VARCHAR(255) NOT NULL, actif TINYINT(1) DEFAULT NULL, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, genre VARCHAR(255) DEFAULT NULL, date_de_naissance DATE DEFAULT NULL, ncin VARCHAR(255) DEFAULT NULL, validate_cin DATE DEFAULT NULL, id_badge VARCHAR(255) DEFAULT NULL, nmobile VARCHAR(255) DEFAULT NULL, email VARCHAR(255) NOT NULL, numero_maison VARCHAR(255) DEFAULT NULL, adresse VARCHAR(255) NOT NULL, code_postale VARCHAR(255) DEFAULT NULL, ville VARCHAR(255) DEFAULT NULL, pays VARCHAR(255) DEFAULT NULL, remarque LONGTEXT DEFAULT NULL, profile VARCHAR(255) DEFAULT NULL, taux VARCHAR(255) DEFAULT NULL, heures_max VARCHAR(255) DEFAULT NULL, formation_securite TINYINT(1) DEFAULT NULL, validite_formation_securite DATE DEFAULT NULL, autorisees_evaluation TINYINT(1) DEFAULT NULL, valeur VARCHAR(255) DEFAULT NULL, INDEX IDX_FCEC9EF1A75EE38 (qualification_id), INDEX IDX_FCEC9EFCB47068A (certification_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE personnel (id INT AUTO_INCREMENT NOT NULL, personne_id INT DEFAULT NULL, chantier_id INT DEFAULT NULL, list_activite_id INT DEFAULT NULL, UNIQUE INDEX UNIQ_A6BCF3DEA21BD112 (personne_id), INDEX IDX_A6BCF3DED0C0049D (chantier_id), INDEX IDX_A6BCF3DE14B03B3A (list_activite_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pointage (id INT AUTO_INCREMENT NOT NULL, chantier_id INT DEFAULT NULL, personne_id INT DEFAULT NULL, date DATE NOT NULL, nb_heure INT NOT NULL, INDEX IDX_7591B20D0C0049D (chantier_id), INDEX IDX_7591B20A21BD112 (personne_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE presence (id INT AUTO_INCREMENT NOT NULL, personne_id INT DEFAULT NULL, nb_heure INT NOT NULL, heure_debut TIME DEFAULT NULL, heure_fin TIME DEFAULT NULL, INDEX IDX_6977C7A5A21BD112 (personne_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE prestation (id INT AUTO_INCREMENT NOT NULL, activite_id INT DEFAULT NULL, chantier_id INT DEFAULT NULL, date DATE NOT NULL, realise DOUBLE PRECISION DEFAULT NULL, INDEX IDX_51C88FAD9B0F88B1 (activite_id), INDEX IDX_51C88FADD0C0049D (chantier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE qualification (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) NOT NULL, designation VARCHAR(255) DEFAULT NULL, color VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE remarque (id INT AUTO_INCREMENT NOT NULL, personne_id INT DEFAULT NULL, donne_par_id INT DEFAULT NULL, actif TINYINT(1) DEFAULT NULL, type VARCHAR(255) NOT NULL, date_remarque DATE NOT NULL, nb_gravite INT NOT NULL, remarque VARCHAR(255) NOT NULL, valide_par VARCHAR(255) DEFAULT NULL, statut TINYINT(1) DEFAULT NULL, INDEX IDX_B9741AABA21BD112 (personne_id), INDEX IDX_B9741AAB72F28D9B (donne_par_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tarif (id INT AUTO_INCREMENT NOT NULL, entreprise_id INT DEFAULT NULL, chantier_id INT DEFAULT NULL, qualification_id INT DEFAULT NULL, taux_hn INT DEFAULT NULL, taux_hs INT DEFAULT NULL, taux_we INT DEFAULT NULL, taux_ferie INT DEFAULT NULL, date_debut DATE DEFAULT NULL, date_fin DATE DEFAULT NULL, INDEX IDX_E7189C9A4AEAFEA (entreprise_id), INDEX IDX_E7189C9D0C0049D (chantier_id), INDEX IDX_E7189C91A75EE38 (qualification_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, full_name VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE absence ADD CONSTRAINT FK_765AE0C9A21BD112 FOREIGN KEY (personne_id) REFERENCES personne (id)');
        $this->addSql('ALTER TABLE absence ADD CONSTRAINT FK_765AE0C9A4AEAFEA FOREIGN KEY (entreprise_id) REFERENCES entreprise (id)');
        $this->addSql('ALTER TABLE activity ADD CONSTRAINT FK_AC74095A7A45358C FOREIGN KEY (groupe_id) REFERENCES groupe (id)');
        $this->addSql('ALTER TABLE chantier ADD CONSTRAINT FK_636F27F612469DE2 FOREIGN KEY (category_id) REFERENCES categorie (id)');
        $this->addSql('ALTER TABLE chantier ADD CONSTRAINT FK_636F27F6A6E44244 FOREIGN KEY (pays_id) REFERENCES pays (id)');
        $this->addSql('ALTER TABLE chantier ADD CONSTRAINT FK_636F27F6778583C0 FOREIGN KEY (responsable_securite_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE chantier ADD CONSTRAINT FK_636F27F624CB37F1 FOREIGN KEY (responsable_general_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE contact ADD CONSTRAINT FK_4C62E638A4AEAFEA FOREIGN KEY (entreprise_id) REFERENCES entreprise (id)');
        $this->addSql('ALTER TABLE contrat ADD CONSTRAINT FK_6034999361B20C56 FOREIGN KEY (personne_externe_id) REFERENCES personne (id)');
        $this->addSql('ALTER TABLE contrat ADD CONSTRAINT FK_603499935D7C53EC FOREIGN KEY (employeur_id) REFERENCES entreprise (id)');
        $this->addSql('ALTER TABLE contrat ADD CONSTRAINT FK_603499931A75EE38 FOREIGN KEY (qualification_id) REFERENCES qualification (id)');
        $this->addSql('ALTER TABLE contrat ADD CONSTRAINT FK_60349993D0C0049D FOREIGN KEY (chantier_id) REFERENCES chantier (id)');
        $this->addSql('ALTER TABLE demande ADD CONSTRAINT FK_2694D7A5D0C0049D FOREIGN KEY (chantier_id) REFERENCES chantier (id)');
        $this->addSql('ALTER TABLE demande ADD CONSTRAINT FK_2694D7A51A75EE38 FOREIGN KEY (qualification_id) REFERENCES qualification (id)');
        $this->addSql('ALTER TABLE evaluation ADD CONSTRAINT FK_1323A575A21BD112 FOREIGN KEY (personne_id) REFERENCES personne (id)');
        $this->addSql('ALTER TABLE evaluation ADD CONSTRAINT FK_1323A57572F28D9B FOREIGN KEY (donne_par_id) REFERENCES personne (id)');
        $this->addSql('ALTER TABLE list_activite ADD CONSTRAINT FK_C61866759B0F88B1 FOREIGN KEY (activite_id) REFERENCES activity (id)');
        $this->addSql('ALTER TABLE list_activite ADD CONSTRAINT FK_C6186675D0C0049D FOREIGN KEY (chantier_id) REFERENCES chantier (id)');
        $this->addSql('ALTER TABLE objet_remis ADD CONSTRAINT FK_7BD6F025F520CF5A FOREIGN KEY (objet_id) REFERENCES objet (id)');
        $this->addSql('ALTER TABLE objet_remis ADD CONSTRAINT FK_7BD6F025A21BD112 FOREIGN KEY (personne_id) REFERENCES personne (id)');
        $this->addSql('ALTER TABLE objet_remis ADD CONSTRAINT FK_7BD6F0251823061F FOREIGN KEY (contrat_id) REFERENCES contrat (id)');
        $this->addSql('ALTER TABLE personne ADD CONSTRAINT FK_FCEC9EF1A75EE38 FOREIGN KEY (qualification_id) REFERENCES qualification (id)');
        $this->addSql('ALTER TABLE personne ADD CONSTRAINT FK_FCEC9EFCB47068A FOREIGN KEY (certification_id) REFERENCES certification (id)');
        $this->addSql('ALTER TABLE personnel ADD CONSTRAINT FK_A6BCF3DEA21BD112 FOREIGN KEY (personne_id) REFERENCES personne (id)');
        $this->addSql('ALTER TABLE personnel ADD CONSTRAINT FK_A6BCF3DED0C0049D FOREIGN KEY (chantier_id) REFERENCES chantier (id)');
        $this->addSql('ALTER TABLE personnel ADD CONSTRAINT FK_A6BCF3DE14B03B3A FOREIGN KEY (list_activite_id) REFERENCES list_activite (id)');
        $this->addSql('ALTER TABLE pointage ADD CONSTRAINT FK_7591B20D0C0049D FOREIGN KEY (chantier_id) REFERENCES chantier (id)');
        $this->addSql('ALTER TABLE pointage ADD CONSTRAINT FK_7591B20A21BD112 FOREIGN KEY (personne_id) REFERENCES personne (id)');
        $this->addSql('ALTER TABLE presence ADD CONSTRAINT FK_6977C7A5A21BD112 FOREIGN KEY (personne_id) REFERENCES personne (id)');
        $this->addSql('ALTER TABLE prestation ADD CONSTRAINT FK_51C88FAD9B0F88B1 FOREIGN KEY (activite_id) REFERENCES list_activite (id)');
        $this->addSql('ALTER TABLE prestation ADD CONSTRAINT FK_51C88FADD0C0049D FOREIGN KEY (chantier_id) REFERENCES chantier (id)');
        $this->addSql('ALTER TABLE remarque ADD CONSTRAINT FK_B9741AABA21BD112 FOREIGN KEY (personne_id) REFERENCES personne (id)');
        $this->addSql('ALTER TABLE remarque ADD CONSTRAINT FK_B9741AAB72F28D9B FOREIGN KEY (donne_par_id) REFERENCES personne (id)');
        $this->addSql('ALTER TABLE tarif ADD CONSTRAINT FK_E7189C9A4AEAFEA FOREIGN KEY (entreprise_id) REFERENCES entreprise (id)');
        $this->addSql('ALTER TABLE tarif ADD CONSTRAINT FK_E7189C9D0C0049D FOREIGN KEY (chantier_id) REFERENCES chantier (id)');
        $this->addSql('ALTER TABLE tarif ADD CONSTRAINT FK_E7189C91A75EE38 FOREIGN KEY (qualification_id) REFERENCES qualification (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE absence DROP FOREIGN KEY FK_765AE0C9A21BD112');
        $this->addSql('ALTER TABLE absence DROP FOREIGN KEY FK_765AE0C9A4AEAFEA');
        $this->addSql('ALTER TABLE activity DROP FOREIGN KEY FK_AC74095A7A45358C');
        $this->addSql('ALTER TABLE chantier DROP FOREIGN KEY FK_636F27F612469DE2');
        $this->addSql('ALTER TABLE chantier DROP FOREIGN KEY FK_636F27F6A6E44244');
        $this->addSql('ALTER TABLE chantier DROP FOREIGN KEY FK_636F27F6778583C0');
        $this->addSql('ALTER TABLE chantier DROP FOREIGN KEY FK_636F27F624CB37F1');
        $this->addSql('ALTER TABLE contact DROP FOREIGN KEY FK_4C62E638A4AEAFEA');
        $this->addSql('ALTER TABLE contrat DROP FOREIGN KEY FK_6034999361B20C56');
        $this->addSql('ALTER TABLE contrat DROP FOREIGN KEY FK_603499935D7C53EC');
        $this->addSql('ALTER TABLE contrat DROP FOREIGN KEY FK_603499931A75EE38');
        $this->addSql('ALTER TABLE contrat DROP FOREIGN KEY FK_60349993D0C0049D');
        $this->addSql('ALTER TABLE demande DROP FOREIGN KEY FK_2694D7A5D0C0049D');
        $this->addSql('ALTER TABLE demande DROP FOREIGN KEY FK_2694D7A51A75EE38');
        $this->addSql('ALTER TABLE evaluation DROP FOREIGN KEY FK_1323A575A21BD112');
        $this->addSql('ALTER TABLE evaluation DROP FOREIGN KEY FK_1323A57572F28D9B');
        $this->addSql('ALTER TABLE list_activite DROP FOREIGN KEY FK_C61866759B0F88B1');
        $this->addSql('ALTER TABLE list_activite DROP FOREIGN KEY FK_C6186675D0C0049D');
        $this->addSql('ALTER TABLE objet_remis DROP FOREIGN KEY FK_7BD6F025F520CF5A');
        $this->addSql('ALTER TABLE objet_remis DROP FOREIGN KEY FK_7BD6F025A21BD112');
        $this->addSql('ALTER TABLE objet_remis DROP FOREIGN KEY FK_7BD6F0251823061F');
        $this->addSql('ALTER TABLE personne DROP FOREIGN KEY FK_FCEC9EF1A75EE38');
        $this->addSql('ALTER TABLE personne DROP FOREIGN KEY FK_FCEC9EFCB47068A');
        $this->addSql('ALTER TABLE personnel DROP FOREIGN KEY FK_A6BCF3DEA21BD112');
        $this->addSql('ALTER TABLE personnel DROP FOREIGN KEY FK_A6BCF3DED0C0049D');
        $this->addSql('ALTER TABLE personnel DROP FOREIGN KEY FK_A6BCF3DE14B03B3A');
        $this->addSql('ALTER TABLE pointage DROP FOREIGN KEY FK_7591B20D0C0049D');
        $this->addSql('ALTER TABLE pointage DROP FOREIGN KEY FK_7591B20A21BD112');
        $this->addSql('ALTER TABLE presence DROP FOREIGN KEY FK_6977C7A5A21BD112');
        $this->addSql('ALTER TABLE prestation DROP FOREIGN KEY FK_51C88FAD9B0F88B1');
        $this->addSql('ALTER TABLE prestation DROP FOREIGN KEY FK_51C88FADD0C0049D');
        $this->addSql('ALTER TABLE remarque DROP FOREIGN KEY FK_B9741AABA21BD112');
        $this->addSql('ALTER TABLE remarque DROP FOREIGN KEY FK_B9741AAB72F28D9B');
        $this->addSql('ALTER TABLE tarif DROP FOREIGN KEY FK_E7189C9A4AEAFEA');
        $this->addSql('ALTER TABLE tarif DROP FOREIGN KEY FK_E7189C9D0C0049D');
        $this->addSql('ALTER TABLE tarif DROP FOREIGN KEY FK_E7189C91A75EE38');
        $this->addSql('DROP TABLE absence');
        $this->addSql('DROP TABLE activity');
        $this->addSql('DROP TABLE admin');
        $this->addSql('DROP TABLE banque');
        $this->addSql('DROP TABLE categorie');
        $this->addSql('DROP TABLE certification');
        $this->addSql('DROP TABLE chantier');
        $this->addSql('DROP TABLE contact');
        $this->addSql('DROP TABLE contrat');
        $this->addSql('DROP TABLE demande');
        $this->addSql('DROP TABLE entreprise');
        $this->addSql('DROP TABLE evaluation');
        $this->addSql('DROP TABLE groupe');
        $this->addSql('DROP TABLE list_activite');
        $this->addSql('DROP TABLE objet');
        $this->addSql('DROP TABLE objet_remis');
        $this->addSql('DROP TABLE pays');
        $this->addSql('DROP TABLE personne');
        $this->addSql('DROP TABLE personnel');
        $this->addSql('DROP TABLE pointage');
        $this->addSql('DROP TABLE presence');
        $this->addSql('DROP TABLE prestation');
        $this->addSql('DROP TABLE qualification');
        $this->addSql('DROP TABLE remarque');
        $this->addSql('DROP TABLE tarif');
        $this->addSql('DROP TABLE user');
    }
}

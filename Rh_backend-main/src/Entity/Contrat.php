<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ContratRepository;
use Doctrine\DBAL\Types\Types;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

use Doctrine\ORM\PersistentCollection;

#[ORM\Entity(repositoryClass: ContratRepository::class)]
#[ApiFilter(OrderFilter::class, properties: ['id' => 'ASC'])]
#[ApiResource(
    normalizationContext: ['groups' => ['contrat']],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['contrat','read:item', 'read:Post']],
        ],
    ],
)]
class Contrat
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["contrat"])]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["contrat", "write:Post"])]
    private ?bool $actif = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["contrat","objetRemis", "write:Post"])]
    private ?string $code = null;

  

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(["contrat", "write:Post"])]
    private ?\DateTimeInterface $dateDebut = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(["contrat", "write:Post"])]
    private ?\DateTimeInterface $dateFin = null;

   

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["contrat", "write:Post"])]
    private ?string $taux = null;

    #[ORM\Column(length: 255)]
    #[Groups(["contrat", "write:Post"])]
    private ?string $heuresMax = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["contrat", "write:Post"])]
    private ?string $prime1 = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:item', "write:Post"])]
    private ?string $valeur1 = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:item', "write:Post"])]
    private ?string $prime2 = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:item', "write:Post"])]
    private ?string $valeur2 = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:item', "write:Post"])]
    private ?string $prime3 = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:item', "write:Post"])]
    private ?string $prime4 = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:item', "write:Post"])]
    private ?string $valeur3 = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:item', "write:Post"])]
    private ?string $valeur4 = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read:item', "write:Post"])]
    private ?bool $formationSecurite = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(["contrat", "write:Post"])]
    private ?\DateTimeInterface $validiteFormationSecurite = null;

    #[ORM\ManyToOne(inversedBy: 'contrats')]
    #[Groups(["contrat", "write:Post"])]
    private ?Personne $personneExterne = null;

    #[ORM\ManyToOne(inversedBy: 'contrats')]
    #[Groups(["contrat", "write:Post"])]
    private ?Entreprise $employeur = null;

    #[ORM\ManyToOne]
    #[Groups(['read:item',"contrat", "write:Post"])]
    private ?Qualification $qualification = null;

    #[ORM\ManyToOne(inversedBy: 'contrats')]
    #[Groups(['read:item',"contrat", "write:Post"])]
    private ?Chantier $chantier = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read:item',"contrat", "write:Post"])]
    private ?bool $statut = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read:item', "write:Post"])]
    private ?bool $visit = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(['read:item', "write:Post"])]
    private ?\DateTimeInterface $dateVisit = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $validePar = null;

    public function __construct()
    {
        $this->actif = true;
        $this->statut = false;
        $this->formationSecurite =false;
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function isActif(): ?bool
    {
        return $this->actif;
    }

    public function setActif(?bool $actif): self
    {
        $this->actif = $actif;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): self
    {
        $this->code = $code;

        return $this;
    }

    
    public function getDateDebut(): ?\DateTimeInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(?\DateTimeInterface $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?\DateTimeInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(?\DateTimeInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

  

    public function getTaux(): ?string
    {
        return $this->taux;
    }

    public function setTaux(?string $taux): self
    {
        $this->taux = $taux;

        return $this;
    }

    public function getHeuresMax(): ?string
    {
        return $this->heuresMax;
    }

    public function setHeuresMax(string $heuresMax): self
    {
        $this->heuresMax = $heuresMax;

        return $this;
    }

    public function getPrime1(): ?string
    {
        return $this->prime1;
    }

    public function setPrime1(?string $prime1): self
    {
        $this->prime1 = $prime1;

        return $this;
    }

    public function getValeur1(): ?string
    {
        return $this->valeur1;
    }

    public function setValeur1(?string $valeur1): self
    {
        $this->valeur1 = $valeur1;

        return $this;
    }

    public function getPrime2(): ?string
    {
        return $this->prime2;
    }

    public function setPrime2(?string $prime2): self
    {
        $this->prime2 = $prime2;

        return $this;
    }

    public function getValeur2(): ?string
    {
        return $this->valeur2;
    }

    public function setValeur2(?string $valeur2): self
    {
        $this->valeur2 = $valeur2;

        return $this;
    }

    public function getPrime3(): ?string
    {
        return $this->prime3;
    }

    public function setPrime3(?string $prime3): self
    {
        $this->prime3 = $prime3;

        return $this;
    }

    public function getPrime4(): ?string
    {
        return $this->prime4;
    }

    public function setPrime4(?string $prime4): self
    {
        $this->prime4 = $prime4;

        return $this;
    }

    public function getValeur3(): ?string
    {
        return $this->valeur3;
    }

    public function setValeur3(?string $valeur3): self
    {
        $this->valeur3 = $valeur3;

        return $this;
    }

    public function getValeur4(): ?string
    {
        return $this->valeur4;
    }

    public function setValeur4(?string $valeur4): self
    {
        $this->valeur4 = $valeur4;

        return $this;
    }

    public function isFormationSecurite(): ?bool
    {
        return $this->formationSecurite;
    }

    public function setFormationSecurite(?bool $formationSecurite): self
    {
        $this->formationSecurite = $formationSecurite;

        return $this;
    }

    public function getValiditeFormationSecurite(): ?\DateTimeInterface
    {
        return $this->validiteFormationSecurite;
    }

    public function setValiditeFormationSecurite(?\DateTimeInterface $validiteFormationSecurite): self
    {
        $this->validiteFormationSecurite = $validiteFormationSecurite;

        return $this;
    }

    public function getPersonneExterne(): ?Personne
    {
        return $this->personneExterne;
    }

    public function setPersonneExterne(?Personne $personneExterne): self
    {
        $this->personneExterne = $personneExterne;

        return $this;
    }

    public function getEmployeur(): ?Entreprise
    {
        return $this->employeur;
    }

    public function setEmployeur(?Entreprise $employeur): self
    {
        $this->employeur = $employeur;

        return $this;
    }

    public function getQualification(): ?Qualification
    {
        return $this->qualification;
    }

    public function setQualification(?Qualification $qualification): self
    {
        $this->qualification = $qualification;

        return $this;
    }

    public function getChantier(): ?Chantier
    {
        return $this->chantier;
    }

    public function setChantier(?Chantier $chantier): self
    {
        $this->chantier = $chantier;

        return $this;
    }

    public function isStatut(): ?bool
    {
        return $this->statut;
    }

    public function setStatut(?bool $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

    public function isVisit(): ?bool
    {
        return $this->visit;
    }

    public function setVisit(bool $visit): self
    {
        $this->visit = $visit;

        return $this;
    }

    public function getDateVisit(): ?\DateTimeInterface
    {
        return $this->dateVisit;
    }

    public function setDateVisit(\DateTimeInterface $dateVisit): self
    {
        $this->dateVisit = $dateVisit;

        return $this;
    }

    public function getValidePar(): ?string
    {
        return $this->validePar;
    }

    public function setValidePar(?string $validePar): self
    {
        $this->validePar = $validePar;

        return $this;
    }
}

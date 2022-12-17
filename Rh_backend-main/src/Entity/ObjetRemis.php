<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ObjetRemisRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
#[ORM\Entity(repositoryClass: ObjetRemisRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['objetRemis'],'jsonld_embed_context' => true],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['objetRemis','read:item', 'read:Post']],
        ],
    ],
)]
class ObjetRemis
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["objetRemis"])]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["objetRemis", "write:Post"])]
    private ?bool $actif = null;


    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Context([DateTimeNormalizer::FORMAT_KEY => 'Y-m-d'])]
    #[Groups(["objetRemis", "write:Post"])]
    private ?\DateTimeInterface $dateDonne = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Context([DateTimeNormalizer::FORMAT_KEY => 'Y-m-d'])]
    #[Groups(["objetRemis", "write:Post"])]
    private ?\DateTimeInterface $dateRendu = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["objetRemis", "write:Post"])]
    private ?bool $retourner = null;

    #[ORM\Column(length: 255)]
    #[Groups(["objetRemis", "write:Post"])]
    private ?string $type = null;

    #[ORM\ManyToOne]
    #[Groups(["objetRemis", "write:Post"])]
    private ?Objet $objet = null;

    #[ORM\ManyToOne(inversedBy: 'objetRemis')]
    #[Groups(["objetRemis", "write:Post"])]
    private ?Personne $personne = null;

    #[ORM\ManyToOne]
    #[Groups(["objetRemis", "write:Post"])]
    #[ApiProperty(readableLink: false, writableLink: false)]
    private ?Contrat $contrat = null;
    public function __construct()
    {
        $this->actif = true;
        $this->retourner = true;
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

   

   

    public function getDateDonne(): ?\DateTimeInterface
    {
        return $this->dateDonne;
    }

    public function setDateDonne(?\DateTimeInterface $dateDonne): self
    {
        $this->dateDonne = $dateDonne;

        return $this;
    }

    public function getDateRendu(): ?\DateTimeInterface
    {
        return $this->dateRendu;
    }

    public function setDateRendu(?\DateTimeInterface $dateRendu): self
    {
        $this->dateRendu = $dateRendu;

        return $this;
    }

    public function isRetourner(): ?bool
    {
        return $this->retourner;
    }

    public function setRetourner(?bool $retourner): self
    {
        $this->retourner = $retourner;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getObjet(): ?Objet
    {
        return $this->objet;
    }

    public function setObjet(?Objet $objet): self
    {
        $this->objet = $objet;

        return $this;
    }

    public function getPersonne(): ?Personne
    {
        return $this->personne;
    }

    public function setPersonne(?Personne $personne): self
    {
        $this->personne = $personne;

        return $this;
    }

    public function getContrat(): ?Contrat
    {
        return $this->contrat;
    }

    public function setContrat(?Contrat $contrat): self
    {
        $this->contrat = $contrat;

        return $this;
    }
}

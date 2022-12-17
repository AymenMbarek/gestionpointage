<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\RemarqueRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: RemarqueRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['remarque']],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['remarque','read:item', 'read:Post']],
        ],
    ],
)]
class Remarque
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["remarque"])]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["remarque", "write:Post"])]
    private ?bool $actif = null;

    #[ORM\Column(length: 255)]
    #[Groups(["remarque", "write:Post"])]
    private ?string $type = null;

   

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(["remarque", "write:Post"])]
    private ?\DateTimeInterface $dateRemarque = null;

    #[ORM\Column]
    #[Groups(["remarque", "write:Post"])]
    private ?int $nbGravite = null;

    #[ORM\Column(length: 255)]
    #[Groups(["remarque", "write:Post"])]
    private ?string $remarque = null;

    #[ORM\ManyToOne]
    #[Groups(["remarque", "write:Post"])]
    private ?Personne $personne = null;

    #[ORM\ManyToOne]
    #[Groups(["remarque", "write:Post"])]
    private ?Personne $donnePar = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $validePar = null;

    #[ORM\Column(nullable: true)]
    private ?bool $statut = null;
    public function __construct()
    {
        $this->actif = true;
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

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

   

    public function getDateRemarque(): ?\DateTimeInterface
    {
        return $this->dateRemarque;
    }

    public function setDateRemarque(\DateTimeInterface $dateRemarque): self
    {
        $this->dateRemarque = $dateRemarque;

        return $this;
    }

    public function getNbGravite(): ?int
    {
        return $this->nbGravite;
    }

    public function setNbGravite(int $nbGravite): self
    {
        $this->nbGravite = $nbGravite;

        return $this;
    }

    public function getRemarque(): ?string
    {
        return $this->remarque;
    }

    public function setRemarque(string $remarque): self
    {
        $this->remarque = $remarque;

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

    public function getDonnePar(): ?Personne
    {
        return $this->donnePar;
    }

    public function setDonnePar(?Personne $donnePar): self
    {
        $this->donnePar = $donnePar;

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

    public function isStatut(): ?bool
    {
        return $this->statut;
    }

    public function setStatut(?bool $statut): self
    {
        $this->statut = $statut;

        return $this;
    }
}

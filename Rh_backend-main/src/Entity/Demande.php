<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\DemandeRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: DemandeRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['demande']],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['demande','read:item', 'read:Post']],
        ],
    ],
)]
class Demande
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["demande"])]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["demande", "write:Post"])]
    private ?string $code = null;

    #[ORM\ManyToOne(inversedBy: 'demandes')]
    #[Groups(["demande", "write:Post"])]
    private ?Chantier $chantier = null;

    #[ORM\ManyToOne(inversedBy: 'demandes')]
    #[Groups(["demande", "write:Post"])]
    private ?Qualification $qualification = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande", "write:Post"])]
    private ?int $nbPersonne = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(["demande", "write:Post"])]
    private ?\DateTimeInterface $dateDebut = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(["demande", "write:Post"])]
    private ?\DateTimeInterface $dateFin = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["demande", "write:Post"])]
    private ?bool $statut = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getChantier(): ?Chantier
    {
        return $this->chantier;
    }

    public function setChantier(?Chantier $chantier): self
    {
        $this->chantier = $chantier;

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

    public function getNbPersonne(): ?int
    {
        return $this->nbPersonne;
    }

    public function setNbPersonne(?int $nbPersonne): self
    {
        $this->nbPersonne = $nbPersonne;

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

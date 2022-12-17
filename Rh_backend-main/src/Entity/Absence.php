<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\AbsenceRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: AbsenceRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['absence']],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['absence','read:item', 'read:Post']],
        ],
    ],
)]
class Absence
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["absence"])]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(["absence","write:Post"])]
    private ?\DateTimeInterface $debut = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(["absence","write:Post"])]
    private ?\DateTimeInterface $fin = null;

    #[ORM\ManyToOne(inversedBy: 'absences')]
    #[Groups(["absence","write:Post"])]
    private ?Personne $personne = null;

    #[ORM\Column(length: 255)]
    #[Groups(["absence","write:Post"])]
    private ?string $type = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDebut(): ?\DateTimeInterface
    {
        return $this->debut;
    }

    public function setDebut(\DateTimeInterface $debut): self
    {
        $this->debut = $debut;

        return $this;
    }

    public function getFin(): ?\DateTimeInterface
    {
        return $this->fin;
    }

    public function setFin(\DateTimeInterface $fin): self
    {
        $this->fin = $fin;

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

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }
}

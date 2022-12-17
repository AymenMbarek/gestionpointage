<?php

namespace App\Entity;

use App\Repository\PresenceRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PresenceRepository::class)]
#[ApiResource(forceEager: false,
normalizationContext: ['groups' => ['presence'], "enable_max_depth"=>true],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['presence','read:item', 'read:Post']],
        ],
    ],
)]
class Presence
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["presence"])]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'presences')]
    #[Groups(["pointage","presence", "write:Post"])]
    private ?Personne $personne = null;

    #[ORM\Column]
    #[Groups(["pointage","presence", "write:Post"])]
    private ?int $nbHeure = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    #[Groups(["presence", "write:Post"])]
    private ?\DateTimeInterface $heureDebut = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    #[Groups(["presence", "write:Post"])]
    private ?\DateTimeInterface $heureFin = null;

 

    public function getId(): ?int
    {
        return $this->id;
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

    public function getNbHeure(): ?int
    {
        return $this->nbHeure;
    }

    public function setNbHeure(int $nbHeure): self
    {
        $this->nbHeure = $nbHeure;

        return $this;
    }

    public function getHeureDebut(): ?\DateTimeInterface
    {
        return $this->heureDebut;
    }

    public function setHeureDebut(?\DateTimeInterface $heureDebut): self
    {
        $this->heureDebut = $heureDebut;

        return $this;
    }

    public function getHeureFin(): ?\DateTimeInterface
    {
        return $this->heureFin;
    }

    public function setHeureFin(?\DateTimeInterface $heureFin): self
    {
        $this->heureFin = $heureFin;

        return $this;
    }

   
}

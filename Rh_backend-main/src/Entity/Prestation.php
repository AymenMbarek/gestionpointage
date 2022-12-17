<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PrestationRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PrestationRepository::class)]
#[ApiResource]
class Prestation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column(nullable: true)]
    private ?float $realise = null;

    #[ORM\ManyToOne(inversedBy: 'prestations')]
    private ?ListActivite $activite = null;

    #[ORM\ManyToOne(inversedBy: 'prestations')]
    private ?Chantier $chantier = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getRealise(): ?float
    {
        return $this->realise;
    }

    public function setRealise(?float $realise): self
    {
        $this->realise = $realise;

        return $this;
    }

    public function getActivite(): ?ListActivite
    {
        return $this->activite;
    }

    public function setActivite(?ListActivite $activite): self
    {
        $this->activite = $activite;

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
}

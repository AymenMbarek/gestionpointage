<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\TarifRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TarifRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['tarif']],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['tarif','read:item', 'read:Post']],
        ],
    ],
)]
class Tarif
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["tarif"])]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["tarif","write:Post"])]
    private ?int $tauxHn = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["tarif","write:Post"])]
    private ?int $tauxHs = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["tarif","write:Post"])]
    private ?int $tauxWe = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["tarif","write:Post"])]
    private ?int $tauxFerie = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(["tarif","write:Post"])]
    private ?\DateTimeInterface $dateDebut = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(["tarif","write:Post"])]
    private ?\DateTimeInterface $dateFin = null;

    #[ORM\ManyToOne(inversedBy: 'tarifs')]
    #[Groups(["tarif","write:Post"])]
    private ?Entreprise $entreprise = null;

    #[ORM\ManyToOne(inversedBy: 'tarifs')]
    #[Groups(["tarif","write:Post"])]
    private ?Chantier $chantier = null;

    #[ORM\ManyToOne(inversedBy: 'tarifs')]
    #[Groups(["tarif","write:Post"])]
    private ?Qualification $qualification = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTauxHn(): ?int
    {
        return $this->tauxHn;
    }

    public function setTauxHn(?int $tauxHn): self
    {
        $this->tauxHn = $tauxHn;

        return $this;
    }

    public function getTauxHs(): ?int
    {
        return $this->tauxHs;
    }

    public function setTauxHs(?int $tauxHs): self
    {
        $this->tauxHs = $tauxHs;

        return $this;
    }

    public function getTauxWe(): ?int
    {
        return $this->tauxWe;
    }

    public function setTauxWe(?int $tauxWe): self
    {
        $this->tauxWe = $tauxWe;

        return $this;
    }

    public function getTauxFerie(): ?int
    {
        return $this->tauxFerie;
    }

    public function setTauxFerie(?int $tauxFerie): self
    {
        $this->tauxFerie = $tauxFerie;

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

    public function getEntreprise(): ?Entreprise
    {
        return $this->entreprise;
    }

    public function setEntreprise(?Entreprise $entreprise): self
    {
        $this->entreprise = $entreprise;

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
}

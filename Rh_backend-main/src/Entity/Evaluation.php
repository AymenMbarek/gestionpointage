<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\EvaluationRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;

#[ORM\Entity(repositoryClass: EvaluationRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['evaluation']],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['evaluation','read:item', 'read:Post']],
        ],
    ],
)]
class Evaluation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["evaluation"])]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["evaluation", "write:Post"])]
    private ?bool $actif = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["evaluation", "write:Post"])]
    private ?string $type = null;

   

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Context(normalizationContext: [DateTimeNormalizer::FORMAT_KEY => 'Y-m-d'])]
    #[Groups(["evaluation", "write:Post"])]
    private ?\DateTimeInterface $dateEvaluation = null;

  

    #[ORM\Column]
    #[Groups(["evaluation", "write:Post"])]
    private ?int $nbEtoile = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["evaluation", "write:Post"])]
    private ?string $remarque = null;

    #[ORM\ManyToOne]
    #[Groups(["evaluation", "write:Post"])]
    private ?Personne $personne = null;

    #[ORM\ManyToOne]
    #[Groups(["evaluation", "write:Post"])]
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

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }

 

    public function getDateEvaluation(): ?\DateTimeInterface
    {
        return $this->dateEvaluation;
    }

    public function setDateEvaluation(?\DateTimeInterface $dateEvaluation): self
    {
        $this->dateEvaluation = $dateEvaluation;

        return $this;
    }

  

    public function getNbEtoile(): ?int
    {
        return $this->nbEtoile;
    }

    public function setNbEtoile(int $nbEtoile): self
    {
        $this->nbEtoile = $nbEtoile;

        return $this;
    }

    public function getRemarque(): ?string
    {
        return $this->remarque;
    }

    public function setRemarque(?string $remarque): self
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

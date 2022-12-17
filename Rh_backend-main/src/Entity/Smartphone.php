<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\SmartphoneRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: SmartphoneRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['smartphone']],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['smartphone','read:item', 'read:Post']],
        ],
    ],
)]
class Smartphone
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["smartphone"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["smartphone", "write:Post"])]
    private ?string $emie = null;

    #[ORM\Column(length: 255)]
    #[Groups(["smartphone", "write:Post"])]
    private ?string $designation = null;

    #[ORM\ManyToOne(inversedBy: 'smartphones')]
    #[Groups(["smartphone", "write:Post"])]
    private ?Chantier $chantier = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["smartphone", "write:Post"])]
    private ?bool $actif = null;
    public function __construct()
    {
        $this->actif = null;
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmie(): ?string
    {
        return $this->emie;
    }

    public function setEmie(string $emie): self
    {
        $this->emie = $emie;

        return $this;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(string $designation): self
    {
        $this->designation = $designation;

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

    public function isActif(): ?bool
    {
        return $this->actif;
    }

    public function setActif(?bool $actif): self
    {
        $this->actif = $actif;

        return $this;
    }
}

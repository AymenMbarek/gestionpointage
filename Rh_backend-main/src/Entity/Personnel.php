<?php

namespace App\Entity;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PersonnelRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
#[ORM\Entity(repositoryClass: PersonnelRepository::class)]
#[ApiResource(forceEager: false,
    normalizationContext: ['groups' => ['personnel'], "enable_max_depth"=>true],
   
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['personnel','read:item', 'read:Post']],
        ],
    ],
)]
class Personnel
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["personnel"])]
    private ?int $id = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[Groups(["personnel","chantier", "write:Post"])]
    #[SymfonyMaxDepth(1)]
    private ?Personne $personne = null;

    #[ORM\ManyToOne(inversedBy: 'personnels')]
    #[Groups(["personnel", "write:Post"])]
    #[SymfonyMaxDepth(1)]
    private ?Chantier $chantier = null;

    #[ORM\ManyToOne(inversedBy: 'personnels')]
    private ?ListActivite $listActivite = null;
    public function __construct()
    {
        $this->actif = true;
      
       
    }

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

    public function getChantier(): ?Chantier
    {
        return $this->chantier;
    }

    public function setChantier(?Chantier $chantier): self
    {
        $this->chantier = $chantier;

        return $this;
    }

    public function getListActivite(): ?ListActivite
    {
        return $this->listActivite;
    }

    public function setListActivite(?ListActivite $listActivite): self
    {
        $this->listActivite = $listActivite;

        return $this;
    }
}

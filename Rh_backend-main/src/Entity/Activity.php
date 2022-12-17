<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ActivityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ActivityRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['activity']],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['activity','read:item', 'read:Post']],
        ],
    ],
)]

class Activity
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["activity"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["activity","listactivite","chantier", "write:Post"])]
    private ?string $name = null;

    #[ORM\ManyToOne(inversedBy: 'activities')]
    #[Groups(["read:item","write:Post"])]
    private ?Groupe $groupe = null;


    public function __construct()
    {
        $this->actif = true;
     
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getGroupe(): ?Groupe
    {
        return $this->groupe;
    }

    public function setGroupe(?Groupe $groupe): self
    {
        $this->groupe = $groupe;

        return $this;
    }

    

    
}

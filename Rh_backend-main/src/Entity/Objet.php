<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ObjetRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ObjetRepository::class)]



#[ApiResource(
    normalizationContext: ['groups' => ['objet']],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['objet','read:item', 'read:Post']],
        ],
    ],
)]
class Objet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["objet"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["objet", "write:Post"])]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["objetRemis","objet", "write:Post"])]
    private ?string $designation = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(?string $designation): self
    {
        $this->designation = $designation;

        return $this;
    }
}

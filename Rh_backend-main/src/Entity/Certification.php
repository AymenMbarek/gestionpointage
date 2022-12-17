<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CertificationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: CertificationRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['certificat']],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['certificat','read:item', 'read:Post']],
        ],
    ],
)]
class Certification
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["certificat"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["certificat","write:Post"])]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["certificat","write:Post"])]
    private ?string $designation = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["certificat","write:Post"])]
    private ?string $validite = null;



   

    public function __construct()
    {
       
    }

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

    public function getValidite(): ?string
    {
        return $this->validite;
    }

    public function setValidite(?string $validite): self
    {
        $this->validite = $validite;

        return $this;
    }

    
    
}

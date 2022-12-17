<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ContactRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ContactRepository::class)]

#[ApiResource(
    normalizationContext: ['groups' => ['contact']],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['contact','read:item', 'read:Post']],
        ],
    ],
)]
class Contact
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["contact"])]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["contact", "write:Post"])]
    private ?bool $actif = null;

    #[ORM\Column(length: 255)]
    #[Groups(["contact","entreprise", "write:Post"])]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    #[Groups(["contact","entreprise", "write:Post"])]
    private ?string $prenom = null;

    #[ORM\Column(length: 255)]
    #[Groups(["contact","entreprise", "write:Post"])]
    private ?string $nMobile = null;

    #[ORM\Column(length: 255)]
    #[Groups(["contact","entreprise", "write:Post"])]
    private ?string $email = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["contact", "entreprise","write:Post"])]
    private ?string $typeDeContact = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["contact", "entreprise","write:Post"])]
    private ?bool $notificationEmbauche = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["contact","entreprise", "write:Post"])]
    private ?string $remarque = null;

    #[ORM\ManyToOne(inversedBy: 'contacts')]
    #[Groups(["contact", "write:Post"])]
    private ?Entreprise $entreprise = null;
    
    public function __construct()
    {
        $this->actif = true;
        $this->notificationEmbauche = true;
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

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getNMobile(): ?string
    {
        return $this->nMobile;
    }

    public function setNMobile(string $nMobile): self
    {
        $this->nMobile = $nMobile;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getTypeDeContact(): ?string
    {
        return $this->typeDeContact;
    }

    public function setTypeDeContact(?string $typeDeContact): self
    {
        $this->typeDeContact = $typeDeContact;

        return $this;
    }

    public function isNotificationEmbauche(): ?bool
    {
        return $this->notificationEmbauche;
    }

    public function setNotificationEmbauche(?bool $notificationEmbauche): self
    {
        $this->notificationEmbauche = $notificationEmbauche;

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

    public function getEntreprise(): ?Entreprise
    {
        return $this->entreprise;
    }

    public function setEntreprise(?Entreprise $entreprise): self
    {
        $this->entreprise = $entreprise;

        return $this;
    }
}

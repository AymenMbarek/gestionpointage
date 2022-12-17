<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PointageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
#[ORM\Entity(repositoryClass: PointageRepository::class)]


#[ApiResource(forceEager: false,
    normalizationContext: ['groups' => ['pointage'], "enable_max_depth"=>true],
   
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['pointage','read:item', 'read:Post']],
        ],
    ],
)]
class Pointage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["pointage"])]
    private ?int $id = null;

  

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(["pointage", "write:Post"])]
    private ?\DateTimeInterface $date = null;

    #[ORM\ManyToOne(inversedBy: 'pointages')]
    #[Groups(["pointage", "write:Post"])]
    private ?Chantier $chantier = null;

    #[ORM\ManyToOne(inversedBy: 'pointages')]
    #[Groups(["pointage", "write:Post"])]
    private ?Personne $personne = null;


    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    #[Groups(["pointage", "write:Post"])]
    private ?\DateTimeInterface $heureDebut = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    #[Groups(["pointage", "write:Post"])]
    private ?\DateTimeInterface $heureFin = null;

    #[ORM\Column( nullable: true)]
    #[Groups(["pointage", "write:Post"])]
    private ?int $nbHeure = null;

    public function __construct()
    {
        
    }

 




   

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

    public function getChantier(): ?Chantier
    {
        return $this->chantier;
    }

    public function setChantier(?Chantier $chantier): self
    {
        $this->chantier = $chantier;

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

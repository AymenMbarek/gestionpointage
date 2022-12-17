<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ListActiviteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ListActiviteRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['listactivite']],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['listactivite','read:item', 'read:Post']],
        ],
    ],
)]
class ListActivite
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["listactivite"])]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[Groups(["listactivite", "write:Post", 'chantier'])]
    private ?Activity $activite = null;

    #[ORM\ManyToOne(inversedBy: 'listActivites')]
    #[Groups([ "listactivite", "write:Post"])]
    private ?Chantier $chantier = null;

    #[ORM\Column]
    #[Groups(["listactivite", "write:Post", 'chantier'])]
    private ?bool $actif = null;

    #[ORM\Column]
    #[Groups(["listactivite", "write:Post", 'chantier'])]
    private ?int $budgetHeure = null;

    #[ORM\Column]
    #[Groups(["listactivite", "write:Post", 'chantier'])]
    private ?float $quantite = null;

    #[ORM\OneToMany(mappedBy: 'activite', targetEntity: Prestation::class)]
    private Collection $prestations;

    #[ORM\OneToMany(mappedBy: 'listActivite', targetEntity: Personnel::class)]
    private Collection $personnels;
    public function __construct()
    {
        $this->actif = true;
        $this->prestations = new ArrayCollection();
        $this->personnels = new ArrayCollection();
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getActivite(): ?Activity
    {
        return $this->activite;
    }

    public function setActivite(?Activity $activite): self
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

    public function isActif(): ?bool
    {
        return $this->actif;
    }

    public function setActif(bool $actif): self
    {
        $this->actif = $actif;

        return $this;
    }

    public function getBudgetHeure(): ?int
    {
        return $this->budgetHeure;
    }

    public function setBudgetHeure(int $budgetHeure): self
    {
        $this->budgetHeure = $budgetHeure;

        return $this;
    }

    public function getQuantite(): ?float
    {
        return $this->quantite;
    }

    public function setQuantite(float $quantite): self
    {
        $this->quantite = $quantite;

        return $this;
    }

    /**
     * @return Collection<int, Prestation>
     */
    public function getPrestations(): Collection
    {
        return $this->prestations;
    }

    public function addPrestation(Prestation $prestation): self
    {
        if (!$this->prestations->contains($prestation)) {
            $this->prestations->add($prestation);
            $prestation->setActivite($this);
        }

        return $this;
    }

    public function removePrestation(Prestation $prestation): self
    {
        if ($this->prestations->removeElement($prestation)) {
            // set the owning side to null (unless already changed)
            if ($prestation->getActivite() === $this) {
                $prestation->setActivite(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Personnel>
     */
    public function getPersonnels(): Collection
    {
        return $this->personnels;
    }

    public function addPersonnel(Personnel $personnel): self
    {
        if (!$this->personnels->contains($personnel)) {
            $this->personnels->add($personnel);
            $personnel->setListActivite($this);
        }

        return $this;
    }

    public function removePersonnel(Personnel $personnel): self
    {
        if ($this->personnels->removeElement($personnel)) {
            // set the owning side to null (unless already changed)
            if ($personnel->getListActivite() === $this) {
                $personnel->setListActivite(null);
            }
        }

        return $this;
    }
}

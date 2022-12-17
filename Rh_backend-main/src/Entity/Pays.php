<?php

namespace App\Entity;

use App\Repository\PaysRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
#[ORM\Entity(repositoryClass: PaysRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['pays']],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['pays','read:item', 'read:Post']],
        ],
    ],
)]
class Pays
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["pays"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["pays", "write:Post", 'chantier'])]
    private ?string $name = null;

    #[ORM\OneToMany(mappedBy: 'pays', targetEntity: Chantier::class)]
   
    private Collection $chantiers;

    public function __construct()
    {
        $this->chantiers = new ArrayCollection();
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

    /**
     * @return Collection<int, Chantier>
     */
    public function getChantiers(): Collection
    {
        return $this->chantiers;
    }

    public function addChantier(Chantier $chantier): self
    {
        if (!$this->chantiers->contains($chantier)) {
            $this->chantiers->add($chantier);
            $chantier->setPays($this);
        }

        return $this;
    }

    public function removeChantier(Chantier $chantier): self
    {
        if ($this->chantiers->removeElement($chantier)) {
            // set the owning side to null (unless already changed)
            if ($chantier->getPays() === $this) {
                $chantier->setPays(null);
            }
        }

        return $this;
    }
    
}

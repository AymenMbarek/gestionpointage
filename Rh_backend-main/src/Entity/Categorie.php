<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CategorieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: CategorieRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['category']],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['category','read:item', 'read:Post']],
        ],
    ],
)]
class Categorie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["category"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["category", "chantier" ,"write:Post"])]
    private ?string $name = null;

    #[ORM\OneToMany(mappedBy: 'category', targetEntity: Chantier::class)]
    #[Groups([ "write:Post"])]
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
            $chantier->setCategory($this);
        }

        return $this;
    }

    public function removeChantier(Chantier $chantier): self
    {
        if ($this->chantiers->removeElement($chantier)) {
            // set the owning side to null (unless already changed)
            if ($chantier->getCategory() === $this) {
                $chantier->setCategory(null);
            }
        }

        return $this;
    }
}

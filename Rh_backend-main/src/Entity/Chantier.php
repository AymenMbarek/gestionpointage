<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ChantierRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ChantierRepository::class)]
#[ApiResource(forceEager: false,
normalizationContext: ['groups' => ['chantier'], "enable_max_depth"=>true],
    denormalizationContext: ['groups' => ['write:Post']],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['chantier','read:item', 'read:Post']],
        ],
    ],
)]
class Chantier
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["chantier","contrat"])]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["chantier", "write:Post"])]
    private ?bool $actif = null;

    #[ORM\Column(length: 255)]
    #[Groups(["chantier","listactivite","pointage","contrat", "write:Post"])]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["chantier", "pointage","contrat","tarif","demande","smartphone","write:Post"])]
    private ?string $denomination = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["chantier", "write:Post"])]
    private ?string $groupe = null;

    #[ORM\Column(length: 255)]
    #[Groups(["chantier", "write:Post"])]
    private ?string $numero = null;

    #[ORM\Column(length: 255)]
    #[Groups(["chantier", "write:Post"])]
    private ?string $adresse = null;

    #[ORM\Column(length: 255)]
    #[Groups(["chantier", "write:Post"])]
    private ?string $codePostale = null;

    #[ORM\Column(length: 255)]
    #[Groups(["chantier", "write:Post"])]
    private ?string $ville = null;



    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["chantier", "write:Post"])]
    private ?string $xgps = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["chantier", "write:Post"])]
    private ?string $ygps = null;



    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["chantier", "write:Post"])]
    private ?string $remarque = null;

    #[ORM\ManyToOne(inversedBy: 'chantiers')]
    #[Groups(["chantier", "write:Post"])]
    #[SymfonyMaxDepth(1)]
    private ?Categorie $category = null;

    #[ORM\OneToMany(mappedBy: 'chantier', targetEntity: Personnel::class)]
    #[Groups(['read:item', 'chantier'])]
    #[SymfonyMaxDepth(1)]
    private Collection $personnels;

    #[ORM\OneToMany(mappedBy: 'chantier', targetEntity: ListActivite::class)]
    #[Groups(['read:item', 'chantier'])]
    #[SymfonyMaxDepth(1)]
    private Collection $listActivites;

    #[ORM\ManyToOne(inversedBy: 'chantiers')]
    #[Groups([ 'read:item'])]
	#[SymfonyMaxDepth(1)]
    private ?Pays $pays = null;

    #[ORM\OneToMany(mappedBy: 'chantier', targetEntity: Pointage::class)]
    private Collection $pointages;

    #[ORM\OneToMany(mappedBy: 'chantier', targetEntity: Contrat::class)]
    private Collection $contrats;

    #[ORM\OneToMany(mappedBy: 'chantier', targetEntity: Tarif::class)]
    private Collection $tarifs;

    #[ORM\OneToMany(mappedBy: 'chantier', targetEntity: Demande::class)]
    private Collection $demandes;

    #[ORM\ManyToOne(inversedBy: 'chantiers')]
    private ?User $responsableSecurite = null;

    #[ORM\ManyToOne(inversedBy: 'chantiers')]
    private ?User $responsableGeneral = null;

    #[ORM\OneToMany(mappedBy: 'chantier', targetEntity: Prestation::class)]
    private Collection $prestations;

    #[ORM\OneToMany(mappedBy: 'chantier', targetEntity: Smartphone::class)]
    private Collection $smartphones;

    public function __construct()
    {
        $this->actif = true;
        $this->personnels = new ArrayCollection();
        $this->listActivites = new ArrayCollection();
        $this->pointages = new ArrayCollection();
        $this->contrats = new ArrayCollection();
        $this->tarifs = new ArrayCollection();
        $this->demandes = new ArrayCollection();
        $this->prestations = new ArrayCollection();
        $this->smartphones = new ArrayCollection();
        
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

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getDenomination(): ?string
    {
        return $this->denomination;
    }

    public function setDenomination(?string $denomination): self
    {
        $this->denomination = $denomination;

        return $this;
    }

    public function getGroupe(): ?string
    {
        return $this->groupe;
    }

    public function setGroupe(?string $groupe): self
    {
        $this->groupe = $groupe;

        return $this;
    }

    public function getNumero(): ?string
    {
        return $this->numero;
    }

    public function setNumero(string $numero): self
    {
        $this->numero = $numero;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getCodePostale(): ?string
    {
        return $this->codePostale;
    }

    public function setCodePostale(string $codePostale): self
    {
        $this->codePostale = $codePostale;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

 

    

    public function getXgps(): ?string
    {
        return $this->xgps;
    }

    public function setXgps(?string $xgps): self
    {
        $this->xgps = $xgps;

        return $this;
    }

    public function getYgps(): ?string
    {
        return $this->ygps;
    }

    public function setYgps(?string $ygps): self
    {
        $this->ygps = $ygps;

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


    public function getCategory(): ?Categorie
    {
        return $this->category;
    }

    public function setCategory(?Categorie $category): self
    {
        $this->category = $category;

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
            $personnel->setChantier($this);
        }

        return $this;
    }

    public function removePersonnel(Personnel $personnel): self
    {
        if ($this->personnels->removeElement($personnel)) {
            // set the owning side to null (unless already changed)
            if ($personnel->getChantier() === $this) {
                $personnel->setChantier(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ListActivite>
     */
    public function getListActivites(): Collection
    {
        return $this->listActivites;
    }

    public function addListActivite(ListActivite $listActivite): self
    {
        if (!$this->listActivites->contains($listActivite)) {
            $this->listActivites->add($listActivite);
            $listActivite->setChantier($this);
        }

        return $this;
    }

    public function removeListActivite(ListActivite $listActivite): self
    {
        if ($this->listActivites->removeElement($listActivite)) {
            // set the owning side to null (unless already changed)
            if ($listActivite->getChantier() === $this) {
                $listActivite->setChantier(null);
            }
        }

        return $this;
    }

    public function getPays(): ?Pays
    {
        return $this->pays;
    }

    public function setPays(?Pays $pays): self
    {
        $this->pays = $pays;

        return $this;
    }

    /**
     * @return Collection<int, Pointage>
     */
    public function getPointages(): Collection
    {
        return $this->pointages;
    }

    public function addPointage(Pointage $pointage): self
    {
        if (!$this->pointages->contains($pointage)) {
            $this->pointages->add($pointage);
            $pointage->setChantier($this);
        }

        return $this;
    }

    public function removePointage(Pointage $pointage): self
    {
        if ($this->pointages->removeElement($pointage)) {
            // set the owning side to null (unless already changed)
            if ($pointage->getChantier() === $this) {
                $pointage->setChantier(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Contrat>
     */
    public function getContrats(): Collection
    {
        return $this->contrats;
    }

    public function addContrat(Contrat $contrat): self
    {
        if (!$this->contrats->contains($contrat)) {
            $this->contrats->add($contrat);
            $contrat->setChantier($this);
        }

        return $this;
    }

    public function removeContrat(Contrat $contrat): self
    {
        if ($this->contrats->removeElement($contrat)) {
            // set the owning side to null (unless already changed)
            if ($contrat->getChantier() === $this) {
                $contrat->setChantier(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Tarif>
     */
    public function getTarifs(): Collection
    {
        return $this->tarifs;
    }

    public function addTarif(Tarif $tarif): self
    {
        if (!$this->tarifs->contains($tarif)) {
            $this->tarifs->add($tarif);
            $tarif->setChantier($this);
        }

        return $this;
    }

    public function removeTarif(Tarif $tarif): self
    {
        if ($this->tarifs->removeElement($tarif)) {
            // set the owning side to null (unless already changed)
            if ($tarif->getChantier() === $this) {
                $tarif->setChantier(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Demande>
     */
    public function getDemandes(): Collection
    {
        return $this->demandes;
    }

    public function addDemande(Demande $demande): self
    {
        if (!$this->demandes->contains($demande)) {
            $this->demandes->add($demande);
            $demande->setChantier($this);
        }

        return $this;
    }

    public function removeDemande(Demande $demande): self
    {
        if ($this->demandes->removeElement($demande)) {
            // set the owning side to null (unless already changed)
            if ($demande->getChantier() === $this) {
                $demande->setChantier(null);
            }
        }

        return $this;
    }

    public function getResponsableSecurite(): ?User
    {
        return $this->responsableSecurite;
    }

    public function setResponsableSecurite(?User $responsableSecurite): self
    {
        $this->responsableSecurite = $responsableSecurite;

        return $this;
    }

    public function getResponsableGeneral(): ?User
    {
        return $this->responsableGeneral;
    }

    public function setResponsableGeneral(?User $responsableGeneral): self
    {
        $this->responsableGeneral = $responsableGeneral;

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
            $prestation->setChantier($this);
        }

        return $this;
    }

    public function removePrestation(Prestation $prestation): self
    {
        if ($this->prestations->removeElement($prestation)) {
            // set the owning side to null (unless already changed)
            if ($prestation->getChantier() === $this) {
                $prestation->setChantier(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Smartphone>
     */
    public function getSmartphones(): Collection
    {
        return $this->smartphones;
    }

    public function addSmartphone(Smartphone $smartphone): self
    {
        if (!$this->smartphones->contains($smartphone)) {
            $this->smartphones->add($smartphone);
            $smartphone->setChantier($this);
        }

        return $this;
    }

    public function removeSmartphone(Smartphone $smartphone): self
    {
        if ($this->smartphones->removeElement($smartphone)) {
            // set the owning side to null (unless already changed)
            if ($smartphone->getChantier() === $this) {
                $smartphone->setChantier(null);
            }
        }

        return $this;
    }
}

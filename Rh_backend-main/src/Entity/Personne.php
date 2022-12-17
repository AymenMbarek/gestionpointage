<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PersonneRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use ApiPlatform\Metadata\ApiProperty;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: PersonneRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['personne']],
    denormalizationContext: ['groups' => ['write:Post']],
    // types: ['https://schema.org/Book'],
    itemOperations: [
        'put', 'delete',
        'get' => [
            'normalization_context' => ['groups' => ['personne','read:item', 'read:Post']],
        ],
    ],
)]

class Personne
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["personne","absence","contrat"])]
    private ?int $id = null;



    #[ORM\Column(length: 255)]
    #[Groups(["personne", "write:Post"])]
    private ?string $type = null;

    #[ORM\Column(length: 255)]
    #[Groups(["personne", "write:Post"])]
    private ?string $code = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?bool $actif = null;

    #[ORM\Column(length: 255)]
    #[Groups(["personne", "remarque","pointage","absence","personnel","contrat","chantier","evaluation","objetRemis", "write:Post"])]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    #[Groups(["personne", "remarque","pointage","absence","personnel","contrat","chantier","evaluation","objetRemis", "write:Post"])]
    private ?string $prenom = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?string $genre = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?\DateTimeInterface $dateDeNaissance = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?string $ncin = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?\DateTimeInterface $validateCin = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?string $idBadge = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?string $nmobile = null;

    #[ORM\Column(length: 255)]
    #[Groups(["personne", "write:Post"])]
    private ?string $email = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?string $numeroMaison = null;

    #[ORM\Column(length: 255)]
    #[Groups(["personne", "write:Post"])]
    private ?string $adresse = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?string $codePostale = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?string $ville = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?string $pays = null;


   

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?string $remarque = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?string $profile = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?string $taux = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?string $heuresMax = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?bool $formationSecurite = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?\DateTimeInterface $validiteFormationSecurite = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?bool $autoriseesEvaluation = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?string $valeur = null;

    #[ORM\ManyToOne]
    #[Groups(["personne","personnel","chantier", "write:Post", ])]
    private ?Qualification $qualification = null;

    #[ORM\ManyToOne]
    #[Groups(["personne", "write:Post"])]
    private ?Certification $certification = null;

    #[ORM\OneToMany(mappedBy: 'personneExterne', targetEntity: Contrat::class)]
    #[Groups(["personne"])]
    private Collection $contrats;

    #[ORM\OneToMany(mappedBy: 'personne', targetEntity: ObjetRemis::class)]
    #[Groups(["personne"])]
    private Collection $objetRemis;

    #[ORM\OneToMany(mappedBy: 'personne', targetEntity: Presence::class)]
    private Collection $presences;

    #[ORM\OneToMany(mappedBy: 'personne', targetEntity: Pointage::class)]
    private Collection $pointages;

    #[ORM\OneToMany(mappedBy: 'personne', targetEntity: Absence::class)]
    private Collection $absences;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(["personne", "write:Post"])]
    private ?string $image = null;



   
    public function __construct()
    {
        $this->actif = true;
        $this->contrats = new ArrayCollection();
        $this->objetRemis = new ArrayCollection();
        $this->presences = new ArrayCollection();
        $this->pointages = new ArrayCollection();
        $this->absences = new ArrayCollection();
   
       
    }

   

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

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

    public function getGenre(): ?string
    {
        return $this->genre;
    }

    public function setGenre(?string $genre): self
    {
        $this->genre = $genre;

        return $this;
    }

    public function getDateDeNaissance(): ?\DateTimeInterface
    {
        return $this->dateDeNaissance;
    }

    public function setDateDeNaissance(?\DateTimeInterface $dateDeNaissance): self
    {
        $this->dateDeNaissance = $dateDeNaissance;

        return $this;
    }

    public function getNcin(): ?string
    {
        return $this->ncin;
    }

    public function setNcin(?string $ncin): self
    {
        $this->ncin = $ncin;

        return $this;
    }

    public function getValidateCin(): ?\DateTimeInterface
    {
        return $this->validateCin;
    }

    public function setValidateCin(?\DateTimeInterface $validateCin): self
    {
        $this->validateCin = $validateCin;

        return $this;
    }

    public function getIdBadge(): ?string
    {
        return $this->idBadge;
    }

    public function setIdBadge(?string $idBadge): self
    {
        $this->idBadge = $idBadge;

        return $this;
    }

    public function getNmobile(): ?string
    {
        return $this->nmobile;
    }

    public function setNmobile(?string $nmobile): self
    {
        $this->nmobile = $nmobile;

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

    public function getNumeroMaison(): ?string
    {
        return $this->numeroMaison;
    }

    public function setNumeroMaison(?string $numeroMaison): self
    {
        $this->numeroMaison = $numeroMaison;

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

    public function setCodePostale(?string $codePostale): self
    {
        $this->codePostale = $codePostale;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(?string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getPays(): ?string
    {
        return $this->pays;
    }

    public function setPays(?string $pays): self
    {
        $this->pays = $pays;

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

    public function getProfile(): ?string
    {
        return $this->profile;
    }

    public function setProfile(?string $profile): self
    {
        $this->profile = $profile;

        return $this;
    }

    public function getTaux(): ?string
    {
        return $this->taux;
    }

    public function setTaux(?string $taux): self
    {
        $this->taux = $taux;

        return $this;
    }

    public function getHeuresMax(): ?string
    {
        return $this->heuresMax;
    }

    public function setHeuresMax(?string $heuresMax): self
    {
        $this->heuresMax = $heuresMax;

        return $this;
    }

    public function isFormationSecurite(): ?bool
    {
        return $this->formationSecurite;
    }

    public function setFormationSecurite(?bool $formationSecurite): self
    {
        $this->formationSecurite = $formationSecurite;

        return $this;
    }

    public function getValiditeFormationSecurite(): ?\DateTimeInterface
    {
        return $this->validiteFormationSecurite;
    }

    public function setValiditeFormationSecurite(?\DateTimeInterface $validiteFormationSecurite): self
    {
        $this->validiteFormationSecurite = $validiteFormationSecurite;

        return $this;
    }

    public function isAutoriseesEvaluation(): ?bool
    {
        return $this->autoriseesEvaluation;
    }

    public function setAutoriseesEvaluation(?bool $autoriseesEvaluation): self
    {
        $this->autoriseesEvaluation = $autoriseesEvaluation;

        return $this;
    }

    public function getValeur(): ?string
    {
        return $this->valeur;
    }

    public function setValeur(?string $valeur): self
    {
        $this->valeur = $valeur;

        return $this;
    }

    public function getQualification(): ?Qualification
    {
        return $this->qualification;
    }

    public function setQualification(?Qualification $qualification): self
    {
        $this->qualification = $qualification;

        return $this;
    }

    public function getCertification(): ?Certification
    {
        return $this->certification;
    }

    public function setCertification(?Certification $certification): self
    {
        $this->certification = $certification;

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
            $contrat->setPersonneExterne($this);
        }

        return $this;
    }

    public function removeContrat(Contrat $contrat): self
    {
        if ($this->contrats->removeElement($contrat)) {
            // set the owning side to null (unless already changed)
            if ($contrat->getPersonnExterne() === $this) {
                $contrat->setPersonnExterne(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ObjetRemis>
     */
    public function getObjetRemis(): Collection
    {
        return $this->objetRemis;
    }

    public function addObjetRemi(ObjetRemis $objetRemi): self
    {
        if (!$this->objetRemis->contains($objetRemi)) {
            $this->objetRemis->add($objetRemi);
            $objetRemi->setPersonne($this);
        }

        return $this;
    }

    public function removeObjetRemi(ObjetRemis $objetRemi): self
    {
        if ($this->objetRemis->removeElement($objetRemi)) {
            // set the owning side to null (unless already changed)
            if ($objetRemi->getPersonne() === $this) {
                $objetRemi->setPersonne(null);
            }
        }

        return $this;
    }
    public function __toString(): string
      {
          return $this->prenom;
      }

    /**
     * @return Collection<int, Presence>
     */
    public function getPresences(): Collection
    {
        return $this->presences;
    }

    public function addPresence(Presence $presence): self
    {
        if (!$this->presences->contains($presence)) {
            $this->presences->add($presence);
            $presence->setPersonne($this);
        }

        return $this;
    }

    public function removePresence(Presence $presence): self
    {
        if ($this->presences->removeElement($presence)) {
            // set the owning side to null (unless already changed)
            if ($presence->getPersonne() === $this) {
                $presence->setPersonne(null);
            }
        }

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
            $pointage->setPersonne($this);
        }

        return $this;
    }

    public function removePointage(Pointage $pointage): self
    {
        if ($this->pointages->removeElement($pointage)) {
            // set the owning side to null (unless already changed)
            if ($pointage->getPersonne() === $this) {
                $pointage->setPersonne(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Absence>
     */
    public function getAbsences(): Collection
    {
        return $this->absences;
    }

    public function addAbsence(Absence $absence): self
    {
        if (!$this->absences->contains($absence)) {
            $this->absences->add($absence);
            $absence->setPersonne($this);
        }

        return $this;
    }

    public function removeAbsence(Absence $absence): self
    {
        if ($this->absences->removeElement($absence)) {
            // set the owning side to null (unless already changed)
            if ($absence->getPersonne() === $this) {
                $absence->setPersonne(null);
            }
        }

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

  
    

    
   
}

<?php

namespace Proxies\__CG__\App\Entity;


/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class Entreprise extends \App\Entity\Entreprise implements \Doctrine\ORM\Proxy\Proxy
{
    /**
     * @var \Closure the callback responsible for loading properties in the proxy object. This callback is called with
     *      three parameters, being respectively the proxy object to be initialized, the method that triggered the
     *      initialization process and an array of ordered parameters that were passed to that method.
     *
     * @see \Doctrine\Common\Proxy\Proxy::__setInitializer
     */
    public $__initializer__;

    /**
     * @var \Closure the callback responsible of loading properties that need to be copied in the cloned object
     *
     * @see \Doctrine\Common\Proxy\Proxy::__setCloner
     */
    public $__cloner__;

    /**
     * @var boolean flag indicating if this object was already initialized
     *
     * @see \Doctrine\Persistence\Proxy::__isInitialized
     */
    public $__isInitialized__ = false;

    /**
     * @var array<string, null> properties to be lazy loaded, indexed by property name
     */
    public static $lazyPropertiesNames = array (
);

    /**
     * @var array<string, mixed> default values of properties to be lazy loaded, with keys being the property names
     *
     * @see \Doctrine\Common\Proxy\Proxy::__getLazyProperties
     */
    public static $lazyPropertiesDefaults = array (
);



    public function __construct(?\Closure $initializer = null, ?\Closure $cloner = null)
    {

        $this->__initializer__ = $initializer;
        $this->__cloner__      = $cloner;
    }







    /**
     * 
     * @return array
     */
    public function __sleep()
    {
        if ($this->__isInitialized__) {
            return ['__isInitialized__', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'id', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'actif', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'code', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'denomination', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'tel', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'numero', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'adresse', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'codePostale', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'ville', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'pays', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'contacts', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'contrats', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'tarifs'];
        }

        return ['__isInitialized__', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'id', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'actif', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'code', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'denomination', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'tel', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'numero', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'adresse', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'codePostale', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'ville', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'pays', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'contacts', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'contrats', '' . "\0" . 'App\\Entity\\Entreprise' . "\0" . 'tarifs'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (Entreprise $proxy) {
                $proxy->__setInitializer(null);
                $proxy->__setCloner(null);

                $existingProperties = get_object_vars($proxy);

                foreach ($proxy::$lazyPropertiesDefaults as $property => $defaultValue) {
                    if ( ! array_key_exists($property, $existingProperties)) {
                        $proxy->$property = $defaultValue;
                    }
                }
            };

        }
    }

    /**
     * 
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', []);
    }

    /**
     * Forces initialization of the proxy
     */
    public function __load(): void
    {
        $this->__initializer__ && $this->__initializer__->__invoke($this, '__load', []);
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __isInitialized(): bool
    {
        return $this->__isInitialized__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitialized($initialized): void
    {
        $this->__isInitialized__ = $initialized;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitializer(\Closure $initializer = null): void
    {
        $this->__initializer__ = $initializer;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __getInitializer(): ?\Closure
    {
        return $this->__initializer__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setCloner(\Closure $cloner = null): void
    {
        $this->__cloner__ = $cloner;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific cloning logic
     */
    public function __getCloner(): ?\Closure
    {
        return $this->__cloner__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     * @deprecated no longer in use - generated code now relies on internal components rather than generated public API
     * @static
     */
    public function __getLazyProperties(): array
    {
        return self::$lazyPropertiesDefaults;
    }

    
    /**
     * {@inheritDoc}
     */
    public function getId(): ?int
    {
        if ($this->__isInitialized__ === false) {
            return (int)  parent::getId();
        }


        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getId', []);

        return parent::getId();
    }

    /**
     * {@inheritDoc}
     */
    public function isActif(): ?bool
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isActif', []);

        return parent::isActif();
    }

    /**
     * {@inheritDoc}
     */
    public function setActif(?bool $actif): \App\Entity\Entreprise
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setActif', [$actif]);

        return parent::setActif($actif);
    }

    /**
     * {@inheritDoc}
     */
    public function getCode(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCode', []);

        return parent::getCode();
    }

    /**
     * {@inheritDoc}
     */
    public function setCode(string $code): \App\Entity\Entreprise
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCode', [$code]);

        return parent::setCode($code);
    }

    /**
     * {@inheritDoc}
     */
    public function getDenomination(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getDenomination', []);

        return parent::getDenomination();
    }

    /**
     * {@inheritDoc}
     */
    public function setDenomination(?string $denomination): \App\Entity\Entreprise
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setDenomination', [$denomination]);

        return parent::setDenomination($denomination);
    }

    /**
     * {@inheritDoc}
     */
    public function getTel(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getTel', []);

        return parent::getTel();
    }

    /**
     * {@inheritDoc}
     */
    public function setTel(?string $tel): \App\Entity\Entreprise
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setTel', [$tel]);

        return parent::setTel($tel);
    }

    /**
     * {@inheritDoc}
     */
    public function getNumero(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNumero', []);

        return parent::getNumero();
    }

    /**
     * {@inheritDoc}
     */
    public function setNumero(?string $numero): \App\Entity\Entreprise
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNumero', [$numero]);

        return parent::setNumero($numero);
    }

    /**
     * {@inheritDoc}
     */
    public function getAdresse(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getAdresse', []);

        return parent::getAdresse();
    }

    /**
     * {@inheritDoc}
     */
    public function setAdresse(?string $adresse): \App\Entity\Entreprise
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAdresse', [$adresse]);

        return parent::setAdresse($adresse);
    }

    /**
     * {@inheritDoc}
     */
    public function getCodePostale(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCodePostale', []);

        return parent::getCodePostale();
    }

    /**
     * {@inheritDoc}
     */
    public function setCodePostale(?string $codePostale): \App\Entity\Entreprise
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCodePostale', [$codePostale]);

        return parent::setCodePostale($codePostale);
    }

    /**
     * {@inheritDoc}
     */
    public function getVille(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getVille', []);

        return parent::getVille();
    }

    /**
     * {@inheritDoc}
     */
    public function setVille(?string $ville): \App\Entity\Entreprise
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setVille', [$ville]);

        return parent::setVille($ville);
    }

    /**
     * {@inheritDoc}
     */
    public function getPays(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPays', []);

        return parent::getPays();
    }

    /**
     * {@inheritDoc}
     */
    public function setPays(?string $pays): \App\Entity\Entreprise
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPays', [$pays]);

        return parent::setPays($pays);
    }

    /**
     * {@inheritDoc}
     */
    public function getContacts(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getContacts', []);

        return parent::getContacts();
    }

    /**
     * {@inheritDoc}
     */
    public function addContact(\App\Entity\Contact $contact): \App\Entity\Entreprise
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addContact', [$contact]);

        return parent::addContact($contact);
    }

    /**
     * {@inheritDoc}
     */
    public function removeContact(\App\Entity\Contact $contact): \App\Entity\Entreprise
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeContact', [$contact]);

        return parent::removeContact($contact);
    }

    /**
     * {@inheritDoc}
     */
    public function getContrats(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getContrats', []);

        return parent::getContrats();
    }

    /**
     * {@inheritDoc}
     */
    public function addContrat(\App\Entity\Contrat $contrat): \App\Entity\Entreprise
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addContrat', [$contrat]);

        return parent::addContrat($contrat);
    }

    /**
     * {@inheritDoc}
     */
    public function removeContrat(\App\Entity\Contrat $contrat): \App\Entity\Entreprise
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeContrat', [$contrat]);

        return parent::removeContrat($contrat);
    }

    /**
     * {@inheritDoc}
     */
    public function getTarifs(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getTarifs', []);

        return parent::getTarifs();
    }

    /**
     * {@inheritDoc}
     */
    public function addTarif(\App\Entity\Tarif $tarif): \App\Entity\Entreprise
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addTarif', [$tarif]);

        return parent::addTarif($tarif);
    }

    /**
     * {@inheritDoc}
     */
    public function removeTarif(\App\Entity\Tarif $tarif): \App\Entity\Entreprise
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeTarif', [$tarif]);

        return parent::removeTarif($tarif);
    }

}

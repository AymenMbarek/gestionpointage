<?php

namespace App\Form;

use App\Entity\Personne;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PersonneType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('type')
            ->add('code')
            ->add('actif')
            ->add('nom')
            ->add('prenom')
            ->add('genre')
            ->add('dateDeNaissance')
            ->add('ncin')
            ->add('validateCin')
            ->add('idBadge')
            ->add('nmobile')
            ->add('email')
            ->add('numeroMaison')
            ->add('adresse')
            ->add('codePostale')
            ->add('ville')
            ->add('pays')
            ->add('qualification')
            ->add('remarque')
            ->add('profile')
            ->add('taux')
            ->add('heuresMax')
            ->add('formationSecurite')
            ->add('validiteFormationSecurite')
            ->add('autoriseesEvaluation')
            ->add('valeur')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Personne::class,
        ]);
    }
}

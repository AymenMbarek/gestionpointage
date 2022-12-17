<?php

namespace ContainerOwZZ7RJ;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_MLkQXTService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.mLkQ_xT' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.mLkQ_xT'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'personne' => ['privates', '.errored..service_locator.mLkQ_xT.App\\Entity\\Personne', NULL, 'Cannot autowire service ".service_locator.mLkQ_xT": it references class "App\\Entity\\Personne" but no such service exists.'],
            'personneRepository' => ['privates', 'App\\Repository\\PersonneRepository', 'getPersonneRepositoryService', true],
        ], [
            'personne' => 'App\\Entity\\Personne',
            'personneRepository' => 'App\\Repository\\PersonneRepository',
        ]);
    }
}
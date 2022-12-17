<?php

namespace ContainerOwZZ7RJ;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_P81a8_XService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.P81a8.X' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.P81a8.X'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'banque' => ['privates', '.errored..service_locator.P81a8.X.App\\Entity\\Banque', NULL, 'Cannot autowire service ".service_locator.P81a8.X": it references class "App\\Entity\\Banque" but no such service exists.'],
            'banqueRepository' => ['privates', 'App\\Repository\\BanqueRepository', 'getBanqueRepositoryService', true],
        ], [
            'banque' => 'App\\Entity\\Banque',
            'banqueRepository' => 'App\\Repository\\BanqueRepository',
        ]);
    }
}

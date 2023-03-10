<?php

namespace ContainerOwZZ7RJ;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_BFJBwyService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.bFJ_Bwy' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.bFJ_Bwy'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'personneRepository' => ['privates', 'App\\Repository\\PersonneRepository', 'getPersonneRepositoryService', true],
        ], [
            'personneRepository' => 'App\\Repository\\PersonneRepository',
        ]);
    }
}

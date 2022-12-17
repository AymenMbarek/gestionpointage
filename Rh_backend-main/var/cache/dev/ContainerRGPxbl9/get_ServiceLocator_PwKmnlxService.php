<?php

namespace ContainerRGPxbl9;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_PwKmnlxService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.pwKmnlx' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.pwKmnlx'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'chantierRepository' => ['privates', 'App\\Repository\\ChantierRepository', 'getChantierRepositoryService', true],
            'personneRepository' => ['privates', 'App\\Repository\\PersonneRepository', 'getPersonneRepositoryService', true],
            'pointageRepository' => ['privates', 'App\\Repository\\PointageRepository', 'getPointageRepositoryService', true],
        ], [
            'chantierRepository' => 'App\\Repository\\ChantierRepository',
            'personneRepository' => 'App\\Repository\\PersonneRepository',
            'pointageRepository' => 'App\\Repository\\PointageRepository',
        ]);
    }
}
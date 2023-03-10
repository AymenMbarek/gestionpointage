<?php

namespace ContainerOwZZ7RJ;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_UYu0jvTService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.UYu0jvT' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.UYu0jvT'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'contactRepository' => ['privates', 'App\\Repository\\ContactRepository', 'getContactRepositoryService', true],
            'entrepriseRepository' => ['privates', 'App\\Repository\\EntrepriseRepository', 'getEntrepriseRepositoryService', true],
        ], [
            'contactRepository' => 'App\\Repository\\ContactRepository',
            'entrepriseRepository' => 'App\\Repository\\EntrepriseRepository',
        ]);
    }
}

<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerRGPxbl9\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerRGPxbl9/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerRGPxbl9.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerRGPxbl9\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerRGPxbl9\App_KernelDevDebugContainer([
    'container.build_hash' => 'RGPxbl9',
    'container.build_id' => '5409b6f5',
    'container.build_time' => 1667732353,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerRGPxbl9');
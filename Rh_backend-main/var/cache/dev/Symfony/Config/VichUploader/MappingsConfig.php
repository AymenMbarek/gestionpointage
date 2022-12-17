<?php

namespace Symfony\Config\VichUploader;

require_once __DIR__.\DIRECTORY_SEPARATOR.'MappingsConfig'.\DIRECTORY_SEPARATOR.'NamerConfig.php';
require_once __DIR__.\DIRECTORY_SEPARATOR.'MappingsConfig'.\DIRECTORY_SEPARATOR.'DirectoryNamerConfig.php';

use Symfony\Component\Config\Loader\ParamConfigurator;
use Symfony\Component\Config\Definition\Exception\InvalidConfigurationException;

/**
 * This class is automatically generated to help in creating a config.
 */
class MappingsConfig 
{
    private $uriPrefix;
    private $uploadDestination;
    private $namer;
    private $directoryNamer;
    private $deleteOnRemove;
    private $deleteOnUpdate;
    private $injectOnLoad;
    private $dbDriver;
    private $_usedProperties = [];

    /**
     * @default '/uploads'
     * @param ParamConfigurator|mixed $value
     * @return $this
     */
    public function uriPrefix($value): self
    {
        $this->_usedProperties['uriPrefix'] = true;
        $this->uriPrefix = $value;

        return $this;
    }

    /**
     * @default null
     * @param ParamConfigurator|mixed $value
     * @return $this
     */
    public function uploadDestination($value): self
    {
        $this->_usedProperties['uploadDestination'] = true;
        $this->uploadDestination = $value;

        return $this;
    }

    /**
     * @return \Symfony\Config\VichUploader\MappingsConfig\NamerConfig|$this
     */
    public function namer($value = [])
    {
        if (!\is_array($value)) {
            $this->_usedProperties['namer'] = true;
            $this->namer = $value;

            return $this;
        }

        if (!$this->namer instanceof \Symfony\Config\VichUploader\MappingsConfig\NamerConfig) {
            $this->_usedProperties['namer'] = true;
            $this->namer = new \Symfony\Config\VichUploader\MappingsConfig\NamerConfig($value);
        } elseif (0 < \func_num_args()) {
            throw new InvalidConfigurationException('The node created by "namer()" has already been initialized. You cannot pass values the second time you call namer().');
        }

        return $this->namer;
    }

    /**
     * @return \Symfony\Config\VichUploader\MappingsConfig\DirectoryNamerConfig|$this
     */
    public function directoryNamer($value = [])
    {
        if (!\is_array($value)) {
            $this->_usedProperties['directoryNamer'] = true;
            $this->directoryNamer = $value;

            return $this;
        }

        if (!$this->directoryNamer instanceof \Symfony\Config\VichUploader\MappingsConfig\DirectoryNamerConfig) {
            $this->_usedProperties['directoryNamer'] = true;
            $this->directoryNamer = new \Symfony\Config\VichUploader\MappingsConfig\DirectoryNamerConfig($value);
        } elseif (0 < \func_num_args()) {
            throw new InvalidConfigurationException('The node created by "directoryNamer()" has already been initialized. You cannot pass values the second time you call directoryNamer().');
        }

        return $this->directoryNamer;
    }

    /**
     * @default true
     * @param ParamConfigurator|mixed $value
     * @return $this
     */
    public function deleteOnRemove($value): self
    {
        $this->_usedProperties['deleteOnRemove'] = true;
        $this->deleteOnRemove = $value;

        return $this;
    }

    /**
     * @default true
     * @param ParamConfigurator|mixed $value
     * @return $this
     */
    public function deleteOnUpdate($value): self
    {
        $this->_usedProperties['deleteOnUpdate'] = true;
        $this->deleteOnUpdate = $value;

        return $this;
    }

    /**
     * @default false
     * @param ParamConfigurator|mixed $value
     * @return $this
     */
    public function injectOnLoad($value): self
    {
        $this->_usedProperties['injectOnLoad'] = true;
        $this->injectOnLoad = $value;

        return $this;
    }

    /**
     * @default null
     * @param ParamConfigurator|mixed $value
     * @return $this
     */
    public function dbDriver($value): self
    {
        $this->_usedProperties['dbDriver'] = true;
        $this->dbDriver = $value;

        return $this;
    }

    public function __construct(array $value = [])
    {
        if (array_key_exists('uri_prefix', $value)) {
            $this->_usedProperties['uriPrefix'] = true;
            $this->uriPrefix = $value['uri_prefix'];
            unset($value['uri_prefix']);
        }

        if (array_key_exists('upload_destination', $value)) {
            $this->_usedProperties['uploadDestination'] = true;
            $this->uploadDestination = $value['upload_destination'];
            unset($value['upload_destination']);
        }

        if (array_key_exists('namer', $value)) {
            $this->_usedProperties['namer'] = true;
            $this->namer = \is_array($value['namer']) ? new \Symfony\Config\VichUploader\MappingsConfig\NamerConfig($value['namer']) : $value['namer'];
            unset($value['namer']);
        }

        if (array_key_exists('directory_namer', $value)) {
            $this->_usedProperties['directoryNamer'] = true;
            $this->directoryNamer = \is_array($value['directory_namer']) ? new \Symfony\Config\VichUploader\MappingsConfig\DirectoryNamerConfig($value['directory_namer']) : $value['directory_namer'];
            unset($value['directory_namer']);
        }

        if (array_key_exists('delete_on_remove', $value)) {
            $this->_usedProperties['deleteOnRemove'] = true;
            $this->deleteOnRemove = $value['delete_on_remove'];
            unset($value['delete_on_remove']);
        }

        if (array_key_exists('delete_on_update', $value)) {
            $this->_usedProperties['deleteOnUpdate'] = true;
            $this->deleteOnUpdate = $value['delete_on_update'];
            unset($value['delete_on_update']);
        }

        if (array_key_exists('inject_on_load', $value)) {
            $this->_usedProperties['injectOnLoad'] = true;
            $this->injectOnLoad = $value['inject_on_load'];
            unset($value['inject_on_load']);
        }

        if (array_key_exists('db_driver', $value)) {
            $this->_usedProperties['dbDriver'] = true;
            $this->dbDriver = $value['db_driver'];
            unset($value['db_driver']);
        }

        if ([] !== $value) {
            throw new InvalidConfigurationException(sprintf('The following keys are not supported by "%s": ', __CLASS__).implode(', ', array_keys($value)));
        }
    }

    public function toArray(): array
    {
        $output = [];
        if (isset($this->_usedProperties['uriPrefix'])) {
            $output['uri_prefix'] = $this->uriPrefix;
        }
        if (isset($this->_usedProperties['uploadDestination'])) {
            $output['upload_destination'] = $this->uploadDestination;
        }
        if (isset($this->_usedProperties['namer'])) {
            $output['namer'] = $this->namer instanceof \Symfony\Config\VichUploader\MappingsConfig\NamerConfig ? $this->namer->toArray() : $this->namer;
        }
        if (isset($this->_usedProperties['directoryNamer'])) {
            $output['directory_namer'] = $this->directoryNamer instanceof \Symfony\Config\VichUploader\MappingsConfig\DirectoryNamerConfig ? $this->directoryNamer->toArray() : $this->directoryNamer;
        }
        if (isset($this->_usedProperties['deleteOnRemove'])) {
            $output['delete_on_remove'] = $this->deleteOnRemove;
        }
        if (isset($this->_usedProperties['deleteOnUpdate'])) {
            $output['delete_on_update'] = $this->deleteOnUpdate;
        }
        if (isset($this->_usedProperties['injectOnLoad'])) {
            $output['inject_on_load'] = $this->injectOnLoad;
        }
        if (isset($this->_usedProperties['dbDriver'])) {
            $output['db_driver'] = $this->dbDriver;
        }

        return $output;
    }

}

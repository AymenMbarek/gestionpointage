<?php

namespace Symfony\Config\VichUploader;

require_once __DIR__.\DIRECTORY_SEPARATOR.'Metadata'.\DIRECTORY_SEPARATOR.'FileCacheConfig.php';
require_once __DIR__.\DIRECTORY_SEPARATOR.'Metadata'.\DIRECTORY_SEPARATOR.'DirectoryConfig.php';

use Symfony\Component\Config\Loader\ParamConfigurator;
use Symfony\Component\Config\Definition\Exception\InvalidConfigurationException;

/**
 * This class is automatically generated to help in creating a config.
 */
class MetadataConfig 
{
    private $cache;
    private $type;
    private $fileCache;
    private $autoDetection;
    private $directories;
    private $_usedProperties = [];

    /**
     * @default 'file'
     * @param ParamConfigurator|mixed $value
     * @return $this
     */
    public function cache($value): self
    {
        $this->_usedProperties['cache'] = true;
        $this->cache = $value;

        return $this;
    }

    /**
     * @default 'annotation'
     * @param ParamConfigurator|mixed $value
     * @return $this
     */
    public function type($value): self
    {
        $this->_usedProperties['type'] = true;
        $this->type = $value;

        return $this;
    }

    public function fileCache(array $value = []): \Symfony\Config\VichUploader\Metadata\FileCacheConfig
    {
        if (null === $this->fileCache) {
            $this->_usedProperties['fileCache'] = true;
            $this->fileCache = new \Symfony\Config\VichUploader\Metadata\FileCacheConfig($value);
        } elseif (0 < \func_num_args()) {
            throw new InvalidConfigurationException('The node created by "fileCache()" has already been initialized. You cannot pass values the second time you call fileCache().');
        }

        return $this->fileCache;
    }

    /**
     * @default true
     * @param ParamConfigurator|bool $value
     * @return $this
     */
    public function autoDetection($value): self
    {
        $this->_usedProperties['autoDetection'] = true;
        $this->autoDetection = $value;

        return $this;
    }

    public function directory(array $value = []): \Symfony\Config\VichUploader\Metadata\DirectoryConfig
    {
        $this->_usedProperties['directories'] = true;

        return $this->directories[] = new \Symfony\Config\VichUploader\Metadata\DirectoryConfig($value);
    }

    public function __construct(array $value = [])
    {
        if (array_key_exists('cache', $value)) {
            $this->_usedProperties['cache'] = true;
            $this->cache = $value['cache'];
            unset($value['cache']);
        }

        if (array_key_exists('type', $value)) {
            $this->_usedProperties['type'] = true;
            $this->type = $value['type'];
            unset($value['type']);
        }

        if (array_key_exists('file_cache', $value)) {
            $this->_usedProperties['fileCache'] = true;
            $this->fileCache = new \Symfony\Config\VichUploader\Metadata\FileCacheConfig($value['file_cache']);
            unset($value['file_cache']);
        }

        if (array_key_exists('auto_detection', $value)) {
            $this->_usedProperties['autoDetection'] = true;
            $this->autoDetection = $value['auto_detection'];
            unset($value['auto_detection']);
        }

        if (array_key_exists('directories', $value)) {
            $this->_usedProperties['directories'] = true;
            $this->directories = array_map(function ($v) { return new \Symfony\Config\VichUploader\Metadata\DirectoryConfig($v); }, $value['directories']);
            unset($value['directories']);
        }

        if ([] !== $value) {
            throw new InvalidConfigurationException(sprintf('The following keys are not supported by "%s": ', __CLASS__).implode(', ', array_keys($value)));
        }
    }

    public function toArray(): array
    {
        $output = [];
        if (isset($this->_usedProperties['cache'])) {
            $output['cache'] = $this->cache;
        }
        if (isset($this->_usedProperties['type'])) {
            $output['type'] = $this->type;
        }
        if (isset($this->_usedProperties['fileCache'])) {
            $output['file_cache'] = $this->fileCache->toArray();
        }
        if (isset($this->_usedProperties['autoDetection'])) {
            $output['auto_detection'] = $this->autoDetection;
        }
        if (isset($this->_usedProperties['directories'])) {
            $output['directories'] = array_map(function ($v) { return $v->toArray(); }, $this->directories);
        }

        return $output;
    }

}

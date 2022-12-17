<?php

namespace Symfony\Config;

require_once __DIR__.\DIRECTORY_SEPARATOR.'VichUploader'.\DIRECTORY_SEPARATOR.'MetadataConfig.php';
require_once __DIR__.\DIRECTORY_SEPARATOR.'VichUploader'.\DIRECTORY_SEPARATOR.'MappingsConfig.php';

use Symfony\Component\Config\Loader\ParamConfigurator;
use Symfony\Component\Config\Definition\Exception\InvalidConfigurationException;

/**
 * This class is automatically generated to help in creating a config.
 */
class VichUploaderConfig implements \Symfony\Component\Config\Builder\ConfigBuilderInterface
{
    private $defaultFilenameAttributeSuffix;
    private $dbDriver;
    private $storage;
    private $templating;
    private $twig;
    private $form;
    private $metadata;
    private $mappings;
    private $_usedProperties = [];

    /**
     * @default '_name'
     * @param ParamConfigurator|mixed $value
     * @return $this
     */
    public function defaultFilenameAttributeSuffix($value): self
    {
        $this->_usedProperties['defaultFilenameAttributeSuffix'] = true;
        $this->defaultFilenameAttributeSuffix = $value;

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

    /**
     * @default 'file_system'
     * @param ParamConfigurator|mixed $value
     * @return $this
     */
    public function storage($value): self
    {
        $this->_usedProperties['storage'] = true;
        $this->storage = $value;

        return $this;
    }

    /**
     * @default false
     * @param ParamConfigurator|mixed $value
     * @deprecated The "templating" option is deprecated.
     * @return $this
     */
    public function templating($value): self
    {
        $this->_usedProperties['templating'] = true;
        $this->templating = $value;

        return $this;
    }

    /**
     * twig requires templating
     * @default true
     * @param ParamConfigurator|mixed $value
     * @return $this
     */
    public function twig($value): self
    {
        $this->_usedProperties['twig'] = true;
        $this->twig = $value;

        return $this;
    }

    /**
     * @default true
     * @param ParamConfigurator|mixed $value
     * @return $this
     */
    public function form($value): self
    {
        $this->_usedProperties['form'] = true;
        $this->form = $value;

        return $this;
    }

    public function metadata(array $value = []): \Symfony\Config\VichUploader\MetadataConfig
    {
        if (null === $this->metadata) {
            $this->_usedProperties['metadata'] = true;
            $this->metadata = new \Symfony\Config\VichUploader\MetadataConfig($value);
        } elseif (0 < \func_num_args()) {
            throw new InvalidConfigurationException('The node created by "metadata()" has already been initialized. You cannot pass values the second time you call metadata().');
        }

        return $this->metadata;
    }

    public function mappings(string $id, array $value = []): \Symfony\Config\VichUploader\MappingsConfig
    {
        if (!isset($this->mappings[$id])) {
            $this->_usedProperties['mappings'] = true;
            $this->mappings[$id] = new \Symfony\Config\VichUploader\MappingsConfig($value);
        } elseif (1 < \func_num_args()) {
            throw new InvalidConfigurationException('The node created by "mappings()" has already been initialized. You cannot pass values the second time you call mappings().');
        }

        return $this->mappings[$id];
    }

    public function getExtensionAlias(): string
    {
        return 'vich_uploader';
    }

    public function __construct(array $value = [])
    {
        if (array_key_exists('default_filename_attribute_suffix', $value)) {
            $this->_usedProperties['defaultFilenameAttributeSuffix'] = true;
            $this->defaultFilenameAttributeSuffix = $value['default_filename_attribute_suffix'];
            unset($value['default_filename_attribute_suffix']);
        }

        if (array_key_exists('db_driver', $value)) {
            $this->_usedProperties['dbDriver'] = true;
            $this->dbDriver = $value['db_driver'];
            unset($value['db_driver']);
        }

        if (array_key_exists('storage', $value)) {
            $this->_usedProperties['storage'] = true;
            $this->storage = $value['storage'];
            unset($value['storage']);
        }

        if (array_key_exists('templating', $value)) {
            $this->_usedProperties['templating'] = true;
            $this->templating = $value['templating'];
            unset($value['templating']);
        }

        if (array_key_exists('twig', $value)) {
            $this->_usedProperties['twig'] = true;
            $this->twig = $value['twig'];
            unset($value['twig']);
        }

        if (array_key_exists('form', $value)) {
            $this->_usedProperties['form'] = true;
            $this->form = $value['form'];
            unset($value['form']);
        }

        if (array_key_exists('metadata', $value)) {
            $this->_usedProperties['metadata'] = true;
            $this->metadata = new \Symfony\Config\VichUploader\MetadataConfig($value['metadata']);
            unset($value['metadata']);
        }

        if (array_key_exists('mappings', $value)) {
            $this->_usedProperties['mappings'] = true;
            $this->mappings = array_map(function ($v) { return new \Symfony\Config\VichUploader\MappingsConfig($v); }, $value['mappings']);
            unset($value['mappings']);
        }

        if ([] !== $value) {
            throw new InvalidConfigurationException(sprintf('The following keys are not supported by "%s": ', __CLASS__).implode(', ', array_keys($value)));
        }
    }

    public function toArray(): array
    {
        $output = [];
        if (isset($this->_usedProperties['defaultFilenameAttributeSuffix'])) {
            $output['default_filename_attribute_suffix'] = $this->defaultFilenameAttributeSuffix;
        }
        if (isset($this->_usedProperties['dbDriver'])) {
            $output['db_driver'] = $this->dbDriver;
        }
        if (isset($this->_usedProperties['storage'])) {
            $output['storage'] = $this->storage;
        }
        if (isset($this->_usedProperties['templating'])) {
            $output['templating'] = $this->templating;
        }
        if (isset($this->_usedProperties['twig'])) {
            $output['twig'] = $this->twig;
        }
        if (isset($this->_usedProperties['form'])) {
            $output['form'] = $this->form;
        }
        if (isset($this->_usedProperties['metadata'])) {
            $output['metadata'] = $this->metadata->toArray();
        }
        if (isset($this->_usedProperties['mappings'])) {
            $output['mappings'] = array_map(function ($v) { return $v->toArray(); }, $this->mappings);
        }

        return $output;
    }

}

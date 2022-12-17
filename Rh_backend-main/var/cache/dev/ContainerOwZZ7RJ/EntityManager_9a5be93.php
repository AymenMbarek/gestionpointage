<?php

namespace ContainerOwZZ7RJ;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'persistence'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Persistence'.\DIRECTORY_SEPARATOR.'ObjectManager.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder03305 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializer32ab1 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicPropertiesf6091 = [
        
    ];

    public function getConnection()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'getConnection', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'getMetadataFactory', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'getExpressionBuilder', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'beginTransaction', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->beginTransaction();
    }

    public function getCache()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'getCache', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->getCache();
    }

    public function transactional($func)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'transactional', array('func' => $func), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'wrapInTransaction', array('func' => $func), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'commit', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->commit();
    }

    public function rollback()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'rollback', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'getClassMetadata', array('className' => $className), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'createQuery', array('dql' => $dql), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'createNamedQuery', array('name' => $name), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'createQueryBuilder', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'flush', array('entity' => $entity), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'clear', array('entityName' => $entityName), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->clear($entityName);
    }

    public function close()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'close', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->close();
    }

    public function persist($entity)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'persist', array('entity' => $entity), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'remove', array('entity' => $entity), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'refresh', array('entity' => $entity), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'detach', array('entity' => $entity), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'merge', array('entity' => $entity), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'getRepository', array('entityName' => $entityName), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'contains', array('entity' => $entity), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'getEventManager', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'getConfiguration', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'isOpen', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'getUnitOfWork', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'getProxyFactory', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'initializeObject', array('obj' => $obj), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'getFilters', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'isFiltersStateClean', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'hasFilters', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return $this->valueHolder03305->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializer32ab1 = $initializer;

        return $instance;
    }

    public function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config)
    {
        static $reflection;

        if (! $this->valueHolder03305) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder03305 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder03305->__construct($conn, $config);
    }

    public function & __get($name)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, '__get', ['name' => $name], $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        if (isset(self::$publicPropertiesf6091[$name])) {
            return $this->valueHolder03305->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder03305;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder03305;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, '__set', array('name' => $name, 'value' => $value), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder03305;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder03305;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, '__isset', array('name' => $name), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder03305;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder03305;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, '__unset', array('name' => $name), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder03305;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder03305;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, '__clone', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        $this->valueHolder03305 = clone $this->valueHolder03305;
    }

    public function __sleep()
    {
        $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, '__sleep', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;

        return array('valueHolder03305');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializer32ab1 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializer32ab1;
    }

    public function initializeProxy() : bool
    {
        return $this->initializer32ab1 && ($this->initializer32ab1->__invoke($valueHolder03305, $this, 'initializeProxy', array(), $this->initializer32ab1) || 1) && $this->valueHolder03305 = $valueHolder03305;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder03305;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder03305;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}

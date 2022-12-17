<?php

namespace ContainerRGPxbl9;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'persistence'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Persistence'.\DIRECTORY_SEPARATOR.'ObjectManager.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder962ee = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerb2e3d = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties22036 = [
        
    ];

    public function getConnection()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'getConnection', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'getMetadataFactory', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'getExpressionBuilder', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'beginTransaction', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->beginTransaction();
    }

    public function getCache()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'getCache', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->getCache();
    }

    public function transactional($func)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'transactional', array('func' => $func), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'wrapInTransaction', array('func' => $func), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'commit', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->commit();
    }

    public function rollback()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'rollback', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'getClassMetadata', array('className' => $className), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'createQuery', array('dql' => $dql), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'createNamedQuery', array('name' => $name), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'createQueryBuilder', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'flush', array('entity' => $entity), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'clear', array('entityName' => $entityName), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->clear($entityName);
    }

    public function close()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'close', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->close();
    }

    public function persist($entity)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'persist', array('entity' => $entity), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'remove', array('entity' => $entity), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'refresh', array('entity' => $entity), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'detach', array('entity' => $entity), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'merge', array('entity' => $entity), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'getRepository', array('entityName' => $entityName), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'contains', array('entity' => $entity), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'getEventManager', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'getConfiguration', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'isOpen', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'getUnitOfWork', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'getProxyFactory', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'initializeObject', array('obj' => $obj), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'getFilters', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'isFiltersStateClean', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'hasFilters', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return $this->valueHolder962ee->hasFilters();
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

        $instance->initializerb2e3d = $initializer;

        return $instance;
    }

    public function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config)
    {
        static $reflection;

        if (! $this->valueHolder962ee) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder962ee = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder962ee->__construct($conn, $config);
    }

    public function & __get($name)
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, '__get', ['name' => $name], $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        if (isset(self::$publicProperties22036[$name])) {
            return $this->valueHolder962ee->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder962ee;

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

        $targetObject = $this->valueHolder962ee;
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
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder962ee;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder962ee;
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
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, '__isset', array('name' => $name), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder962ee;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder962ee;
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
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, '__unset', array('name' => $name), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder962ee;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder962ee;
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
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, '__clone', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        $this->valueHolder962ee = clone $this->valueHolder962ee;
    }

    public function __sleep()
    {
        $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, '__sleep', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;

        return array('valueHolder962ee');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerb2e3d = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerb2e3d;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerb2e3d && ($this->initializerb2e3d->__invoke($valueHolder962ee, $this, 'initializeProxy', array(), $this->initializerb2e3d) || 1) && $this->valueHolder962ee = $valueHolder962ee;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder962ee;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder962ee;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}

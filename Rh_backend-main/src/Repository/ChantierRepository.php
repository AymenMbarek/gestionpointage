<?php

namespace App\Repository;

use App\Entity\Chantier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Chantier>
 *
 * @method Chantier|null find($id, $lockMode = null, $lockVersion = null)
 * @method Chantier|null findOneBy(array $criteria, array $orderBy = null)
 * @method Chantier[]    findAll()
 * @method Chantier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ChantierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Chantier::class);
    }

    public function add(Chantier $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Chantier $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
    public function findCountChantierActif()
    {
        $em = $this->getEntityManager();
        $query = $em->createQuery(
            "SELECT COUNT(ch.id) as count
            FROM App\Entity\Chantier ch
            WHERE ch.actif = :statut "
        );
        return $query->setParameters(["statut" => true ])->getArrayResult();
        
    }
    public function findbyQualification($id)
    {
        return $this->getEntityManager()->createQueryBuilder()
            ->select('COUNT(pr) as nbr_personnes', 'q.designation')
            ->from('App\Entity\Personnel', 'pr')
            ->leftJoin('pr.chantier', 'ch')
            ->leftJoin('pr.personne', 'p')
            ->leftJoin('p.qualification', 'q')
            ->groupBy('p.qualification')
            ->andWhere('ch.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getArrayResult();
        
    }
    public function findbyPrestation($id)
    {
        return $this->getEntityManager()->createQueryBuilder()
            ->select(  'ls','a.name',' SUM(pr.realise) as sum')
            ->from('App\Entity\ListActivite', 'ls')
            ->leftJoin('ls.chantier', 'ch')
            ->leftJoin('ls.prestations', 'pr')
            ->leftJoin('ls.activite', 'a')
            ->groupBy('a.name')
            ->andWhere('ch.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getArrayResult();
        
    }
    public function findbyPrestationByHeures($id)
    {
        return $this->getEntityManager()->createQueryBuilder()
            ->select(  'ls','a.name',' SUM(p.nbHeure) as sum')
            ->from('App\Entity\ListActivite', 'ls')
            ->leftJoin('ls.chantier', 'ch')
            ->leftJoin('ls.personnels', 'pl')
            ->leftJoin('pl.personne', 'pr')
            ->leftJoin('pr.pointages', 'p')
            ->leftJoin('ls.activite', 'a')
            ->groupBy('a.name')
            ->andWhere('ch.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getArrayResult();
        
    }
//    /**
//     * @return Chantier[] Returns an array of Chantier objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Chantier
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}

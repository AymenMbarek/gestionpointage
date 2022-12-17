<?php
namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Pointage;
use App\Entity\Presence;
use App\Repository\PersonneRepository;
use App\Repository\ChantierRepository;
use App\Repository\PointageRepository;
use App\Repository\PresenceRepository;
use DateTime;
use Doctrine\ORM\PersistentCollection;
#[Route('/pointage')]
class PointageController extends AbstractController
{
    #[Route('/add', name: 'app_pointage', methods: ['Post'])]
    public function addpointage(PersonneRepository $personneRepository,ChantierRepository $chantierRepository, PointageRepository $pointageRepository ,Request $request)
    {
        $req = json_decode($request->getContent());
        $id_chantier = $req->chantier ?? NULL;
        $date = $req->date ?? NULL;
        $nbHeure = $req->nbHeure ?? NULL;
        $id_personne = $req->personne ?? NULL;
        $em = $this->getDoctrine()->getManager();
        $chantier = $chantierRepository->find((int) $id_chantier);
        $personne = $personneRepository->find((int) $id_personne);
         // CREATE DONOR.
         $pointage = new Pointage();
         $pointage->setDate(new DateTime());
         $pointage->setChantier($chantier);
         $em->persist($pointage);

         
         $presence = new Presence();
      
         $presence->setPointage($pointage);
         $presence->setNbHeure(1);
         $presence->setPersonne($personne);
         $em->persist($presence);


    }

   

}
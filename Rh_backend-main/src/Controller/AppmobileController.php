<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use App\Repository\ChantierRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/application/api')]
class AppmobileController extends AbstractController
{
    #[Route('/', name: 'app_appmobile')]
    public function index(UserRepository $userRepository,):Response
    {
        // usually you'll want to make sure the user is authenticated first
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
     
        // returns your User object, or null if the user is not authenticated
        // use inline documentation to tell your editor your exact User class
        /** @var \App\Entity\User $user */
        $user = $this->getUser();
        $user=$userRepository->findProfile($user->getId());

        // Call whatever methods you've added to your User class
        // For example, if you added a getFirstName() method, you can use that.
        return $this->json([
            "code" => 200,
            "user" => $user,
            
        ]);
    }

    #[Route('/chantier/{id}/personnebyqualification', name: 'app_appmobile-personnebyqualification')]
    public function personnebyqualification(ChantierRepository $chantierRepository,$id):Response
    {
      
        $chantier=$chantierRepository->findbyQualification($id);
       
   
        return $this->json([
            "code" => 200,
            "chantiers" => $chantier,
       
            
        ]);
    }
    #[Route('/chantier/{id}/prestation', name: 'app_appmobile-prestation')]
    public function prestation(ChantierRepository $chantierRepository,$id):Response
    {
      
        $activite=$chantierRepository->findbyPrestationByQuantite($id);
   
        return $this->json([
            "code" => 200,
          
            "activites" => $activite,
            
        ]);
    }
    #[Route('/chantier/{id}/heures', name: 'app_appmobile-prestationheure')]
    public function prestationheure(ChantierRepository $chantierRepository,$id):Response
    {
      
        $activite=$chantierRepository->findbyPrestationByHeures($id);
   
        return $this->json([
            "code" => 200,
          
            "activites" => $activite,
            
        ]);
    }
}

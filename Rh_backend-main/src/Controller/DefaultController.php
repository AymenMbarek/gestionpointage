<?php
namespace App\Controller;

use App\Entity\ObjetRemis;
use App\Repository\EntrepriseRepository;
use App\Repository\ContactRepository;
use App\Repository\PaysRepository;
use App\Repository\EvaluationRepository;
use App\Repository\QualificationRepository;
use App\Repository\ObjetRemisRepository;
use App\Repository\PersonneRepository;
use App\Repository\ChantierRepository;
use App\Repository\RemarqueRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

use Doctrine\ORM\PersistentCollection;
#[Route('/default')]
class DefaultController extends AbstractController
{
    #[Route('/chantier/{id}', name: 'app_get-chantier', methods: ['GET'])]
    public function getchantier($id, ChantierRepository $chantierRepository) :Response
{
    $chantier = $chantierRepository->findOneById($id);
    return $this->json($chantier);
}


    #[Route('/personne-securite', name: 'app_personne-securite', methods: ['GET'])]
    public function psecurites(PersonneRepository $personneRepository): Response
    {
        $psecurites = $personneRepository->findBy(array('formationSecurite' => 1),array('id' => 'ASC'),5 ,0);
        return $this->json($psecurites);

    }
    #[Route('/personne-autorise', name: 'app_personne-autorise', methods: ['GET'])]
    public function pautorisee(PersonneRepository $personneRepository): Response
    {
        $pautorises = $personneRepository->findBy(array('autoriseesEvaluation' => 1),array('id' => 'ASC'),5 ,0);
        return $this->json($pautorises);

    }
    #[Route('/interne-personne', name: 'app_personne_interne', methods: ['GET'])]
    public function listinterne(PersonneRepository $personneRepository): Response
    {
        $personnes = $personneRepository->findBy(array('type' => 'I'),array('id' => 'ASC'),5 ,0);
        return $this->json($personnes);

    }
    #[Route('/externe-personne', name: 'app_personne_externe', methods: ['GET'])]
    public function listexterne(PersonneRepository $personneRepository): Response
    {
        $xpersonnes = $personneRepository->findBy(array('type' => 'E'),array('id' => 'ASC'),5 ,0);
        return $this->json($xpersonnes);

    }
    #[Route('/externe-objet', name: 'app_objet_externe', methods: ['GET'])]
    public function listobexterne(ObjetRemisRepository $objetRemisRepository): Response
    {
        $inobjets = $objetRemisRepository->findBy(array('type' => 'E'),array('id' => 'ASC'),5 ,0);
        return $this->json($inobjets);

    }
    #[Route('/interne-objet', name: 'app_objet_interne', methods: ['GET'])]
    public function listobinterne(ObjetRemisRepository $objetRemisRepository): Response
    {
        $inobjets = $objetRemisRepository->findBy(array('type' => 'I'),array('id' => 'ASC'),5 ,0);
        return $this->json($inobjets);

    }
    #[Route('/externe-evaluation', name: 'app_evaluation_externe', methods: ['GET'])]
    public function listevaexterne(EvaluationRepository $evaluationRepository): Response
    {
        $inevaluations = $evaluationRepository->findBy(array('type' => 'E'),array('id' => 'ASC'),5 ,0);
        return $this->json($inevaluations);

    }
    #[Route('/interne-evaluation', name: 'app_evaluation_interne', methods: ['GET'])]
    public function listevainterne(EvaluationRepository $evaluationRepository): Response
    {
        $inevaluations = $evaluationRepository->findBy(array('type' => 'I'),array('id' => 'ASC'),5 ,0);
        return $this->json($inevaluations);

    }
    #[Route('/externe-remarque', name: 'app_remarque_externe', methods: ['GET'])]
    public function listremarqueexterne(RemarqueRepository $remarqueRepository): Response
    {
        $exremarques = $remarqueRepository->findBy(array('type' => 'I'),array('id' => 'ASC'),5 ,0);
        return $this->json($exremarques);

    }
    #[Route('/interne-remarque', name: 'app_remarque_interne', methods: ['GET'])]
    public function listremarqueinterne(RemarqueRepository $remarqueRepository): Response
    {
        $inremarques = $remarqueRepository->findBy(array('type' => 'E'),array('id' => 'ASC'),5 ,0);
        return $this->json($inremarques);

    }

    #[Route('/contacts/{id}', name: 'app_list-contacts', methods: ['GET'])]
    public function contact($id,EntrepriseRepository $entrepriseRepository, ContactRepository $contactRepository, Request $request) :Response
{
    $entreprise = $entrepriseRepository->find($id);

    $contacts = $contactRepository->findBy(array('entreprise' => $entreprise),array('id' => 'ASC'),5 ,0);
    return $this->json($contacts);
}

    #[Route('/edit-chantier/{id}', name: 'app_edit-chantier', methods: ['PUT'])]
    public function editchantier($id, ChantierRepository $chantierRepository, Request $request) :Response
{
    
   
    $req = json_decode($request->getContent());
    $code = $req->code ?? "";
    $denomination = $req->denomination ?? "";
    $numero = $req->numero ?? "";
    $groupe = $req->groupe ?? "";
    $adresse = $req->adresse ?? "";
    $codePostale = $req->codePostale ?? "";

    $em = $this->getDoctrine()->getManager();



    $chantier = $chantierRepository->find($id);

   
    if ($code) $chantier->setCode($code);
    if ($denomination) $chantier->setDenomination($denomination);
    if ($numero) $chantier->setNumero($numero);
    if ($groupe) $chantier->setGroupe($groupe);
    if ($adresse) $chantier->setAdresse($adresse);
    if ($codePostale) $chantier->setCodePostale($codePostale);
   // tell Doctrine you want to (eventually) save the Product (no queries yet)
   $em->persist($user);
   // actually executes the queries (i.e. the INSERT query)
   $em->flush();



    return $this->json([
            "code" => 200,

            "msg" => "chantier update Successfully",

 ]);

}


#[Route('/dashbored', name: 'app_dashbored', methods: ['GET'])]
public function dashboreds(QualificationRepository $qualificationRepository,PersonneRepository $personneRepository,PaysRepository $paysRepository,EntrepriseRepository $entrepriseRepository, ChantierRepository $chantierRepository): Response
{
    $personneinternes = $personneRepository->findCountPersonneInterne()[0]["count"];
    $personnexternes = $personneRepository->findCountPersonneExterne()[0]["count"];
    $chantier = $chantierRepository->findCountChantierActif()[0]["count"];
    $pays = $paysRepository->findAll();
    $entreprises= $entrepriseRepository->findPersonneByEntreprise();
    $pays= $paysRepository->findChantierByRegion();
    $qualifications= $qualificationRepository->findPersonneByQualification();
    $xpersonnes = $personneRepository->findBy(array('type' => 'E'),array('id' => 'ASC'),5 ,0);
    
//dd($entreprises);

$paysdata = [];
foreach ($pays as $item) {
    $paysdata[$item["id"]] = [
     "name" => $item["name"],
     "count" => count($item["chantiers"]),
            ];
        }

    $metadata = [];
    foreach ($qualifications as $item) {
        $metadata[$item["id"]] = [
         "name" => $item["designation"],
         "color" => $item["color"],
         "count" => count($item["personnes"]),
                ];
            }

    $data = [];
    foreach ($entreprises as $item) {
    $data[$item["id"] ]= [  
     "name" => $item["denomination"],
     "count" => count($item["contrats"]),
    ];
}
       


    return $this->json([ 
        "paydata"=>$paysdata,
        "data" => $data,
        "metadata" => $metadata,
        "personne_interne" => $personneinternes,
        "personne_externe" => $personnexternes,
        "chantier" => $chantier,
    
        ]
       );

}

}
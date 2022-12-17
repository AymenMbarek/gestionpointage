<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    #[Route(path: '/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    
    #[Route(path: '/create-user', name: 'create-user' , methods: ['POST'])]
    public function add(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $req = json_decode($request->getContent());

        $email = $req->email;
        $password = $req->password;
        $name = $req->name ?? "";
        $role = $req->role ?? "";

        if (!$email || !$password || !$role) {
            return $this->json([
                "code" => 400,
                "msg" => "Parametres are invalid",
            ]);
        }

        $em = $this->getDoctrine()->getManager();

        $user = new User();
        $user->setEmail($email);
        $user->setName($name);
        if ($role) {
            $user->setRoles([$role]);
        }
        $user->setCreatedAt(new DateTime());
        $user->setPassword($encoder->encodePassword($user, $password));

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $em->persist($user);
        // actually executes the queries (i.e. the INSERT query)
        $em->flush();

        return $this->json([
            "code" => 200,
            "msg" => "User Created Successfully",
            "email" => $user->getEmail(),
            "name" => $user->getName(),
            "role" => $user->getRoles()
        ]);
    }


}

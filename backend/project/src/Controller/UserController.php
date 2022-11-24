<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/user')]
class UserController extends AbstractController
{
    #[Route('/', name: 'app_user')]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/UserController.php',
        ]);
    }

    #[Route('/register', name: 'register_user', methods: ['GET','POST'])]
    public function newUser(): JsonResponse
    {
        return $this->json([
            'message' => 'Register!',
            'path' => 'src/Controller/UserController.php',
        ]);
    }

    #[Route('/login', name: 'login_user', methods: ['GET','POST'])]
    public function login(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to your Login Function !',
            'path' => 'src/Controller/UserController.php',
        ]);
    }
}

<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/message')]
class MessageController extends AbstractController
{
    #[Route('/', name: 'app_message')]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'Tous les Messages',
            'path' => 'src/Controller/MessageController.php',
        ]);
    }
}

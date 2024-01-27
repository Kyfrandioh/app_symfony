<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MaxCapacityController extends AbstractController
{
    #[Route('/max/capacity', name: 'app_max_capacity')]
    public function index(): Response
    {
        return $this->render('max_capacity/index.html.twig', [
            'controller_name' => 'MaxCapacityController',
        ]);
    }
}

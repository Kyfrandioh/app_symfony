<?php

namespace App\Controller;

use App\Entity\OpeningHour;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OpeningHourController extends AbstractController
{
    #[Route('/opening_hours', name: 'opening_hours')]
    public function index(EntityManagerInterface $entityManager): Response
    {
        // Récupérer toutes les heures d'ouverture depuis la base de données
        $openingHours = $entityManager->getRepository(OpeningHour::class)->findAll();

        // Vous pouvez maintenant utiliser la variable $openingHours dans votre code
        
        return $this->render('opening_hour/index.html.twig', [
            'openingHours' => $openingHours,
        ]);
    }
}

<?php

namespace App\Controller;

use App\Entity\OpeningHour;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FooterController extends AbstractController
{
    #[Route('/footer', name: 'app_footer')]
    public function index(EntityManagerInterface $entityManager): Response
    {

        $openingHours = $entityManager->getRepository(OpeningHour::class)->findAll();

        return $this->render('front/footer.html.twig', [
            'controller_name' => 'FooterController',
            'openingHours' => $openingHours
        ]);
    }
}
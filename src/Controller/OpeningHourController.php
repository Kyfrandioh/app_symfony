<?php

namespace App\Controller;

use App\Repository\OpeningHourRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OpeningHourController extends AbstractController
{

    public function index(EntityManagerInterface $entityManager): void
    {
        $entityManager->getRepository(OpeningHourRepository::class)->findAll();
    }

}

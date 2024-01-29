<?php

namespace App\Controller;

use App\Entity\Dish;
use App\Entity\DishCategory;
use App\Repository\DishCategoryRepository;
use App\Repository\DishRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DishController extends AbstractController
{
    #[Route('/dish', name: 'app_dish')]
    public function index(EntityManagerInterface $entityManager): Response
    {
        $dish = $entityManager->getRepository(Dish::class)->findAll();
        $dishCategory = $entityManager->getRepository(DishCategory::class)->findAll();
             
        return $this->render('dish/index.html.twig', [
            'controller_name' => 'DishController',
            'dishes' => $dish,
            'dishCategories' => $dishCategory
        ]);
    }

}

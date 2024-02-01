<?php

namespace App\Controller;

use App\Entity\Formula;
use App\Entity\Menu;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\FormulaRepository;
use App\Repository\MenuRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MenuController extends AbstractController
{
    #[Route('/menu', name: 'app_menu')]
    public function index(EntityManagerInterface $entityManager): Response
    {
        $menu = $entityManager->getRepository(Menu::class)->findAll();
        $formula = $entityManager->getRepository(Formula::class)->findAll();

        return $this->render('menu/index.html.twig', [
            'controller_name' => 'MenuController',
            'menus' => $menu,
            'formulas' => $formula
        ]);
    }
}
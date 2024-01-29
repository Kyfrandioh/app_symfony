<?php

namespace App\Controller;

use App\Entity\MaxCapacity;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MaxCapacityController extends AbstractController
{
    public static function getEntityFqcn(): string
    {
        return MaxCapacity::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud->setPageTitle('index', 'Capacité du restaurant');
    }
    public function configureFields(string $pageName): iterable
    {
        return [
            IntegerField::new('total', 'Capacité maximum du restaurant')
        ];
    }

}

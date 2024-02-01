<?php

namespace App\Controller\Admin;

use App\Entity\Picture;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class PictureCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Picture::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud->setPageTitle('index', 'Galerie d\'images');
    }
    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('title', 'Titre (qui s\'affichera au survol de l\'image)'),
            ImageField::new('image')
                ->setBasePath('images/')
                ->setUploadDir('public/images')
                ->setSortable(false)
                ->setUploadedFileNamePattern('[randomhash].[extension]'),
        ];
    }

}

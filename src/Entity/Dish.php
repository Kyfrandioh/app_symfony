<?php

namespace App\Entity;

use App\Repository\DishRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DishRepository::class)]
class Dish
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2)]
    private ?string $price = null;

    #[ORM\ManyToOne(inversedBy: 'dishes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?DishCategory $dishCategory = null;

    #[ORM\OneToMany(mappedBy: 'dish', targetEntity: DishCategory::class, orphanRemoval: true)]
    private Collection $dish;

    public function __construct()
    {
        $this->dish = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getDishCategory(): ?DishCategory
    {
        return $this->dishCategory;
    }

    public function setDishCategory(?DishCategory $dishCategory): static
    {
        $this->dishCategory = $dishCategory;

        return $this;
    }

    /**
     * @return Collection<int, DishCategory>
     */
    public function getDish(): Collection
    {
        return $this->dish;
    }

    public function addDish(DishCategory $dish): static
    {
        if (!$this->dish->contains($dish)) {
            $this->dish->add($dish);
            $dish->setDish($this);
        }

        return $this;
    }

    public function removeDish(DishCategory $dish): static
    {
        if ($this->dish->removeElement($dish)) {
            // set the owning side to null (unless already changed)
            if ($dish->getDish() === $this) {
                $dish->setDish(null);
            }
        }

        return $this;
    }

  
}

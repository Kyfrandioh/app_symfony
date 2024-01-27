<?php

namespace App\Entity;

use App\Repository\OpeningHourRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OpeningHourRepository::class)]
class OpeningHour
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $day = null;

    #[ORM\Column]
    private ?int $noonOpeningHour = null;

    #[ORM\Column]
    private ?int $noonClosingHour = null;

    #[ORM\Column]
    private ?int $eveningOpeningHour = null;

    #[ORM\Column]
    private ?int $eveningClosingHour = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDay(): ?string
    {
        return $this->day;
    }

    public function setDay(string $day): static
    {
        $this->day = $day;

        return $this;
    }

    public function getNoonOpeningHour(): ?int
    {
        return $this->noonOpeningHour;
    }

    public function setNoonOpeningHour(int $noonOpeningHour): static
    {
        $this->noonOpeningHour = $noonOpeningHour;

        return $this;
    }

    public function getNoonClosingHour(): ?int
    {
        return $this->noonClosingHour;
    }

    public function setNoonClosingHour(int $noonClosingHour): static
    {
        $this->noonClosingHour = $noonClosingHour;

        return $this;
    }

    public function getEveningOpeningHour(): ?int
    {
        return $this->eveningOpeningHour;
    }

    public function setEveningOpeningHour(int $eveningOpeningHour): static
    {
        $this->eveningOpeningHour = $eveningOpeningHour;

        return $this;
    }

    public function getEveningClosingHour(): ?int
    {
        return $this->eveningClosingHour;
    }

    public function setEveningClosingHour(int $eveningClosingHour): static
    {
        $this->eveningClosingHour = $eveningClosingHour;

        return $this;
    }
}

Projet-QuaiAntique

Site de restaurant Le Quai Antique, réalisé avec Symfony.

La plateforme d'administration a été créée à l'aide de EasyAdmin. Elle permet de mettre à jour toutes les informations du site:
caroussel d'images sur la page d'accueil, horaires d'ouvertures, menus, formules, mais aussi de gérer les réservations. La gestion des rôles avec Symfony permet de la réserver à l'administrateur.
Vous pouvez y accedé avec le /admin.


Le client régulier peut créer un compte, et ainsi renseigner plusieurs informations (nom, prénom, nombre de convives par défaut), 
qui permettront de lui pré-remplir le formulaire de réservation après connexion avec ses identifiants.

Selon les heures d'ouvertures renseignées, le formulaire de réservation sera modifié dynamiquement pour indiquer au client si le restaurant est fermé ou non,
et le choix des horaires sera mis à jour en fonction.

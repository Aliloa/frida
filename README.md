# frida
Procédures de restauration

Site de réservation, API et VR:
1. Configurer le nom de domaine sur l'hébergeur
2. Créer une base de données et importer le fichier MySQL expo_frida.sql qui se trouve dans le dossier api 
3. Importer le dossier du site contenant le site de réservation, l'API et la VR dans public_html
4. Modifier les connexions vers la bse de données
5. Génerer un certificat SSL pour sécuriser le site
6. Vérifier 

On peut aussi héberger le site de réservation, l'API et la VR séparement avec la même procédure

Back-office:
Deployment avec vercel

1. Ouvrir le terminal
2. Se déplacer dans la back avec cd back
3. Installer vercel si ce n'est pas déjà fait: npm install -g vercel
4. Se connecter avec la commande: vercel login
5. Compiler le dossier: npm run build
6. Le dépoloyer avec la commande: vercel (si le site est déjà en ligne faire pour le mettre à jour: vercel --prod)

Word-press:

Comment importer notre site Wordpress chez un nouvel herbergeur :  
1. Connectez-vous chez votre nouvel hébergeur puis aller dans le gestionnaire de fichiers de votre hébergeur. Téléversez le fichier zip contenant les fichiers WordPress dans le répertoire racine de votre nouveau serveur.  
2. Extrayez-le dans le répertoire souhaité. Cela devrait créer un répertoire contenant tous les fichiers WordPress.  
3. Importez la base de données que vous avez exportée de votre ancien hébergeur vers la nouvelle base de données que vous venez de créer. Via PhpMyadmin  
4. Une fois l'installation terminée, vérifiez que votre site WordPress fonctionne correctement sur le nouveau serveur. 

Choix des thèmes et les extensions utilisées en les justifiant:

J'ai choisi d'utiliser l'extension Elementorcar elle offre une interface conviviale et intuitive, permettant une personnalisation avancée sans nécessité de connaissances en programmation.J'ai pu rapidement concevoir des pages esthétiquement.
C'est une extension vraiment simple d'utilisation. J'ai pu également éconimiser beaucoup de temps en utilisant la fonctionnalité de "Theme Builder" proposée par Elementor, j'ai pu concevoir des modèles personnalisés pour mon header et mon footer, en les adaptant parfaitement au design de mon site. Une fois ces modèles créés, j'ai pu les appliquer à toutes les pages de mon site en quelques clics seulement, assurant ainsi une cohérence visuelle sur l'ensemble du site.
J'ai intégrer également  l'extension Advanced Custom Fields (ACF) avec Elementor dans la création de mon site WordPress pour une gestion avancée des contenus. Grâce à cette combinaison, j'ai pu créer des groupes de champs personnalisés pour chaque membre de mon équipe, offrant ainsi une présentation détaillée et engageante.

En utilisant ACF, j'ai configuré des champs spécifiques tels que les tâches attribuées à chaque membre, leur site web et leur profil LinkedIn. Ces champs ont été facilement intégrés dans une boucle de carousel avec Elementor. M'evitant de perdre du temps et re faire un modele pour chaque membres de l'equipes et récrire leurs informations.

L'extension Polylang sur mon site WordPress afin de permettre une gestion simple et efficace du multilinguisme. En choisissant Polylang, j'ai pu offrir à mes visiteurs la possibilité de basculer facilement entre la langue anglai et français.

Avec Polylang, j'ai pu créer des versions alternatives de mes pages en anglais, tout en maintenant une synchronisation aisée avec leur contenu équivalent dans la langue principale.
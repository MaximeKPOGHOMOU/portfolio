import { Component, AfterViewInit, Inject, PLATFORM_ID, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Contact } from '../contact/contact';

declare var PureCounter: any;
declare var AOS: any;
declare var Typed: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [CommonModule],
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {


  projets = [
    {
      titre: 'Application mobile e-learning',
      image: 'assets/img/portfolio/ui_1.jpeg',
      categorie: 'filter-ui',
      description: 'Design intuitif et ergonomique pour des cours en ligne.',
      meta: 'UI/UX Design',
      lightboxGallery: 'portfolio-gallery-ui',
      lienDetails: '#'
    },
    {
      titre: 'Plateforme de centralisation de dossier scolaire',
      image: 'assets/img/portfolio/mamou.png',
      categorie: 'filter-development',
      description: 'Système complet pour la gestion scolaire.',
      meta: 'Développement',
      lightboxGallery: 'portfolio-gallery-development',
      lienDetails: 'https://mamouedu.galyimmo.com/'
    },
    {
      titre: 'Plateforme de gestion académique UDECOM',
      image: 'assets/img/portfolio/udecom.png',
      categorie: 'filter-development',
      description: 'Système complet pour la gestion des étudiants, des professeurs et des programmes académiques.',
      meta: 'Développement',
      lightboxGallery: 'portfolio-gallery-development',
      lienDetails: 'https://udecom.gn/'
    },
    {
      titre: 'Mini site personnel pour portfolio',
      image: 'assets/img/portfolio/self.png',
      categorie: 'filter-development',
      description: 'Site vitrine développé pour présenter mes projets, compétences et expériences professionnelles de manière interactive et responsive.',
      meta: 'Développement Web',
      lightboxGallery: 'portfolio-gallery-development',
      lienDetails: '#'
    },

    {
      titre: 'Application mobile de gestion locative',
      image: 'assets/img/portfolio/flutter.png',
      categorie: 'filter-development',
      description: 'Application mobile développée avec Flutter pour la gestion des logements : enregistrement des biens, gestion des locataires, paiements, et notifications.',
      meta: 'Développement Mobile',
      lightboxGallery: 'portfolio-gallery-development',
      lienDetails: '#'
    },
    {
      titre: 'Application mobile de gestion des codes USSD',
      image: 'assets/img/portfolio/code.png',
      categorie: 'filter-development',
      description: 'Application mobile développée avec Flutter pour faciliter la gestion des codes USSD en Guinée.',
      meta: 'Développement Mobile',
      lightboxGallery: 'portfolio-gallery-development',
      lienDetails: 'https://github.com/MaximeKPOGHOMOU/Code-ussd'
    },
    {
      titre: 'Application mobile pour lister les pays du monde',
      image: 'assets/img/portfolio/capital.png',
      categorie: 'filter-development',
      description: 'Application mobile développée avec Flutter pour affichez les pays du monde en utilisant les api.',
      meta: 'Développement Mobile',
      lightboxGallery: 'portfolio-gallery-development',
      lienDetails: 'https://github.com/MaximeKPOGHOMOU/api-rest-pays-du-monde'
    },


    {
      titre: 'Campagne réseaux sociaux',
      image: 'assets/img/portfolio/marketing_1.jpeg',
      categorie: 'filter-marketing',
      description: 'Stratégie de communication digitale.',
      meta: 'Marketing',
      lightboxGallery: 'portfolio-gallery-marketing',
      lienDetails: '#'
    },
    {
      titre: 'Affiche publicitaire',
      image: 'assets/img/portfolio/affiche.jpg',
      categorie: 'filter-infographie',
      description: 'Conception visuelle professionnelle.',
      meta: 'Infographie',
      lightboxGallery: 'portfolio-gallery-infographie',
      lienDetails: '#'
    }
  ];

  services = [
    {
      icon: 'bi bi-code-slash',
      title: 'Développement Web & Mobile',
      description: 'Création d’applications modernes, responsives et performantes avec Angular, Node.js, et technologies associées.',
      delay: 100
    },
    {
      icon: 'bi bi-camera-video',
      title: 'Installation de systèmes de vidéosurveillance',
      description: 'Configuration et maintenance de caméras IP et analogiques pour assurer la sécurité et la surveillance de vos locaux.',
      delay: 200
    },
    {
      icon: 'bi bi-shield-lock',
      title: 'Sécurité informatique',
      description: 'Mise en place de bonnes pratiques et solutions pour protéger vos données et garantir la confidentialité.',
      delay: 300,
      expanded: false
    },
    {
      icon: 'bi bi-cloud-upload',
      title: 'Hébergement et Cloud',
      description: 'Assistance dans le déploiement, la gestion et la sécurisation de vos applications sur le cloud (Firebase, OVH, etc.).',
      delay: 400,
      expanded: false
    },
    {
      icon: 'bi bi-phone',
      title: 'Support et Maintenance',
      description: 'Intervention rapide et efficace pour assurer le bon fonctionnement de vos systèmes informatiques et applications.',
      delay: 500,
      expanded: false
    },
    {
      icon: 'bi bi-music-note-beamed',
      title: 'Passion & Inspiration',
      description: 'Un développeur inspiré par la musique, garantissant créativité et rigueur dans chaque projet.',
      delay: 600,
      expanded: false
    }
  ];

  experiences = [
   {
  poste: 'Responsable Informatique',
  entreprise: 'SPI-GN (Sécurité Incendie Prévention Guinée)',
  date: 'Oct 2025 - Présent',
  description: 'Participation au développement et à la mise en œuvre de solutions technologiques pour la sécurité, la surveillance et la logistique, incluant l’intégration de systèmes GPS et de plateformes de supervision.',
  achievements: [
    'Installation et configuration de caméras de surveillance et de systèmes de contrôle d’accès',
    'Utilisation de la plateforme Wialon pour la supervision en temps réel des engins via GPS',
    'Mise en place et gestion de solutions de suivi de flotte pour optimiser la logistique',
    'Participation au développement d’outils internes pour la maintenance et le reporting technique'
  ],
  delay: 300,
   expanded: false
}

,
    {
      poste: 'Stagiaire Développeur Fullstack',
      entreprise: 'Magoe Technologie',
      date: 'Juin - Sept',
      description: 'Participation au développement d\'applications web, avec intégration d\'interfaces utilisateur et gestion de bases de données, dans un environnement agile et collaboratif.',
      achievements: [
        'Développement de fonctionnalités front-end en Angular',
        'Intégration d\'API REST et gestion des requêtes côté back-end',
        'Collaboration avec des équipes techniques sur des projets clients réels'
      ],
      delay: 300,
       expanded: false
    },
    {
      poste: 'Stagiaire – Installation de systèmes de vidéosurveillance',
      entreprise: 'THT (Touaro Haba Technologie)',
      date: 'Juin - Oct 2023',
      description: 'Participation active à l\'installation, la configuration et la maintenance de systèmes de vidéosurveillance chez des clients professionnels et particuliers.',
      achievements: [
        'Installation de caméras IP et analogiques',
        'Câblage, configuration DVR/NVR, et test de bon fonctionnement',
        'Intervention sur site avec rigueur et sens du service client'
      ],
      delay: 400,
       expanded: false
    },
    {
      poste: 'Agent Promoteur',
      entreprise: 'MTN Guinée',
      date: '2021 - 2025',
      description: 'Responsable de la promotion des produits et services MTN auprès des clients, en assurant la visibilité de la marque et en renforçant la relation client sur le terrain.',
      delay: 500,
       expanded: false
    }
  ];

  educations = [
    {
      titre: 'Licence en Génie Informatique',
      annee: '2021 - 2025',
      etablissement: 'Institut Supérieur de Technologie de Mamou (IST-Mamou)',
      description: 'Formation axée sur le développement logiciel, les systèmes informatiques, les réseaux et les technologies embarquées, avec une forte dimension pratique à travers des projets et stages.',
      delay: 300
    },
    {
      titre: 'Formation en Développement Mobile Android & iOS',
      annee: 'Juillet 2024',
      etablissement: 'Orange Digital Center',
      description: 'Programme axé sur le développement d\'applications mobiles Android et iOS, utilisant des technologies comme Flutter et Kotlin, avec une approche projet pratique.',
      delay: 600
    }
    ,
    {
      titre: 'Formation à l\'École Normale d\'Instituteur',
      annee: '2019 - 2021',
      etablissement: 'ENI de Nzérékoré',
      description: 'Programme de formation initiale pour devenir instituteur, avec un accent sur la pédagogie, la didactique et les sciences de l’éducation.',
      delay: 500
    },
    {
      titre: 'Baccalauréat – Sciences Mathématiques',
      annee: '2021',
      etablissement: 'Lycée Alpha Yaya DIALLO',
      description: 'Études secondaires axées sur les mathématiques, la physique et l’informatique, fournissant une base solide pour poursuivre des études en génie informatique.',
      delay: 400
    },
  ];

  skills = [
    {
      icon: 'bi bi-palette',
      title: 'Conception UI/UX',
      description: 'Création d’interfaces intuitives et esthétiques, centrées sur l’utilisateur.',
      delay: 400
    },
    {
      icon: 'bi bi-code-slash',
      title: 'Développement web et mobile',
      description: 'Conception et réalisation d’applications web et mobiles, du backend au frontend, avec des technologies modernes et performantes.',
      delay: 450
    },
    {
      icon: 'bi bi-camera-video',
      title: 'Installation de caméras de surveillance',
      description: 'Installation, câblage et configuration de systèmes de vidéosurveillance.',
      delay: 500
    }
  ];

  frontendSkills = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 88 },
    { name: 'Angular', percentage: 82 },
  ];
  backendSkills = [
    { name: 'PHP', percentage: 78 },
    { name: 'Laravel', percentage: 75 },
    { name: 'Python', percentage: 72 }
  ];
  designSkills = [
    { name: 'Figma', percentage: 85 },
    { name: 'Photoshop', percentage: 70 },
    { name: 'Illustrator', percentage: 68 }
  ];
  cloudSkills = [
    { name: 'AWS', percentage: 76 },
    { name: 'Docker', percentage: 73 },
    { name: 'Git', percentage: 90 }
  ];
  mobileSkills = [
    { name: 'Flutter', percentage: 90 },
    { name: 'React Native', percentage: 70 },
    { name: 'Android (Java/Kotlin)', percentage: 65 },
  ];


  @ViewChildren('progressBar') progressBars!: QueryList<ElementRef<HTMLDivElement>>;



  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  toggleDescription(index: number, event: Event): void {
    event.preventDefault();
    this.services[index].expanded = !this.services[index].expanded;
  }
  toggleExperience(index: number, event: Event): void {
  event.preventDefault(); // Empêche le rechargement de la page
  this.experiences[index].expanded = !this.experiences[index].expanded;
}



  async ngAfterViewInit(): Promise<void> {

    if (isPlatformBrowser(this.platformId)) {
      new Typed('.typed', {
        strings: ['Designer', 'Developer', 'Freelancer', 'Artist'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
      });

      AOS.init({
        duration: 1000,
        once: true
      });

      new PureCounter();

      //  Déplacer le code de IntersectionObserver ici
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target as HTMLDivElement;
            const value = bar.getAttribute('data-value') || '0';
            bar.style.transition = 'width 1s ease-in-out';
            bar.style.width = value + '%';
            observer.unobserve(bar);
          }
        });
      }, {
        threshold: 0.3
      });

      this.progressBars.forEach(bar => {
        observer.observe(bar.nativeElement);
      });
    }
  }

}





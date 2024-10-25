import { Component, HostListener, OnInit } from '@angular/core';

interface Proyecto {
  nombre: string;
  url: string;
  imagen: string;
  tecnologias: string[];
  descripcion: string;
  categoria: string;
  color: string;
  ColorTextTitle: string;
  ColorTextParagraph: string;

 
}

@Component({
  selector: 'app-web-presentation',
  templateUrl: './web-presentation.component.html',
  styleUrls: ['./web-presentation.component.scss'],
})
export class WebPresentationComponent implements OnInit {
  isMenuOpen = false;
  isNavbarFixed = false;
  isDarkMode = false;



  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark-theme' : 'light-theme';
    document.body.classList.add(theme);
    document.body.classList.remove(
      this.isDarkMode ? 'light-theme' : 'dark-theme'
    );
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  proyectos: Proyecto[] = [
    {
      nombre: 'EverlastFacilities',
      url: 'https://everlastfacilities.com/',
      imagen: './assets/WebCompleted/EverlastFacilities.png',
      tecnologias: [
        'Bricks',
        'Wordpress',
        'PHP',
        'JavaScript',
        'HTML',
        'CSS',
        'ACF',
      ],
      descripcion:
        'I developed this website in wordpress using the brick builder editor, integrating javascript for script handling and advanced custom field for the dynamic fields. The project structure was organized with components and services.',
      categoria: 'WebCompleted',
      color: '#7FA1C1',
      ColorTextTitle: '#7FA1C1',
      ColorTextParagraph: '#7FA1C1',
    },
    {
      nombre: 'Anchor Aquarium',
      url: 'https://anchoraquarium.com/',
      imagen: './assets/supportweb/AnchorAquarium.png',
      tecnologias: [
        'Bricks',
        'Wordpress',
        'PHP',
        'JavaScript',
        'HTML',
        'CSS',
        'ACF',
      ],
      descripcion:
        'Anchor Aquarium is a website dedicated to the world of aquariums and aquatics. Here you will find information on how to care for and maintain aquariums, tips for choosing fish and aquatic plants, as well as reviews of aquarium equipment and accessories.',
      categoria: 'WebSupports',
      color: '#179FD2',
      ColorTextTitle: '#179FD2',
      ColorTextParagraph: '#179FD2'
    },
    {
      nombre: 'Being Financial',
      url: 'https://being-financial.com/',
      imagen: './assets/supportweb/BeingFinancial.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS', 'ACF'],
      descripcion:
        'Being Financial is a resource dedicated to the world of finance and financial planning. Its goal is to help you achieve financial freedom, no matter what stage of life youre in: whether youre just starting out, taking care of your family, or planning for retirement.',
      categoria: 'WebSupports',
      color: '#95C346',
      ColorTextTitle: '#95C346',
      ColorTextParagraph: '#95C346'
    },
    {
      nombre: 'Carecentrix',
      url: 'https://www.carecentrix.com/',
      imagen: './assets/supportweb/Carecentrix.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS', 'ACF'],
      descripcion:
        'CareCentrix is a company dedicated to simplifying the delivery of value-based care in the home. Their focus is on patient wellness, and they accomplish this by identifying and coordinating appropriate care in the home.',
      categoria: 'WebSupports',
      color: '#6E256F',
      ColorTextTitle: '#6E256F',
      ColorTextParagraph: '#6E256F'
    },
    {
      nombre: 'CMTAssociation',
      url: 'https://cmtassociation.org/',
      imagen: './assets/supportweb/CMTA.png',
      tecnologias: [
        'Bricks',
        'Wordpress',
        'PHP',
        'JavaScript',
        'HTML',
        'CSS',
        'ACF',
      ],
      descripcion:
        'CareCentrix is a company dedicated to simplifying the delivery of value-based care in the home. Their focus is on patient wellness, and they accomplish this by identifying and coordinating appropriate care in the home.',
      categoria: 'WebSupports',
      color: '#A8C3BA',
      ColorTextTitle: '#A8C3BA',
      ColorTextParagraph: '#A8C3BA'
    },
    {
      nombre: 'Conspiracy Realist',
      url: 'https://conspiracyrealist.com/',
      imagen: './assets/supportweb/ConspiracyRealist.png',
      tecnologias: [
        'Bricks',
        'Wordpress',
        'PHP',
        'JavaScript',
        'HTML',
        'CSS',
        'ACF',
      ],
      descripcion:
        'Conspiracy Realist is a website that explores the line between conspiracy theories and reality. Here you will find a variety of topics related to myths, hidden truths and the search for truth.',
      categoria: 'WebSupports',
      color: '#E0D1B8',
      ColorTextTitle: '#E0D1B8',
      ColorTextParagraph: '#E0D1B8'
    },
    {
      nombre: 'Equine Photographers',
      url: 'https://www.equinephotographers.org/',
      imagen: './assets/supportweb/EquinePhotographers.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS', 'ACF'],
      descripcion:
        'Equine Photographers Network (EPNet) is a dynamic community of professional photographers specializing in equine photography. They share a passion for both horses and photography.',
      categoria: 'WebSupports',
      color: '#D4A001',
      ColorTextTitle: '#D4A001',
      ColorTextParagraph: '#D4A001'
    },
    {
      nombre: 'GJchavezLaw',
      url: 'https://gjchavezlaw.com/',
      imagen: './assets/supportweb/GJchavezLaw.png',
      tecnologias: [
        'Bricks',
        'Wordpress',
        'PHP',
        'JavaScript',
        'HTML',
        'CSS',
        'ACF',
      ],
      descripcion:
        'G.J. Chavez & Associates, P.C. is a Plano, Texas-based law firm offering experienced legal representation in a variety of areas.',
      categoria: 'WebSupports',
      color: '#D8A666',
      ColorTextTitle: '#D8A666',
      ColorTextParagraph: '#D8A666'
    },
    {
      nombre: 'GonogoCharts',
      url: 'https://www.gonogocharts.com/',
      imagen: './assets/supportweb/GonogoCharts.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS', 'ACF'],
      descripcion:
        'This platform has developed meticulously designed indicators to help investors make more informed decisions about whether the market environment is conducive to launching an idea, strategy or investment.',
      categoria: 'WebSupports',
      color: '#1A4F7A',
      ColorTextTitle: '#1A4F7A',
      ColorTextParagraph: '#1A4F7A'
    },
    {
      nombre: 'IES',
      url: 'https://www.ies.org/',
      imagen: './assets/supportweb/IES.png',
      tecnologias: [
        'Bricks',
        'Wordpress',
        'PHP',
        'JavaScript',
        'HTML',
        'CSS',
        'ACF',
      ],
      descripcion:
        'The Illuminating Engineering Society is an industry-supported, not-for-profit society founded in New York City on January 10, 1961.',
      categoria: 'WebSupports',
      color: '#F7F7F7',
      ColorTextTitle: '#F7F7F7',
      ColorTextParagraph: '#F7F7F7'
    },
    {
      nombre: 'KickDanceStudios',
      url: 'https://www.kickdancestudios.com/',
      imagen: './assets/supportweb/KickDanceStudios.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS', 'ACF'],
      descripcion:
        'Kick Dance Studios is a magical place where dance, theater and acrobatics come together to inspire and motivate students. From your childs first dance class to their graduation performance.',
      categoria: 'WebSupports',
      color: '#D7940D',
      ColorTextTitle: '#D7940D',
      ColorTextParagraph: '#D7940D'
    },
    {
      nombre: 'Lakehurst School',
      url: 'https://lakehurstschool.org/',
      imagen: './assets/supportweb/LakehurstSchoolDistrict.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS', 'ACF'],
      descripcion:
        'The Lakehurst School District is a public community serving students in preschool through eighth grade in Lakehurst, Ocean County, New Jersey. Its main school is Lakehurst Elementary School, which opened in September 1943.',
      categoria: 'WebSupports',
      color: '#3C3FB5',
      ColorTextTitle: '#3C3FB5',
      ColorTextParagraph: '#3C3FB5'
    },
    {
      nombre: 'Lets Talk Well Women',
      url: 'https://letstalkwellwomen.org/',
      imagen: './assets/supportweb/LetsTalkWomen.png',
      tecnologias: [
        'Bricks',
        'Wordpress',
        'PHP',
        'JavaScript',
        'HTML',
        'CSS',
        'ACF',
      ],
      descripcion:
        '“Lets Talk: Womens Health & Wellness” is an all-day gathering focused on our wellness and healthy living.',
      categoria: 'WebSupports',
      color: '#DF3697',
      ColorTextTitle: '#DF3697',
      ColorTextParagraph: '#DF3697'
    },
    {
      nombre: 'LightSearch',
      url: 'https://www.lightsearch.io/',
      imagen: './assets/supportweb/LightSearch.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS', 'ACF'],
      descripcion:
        'Light Search is a comprehensive tool for lighting professionals. It provides accurate information and fast search results on products to be specified in lighting projects.',
      categoria: 'WebSupports',
      color: '#2A4A7C',
      ColorTextTitle: '#2A4A7C',
      ColorTextParagraph: '#2A4A7C'
    },
    {
      nombre: 'Lydia Hiby',
      url: 'https://lydiahiby.com/',
      imagen: './assets/supportweb/LydiaHiby.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'Lydia Hiby is a sought-after animal communicator. Her childhood dream of becoming a sort of fairy godmother for animals seems to have come true. Her clients come from every state in the U.S. and numerous European countries.',
      categoria: 'WebSupports',
      color: '#A78D78',
      ColorTextTitle: '#A78D78',
      ColorTextParagraph: '#A78D78'
    },
    {
      nombre: 'MediaFirstGroup',
      url: 'https://www.mediafirstgroup.com/',
      imagen: './assets/supportweb/MediaFirstGroup.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'Media First Group is an award-winning media company specializing in television production for the state of New Jersey, both broadcast, cable and streaming. Its team has decades of experience in all aspects of production.',
      categoria: 'WebSupports',
      color: '#918C83',
      ColorTextTitle: '#918C83',
      ColorTextParagraph: '#918C83'
    },
    {
      nombre: 'MonarchHousing',
      url: 'https://monarchhousing.org/',
      imagen: './assets/supportweb/MonarchHousing.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'Monarch Housing Associates is dedicated to creating affordable and supportive housing. They work to develop housing where residents can thrive. They also support communities in their fight against homelessness.',
      categoria: 'WebSupports',
      color: '#8A9CAF',
      ColorTextTitle: '#8A9CAF',
      ColorTextParagraph: '#8A9CAF'
    },
    {
      nombre: 'National Council',
      url: 'https://www.ncqlp.org/',
      imagen: './assets/supportweb/NationalCouncil.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'NCQLPs Lighting Certification (LC) program establishes a benchmark standard that covers the entire field of lighting. Through its testing mechanism, candidates can earn the Lighting Certification designation.',
      categoria: 'WebSupports',
      color: '#FFFFFF',
      ColorTextTitle: '#FFFFFF',
      ColorTextParagraph: '#FFFFFF'
    },
    {
      nombre: 'National Lighting Bureau',
      url: 'https://www.nlb.org/',
      imagen: './assets/supportweb/NationalLightingBureau.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'The National Lighting Bureau (NLB) is a non-profit organization dedicated to promoting excellence in lighting design and use. It focuses on high-benefit lighting that enhances human performance, safety and health.',
      categoria: 'WebSupports',
      color: '#FFFFFF',
      ColorTextTitle: '#FFFFFF',
      ColorTextParagraph: '#FFFFFF'
    },
    {
      nombre: 'Northern Ocean Habit',
      url: 'https://northernoceanhabitat.org/',
      imagen: './assets/supportweb/NorthernOceanHabit.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'Northern Ocean Habitat for Humanity is a non-profit organization that provides affordable housing solutions in Ocean County, New Jersey. They assist with home construction, home repairs and organize community events such as “Women Build” and “Walk to Build”.',
      categoria: 'WebSupports',
      color: '#C4D600',
      ColorTextTitle: '#C4D600',
      ColorTextParagraph: '#C4D600'
    },
    {
      nombre: 'Ocean Beach & Yacht Club',
      url: 'https://obyc.net/',
      imagen: './assets/supportweb/OceanBeach&YachtClub.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'Ocean Beach & Yacht Club is a small, private, family-friendly beach community located between Point Pleasant and Seaside Park, New Jersey. Founded in 1948, it has been a beacon of joy for its members, friends and guests for over seventy years.',
      categoria: 'WebSupports',
      color: '#8AA4BC',
      ColorTextTitle: '#8AA4BC',
      ColorTextParagraph: '#8AA4BC'
    },
    {
      nombre: 'ONNJ',
      url: 'https://www.onnj.com/',
      imagen: './assets/supportweb/ONNJ.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'On New Jersey is a New Jersey-based broadcast channel providing news, talk and entertainment for the entire state. With an audience of over 9 million people, ONNJ keeps you informed, entertained and connected to all things Jersey.',
      categoria: 'WebSupports',
      color: '#1237A1',
      ColorTextTitle: '#1237A1',
      ColorTextParagraph: '#1237A1'
    },
    {
      nombre: 'Parking Lot Services',
      url: 'https://parkinglotservices.net/',
      imagen: './assets/supportweb/ParkingLotServices.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'Parking Lot Services is a New Jersey company that offers commercial parking lot paving and repair services. They specialize in asphalt maintenance, crack sealing, pothole patching, sidewalk and curb repair, and line striping.',
      categoria: 'WebSupports',
      color: '#9A9892',
      ColorTextTitle: '#9A9892',
      ColorTextParagraph: '#9A9892'
    },
    {
      nombre: 'Seacrest Beach Club',
      url: 'https://www.seacrestbeachclub.org/',
      imagen: './assets/supportweb/SeacrestBeachClub.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'Seacrest Beach Club is a private beach community in Toms River Township, New Jersey, established in 1954. It offers its members and guests a place to relax with access to private beaches, surfing and community events throughout the year.',
      categoria: 'WebSupports',
      color: '#6EA9DD',
      ColorTextTitle: '#6EA9DD',
      ColorTextParagraph: '#6EA9DD'
    },
    {
      nombre: 'SeaLevelAquarium',
      url: 'https://www.sealevelaquarium.com/',
      imagen: './assets/supportweb/SeaLevelAquarium.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'Sea Level Aquarium is a specialty store for saltwater fish, live corals and exotic species located in northern New Jersey. They offer a wide selection of coral colonies, frags and invertebrate fish for aquariums.',
      categoria: 'WebSupports',
      color: '#0059A1',
      ColorTextTitle: '#0059A1',
      ColorTextParagraph: '#0059A1'
    },
    {
      nombre: 'S-FX',
      url: 'https://s-fx.com/',
      imagen: './assets/supportweb/S-FX.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'S-FX.com is a company that offers solutions for small businesses. They specialize in web design, application development, digital marketing and technology services. Their goal is to help businesses establish an effective and engaging online presence.',
      categoria: 'WebSupports',
      color: '#7A8DAE',
      ColorTextTitle: '#7A8DAE',
      ColorTextParagraph: '#7A8DAE'
    },
    {
      nombre: 'Shore Good Donuts (Old Website)',
      url: 'https://shoregooddonuts.com/',
      imagen: './assets/supportweb/ShoreGoodDonuts.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'Shore Good Donuts is a store on Long Beach Island, New Jersey, specializing in made-to-order donuts. They offer a variety of flavors, including filled donuts such as Boston cream and jelly.',
      categoria: 'WebSupports',
      color: '#51A1C2',
      ColorTextTitle: '#51A1C2',
      ColorTextParagraph: '#51A1C2'
    },
    {
      nombre: 'TouchStoneGroup',
      url: 'https://tsgre.com/',
      imagen: './assets/supportweb/TouchStoneGroup.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'TSG Real Estate is a company dedicated to the real estate sector. They offer services related to the purchase, sale and rental of properties. Their team is committed to providing personalized solutions and expert advice to their clients.',
      categoria: 'WebSupports',
      color: '#E5E5E5',
      ColorTextTitle: '#E5E5E5',
      ColorTextParagraph: '#E5E5E5'
    },
  ];

  proyectosMostrados: Proyecto[] = [];
  cantidadProyectosMostrar: number = 3;
  categoriaSeleccionada: string = 'WebCompleted';
  mostrarBotonLoadMore: boolean = false;
  navbarFixed: boolean = false;

  constructor() {}

  ngOnInit() {
    this.mostrarProyectos();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }

  mostrarProyectos() {
    const proyectosFiltrados = this.proyectos.filter(
      (proyecto) => proyecto.categoria === this.categoriaSeleccionada
    );

    this.proyectosMostrados = proyectosFiltrados.slice(
      0,
      this.cantidadProyectosMostrar
    );

    this.mostrarBotonLoadMore =
      proyectosFiltrados.length > 1 &&
      this.cantidadProyectosMostrar < proyectosFiltrados.length;
  }

  loadMore() {
    this.cantidadProyectosMostrar += 3;
    this.mostrarProyectos();
  }

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
    this.cantidadProyectosMostrar = 3;
    this.mostrarProyectos();
  }

  getIconClass(tecnologia: string): string {
    switch (tecnologia) {
      case 'Wordpress':
        return 'fa-wordpress';
      case 'PHP':
        return 'fa-php';
      case 'JavaScript':
        return 'fa-js';
      case 'HTML':
        return 'fa-html5';
      case 'CSS':
        return 'fa-css3-alt';
      case 'Bricks':
        return 'icon-bricks';
      case 'ACF':
        return 'icon-acf';

      default:
        return '';
    }
  }
}

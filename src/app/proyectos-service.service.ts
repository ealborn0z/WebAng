import { Injectable } from '@angular/core';

interface Proyecto {
  nombre: string;
  url: string;
  imagen: string;
  tecnologias: string[];
  descripcion: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  private proyectos: Proyecto[] = [
    {
      nombre: 'Anchor Aquarium',
      url: 'https://anchoraquarium.com/',
      imagen: '../../assets/supportweb/AnchorAquarium.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'Anchor Aquarium es un sitio web dedicado al mundo de los acuarios y la acuariofilia.',
    },
    {
      nombre: 'Being Financial',
      url: 'https://being-financial.com/',
      imagen: '../../assets/supportweb/BeingFinancial.png',
      tecnologias: ['Wordpress', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      descripcion:
        'Being Financial es un recurso dedicado al mundo de las finanzas y la planificación financiera.',
    },
    // Agrega más proyectos aquí
  ];

  constructor() {}

  obtenerProyectos(): Proyecto[] {
    return this.proyectos;
  }
}

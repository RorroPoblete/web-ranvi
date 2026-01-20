export const siteConfig = {
  name: 'Ranvi Systems',
  company: 'Ranvi SpA',
  description: 'Soluciones tecnológicas para el sector salud',
  url: 'https://ranvisystems.cl',
  country: 'Chile',
  
  // Navegación
  nav: {
    home: 'Inicio',
    solutions: 'Soluciones',
    about: 'Nosotros',
    contact: 'Contacto',
  },

  // Hero
  hero: {
    title: 'Innovación y eficiencia digital para centros de salud',
    subtitle: 'Autoservicio, automatización de procesos y gestión inteligente de pagos',
    ctaPrimary: 'Solicitar demo',
    ctaSecondary: 'Ver soluciones',
  },

  // Soluciones
  solutions: {
    queueManager: {
      title: 'Gestor de Fila Digital',
      description: 'Organiza y administra el flujo de pacientes de manera eficiente',
      benefits: [
        'Orden y control del flujo de atención',
        'Reducción de filas y tiempos de espera',
        'Mejor experiencia para pacientes y funcionarios',
      ],
      howItWorks: [
        {
          step: 1,
          title: 'Registro',
          description: 'El paciente se registra en el sistema de forma rápida y sencilla',
        },
        {
          step: 2,
          title: 'Asignación',
          description: 'El sistema asigna automáticamente el turno y la sala de atención',
        },
        {
          step: 3,
          title: 'Seguimiento',
          description: 'Monitoreo en tiempo real del estado de la fila y notificaciones',
        },
      ],
      useCases: [
        'Clínicas privadas',
        'Policlínicos',
        'Servicios de urgencia',
        'Centros de atención ambulatoria',
      ],
    },
    paymentKiosk: {
      title: 'Tótem de Autopago',
      description: 'Pagos autónomos, seguros y rápidos para optimizar la experiencia del paciente',
      benefits: [
        'Pagos rápidos y seguros',
        'Menor congestión en cajas',
        'Optimización de recursos administrativos',
      ],
      paymentMethods: [
        'Tarjetas de crédito y débito',
      ],
      paymentGateways: [
        {
          name: 'Transbank',
          description: 'Integración con la pasarela de pagos líder en Chile',
          logo: '/logo-transbank.png',
        },
        {
          name: 'Getnet',
          description: 'Solución de pagos segura y confiable',
          logo: '/logo-getnet.png',
        },
      ],
    },
    appointmentChatbot: {
      title: 'Chatbot de Confirmación de Citas',
      description: 'Automatiza la gestión de citas médicas mediante inteligencia artificial conversacional',
      benefits: [
        'Reducción de carga administrativa',
        'Disponibilidad 24/7 para pacientes',
        'Confirmación y reagendamiento automático',
        'Reducción de inasistencias',
      ],
      howItWorks: [
        {
          step: 1,
          title: 'Confirmación',
          description: 'El chatbot contacta automáticamente a los pacientes para confirmar sus citas programadas',
        },
        {
          step: 2,
          title: 'Reagendamiento',
          description: 'Los pacientes pueden reagendar sus citas de forma inmediata a través de una conversación natural',
        },
        {
          step: 3,
          title: 'Agendamiento',
          description: 'Nuevos pacientes pueden agendar citas disponibles interactuando con el chatbot',
        },
      ],
      features: [
        'Confirmación automática de citas',
        'Reagendamiento en tiempo real',
        'Agendamiento de nuevas citas',
        'Recordatorios personalizados',
        'Integración con sistemas de gestión',
        'Múltiples canales de comunicación',
      ],
    },
    qualitySystem: {
      title: 'Sistema de Calidad para Acreditación',
      description: 'Herramienta integral para gestionar y monitorear los estándares de calidad necesarios para la acreditación de clínicas',
      benefits: [
        'Preparación eficiente para procesos de acreditación',
        'Gestión centralizada de indicadores de calidad',
        'Cumplimiento de normativas y estándares',
        'Mejora continua de procesos clínicos',
        'Documentación automatizada',
      ],
      howItWorks: [
        {
          step: 1,
          title: 'Evaluación',
          description: 'Análisis inicial del estado actual de la clínica respecto a los estándares de acreditación',
        },
        {
          step: 2,
          title: 'Planificación',
          description: 'Desarrollo de planes de acción y seguimiento para cumplir con los requisitos de calidad',
        },
        {
          step: 3,
          title: 'Monitoreo',
          description: 'Seguimiento continuo de indicadores y métricas de calidad en tiempo real',
        },
      ],
      features: [
        'Gestión de indicadores de calidad',
        'Documentación de procesos',
        'Auditorías internas',
        'Reportes de cumplimiento',
        'Trazabilidad de mejoras',
        'Dashboard de métricas',
        'Alertas y notificaciones',
        'Integración con sistemas clínicos',
      ],
      standards: [
        'Estándares nacionales de acreditación',
        'Normativas internacionales (JCI, ISO)',
        'Regulaciones del sector salud',
        'Estándares de seguridad del paciente',
      ],
    },
  },

  // Partners
  partners: {
    masterkey: {
      name: 'MasterKey',
      role: 'Partner tecnológico',
      description: 'Plataformas de gestión y transacciones. Soluciones estables, seguras y escalables',
    },
    cleverSalud: {
      name: 'Clínica Clever Salud',
      role: 'Partner clínico',
      description: 'Colaboración estratégica en el desarrollo e implementación de soluciones tecnológicas para el sector salud',
    },
  },

  // Por qué elegir Ranvi
  whyChoose: [
    {
      title: 'Especialización en salud',
      description: 'Conocimiento profundo del sector y sus necesidades específicas',
      icon: 'health',
    },
    {
      title: 'Tecnología de vanguardia',
      description: 'Soluciones modernas y escalables adaptadas a entornos clínicos',
      icon: 'tech',
    },
    {
      title: 'Soporte continuo',
      description: 'Acompañamiento durante todo el ciclo de vida del proyecto',
      icon: 'support',
    },
    {
      title: 'Integración flexible',
      description: 'Compatible con sistemas existentes y entornos clínicos diversos',
      icon: 'integration',
    },
  ],

  // Timeline de implementación
  implementation: [
    {
      phase: 'Descubrimiento',
      description: 'Análisis de necesidades y definición de alcance',
    },
    {
      phase: 'Integración',
      description: 'Conexión con sistemas existentes y configuración',
    },
    {
      phase: 'Piloto',
      description: 'Prueba controlada en entorno real',
    },
    {
      phase: 'Despliegue',
      description: 'Implementación completa y capacitación',
    },
    {
      phase: 'Soporte',
      description: 'Acompañamiento continuo y optimización',
    },
  ],

  // FAQ
  faq: [
    {
      question: '¿Qué tipo de centros de salud pueden implementar estas soluciones?',
      answer: 'Nuestras soluciones están diseñadas para clínicas, hospitales, policlínicos, centros de atención ambulatoria y servicios de urgencia, tanto públicos como privados.',
    },
    {
      question: '¿Cuánto tiempo toma la implementación?',
      answer: 'El tiempo de implementación varía según la complejidad y el alcance del proyecto. Generalmente, el proceso completo desde el descubrimiento hasta el despliegue puede tomar entre 2 y 4 meses.',
    },
    {
      question: '¿Las soluciones se integran con sistemas existentes?',
      answer: 'Sí, nuestras soluciones están diseñadas para integrarse con sistemas de gestión hospitalaria (HIS) y otros sistemas clínicos existentes mediante APIs y protocolos estándar.',
    },
    {
      question: '¿Qué tipo de soporte ofrecen después de la implementación?',
      answer: 'Ofrecemos soporte técnico continuo, actualizaciones del sistema, capacitación para el personal y acompañamiento en la optimización de procesos.',
    },
    {
      question: '¿Los pagos en el tótem son seguros?',
      answer: 'Sí, el tótem de autopago cumple con los más altos estándares de seguridad y está certificado para procesar transacciones de manera segura, cumpliendo con normativas de protección de datos.',
    },
    {
      question: '¿Ofrecen capacitación para el personal?',
      answer: 'Sí, incluimos capacitación completa para el personal administrativo y clínico, así como documentación y recursos de apoyo para facilitar la adopción de las soluciones.',
    },
  ],

  // Contacto
  contact: {
    form: {
      name: 'Nombre completo',
      company: 'Empresa',
      position: 'Cargo',
      email: 'Email',
      phone: 'Teléfono',
      message: 'Mensaje',
      demoCheckbox: 'Quiero demo',
      submit: 'Enviar mensaje',
    },
    success: {
      title: 'Mensaje enviado',
      message: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
    },
  },
}

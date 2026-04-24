export type SolutionKey =
  | 'queueManager'
  | 'paymentKiosk'
  | 'appointmentChatbot'
  | 'qualitySystem'
  | 'biopsyTraceability'
  | 'medicalEquipment'
  | 'surgicalCrm'

export const siteConfig = {
  name: 'Ranvi Systems',
  company: 'Ranvi SpA',
  description: 'Software clínico para centros de salud en Chile',
  url: 'https://ranvisystems.cl',
  country: 'Chile',

  nav: {
    home: 'Inicio',
    solutions: 'Soluciones',
    about: 'Nosotros',
    contact: 'Contacto',
  },

  hero: {
    eyebrow: 'Ranvi Systems',
    title: 'Software clínico diseñado para pacientes y equipos de salud.',
    subtitle:
      'Siete plataformas especializadas para modernizar clínicas y hospitales en Chile.',
    ctaPrimary: 'Solicitar demo',
    ctaSecondary: 'Conocer soluciones',
  },

  solutionsOrder: [
    'surgicalCrm',
    'biopsyTraceability',
    'medicalEquipment',
    'queueManager',
    'paymentKiosk',
    'appointmentChatbot',
    'qualitySystem',
  ] satisfies SolutionKey[],

  solutions: {
    queueManager: {
      key: 'queueManager',
      slug: 'gestor-fila',
      title: 'Gestor de Fila Digital',
      tagline: 'Flujo de pacientes, en orden.',
      description:
        'Organiza y administra el flujo de atención ambulatoria en tiempo real.',
      logo: '/logo-gestor.png',
      accent: 'primary',
      benefits: [
        'Orden y control del flujo de atención',
        'Reducción de filas y tiempos de espera',
        'Mejor experiencia para pacientes y funcionarios',
      ],
      howItWorks: [
        { step: 1, title: 'Registro', description: 'El paciente se registra en el sistema de forma rápida y sencilla.' },
        { step: 2, title: 'Asignación', description: 'El sistema asigna automáticamente el turno y la sala de atención.' },
        { step: 3, title: 'Seguimiento', description: 'Monitoreo en tiempo real del estado de la fila y notificaciones.' },
      ],
      useCases: ['Clínicas privadas', 'Policlínicos', 'Servicios de urgencia', 'Centros ambulatorios'],
    },
    paymentKiosk: {
      key: 'paymentKiosk',
      slug: 'totem-autopago',
      title: 'Tótem de Autopago',
      tagline: 'Pagar, sin esperar.',
      description:
        'Pagos autónomos, seguros y rápidos integrados con Transbank y Getnet.',
      logo: '/logo-autopago.png',
      accent: 'teal',
      benefits: [
        'Pagos rápidos y seguros',
        'Menor congestión en cajas',
        'Optimización de recursos administrativos',
      ],
      paymentMethods: ['Tarjetas de crédito y débito'],
      paymentGateways: [
        { name: 'Transbank', description: 'Integración con la pasarela de pagos líder en Chile.', logo: '/logo-transbank.png' },
        { name: 'Getnet', description: 'Solución de pagos segura y confiable.', logo: '/logo-getnet.png' },
      ],
    },
    appointmentChatbot: {
      key: 'appointmentChatbot',
      slug: 'chatbot-citas',
      title: 'Chatbot de Confirmación de Citas',
      tagline: 'Agenda que conversa.',
      description:
        'IA conversacional que confirma, reagenda y agenda citas médicas 24/7.',
      accent: 'primary',
      benefits: [
        'Reducción de carga administrativa',
        'Disponibilidad 24/7 para pacientes',
        'Confirmación y reagendamiento automático',
        'Reducción de inasistencias',
      ],
      howItWorks: [
        { step: 1, title: 'Confirmación', description: 'El chatbot contacta automáticamente a los pacientes para confirmar citas programadas.' },
        { step: 2, title: 'Reagendamiento', description: 'Los pacientes pueden reagendar de forma inmediata en conversación natural.' },
        { step: 3, title: 'Agendamiento', description: 'Nuevos pacientes pueden agendar citas disponibles vía chat.' },
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
      key: 'qualitySystem',
      slug: 'sistema-calidad',
      title: 'Sistema de Calidad para Acreditación',
      tagline: 'Acreditación, siempre lista.',
      description:
        'Gestión integral de indicadores, documentación y auditorías para acreditación.',
      accent: 'teal',
      benefits: [
        'Preparación eficiente para procesos de acreditación',
        'Gestión centralizada de indicadores de calidad',
        'Cumplimiento de normativas y estándares',
        'Mejora continua de procesos clínicos',
        'Documentación automatizada',
      ],
      howItWorks: [
        { step: 1, title: 'Evaluación', description: 'Análisis inicial respecto a los estándares de acreditación.' },
        { step: 2, title: 'Planificación', description: 'Planes de acción y seguimiento para cumplir requisitos.' },
        { step: 3, title: 'Monitoreo', description: 'Seguimiento continuo de indicadores en tiempo real.' },
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
    biopsyTraceability: {
      key: 'biopsyTraceability',
      slug: 'biopsias',
      title: 'Trazabilidad de Biopsias',
      tagline: 'Cada muestra, cada paso.',
      description:
        'Sistema de trazabilidad completa de muestras de biopsia desde la toma hasta el informe, con libro de trazabilidad, QR y alertas.',
      accent: 'primary',
      benefits: [
        'Trazabilidad extremo a extremo de cada muestra',
        'Libro de trazabilidad conforme a normativa',
        'Reducción del riesgo de pérdida o confusión de muestras',
        'Indicadores clínicos y de calidad en tiempo real',
        'Acceso rápido vía códigos QR',
      ],
      features: [
        'Solicitudes de biopsia y fichas por paciente',
        'Registro y seguimiento de muestras',
        'Traspasos entre servicios con firma',
        'Libro de trazabilidad auditable',
        'Informes anatomopatológicos',
        'Alertas por muestra detenida o vencida',
        'Indicadores de gestión y rendimiento',
        'Multi-tenant para redes de salud',
      ],
      howItWorks: [
        { step: 1, title: 'Solicitud', description: 'El médico genera la solicitud con datos del paciente y la muestra.' },
        { step: 2, title: 'Trazabilidad', description: 'Cada traspaso queda registrado con hora, responsable y ubicación.' },
        { step: 3, title: 'Informe', description: 'Resultado anatomopatológico asociado al caso y al paciente.' },
      ],
      useCases: ['Clínicas con pabellón', 'Laboratorios de anatomía patológica', 'Hospitales con servicio quirúrgico'],
    },
    medicalEquipment: {
      key: 'medicalEquipment',
      slug: 'equipos-medicos',
      title: 'Gestión de Equipos Médicos',
      tagline: 'Acreditación EQ, bajo control.',
      description:
        'GMEM gestiona el ciclo de vida completo de los equipos médicos: inventario, mantenciones, calibraciones, capacitaciones y plan anual. Cumple los estándares EQ 1.1, 1.2, 2.1, 2.2, 2.3 y 3.1 de la Superintendencia de Salud.',
      accent: 'teal',
      benefits: [
        'Cumplimiento directo de ámbito EQ de acreditación',
        'Inventario único con QR por equipo',
        'Plan anual con carta Gantt y toma de conocimiento',
        'Alertas automáticas de vencimientos',
        'Registro de operadores autorizados',
        'Evidencia lista para el acreditador',
      ],
      features: [
        'Inventario completo de equipos (EQ 1.1)',
        'Vida útil y plan de reposición (EQ 1.2)',
        'Mantención preventiva críticos y apoyo (EQ 2.1 / 2.2)',
        'Calibraciones con laboratorio y certificado (EQ 2.3)',
        'Capacitación y operadores autorizados (EQ 3.1)',
        'Protocolos configurables (Sí/No, numérico, texto)',
        'Solicitudes externas a proveedores',
        'Auditoría con trazabilidad completa',
        'Multi-tenant por establecimiento',
      ],
      howItWorks: [
        { step: 1, title: 'Inventario', description: 'Carga del parque de equipos con criticidad y categoría de acreditación.' },
        { step: 2, title: 'Plan anual', description: 'Programación de mantenciones y calibraciones con carta Gantt.' },
        { step: 3, title: 'Ejecución y evidencia', description: 'Registro vía QR, firma digital y reportes para el acreditador.' },
      ],
      useCases: ['Clínicas en proceso de acreditación', 'Hospitales', 'Centros con parque de equipos crítico'],
    },
    surgicalCrm: {
      key: 'surgicalCrm',
      slug: 'crm-quirurgico',
      title: 'CRM Quirúrgico',
      tagline: 'Del diagnóstico al pabellón.',
      description:
        'CRM especializado en el flujo quirúrgico ambulatorio con 9 etapas validadas, presupuestos, exámenes preoperatorios, consentimientos digitales y ficha clínica conforme a Ley 19.628.',
      accent: 'primary',
      benefits: [
        'Pipeline quirúrgico completo en un solo lugar',
        'Validaciones automáticas por etapa',
        'Presupuestos con plantillas precargadas',
        'Consentimientos digitales firmados',
        'Seguimiento de exámenes preoperatorios con alertas',
        'Cumplimiento Ley 19.628 (datos personales)',
      ],
      features: [
        'Pipeline kanban con 9 etapas validadas',
        'Ficha paciente: RUT, previsión, antecedentes, alergias',
        'Plantillas para 8 cirugías frecuentes',
        'Evaluación preoperatoria con clasificación ASA',
        'Consentimiento quirúrgico y anestésico digital',
        'Alertas de exámenes vencidos',
        'Audit log con IP y user-agent',
        'Roles: admin, doctora, enfermera, recepción, paciente',
        'Export CSV de pacientes y casos',
      ],
      howItWorks: [
        { step: 1, title: 'Consulta', description: 'Registro de paciente, anamnesis y orden de exámenes.' },
        { step: 2, title: 'Presupuesto y aceptación', description: 'Cotización por categoría, envío y firma del paciente.' },
        { step: 3, title: 'Pabellón', description: 'Evaluación preop, programación, ingreso y cierre.' },
      ],
      stages: [
        'Consulta médica',
        'Solicitud de presupuesto',
        'Aceptación',
        'Exámenes preoperatorios',
        'Evaluación preoperatoria',
        'Programación quirúrgica',
        'Cierre administrativo',
        'Preparación paciente',
        'Ingreso hospitalario',
      ],
      useCases: ['Clínicas quirúrgicas ambulatorias', 'Centros médicos con pabellón', 'Equipos quirúrgicos privados'],
    },
  },

  partners: {
    masterkey: {
      name: 'MasterKey',
      role: 'Partner tecnológico',
      description: 'Plataformas de gestión y transacciones. Soluciones estables, seguras y escalables.',
    },
    cleverSalud: {
      name: 'Clínica Clever Salud',
      role: 'Partner clínico',
      description:
        'Colaboración estratégica en el desarrollo e implementación de soluciones tecnológicas para el sector salud.',
    },
  },

  whyChoose: [
    { title: 'Especialización en salud', description: 'Conocimiento profundo del sector y sus necesidades específicas.', icon: 'health' },
    { title: 'Tecnología de vanguardia', description: 'Soluciones modernas y escalables adaptadas a entornos clínicos.', icon: 'tech' },
    { title: 'Soporte continuo', description: 'Acompañamiento durante todo el ciclo de vida del proyecto.', icon: 'support' },
    { title: 'Integración flexible', description: 'Compatible con sistemas existentes y entornos clínicos diversos.', icon: 'integration' },
  ],

  implementation: [
    { phase: 'Descubrimiento', description: 'Análisis de necesidades y definición de alcance.' },
    { phase: 'Integración', description: 'Conexión con sistemas existentes y configuración.' },
    { phase: 'Piloto', description: 'Prueba controlada en entorno real.' },
    { phase: 'Despliegue', description: 'Implementación completa y capacitación.' },
    { phase: 'Soporte', description: 'Acompañamiento continuo y optimización.' },
  ],

  faq: [
    {
      question: '¿Qué tipo de centros de salud pueden implementar estas soluciones?',
      answer: 'Clínicas, hospitales, policlínicos, centros ambulatorios y servicios de urgencia, tanto públicos como privados.',
    },
    {
      question: '¿Cuánto tiempo toma la implementación?',
      answer: 'Depende del alcance. El proceso completo desde el descubrimiento hasta el despliegue toma típicamente entre 2 y 4 meses.',
    },
    {
      question: '¿Las soluciones se integran con sistemas existentes?',
      answer: 'Sí. Nuestras plataformas se integran con HIS y otros sistemas clínicos mediante APIs y protocolos estándar.',
    },
    {
      question: '¿Cumplen con la normativa chilena de datos de salud?',
      answer: 'Sí. Nuestras soluciones cumplen con Ley 19.628 y están alineadas con los estándares de acreditación de la Superintendencia de Salud.',
    },
    {
      question: '¿Los pagos en el tótem son seguros?',
      answer: 'Sí. El tótem cumple con estándares PCI DSS y procesa transacciones a través de Transbank y Getnet.',
    },
    {
      question: '¿Ofrecen capacitación y soporte continuo?',
      answer: 'Sí. Incluimos capacitación para el personal y soporte técnico durante todo el ciclo de vida del proyecto.',
    },
  ],

  contact: {
    form: {
      name: 'Nombre completo',
      company: 'Empresa',
      position: 'Cargo',
      email: 'Email',
      phone: 'Teléfono',
      message: 'Mensaje',
      interest: 'Solución de interés',
      demoCheckbox: 'Quiero una demo',
      submit: 'Enviar mensaje',
    },
    success: {
      title: 'Mensaje enviado',
      message: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
    },
  },
}

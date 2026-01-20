# Ranvi Systems - Sitio Web Corporativo

Sitio web corporativo de **Ranvi SpA (Ranvi Systems)**, empresa chilena de soluciones tecnológicas para el sector salud.

## 🚀 Stack Tecnológico

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Heroicons**

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn

## 🛠️ Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en modo desarrollo:**
```bash
npm run dev
```

3. **Abrir en el navegador:**
```
http://localhost:3000
```

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 📁 Estructura del Proyecto

```
/
├── app/                    # App Router de Next.js
│   ├── page.tsx           # Página de inicio
│   ├── soluciones/        # Página de soluciones
│   ├── nosotros/          # Página sobre nosotros
│   ├── contacto/          # Página de contacto
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── Header.tsx         # Header con navegación
│   ├── Footer.tsx         # Footer
│   ├── SolutionCard.tsx   # Card de solución
│   ├── FAQ.tsx            # Componente de preguntas frecuentes
│   ├── PartnerBadge.tsx   # Badge de partner
│   └── Icon.tsx           # Componente de iconos
├── lib/                   # Utilidades y configuración
│   └── siteConfig.ts      # Configuración centralizada del sitio
├── public/                # Archivos estáticos
│   └── logo-ranvi.png     # Logo de la empresa
└── package.json           # Dependencias del proyecto
```

## ⚙️ Configuración

### Editar Contenido

Todo el contenido del sitio está centralizado en `lib/siteConfig.ts`. Puedes editar:

- Textos del hero
- Descripciones de soluciones
- Información de partners
- Preguntas frecuentes
- Y más...

### Personalizar Colores

Los colores se pueden personalizar en `tailwind.config.ts`. La paleta actual incluye:

- **Primary**: Azul vibrante (basado en el logo)
- **Navy**: Azul navy/slate para texto
- **Teal**: Acentos teal

### Agregar Imágenes

1. Coloca las imágenes en la carpeta `public/`
2. Actualiza las referencias en los componentes usando `next/image`

## 🎨 Características

- ✅ Diseño responsive
- ✅ Accesibilidad WCAG AA
- ✅ SEO optimizado
- ✅ Micro-animaciones sutiles
- ✅ Formulario de contacto con validación
- ✅ Componentes reutilizables
- ✅ TypeScript para type safety

## 📄 Páginas

### Home (`/`)
- Hero con CTAs
- Sección "Qué hacemos"
- Soluciones (cards)
- Partners y ecosistema
- Integración con entornos clínicos
- Por qué elegir Ranvi Systems
- Testimonios (placeholder)
- FAQ
- Formulario de contacto

### Soluciones (`/soluciones`)
- Gestor de Fila Digital
  - Beneficios
  - Cómo funciona (3 pasos)
  - Casos de uso
- Tótem de Autopago
  - Beneficios
  - Medios de pago
  - Seguridad e integración
- CTA para agendar reunión

### Nosotros (`/nosotros`)
- Misión y propósito
- Especialización en salud
- Acompañamiento y soporte
- Timeline de implementación
- Partners

### Contacto (`/contacto`)
- Formulario completo con validación
- Campos: nombre, empresa, cargo, email, teléfono, mensaje
- Checkbox para solicitar demo
- Validación en tiempo real

## 🔧 Próximos Pasos

1. **Configurar endpoint de formulario**: Actualmente usa `mailto:`, reemplazar con endpoint real
2. **Agregar imágenes reales**: Reemplazar placeholders con assets finales
3. **Configurar dominio**: Actualizar `siteConfig.url` con el dominio real
4. **Agregar analytics**: Integrar Google Analytics o similar
5. **Optimizar imágenes**: Usar imágenes optimizadas en formato WebP/AVIF

## 📝 Notas

- El formulario de contacto actualmente usa `mailto:` como fallback. En producción, se debe implementar un endpoint real.
- Los logos de partners son placeholders. Reemplazar con assets reales cuando estén disponibles.
- Los testimonios son placeholders. Agregar testimonios reales cuando estén disponibles.

## 📞 Soporte

Para más información sobre el proyecto, contacta al equipo de desarrollo.

---

**Ranvi Systems** - Soluciones tecnológicas para el sector salud

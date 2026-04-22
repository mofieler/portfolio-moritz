<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()

const siteUrl = config.public.siteUrl as string
const isDE = computed(() => locale.value === 'de')

const pageTitle = computed(() =>
  isDE.value
    ? 'Moritz Fieler – UX Designer & Frontend Entwickler Stuttgart'
    : 'Moritz Fieler – UX Designer & Frontend Developer Stuttgart'
)

const pageDescription = computed(() =>
  isDE.value
    ? 'Moritz Fieler - Webentwickler Stuttgart & UX Designer. Spezialisiert auf Vue.js, Nuxt, TypeScript und Frontend-Entwicklung. Freelance Webentwickler aus Stuttgart für moderne digitale Produkte und nutzerzentriertes Design.'
    : 'Moritz Fieler - Web Developer Stuttgart & UX Designer. Specializing in Vue.js, Nuxt, TypeScript and Frontend Development. Freelance web developer from Stuttgart for modern digital products and user-centered design.'
)

const canonicalUrl = computed(() =>
  isDE.value ? siteUrl : `${siteUrl}/en`
)
//comment

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Moritz Fieler',
      url: siteUrl,
      email: 'moritzfieler@icloud.com',
      telephone: '+4915168456178',
      jobTitle: isDE.value ? 'Webentwickler & UX Designer Stuttgart' : 'Web Developer & UX Designer Stuttgart',
      description: pageDescription.value,
      image: `${siteUrl}/og-image.jpg`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Stuttgart',
        addressRegion: 'Baden-Württemberg',
        addressCountry: 'DE',
        postalCode: '70173',
      },
      knowsAbout: [
        'Webentwicklung Stuttgart', 'Frontend Development', 'Vue.js', 'Nuxt.js', 'TypeScript', 
        'UX Design Stuttgart', 'User Experience', 'UX Strategy', 'UX Research',
        'Web Developer Stuttgart', 'React', 'JavaScript', 'CSS', 'HTML',
        'Figma', 'Ionic Framework', 'Interaction Design', 'Information Architecture',
        'Usability Testing', 'Persuasive Design', 'Responsive Design',
      ],
      hasOccupation: {
        '@type': 'Occupation',
        name: isDE.value ? 'Webentwickler & UX Designer' : 'Web Developer & UX Designer',
        occupationLocation: {
          '@type': 'City',
          name: 'Stuttgart',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Stuttgart',
            addressRegion: 'Baden-Württemberg',
            addressCountry: 'DE',
          }
        },
        skills: 'Webentwicklung, UX Design, Vue.js, Nuxt.js, TypeScript, Figma, Frontend Development',
      },
      sameAs: [
        'https://github.com/mofieler',
        'https://linkedin.com/in/moritzfieler',
        'https://dribbble.com/mofieler'
      ]
    },
    {
      '@type': 'ProfessionalService',
      name: isDE.value ? 'Moritz Fieler - Webentwickler Stuttgart' : 'Moritz Fieler - Web Developer Stuttgart',
      description: pageDescription.value,
      url: siteUrl,
      telephone: '+4915168456178',
      email: 'moritzfieler@icloud.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Stuttgart',
        addressRegion: 'Baden-Württemberg',
        addressCountry: 'DE',
        postalCode: '70173',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.7758,
        longitude: 9.1829,
      },
      areaServed: {
        '@type': 'City',
        name: 'Stuttgart',
      },
      serviceType: [
        'Web Development',
        'UX Design',
        'Frontend Development',
        'Vue.js Development',
        'Nuxt.js Development',
        'TypeScript Development'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: isDE.value ? 'Webentwicklung Dienstleistungen' : 'Web Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: isDE.value ? 'Webentwicklung Stuttgart' : 'Web Development Stuttgart',
              description: isDE.value ? 'Moderne Webentwicklung mit Vue.js, Nuxt.js und TypeScript' : 'Modern web development with Vue.js, Nuxt.js and TypeScript'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: isDE.value ? 'UX Design Stuttgart' : 'UX Design Stuttgart',
              description: isDE.value ? 'Nutzerzentriertes UX Design und Research' : 'User-centered UX design and research'
            }
          }
        ]
      }
    }
  ]
}))

// FAQ Schema for common questions
const faqSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: isDE.value ? 'Welche Technologien verwenden Sie als Webentwickler in Stuttgart?' : 'What technologies do you use as a web developer in Stuttgart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: isDE.value 
          ? 'Als Webentwickler in Stuttgart spezialisiere ich mich auf Vue.js, Nuxt.js, TypeScript, JavaScript, HTML5, CSS3 sowie moderne Frontend-Frameworks und Build-Tools.'
          : 'As a web developer in Stuttgart, I specialize in Vue.js, Nuxt.js, TypeScript, JavaScript, HTML5, CSS3, and modern frontend frameworks and build tools.'
      }
    },
    {
      '@type': 'Question',
      name: isDE.value ? 'Bieten Sie UX Design Dienstleistungen in Stuttgart an?' : 'Do you offer UX design services in Stuttgart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: isDE.value
          ? 'Ja, ich biete professionelles UX Design und User Research in Stuttgart an, inklusive Nutzerzentriertes Design, Prototyping und Usability Testing mit Figma.'
          : 'Yes, I offer professional UX design and user research in Stuttgart, including user-centered design, prototyping, and usability testing with Figma.'
      }
    },
    {
      '@type': 'Question',
      name: isDE.value ? 'Sind Sie als Freelance Webentwickler in Stuttgart verfügbar?' : 'Are you available as a freelance web developer in Stuttgart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: isDE.value
          ? 'Ja, ich bin als Freelance Webentwickler und UX Designer in Stuttgart verfügbar für Projekte im Bereich Webentwicklung und UX Design.'
          : 'Yes, I am available as a freelance web developer and UX designer in Stuttgart for projects in web development and UX design.'
      }
    }
  ]
}))

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: isDE.value
      ? 'Moritz Fieler, Webentwickler Stuttgart, Frontend Entwickler Stuttgart, UX Designer Stuttgart, Web Developer Stuttgart, Vue.js Entwickler Stuttgart, Nuxt Entwickler Stuttgart, TypeScript Entwickler, Freelance Webentwickler, Frontend Development Stuttgart, UX Design Stuttgart, Webentwicklung Stuttgart, Digitale Produkte Stuttgart'
      : 'Moritz Fieler, Web Developer Stuttgart, Frontend Developer Stuttgart, UX Designer Stuttgart, Vue.js Developer Stuttgart, Nuxt Developer Stuttgart, TypeScript Developer Stuttgart, Freelance Web Developer, Frontend Development Stuttgart, UX Design Stuttgart, Web Development Stuttgart, Digital Products Stuttgart'
    },
    { name: 'author', content: 'Moritz Fieler' },
    { name: 'geo.region', content: 'DE-BW' },
    { name: 'geo.placename', content: 'Stuttgart' },
    // Open Graph
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: isDE.value ? 'de_DE' : 'en_US' },
    { property: 'og:locale:alternate', content: isDE.value ? 'en_US' : 'de_DE' },
    { property: 'og:site_name', content: 'Mindcoded by Mo.' },
    // Twitter / X
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'alternate', hreflang: 'de', href: siteUrl },
    { rel: 'alternate', hreflang: 'en', href: `${siteUrl}/en` },
    { rel: 'alternate', hreflang: 'x-default', href: siteUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify(jsonLd.value)),
    },
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify(faqSchema.value)),
    },
  ],
})
</script>

<template>
  <div>
    <HeroSection />
    <WorkSection />
    <SkillsSection />
  </div>
</template>

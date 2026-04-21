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
    ? 'Freiberuflicher UX-Stratege und Frontend-Entwickler aus Stuttgart. Von der Nutzerforschung bis zur fertigen Lösung — modulare, nutzerzentrierte Digital­produkte mit Vue.js, Nuxt und Figma.'
    : 'Freelance UX Strategist and Frontend Developer based in Stuttgart, Germany. From research to production — building modular, user-centred digital products with Vue.js, Nuxt and Figma.'
)

const canonicalUrl = computed(() =>
  isDE.value ? siteUrl : `${siteUrl}/en`
)

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Moritz Fieler',
  url: siteUrl,
  email: 'moritzfieler@icloud.com',
  telephone: '+4915168456178',
  jobTitle: isDE.value ? 'UX-Stratege & Frontend-Entwickler' : 'UX Strategist & Frontend Developer',
  description: pageDescription.value,
  image: `${siteUrl}/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Stuttgart',
    addressRegion: 'Baden-Württemberg',
    addressCountry: 'DE',
  },
  knowsAbout: [
    'UX Design', 'User Experience', 'UX Strategy', 'UX Research',
    'Frontend Development', 'Vue.js', 'Nuxt.js', 'React', 'TypeScript',
    'Figma', 'Ionic Framework', 'Interaction Design', 'Information Architecture',
    'Usability Testing', 'Persuasive Design',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: isDE.value ? 'UX-Designer & Frontend-Entwickler' : 'UX Designer & Frontend Developer',
    occupationLocation: {
      '@type': 'City',
      name: 'Stuttgart',
    },
    skills: 'UX Design, UX Research, Vue.js, Nuxt.js, TypeScript, Figma, Ionic',
  },
}))

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: isDE.value
      ? 'UX Designer Stuttgart, Frontend Entwickler Stuttgart, UX Stratege, Freelance UX Designer Deutschland, Vue.js Entwickler, Nuxt Entwickler, Figma, Nutzerzentriertes Design, Digitale Produkte'
      : 'UX Designer Stuttgart, Frontend Developer Stuttgart, UX Strategist Germany, Freelance UX Designer, Vue.js Developer, Nuxt Developer, Figma, User-centred Design, Digital Products'
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

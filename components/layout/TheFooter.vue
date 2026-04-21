<script setup lang="ts">
const contactInfo = [
  {
    type: 'email',
    label: 'contact.email',
    value: 'moritzfieler@icloud.com',
    href: 'mailto:moritzfieler@icloud.com',
    icon: 'Envelope',
  },
  {
    type: 'phone',
    label: 'contact.phone',
    value: '+49 151 68456178',
    href: 'tel:+4915168456178',
    icon: 'Phone',
  },
  {
    type: 'location',
    label: 'contact.location',
    value: 'Stuttgart, Germany',
    href: null,
    icon: 'MapPin',
  },
]

const footerLinks = [
  { key: 'ux', label: 'footer.links.ux' },
  { key: 'dev', label: 'footer.links.dev' },
  { key: 'portfolio', label: 'footer.links.portfolio' },
]
</script>

<template>
  <footer id="contact" class="bg-brand-dark text-white pt-24 md:pt-32 pb-32 md:pb-24 px-6 mt-12 rounded-t-[3rem] md:rounded-t-[4rem] relative">
    <div class="max-w-5xl mx-auto text-center reveal">
      <!-- Main Heading -->
      <h2 class="heading-section text-white mb-6 md:mb-8">
        {{ $t('contact.title') }}
      </h2>
      
      <p class="body-medium max-w-2xl mx-auto mb-16 md:mb-20">
        {{ $t('contact.subtitle') }}
      </p>

      <!-- Contact Cards -->
      <div class="grid md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-28">
        <ContactCard
          v-for="item in contactInfo"
          :key="item.type"
          :icon="item.icon"
          :label="$t(item.label)"
          :value="item.value"
          :href="item.href || undefined"
        />
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#A8A29E]">
        <p>{{ $t('footer.copyright') }}</p>
        <div class="flex gap-6 font-medium">
          <span
            v-for="link in footerLinks"
            :key="link.key"
            class="hover:text-white transition-colors cursor-pointer"
          >
            {{ $t(link.label) }}
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

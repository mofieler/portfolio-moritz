<script setup lang="ts">
useHead({
  title: 'Impressum – Moritz Fieler',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>

<template>
  <div class="min-h-screen px-6 pt-36 pb-24 md:pt-48 md:pb-32">
    <div class="max-w-2xl mx-auto">

      <!-- Back -->
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-sm font-semibold mb-12 transition-colors"
        style="color: rgb(var(--brand-muted));"
        onmouseenter="this.style.color='rgb(var(--brand-terra))'"
        onmouseleave="this.style.color='rgb(var(--brand-muted))'"
      >
        <UiIcon name="ArrowLeft" size="sm" />
        Zurück
      </NuxtLink>

      <h1 class="font-display font-bold text-3xl md:text-4xl mb-12" style="color: rgb(var(--brand-text));">
        Impressum
      </h1>

      <div class="space-y-10 text-sm leading-relaxed" style="color: rgb(var(--brand-muted));">

        <section>
          <h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="color: rgb(var(--brand-text));">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            Moritz Fieler<br />
            Sautterweg 30<br />
            70565 Stuttgart<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="color: rgb(var(--brand-text));">
            Kontakt
          </h2>
          <p>
            E-Mail: <a href="mailto:moritzfieler@icloud.com" class="hover:underline transition-colors" style="color: rgb(var(--brand-terra));">moritzfieler@icloud.com</a>
          </p>
        </section>

        <section>
          <h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="color: rgb(var(--brand-text));">
            Berufsbezeichnung
          </h2>
          <p>
            Freiberuflicher UX Designer &amp; Frontend Entwickler<br />
            Verliehen in: Deutschland
          </p>
        </section>

        <section>
          <h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="color: rgb(var(--brand-text));">
            Steuerliche Angaben
          </h2>
          <p>
            Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet und ausgewiesen. Eine Umsatzsteuer-Identifikationsnummer liegt daher nicht vor.
          </p>
        </section>

        <section>
          <h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="color: rgb(var(--brand-text));">
            Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)
          </h2>
          <p>
            Moritz Fieler<br />
            Sautterweg 30<br />
            70565 Stuttgart
          </p>
        </section>

        <section>
          <h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="color: rgb(var(--brand-text));">
            Haftung für Inhalte
          </h2>
          <p>
            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section>
          <h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="color: rgb(var(--brand-text));">
            Haftung für Links
          </h2>
          <p>
            Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 class="text-xs font-bold tracking-[0.15em] uppercase mb-3" style="color: rgb(var(--brand-text));">
            Urheberrecht
          </h2>
          <p>
            Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung.
          </p>
        </section>

      </div>

      <!-- Divider -->
      <div class="mt-16 pt-8 border-t text-xs" style="border-color: rgb(var(--brand-muted) / 0.15); color: rgb(var(--brand-muted) / 0.6);">
        Mindcoded by Mo. · Stuttgart, Deutschland
      </div>

    </div>
  </div>
</template>

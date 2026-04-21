import type { MaybeRefOrGetter } from 'vue'
import type { Project, ProjectFeature, Skill } from '~/types'

export function useTranslatedProject(projectRef: MaybeRefOrGetter<Project | null | undefined>) {
  const { t, tm, rt } = useI18n()
  const project = computed(() => toValue(projectRef))

  const pick = (key?: string, fallback?: string) => (key ? t(key) : fallback ?? '')

  return {
    category: computed(() => pick(project.value?.categoryKey, project.value?.category)),
    title: computed(() => pick(project.value?.titleKey, project.value?.title)),
    description: computed(() => pick(project.value?.descriptionKey, project.value?.description)),
    longDescription: computed(() => pick(project.value?.longDescriptionKey, project.value?.longDescription)),
    imageAlt: computed(() => pick(project.value?.imageAltKey, project.value?.imageAlt)),
    imageAlt2: computed(() => pick(project.value?.imageAlt2Key, project.value?.imageAlt2)),
    tags: computed<string[]>(() => {
      const key = project.value?.tagsKey
      if (key) {
        const list = tm(key)
        if (Array.isArray(list)) return list.map(item => rt(item))
      }
      return project.value?.tags ?? []
    }),
    features: computed<ProjectFeature[]>(() => {
      const key = project.value?.featuresKey
      if (key) {
        const list = tm(key)
        if (Array.isArray(list)) return list as unknown as ProjectFeature[]
      }
      return project.value?.features ?? []
    }),
  }
}

export function useTranslatedSkill(skillRef: MaybeRefOrGetter<Skill>) {
  const { t, tm, rt } = useI18n()
  const skill = computed(() => toValue(skillRef))

  return {
    title: computed(() => (skill.value.titleKey ? t(skill.value.titleKey) : skill.value.title ?? '')),
    description: computed(() =>
      skill.value.descriptionKey ? t(skill.value.descriptionKey) : skill.value.description ?? '',
    ),
    tags: computed(() => {
      const key = skill.value.tagsKey
      if (key) {
        const labels = tm(key)
        if (Array.isArray(labels)) {
          return labels.map((label, i) => ({
            label: rt(label),
            variant: skill.value.tags?.[i]?.variant ?? 'neutral',
          }))
        }
      }
      return skill.value.tags ?? []
    }),
  }
}

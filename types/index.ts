// ============================================
// Project Types
// ============================================

export interface ProjectFeature {
  title?: string
  titleKey?: string
  icon: string
  description?: string
  descriptionKey?: string
}

export type ProjectVisual = 'mockup' | 'duo-phones' | 'hero-bottom' | 'custom' | 'video'

export interface GalleryItem {
  src: string
  captionKey?: string
}

export interface Project {
  id: string
  num: string
  category?: string
  categoryKey?: string
  title?: string
  titleKey?: string
  description?: string
  descriptionKey?: string
  longDescription?: string
  longDescriptionKey?: string
  tags?: string[]
  tagsKey?: string
  visual: ProjectVisual
  imageSrc: string
  imageAlt?: string
  imageAltKey?: string
  imageSrc2?: string
  imageAlt2?: string
  imageAlt2Key?: string
  videoSrc?: string
  pdfUrl?: string
  reversed?: boolean
  gallery?: GalleryItem[]
  fallbackClass?: string
  features?: ProjectFeature[]
  featuresKey?: string
}

// ============================================
// Skill Types
// ============================================

export type TagVariant = 'neutral' | 'terra' | 'green' | 'purple' | 'blue'

export interface Skill {
  id: string
  icon: string
  title?: string
  titleKey?: string
  description?: string
  descriptionKey?: string
  tags?: Array<{
    label?: string
    labelKey?: string
    variant: TagVariant
  }>
  tagsKey?: string
}

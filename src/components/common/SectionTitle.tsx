interface SectionTitleProps {
  eyebrow: string
  title: string
  description: string
  centered?: boolean
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <header className={`section-title${centered ? ' section-title--centered' : ''}`}>
      <p className="section-title__eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  )
}

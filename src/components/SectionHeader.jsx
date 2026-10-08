export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="section-header reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

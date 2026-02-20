import "./SectionTitle.css";

export function SectionTitle({ title, description }) {
  return (
    <div className="sectionTitle">
      <h1>{title} </h1>
      <p>{description} </p>
    </div>
  );
}

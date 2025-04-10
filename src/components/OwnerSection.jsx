export default function OwnerSection({ repositories, about }) {
  return (
    <section className="section-owner">
      <div className="section-owner__flex">
        <img
          className="section-owner__image"
          src={repositories[0]?.owner.avatar_url || "/"}
          alt="image of owner"
          loading="lazy"
        />
        <div>
          <h1 className="text-xl">{about.name}</h1>
          <h2 className="text-l b">{about.role}</h2>
        </div>
      </div>
      <p style={{ whiteSpace: "pre-line", flex: 1 }}>
        {about.story.split("\n").map((line, i) => (
          <span key={i}>
            {String.fromCharCode(8226)} {line}
            <br />
          </span>
        ))}
      </p>
    </section>
  );
}

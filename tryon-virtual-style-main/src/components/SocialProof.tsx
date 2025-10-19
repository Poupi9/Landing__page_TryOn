const logos = ["Maison Alba", "Nordik Studio", "Atelier Lune", "Éclat Paris", "Linea"]; // Marques fictives en niveau de gris

const SocialProof = () => {
  const stats = [
    { value: "+18%", label: "de conversion en moyenne" },
    { value: "-32%", label: "de retours produits" },
    { value: "10 jours", label: "pour une mise en ligne complète" }
  ];

  return (
    <section
      id="preuves"
      className="bg-brand-bg px-4 py-24"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2>Ils privilégient TryOn pour sa discrétion.</h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Marques premium, DNVB et maisons patrimoniales nous confient leur expérience digitale pour allier précision et respect de l’esthétique.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 text-brand-muted uppercase tracking-[0.3em] text-xs">
          {logos.map((logo) => (
            <span key={logo} className="text-brand-muted/60">
              {logo}
            </span>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.25rem] border border-brand-neutral bg-white/80 px-8 py-10 text-center shadow-[var(--shadow-soft)]"
            >
              <div className="text-4xl font-semibold text-brand-text">{stat.value}</div>
              <p className="mt-3 text-brand-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

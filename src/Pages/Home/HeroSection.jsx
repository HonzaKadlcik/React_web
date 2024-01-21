export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Ahoj, mé jméno je Honza</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Síťový technik</span>{" "}
            <br />
            a vývojář
          </h1>
          <p className="hero--section-description">
            Pokud máš jakékoli otázky, neváhej mně kontaktovat!
            <br />
          </p>
        </div>
        <button className="btn btn-primary">Kontakt</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/main.png" alt="Uvod" />
      </div>
    </section>
  );
}

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Informace</p>
          <h1 className="skills-section--heading">O mně</h1>
          <p className="hero--section-description">
          Jsem student střední školy Baltaci ve Zlíně. Je mi 18 let a studuji obor IT ze kterého se nejvíce zaměřuji na počítačové sítě, kybernetiku a hardware. 
          Co se týče programování tak občas pracuji s SQL - Datábaze a také HTML a CSS - Web. Ve volném čase pracuji s 2D grafikou a stříhám videa na svůj youtube kanál. 
          Hovořím anglicky a trochu něměcky. Mezi mé ostatní záliby patří cestování, Fotografování a Technika.
          </p>
        </div>
      </div>
    </section>
  );
}

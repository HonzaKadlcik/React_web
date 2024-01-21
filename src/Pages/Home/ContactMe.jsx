export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Chceš využít mé služby?</p>
        <h2>Kontaktuj mně!</h2>
        <p className="text-lg">
          Tento formulář slouží pro kontakt.
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Jméno</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Přijmení</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Telefon</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Důvod</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Vyberte</option>
            <option>Zájem o službu</option>
            <option>Zajímá mně více</option>
            <option>Jiné...</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Zpráva</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Text"
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">Přímám podmínky</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Odeslat</button>
        </div>
      </form>
    </section>
  );
}

import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="section section__hero">
      <div className="container">
        <h1 className="display-heading">
          <span>Front-End</span>
          <span>Developer</span>
        </h1>
        <p className="body-text">
          Not your average developer - get ready to transform your ideas into
          reality.
        </p>
        <div className="btns">
          <Button name="recent projects" classes="btn--primary" />
        </div>
      </div>
    </section>
  );
}

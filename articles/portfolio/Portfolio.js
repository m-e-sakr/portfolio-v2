import Project from "./Project";

export default function Portfolio() {
  return (
    <article className="article article__portfolio" id="portfolio">
      <div className="container">
        <div className="article-heading-lead">Recent projects</div>
        <h2 className="article-heading">Portfolio </h2>
        <Project />
        <Project alt />
        <Project />
      </div>
    </article>
  );
}

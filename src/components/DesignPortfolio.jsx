import { designs } from '../data/designs'
import './DesignPortfolio.css'

export default function DesignPortfolio() {
  return (
    <section id="design" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Design</span>
          <h2 className="section-title">Graphic design work</h2>
          <p className="section-sub">
            A secondary interest alongside IT and development — logos, posters and digital
            artwork.
          </p>
        </div>

        <div className="design-grid">
          {designs.map((d) => (
            <figure className="design-item" key={d.id}>
              <img src={d.image} alt={d.title} loading="lazy" />
              <figcaption>
                <span className="design-title">{d.title}</span>
                <span className="design-category">{d.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="5 Stationen - 400 Höhemeter - 1 nice View"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Bei der Bergstation der LRU in Unterbäch fasst ihr gegen Bezahlung
              euere Starterpacks. Diese enthalten alles was ihr für das Tüürli
              braucht: Eine Wegbeschreibung, den Schlüssel für die Stationen und
              natürlich ein Glas (nur für die Weintour). Danach startet ihr
              direkt Richtung "Hohegga". Auf dem Weg erwarten euch insgesamt
              fünf Degustationsstationen. Bei der dritten auf der "Brandalp"
              wartet ein Mittagessen auf euch. Übers Holz gehts zurück ins Dorf.
              Bei der letzten Station, könnt ihr den Schlüssel in den
              installierten "Briefkasten" werfen.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                Anreise Unterbäch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

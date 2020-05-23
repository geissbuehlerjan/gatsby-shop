import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Anreise() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Anreise"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              <a href="https://www.unterbaech.ch/">Unterbäch </a>
              liegt im Herzen des Oberwallis und ist von allen vier
              Himmelsrichtungen sehr gut erschlossen und somit gut erreichbar.{" "}
            </p>

            <p>
              Wer mit dem öffentlichen Verkehr anreist, spart durch den
              NEAT-Basistunnel eine Stunde Zeit! Anreise mit dem öffentlichen
              Verkehr Bahnreisende fahren mit dem Zug nach Raron und gelangen
              nach ca. 5 Fussminuten zur Talstation der Luftseilbahn (LRU),
              welche im Halbstundentakt verkehrt. In 8 Minuten bringt Sie die
              25er-Kabine der Luftseilbahn (LRU) mit Sicht auf die spektakuläre
              Löibbach-Schlucht ins Walliser Bergdorf Unterbäch.{" "}
              <a href="https://www.sbb.ch/home">
                Hier finden Sie den Online Fahrplan der SBB.
              </a>
            </p>

            <p>
              Anreise mit dem privaten Verkehrsmittel Unterbäch kann ganzjährig
              mit dem auto via Turtmann oder Visp in zirka 20 Minuten erreicht
              werden. Automobilisten aus dem Norden reisen über Bern durch den
              Lötschberg{" "}
              <a href="https://www.bls.ch/de/fahren/unterwegs-mit/autoverlad">
                Autoverlad der BLS
              </a>
              , von Osten und Süden durch bzw. über die Furka{" "}
              <a href="https://www.matterhorngotthardbahn.ch/de/winter/anreise/autoverlad/furka/">
                Autoverlad MGB
              </a>
              oder durch bzw. über den Simplon{" "}
              <a href="https://www.bls.ch/de/fahren/unterwegs-mit/autoverlad/brig-iselle/fahrplan-brig-iselle">
                Autoverlad BLS{" "}
              </a>
              an. Aus dem Westen erreichen Sie uns über Lausanne entlang dem
              Rhonetal bis nach Turtmann oder Visp und von dort nach Unterbäch.
              Hier finden Sie einen Routenplaner und die aktuellen
              Verkehrssituationen der Schweiz. Die AKTUELLE VERKERHSSITUATION
              WALLIS finden Sie unter
              <a href="http://www.rro.ch/verkehr"> rro.ch </a>
              rro.ch.
            </p>
            <Link to="/">
              <button className="btn text-uppercase btn-yellow">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Die Tour"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Die Wanderung beginnt bei der Bergstation der Gondelbahn
              Unterbäch. Dort erhalten die Teilnehmenden ihr Starterpacket. Von
              dort aus gehts auf den nahe gelegenen Aussichtspunkt «Hohegga» (1)
              wo man einen spektakulären Ausblick über das ganze Dorf und die
              Bergkette mit dem imposanten Bietschhorn hat. Der perfekte Ort um
              mit einem Glas Weisswein* aus dem Wallis auf eine schöne Wanderung
              anzustossen. Frisch gestärkt gehts auf den steilsten Teil der
              Wanderung. In kurzer Zeit werden Höhemeter überwunden. Das ist
              streng, aber oben wartet die Belohnung: Die Degustation des
              zweiten Weins in der «Egga» (2). Es geht weiter bergauf, immer der
              Nase nach. Im Restaurant «Alpenrösli» (3) auf der Brandalp wartet
              nämlich die Walliser Cholera auf die hungrigen Wanderer. Von nun
              an gehts bergab. Entlang des Themenweges «Rütli der Schweizer
              Frau» gehts auf die Alp «Holz» (4). Auf die Ankunft wird
              angestossen. Der letzte Wegabschnitt führt zurück ins Dorf (5).
              Dort wird das Tüürli abgerundet mit einem letztem «Glasji» Wein.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

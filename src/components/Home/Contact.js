import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <div className="container">
        <Title title="Schreibe uns" />
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form
              action="https://formspree.io/degustationswanderung@gmail.com"
              method="POST"
            >
              {/*name*/}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Wyne Beer"
                />
              </div>
              {/*email*/}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="wynebeer@gmail.com"
                />
              </div>
              {/*description*/}
              <div className="form-group">
                <label htmlFor="description">Nachricht</label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  rows="5"
                  placeholder="Schreibe hier deine Nachricht"
                />
              </div>
              {/*submit*/}
              <button
                type="submit"
                className="btn btn-dark btn-block text-capitaliye mt-5"
              >
                Senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

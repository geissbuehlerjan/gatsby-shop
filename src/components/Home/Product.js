import React from "react"
import Img from "gatsby-image"

export default function Product({ product }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-image-top" />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6>CHF{product.price}</h6>

          <button
            className="btn btn-dark mt-3 text-capitalize snipcart-add-item"
            data-item-id={product.id}
            data-item-name={product.title}
            data-item-price={product.price}
            data-item-url="https://unterbachnertuurli.netlify.app"
            data-item-image={product.image.fluid.src}
            data-item-custom1-name="*Gewünschtes Datum und Zeit"
            data-item-custom1-type="textarea"
            data-item-custom1-required="true"
            data-item-custom2-name="*Ich habe die AGBs gelesen und stimme zu"
            data-item-custom2-options="true|false"
            data-item-custom2-required="true"
            data-item-custom3-name="*Ich bin 16 Jahre oder älter"
            data-item-custom3-options="true|false"
            data-item-custom3-required="true"
          >
            Buchen
          </button>
        </div>
      </div>
    </div>
  )
}

import React from "react"

export default function Footer() {
  return (
    <footer id="footer">
      <div class="container">
        <ul class="icons">
          <a href="#" class="icon fa-instagram">
            <span class="label">Instagram</span>
          </a>
        </ul>
      </div>
      <div class="container">
        &copy; <a href="https://www.instagram.com/jangbhlr/?hl=de">jangbhlr</a>{" "}
        All rights reserved {new Date().getFullYear().toString()}
      </div>
    </footer>
  )
}

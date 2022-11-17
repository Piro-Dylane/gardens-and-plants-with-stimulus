import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="display"
export default class extends Controller {
  static targets = ["button", "form"]
  connect() {
  }

  displayForm(){
    this.formTarget.classList.remove("d-none")
    this.buttonTarget.classList.add("d-none")
  }
}

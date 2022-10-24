import MapHandler from "./mapHandler";
import {Autobind} from "./helpers/decorators";

export default class Form {
  form: HTMLFormElement;
  input: HTMLInputElement;
  address: string;
  map: MapHandler;

  constructor(formId: string) {
    this.form = document.getElementById(formId)! as HTMLFormElement;
    this.input = this.form.querySelector("#address-input")! as HTMLInputElement;
    this.address = "";

    this.map = MapHandler.getInstance();

    this.init();
  }

  init() {
    this.form.addEventListener('submit', this.processForm);
  }

  @Autobind
  processForm(event: SubmitEvent){
    event.preventDefault();

    const tempAddress = this.input.value;
    if(tempAddress.trim().length > 0) {
      this.address = tempAddress;
      this.map.handleAddress(this.address);
    }
  }
}
import axios, {AxiosResponse} from "axios";

export default class MapHandler {
  static map: google.maps.Map;
  private static instance: MapHandler;
  private static mapElement: HTMLElement;
  static apiKey = "AIzaSyCeiqGDOnxO1UfxOnBqdahFWXeF0GgRR3M";

  private constructor() {
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    return this.init();
  }

  private static loadMap() {
    this.map = new google.maps.Map(this.mapElement, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8,
    });
  }

  private static init() {
    this.instance = new MapHandler();

    this.mapElement = document.getElementById("map") as HTMLElement;

    const script = document.createElement('script');

    script.onload = this.loadMap.bind(this);
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&v=weekly`;

    document.head.appendChild(script);

    return this.instance;
  };

  handleAddress(address: string) {

    axios.get<{status: "OK" | string, results: {geometry: {location: {lat:number, lng: number}}}[]}>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${MapHandler.apiKey}`).then((response:AxiosResponse)=> {
      const map = MapHandler.map;

      map.setCenter(response.data.results[0].geometry.location);
      map.setZoom(17);

      new google.maps.Marker({
        position: response.data.results[0].geometry.location,
        map,
        title: "Hello World!",
      });
    }).catch((err: any) => {
      console.log(err.message)
    });
  }
}
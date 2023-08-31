import "leaflet/dist/leaflet.css";
import "./map.scss";
import L from "leaflet";

export const map = L.map("app", {
  center: [51.505, -0.09],
  worldCopyJump: true,
  minZoom: 2,
  zoom: 2,
});

L.tileLayer(
  "http://t1.tianditu.gov.cn/vec_w/wmts?tk=0fc059295e87faeb7543b405c4c4b0d7"
).addTo(map);

const tipMarker = L.marker([51.505, -0.09]);
tipMarker.addTo(map);

window.map = map;

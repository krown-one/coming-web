import "./sass/main.scss";
// Wow
import WOW from 'wowjs';


async function main() {
  window.wow = new WOW.WOW({ live: false });
  window.wow.init();
}

main();
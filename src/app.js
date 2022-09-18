import "./sass/main.scss";
import Photos from './js/Photos'

const photos = new Photos();

async function main() {
  console.log(await photos.getPhotos())
}

main();
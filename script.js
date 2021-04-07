const imageContainer = document.querySelector('.image_container');
const loader = document.querySelector('.loader');
function loaderStart() {
  loader.removeAttribute('hidden');
}
function loaderEnd() {
  loader.setAttribute('hidden', 'true')
}
function setImage(data) {
  data.forEach(image => {
    let item = document.createElement('a');
    let img = document.createElement('img');
    img.src = image.urls.regular;
    img.alt = image.alt_description;
    item.href = image.links.html;
    item.appendChild(img);
    imageContainer.insertAdjacentElement('beforeend', item);
  });
}
async function loadImage() {
  loaderStart();
  const apiKey = 'BxOnw3u3hpqcxNVYGHEWMuJpTokvxp1BqMPqwT9mzkg';
  let count = 10;
  const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  setImage(data);
  loaderEnd();
}
loadImage();

window.addEventListener('scroll', ()=>{
  if (imageContainer.getBoundingClientRect().bottom-window.innerHeight<0) {
    loadImage();
  }
})
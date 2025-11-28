console.log("Hello World");

//TODO: Add in images to JS with JS arrays

const imageData = [
  {
    imageName: "boysOnStreet",
    imageSrc: "./images/boys_on_street.webp",
    imageAlt: "Boys playing on wintery street",
  },
  {
    imageName: "childWithCat",
    imageSrc: "./images/child_with _cat.webp",
    imageAlt: "young girl in Christmas outfit next to a white cat",
  },
  {
    imageName: "childrenOnSledge",
    imageSrc: "./images/DE_Christmas.webp",
    imageAlt: "two children on a sledge with German writing underneath",
  },
];

//TODO: Create thumbnails of above uimages through a function, including a loop

function createThumbnails() {
  const thumbnail = document.getElementById("thumbnail-container");
  imageData.forEach(function (picture) {
    const img = document.createElement("img");
    img.src = picture.imageSrc;
    img.alt = picture.imageAlt;
    img.className = "thumbnail";
    img.addEventListener("click", function () {
      createFullscreenImages(picture);
    });
    thumbnail.appendChild(img);
  });
}

//TODO: create fullscreen Function and add it as an event listener to the thumbnail function

function createFullscreenImages(picture) {
  const fullscreen = document.getElementById("fullscreen-container");
  fullscreen.innerHTML = "";
  const fullImg = document.createElement("img");
  fullImg.src = picture.imageSrc;
  fullImg.alt = picture.imageAlt;
  fullImg.className = "fullscreen";
  fullscreen.appendChild(fullImg);
}

createThumbnails();

//TODO: give buttons functions to move the thumbnail gallery (source: W3schools)

let currentPosition = 0;

function showImageByPosition(position) {
  currentPosition = position;
  const picture = imageData[currentPosition];
  createFullscreenImages(picture);
}

document.getElementById("next").addEventListener("click", function () {
  currentPosition++;
  if (currentPosition >= imageData.length) {
    currentPosition = 0;
  }
  showImageByPosition(currentPosition);
});

document.getElementById("previous").addEventListener("click", function () {
  currentPosition--;
  if (currentPosition < 0) {
    currentPosition = imageData.length - 1;
  }
  showImageByPosition(currentPosition);
});

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

//TODO: show an image once I enter the page:

createFullscreenImages(imageData[0]);

//TODO: give buttons functions to move the thumbnail gallery

let currentPosition = 0; //tracks current position

function showImageByPosition(position) {
  currentPosition = position; // currentPosition will become the parameter in the fuction
  const picture = imageData[currentPosition]; //depending on the position, this will take the correct image from the array
  createFullscreenImages(picture); //then it calls the function from above to create the full screen version
}

//the above is creating a sort of index of the images for the buttons to click through

document.getElementById("next").addEventListener("click", function () {
  //creates an Event Listener every time the button is clicked
  currentPosition++; //once clicked it moves the position up by one
  if (currentPosition >= imageData.length) {
    //if it comes to and end, meaning more clicks than the length of the array it will revert back to position 0(image the beginnging)
    currentPosition = 0;
  }
  showImageByPosition(currentPosition); //it then calls the above function to create a full screen image of the current picture
});

document.getElementById("previous").addEventListener("click", function () {
  currentPosition--;
  if (currentPosition < 0) {
    //this is to make sure that if the previous button goes before the first image, it goes back to the end of the array and pull the last image --> backwards loop
    currentPosition = imageData.length - 1;
  }
  showImageByPosition(currentPosition);
});

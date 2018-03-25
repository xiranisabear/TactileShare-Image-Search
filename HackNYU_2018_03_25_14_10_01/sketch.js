let url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&extras=url_o&text=';
var myFlickrKey = '&api_key=' + '16fa225eb16df1f20ef219626e528838';
let button;
let search;
let searchTerm;
let buttonclicked = false;
let picture_url;
let img;
let canvas;

function setup() {
    cavans = createCanvas(windowWidth, windowHeight);
    search = createInput("search for an image");
    
    search.position(width / 2 - 280, height / 2 - 50);
    button = createButton('submit');

    button.position(width / 2 - 70, height / 2 + 50);
    button.mousePressed(gotIndex);
  
  
  
  search.mouseOver(ReadInput);
  button.mouseOver(ReadButton);
    // buttonclicked = true;
}

 
function ReadInput(){
  responsiveVoice.speak("This is the input box" +""+ "please search for an image");
}

function ReadButton(){
    responsiveVoice.speak("This is the submit button");
}



function draw() {
    // background(0);

}

function gotIndex(data) {

    searchTerm = search.value();
    // print(searchTerm);
    let full_url = url + searchTerm + myFlickrKey;
    // if (buttonclicked) {
    httpGet(full_url, 'json', gotData);


    function gotData(data) {
        print(data.photos.photo.length);
        var i = int(random(-1, data.photos.photo.length + 1));


        print(i);
        picture_url = data.photos.photo[i].url_o;
        // print(picture_url);
        DrawImage(picture_url, data.photos.photo[i].title);

    }


}

function DrawImage(data, title) {
    responsiveVoice.speak("the name of your image is" + " " + title);
    // print(data);

    // background(0,0);
    // img  = createImg(data);
    loadImage(data, function(img) {

        image(img, 0, 0, width, height);

        print('imageloaded!');
    });

}
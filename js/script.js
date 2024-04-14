document.getElementById("menu-toggle").addEventListener("click", function(){
    document.getElementById("menu").classList.toggle("active");
});

var client = contentful.createClient({
    space: '2dk7frn4np2n',
    accessToken: '74PvBzRX4KwXsDxH4wiJCI3BDh_HQlpxInaqnzR9rOw'
});

var homeHero = document.getElementById('home-hero');

client.getEntry('5lhWZBixBkjRvjxcyLB5MG').then(function (entry) {
    var imageContent = document.createElement('img');
    if (entry.fields.imageContent){
        imageContent.src = entry.fields.imageContent.fields.file.url;
        homeHero.append(imageContent);
    }
});

var aboutImage = document.getElementById('about-image');

client.getEntry('6XTDNC2XOGVKKuDoFnuQod').then(function (entry) {
    var imageContent = document.createElement('img');
    if (entry.fields.imageContent){
        imageContent.src = entry.fields.imageContent.fields.file.url;
        aboutImage.append(imageContent);
    }
});

client.getEntry('6tFERH6ANteyuNqFT95rbM').then(function (entry) {
    console.log(entry);

    var imageContent = document.createElement('img');
    if (entry.fields.imageContent){
        imageContent.src = entry.fields.imageContent.fields.file.url;
        aboutImage.append(imageContent);
    }
});

client.getEntry('6tFERH6ANteyuNqFT95rbM').then(function (entry) {
    console.log(entry);

    var processGallery = document.getElementById('process-gallery');

    if (entry.fields.imageContentGallery) {
        var imageContentGallery = entry.fields.imageContentGallery;
        imageContentGallery.forEach(function(imageContent, index) {
            if (imageContent && imageContent.fields && imageContent.fields.file) {
                var imgElement = document.createElement('img');
                imgElement.src = imageContent.fields.file.url;
                processGallery.appendChild(imgElement);
            }
        });
    }
});






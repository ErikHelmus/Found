document.getElementById("menu-toggle").addEventListener("click", function(){
    document.getElementById("menu").classList.toggle("active");
});

var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

var client = contentful.createClient({
    space: '2dk7frn4np2n',
    accessToken: '74PvBzRX4KwXsDxH4wiJCI3BDh_HQlpxInaqnzR9rOw'
});

var productDetails = document.getElementById('product-details');

client.getEntry(id).then(function (entry) {
    console.log(entry);

    var detailDiv = document.createElement('div');
    detailDiv.classList.add('detail-div'); 

    var imageDiv = document.createElement('div');
    imageDiv.classList.add('image-div'); 

    var mainImage = document.createElement('img');
    if (entry.fields.mainImage){
        mainImage.src = entry.fields.mainImage.fields.file.url;
        mainImage.classList.add('mainImage');
        imageDiv.append(mainImage);
    }

    var secondaryImage = document.createElement('img');
    if (entry.fields.secondaryImage){
        secondaryImage.src = entry.fields.secondaryImage.fields.file.url;
        secondaryImage.classList.add('secondaryImage');
        imageDiv.append(secondaryImage);
    }

    var name = document.createElement('h3');
    name.innerHTML = entry.fields.name;
    name.classList.add('name');
    detailDiv.append(name);

    var price = document.createElement('h4');
    price.innerHTML = entry.fields.price;
    price.classList.add('price');
    detailDiv.append(price);

    var description = document.createElement('p');
    description.innerHTML = entry.fields.description;
    description.classList.add('description');
    detailDiv.append(description);

    var addToCart = document.createElement("button");
    addToCart.textContent = "Add to Cart";
    detailDiv.append(addToCart);

    productDetails.append(imageDiv); 
    productDetails.append(detailDiv); 
});

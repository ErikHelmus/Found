document.getElementById("menu-toggle").addEventListener("click", function(){
    document.getElementById("menu").classList.toggle("active");
});

var client = contentful.createClient({
    space: '2dk7frn4np2n',
    accessToken: '74PvBzRX4KwXsDxH4wiJCI3BDh_HQlpxInaqnzR9rOw'
});

var shopHero = document.getElementById('shop-hero');

client.getEntry('5imKaXAGA9Kc4SEh0ypCZb').then(function (entry) {
    console.log(entry.sys);

    var imageContent = document.createElement('img');
    if (entry.fields.imageContent){
        imageContent.src = entry.fields.imageContent.fields.file.url;
        shopHero.append(imageContent);
    }
});

var allProducts = document.getElementById('all-products');

client.getEntries({content_type:'products'}).then(function (entries) {
    entries.items.forEach(function (entry) {
        console.log(entry);

        var productDiv = document.createElement('div');
        productDiv.classList.add('product-div'); 

        var mainImage = document.createElement('img');
        if (entry.fields.mainImage){
            mainImage.src = entry.fields.mainImage.fields.file.url;
            mainImage.classList.add('mainImage');
            productDiv.append(mainImage);
        }

        var name = document.createElement('h3');
        name.innerHTML = entry.fields.name;
        name.classList.add('name');
        productDiv.append(name);

        var price = document.createElement('h4');
        price.innerHTML = entry.fields.price;
        price.classList.add('price');
        productDiv.append(price);

        var linkToDetails = document.createElement('a');
        linkToDetails.href = 'details.html?id=' + entry.sys.id;
        linkToDetails.appendChild(mainImage);

        productDiv.appendChild(linkToDetails);
        allProducts.append(productDiv); 
    });
});

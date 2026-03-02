class product{
    constructor(name,price,description,category,inStock){
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.inStock = inStock;
    }
    formatPrice(){
        return `$${this.price.toFixed(2).toString()}`;
    }

    createProductCard(){
        var instockClass = this.inStock ? "stock-status in-stock" : "stock-status out-of-stock";
        var instockText= this.inStock ? "In stock" : "Out Of stock";
        return `
        <div>
        <h2>${this.name}</h2>
        <div class="price">${this.price}</div>
        <p class="description>${this.description}</p>
        <span class="category">${this.category}</span>

        <div class="${instockClass}">${instockText}</div>
        </div>
        `
    }
}

const products = [new product("Laptop", 99999, "cool gaming laptop", "Electronics", true),new  product("Microwave", 19, "Heat up your food!", "Electronics", false), new product("Table", 37, "Table for holding stuff", "Furinture", false)]


function renderProducts(){
    var elem = document.querySelector("#productGrid")
    elem.innerHTML = ""
    var newInner = '';
    for(item of products){
        newInner += item.createProductCard();
    }

    elem.innerHTML = newInner;
}


function addItemToList(event) {
  // Prevent the default form submission behavior (which would reload the page)
  event.preventDefault();
  
    const formData = new FormData(event.target);
    products.push(new product(    
        document.querySelector("#productName").value.trim(),
        document.querySelector("#productPrice").value.trim(),
        document.querySelector("#productDescription").value.trim(),
        document.querySelector("#productCategory").value.trim(),
        document.querySelector("#productInStock").checked
    ));
    renderProducts();   
    document.querySelector("#productForm").reset();
}

productForm.addEventListener('submit', addItemToList);

renderProducts()
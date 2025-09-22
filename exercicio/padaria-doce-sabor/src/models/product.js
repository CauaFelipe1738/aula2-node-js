class Product {
    constructor(id, name, description, price, categoryId, imageUrl){
        //guarda as informações que o usuario deu
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.categoryId = categoryId;
        this.imageUrl = imageUrl;

        //O Computador preenche algumas coisas sozinho
        this.available = true;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    //transforma bglh no arquivo
    toJSON(){
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            price: this.price,
            categoryId: this.categoryId,
            imageUrl: this.imageUrl,
            available: this.available,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }

    update(newData){
        if (newData.name) this.name = newData.name;
        if (newData.description) this.description = newData.description;
        if (newData.price) this.price = newData.price;
        if (newData.name) this.categoryId = newData.categoryId;
        if (newData.imageUrl) this.imageUrl = newData.imageUrl;
        if (newData.available !== undefined) this.available = newData.available;
    
        this.updatedAt = new Date();
    }

    getFormatted(){
        //transforma 1.5 em real
        return `R$ ${this.price.toFixed(2).replace('.', ',')}`;
    }

    isAvailable(){return this.available === true;}
}

module.exports = Product;
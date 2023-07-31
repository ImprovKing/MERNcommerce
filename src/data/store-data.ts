import { StorageProvider } from './storage-provider';

export interface CartItemDetails {
    // id: number ;
    item: ItemDetails;
    size: string;
    quantity: number;
  }

  export interface ItemDetails {
  map(arg0: (item: any) => number): unknown;
  findIndex(arg0: (cartItem: any) => boolean): unknown;
  id : number ;
  name: string;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  largeImage: string;
}

let loveMenProd = [
  {
    id : 10 ,
    name : "Sinu jacket" ,
    title : "Title for this objects "  ,
    category : "All products " ,
    price : 89 ,
    description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
    image  : "https://images.pexels.com/photos/6732346/pexels-photo-6732346.jpeg?auto=compress&cs=tinysrgb&w=600 " ,
    largeImage : "" ,
} ,
{
  id : 11,
  name : "Ceather jacket" ,
  title : "Title for this objects "  ,
  category : "All products " ,
  price : 89 ,
  description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
  image  : " https://images.pexels.com/photos/4906211/pexels-photo-4906211.jpeg?auto=compress&cs=tinysrgb&w=600" ,
  largeImage : "" ,
} ,
{
  id : 12 ,
  name : "Cte Black"  ,
  title : "Title for this objects "  ,
  category : "All products " ,
  price : 89 ,
  description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
  image  : "https://images.pexels.com/photos/6311511/pexels-photo-6311511.jpeg?auto=compress&cs=tinysrgb&w=600 " ,
  largeImage : "" ,
} ,
{
  id : 13 ,
  name : "Comp jacket" ,
  title : "Title for this objects "  ,
  category : "All products " ,
  price : 89 ,
  description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
  image  : "https://images.pexels.com/photos/2072454/pexels-photo-2072454.jpeg?auto=compress&cs=tinysrgb&w=600 " ,
  largeImage : "" ,
} ,
]

let loveWomenProd = [
  {
    id : 14 ,
    name : "Sinu Denim" ,
    title : "Title for this objects "  ,
    category : "All products " ,
    price : 89 ,
    description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
    image  : "https://images.pexels.com/photos/4960250/pexels-photo-4960250.jpeg?auto=compress&cs=tinysrgb&w=600 " ,
    largeImage : "" ,
} ,
{
  id : 15 ,
  name : "She who Dares MERCH!!!" ,
  title : "Title for this objects "  ,
  category : "All products " ,
  price : 89 ,
  description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
  image  : "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600 " ,
  largeImage : "" ,
} ,
{
  id : 16 ,
  name : "Pink Vortex"  ,
  title : "Title for this objects "  ,
  category : "All products " ,
  price : 89 ,
  description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
  image  : "https://images.pexels.com/photos/2005356/pexels-photo-2005356.jpeg?auto=compress&cs=tinysrgb&w=600" ,
  largeImage : "" ,
} ,
{
  id : 17 ,
  name : "Blackie Sweat Shirt" ,
  title : "Title for this objects "  ,
  category : "All products " ,
  price : 89 ,
  description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
  image  : "https://images.pexels.com/photos/6311574/pexels-photo-6311574.jpeg?auto=compress&cs=tinysrgb&w=600 " ,
  largeImage : "" ,
} ,
]

//categpries 
let Men = [
  {
    id : 14986 ,
    name : "Furry Coat" ,
    title : "Title for this objects "  ,
    category : "Men" ,
    price : 245 ,
    description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
    image  : "https://images.pexels.com/photos/157842/bezel-hairstyle-man-mode-157842.jpeg?auto=compress&cs=tinysrgb&w=600" ,
    largeImage : "https://images.pexels.com/photos/157842/bezel-hairstyle-man-mode-157842.jpeg?auto=compress&cs=tinysrgb&w=600" ,
} ,
{
  id : 159 ,
  name : "Casual office CEO" ,
  title : "Title for this objects "  ,
  category : "Men" ,
  price : 133 ,
  description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
  image  : "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600" ,
  largeImage : "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600" ,
} ,
{
  id : 1645 ,
  name : "T-Shirts and Polos"  ,
  title : "Title for this objects "  ,
  category : "Men " ,
  price : 50 ,
  description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
  image  : "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600" ,
  largeImage : "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600" ,
} ,
{
  id : 17788 ,
  name : "Blackie Sweat Shirt" ,
  title : "Title for this objects "  ,
  category : "All products " ,
  price : 89 ,
  description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
  image  : "https://images.pexels.com/photos/6311574/pexels-photo-6311574.jpeg?auto=compress&cs=tinysrgb&w=600 " ,
  largeImage : "" ,
} ,
]

//access

let Accessories = [
  {
    id : 1486 ,
    name : "french Pearls " ,
    title : "Title for this objects "  ,
    category : "accessories / ladies" ,
    price : 100 ,
    description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
    image  : "https://images.pexels.com/photos/9429420/pexels-photo-9429420.jpeg?auto=compress&cs=tinysrgb&w=600" ,
    largeImage : "https://images.pexels.com/photos/9429420/pexels-photo-9429420.jpeg?auto=compress&cs=tinysrgb&w=6000" ,
} ,
{
  id : 1459 ,
  name : "Blue Pendant" ,
  title : "Title for this objects "  ,
  category : "accessories / ladies " ,
  price : 80 ,
  description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
  image  : "https://images.pexels.com/photos/9168242/pexels-photo-9168242.jpeg?auto=compress&cs=tinysrgb&w=600" ,
  largeImage : "https://images.pexels.com/photos/9168242/pexels-photo-9168242.jpeg?auto=compress&cs=tinysrgb&w=600" ,
} ,
{
  id : 16445 ,
  name : "Ravage Indian pearls"  ,
  title : "Title for this objects "  ,
  category : "accessories / ladies  " ,
  price : 80 ,
  description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
  image  : "https://images.pexels.com/photos/1308582/pexels-photo-1308582.jpeg?auto=compress&cs=tinysrgb&w=600" ,
  largeImage : "https://images.pexels.com/photos/1308582/pexels-photo-1308582.jpeg?auto=compress&cs=tinysrgb&w=600" ,
} ,
{
  id : 177878 ,
  name : "African Beads " ,
  title : "Title for this objects "  ,
  category : "accessories / ladies " ,
  price : 90 ,
  description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
  image  : "https://images.pexels.com/photos/5365254/pexels-photo-5365254.jpeg?auto=compress&cs=tinysrgb&w=600" ,
  largeImage : "https://images.pexels.com/photos/5365254/pexels-photo-5365254.jpeg?auto=compress&cs=tinysrgb&w=600" ,
} ,
{
  id : 1778 ,
  name : "African Beads " ,
  title : "Title for this objects "  ,
  category : "accessories / guys " ,
  price : 90 ,
  description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
  image  : "https://images.pexels.com/photos/10387958/pexels-photo-10387958.jpeg?auto=compress&cs=tinysrgb&w=600" ,
  largeImage : "https://images.pexels.com/photos/10387958/pexels-photo-10387958.jpeg?auto=compress&cs=tinysrgb&w=600" ,
} ,
]


let products = [
    {
        id : 1 ,
        name : "Full Denim" ,
        title : "Title for this objects "  ,
        category : "All products " ,
        price : 89 ,
        description : "https://images.pexels.com/photos/2005356/pexels-photo-2005356.jpeg?auto=compress&cs=tinysrgb&w=600" ,
        image  : " https://images.pexels.com/photos/6764728/pexels-photo-6764728.jpeg?auto=compress&cs=tinysrgb&w=600" ,
        largeImage : "https://images.pexels.com/photos/6769357/pexels-photo-6769357.jpeg?auto=compress&cs=tinysrgb&w=600" ,
    } ,
    {
        id : 2 ,
        name : "Complete Blue Leather jacket" ,
        title : "Title for this objects "  ,
        category : "All products " ,
        price : 89 ,
        description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
        image  : " https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600" ,
        largeImage : "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600" ,
    } ,
    {
        id : 3 ,
        name : "Cowgirl boots" ,
        title : "Title for this objects "  ,
        category : "All products " ,
        price : 89 ,
        description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
        image  : "https://images.pexels.com/photos/6046235/pexels-photo-6046235.jpeg?auto=compress&cs=tinysrgb&w=600 " ,
        largeImage : "https://images.pexels.com/photos/6046235/pexels-photo-6046235.jpeg?auto=compress&cs=tinysrgb&w=600" ,
    } ,
    {
        id : 4 ,
        name : "Frankinse" ,
        title : "Title for this objects "  ,
        category : "All products " ,
        price : 89 ,
        description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
        image  : "https://images.pexels.com/photos/7139956/pexels-photo-7139956.jpeg?auto=compress&cs=tinysrgb&w=600 " ,
        largeImage : "https://images.pexels.com/photos/7139956/pexels-photo-7139956.jpeg?auto=compress&cs=tinysrgb&w=600" ,
    } ,
    {
        id : 5 ,
        name : "Complete Black Formal Wear" ,
        title : "Title for this objects "  ,
        category : "All products " ,
        price : 89 ,
        description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
        image  : " https://images.pexels.com/photos/6303682/pexels-photo-6303682.jpeg?auto=compress&cs=tinysrgb&w=600" ,
        largeImage : "https://images.pexels.com/photos/6303682/pexels-photo-6303682.jpeg?auto=compress&cs=tinysrgb&w=600" ,
    } ,
    {
        id : 6 ,
        name : "Complete Black SKirt" ,
        title : "Title for this objects "  ,
        category : "All products " ,
        price : 89 ,
        description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
        image  : "https://images.pexels.com/photos/5480693/pexels-photo-5480693.jpeg?auto=compress&cs=tinysrgb&w=600 " ,
        largeImage : "https://images.pexels.com/photos/5480693/pexels-photo-5480693.jpeg?auto=compress&cs=tinysrgb&w=600" ,
    } ,
    {
        id : 7 ,
        name : "Gown Black jacket" ,
        title : "Title for this objects "  ,
        category : "All products " ,
        price : 89 ,
        description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
        image  : " https://images.pexels.com/photos/4947748/pexels-photo-4947748.jpeg?auto=compress&cs=tinysrgb&w=600" ,
        largeImage : "https://images.pexels.com/photos/4947748/pexels-photo-4947748.jpeg?auto=compress&cs=tinysrgb&w=600" ,
    } ,
    {
        id : 8 ,
        name : "Flipjacket" ,
        title : "Title for this objects "  ,
        category : "All products " ,
        price : 89 ,
        description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
        image  : " https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" ,
        largeImage : "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" ,
    } ,
    {
        id : 9 ,
        name : "RunMas Vintage " ,
        title : "Title for this objects "  ,
        category : "All products " ,
        price : 89 ,
        description : "pijdvnik ejh9ecbieneih9ww0iwd wb ieb9fuefnoejf ffue9fuwfih0quh9ffiw fb9fe9fuh0qnibfihbw dwudh9wudh0duiw " ,
        image  : " https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=600" ,
        largeImage : "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=600" ,
    } ,
] ;



export class StoreData {
    private storageProvider = StorageProvider.create();

    static getProducts() {
    return products ;
    }

    static getMenLoveProducts() {
      return loveWomenProd ;
      }

      static getWomenLoveProducts() {
        return loveMenProd ;
        }

    async getProductsId(id: number){
    return products.find(
        (products) => products.id === id 
    ) 
    }
  
    addItemToCart(item: ItemDetails, size: string, quantity: number) {
      let Bag = this.storageProvider.get<CartItemDetails[]>('Bag') || [];
      let existing = Bag.find((c : any )=> c.item.id === item.id && c.size === size);
  
      if (!existing) {
        existing = {
          item,
          size,
          quantity,
        };
  
        Bag = [...Bag, existing];
      } else {
        existing.quantity += quantity;
      }
  
      this.setCart(Bag);
    }
  
    static getCart() { 
      return JSON.parse(localStorage.getItem('Bag' || '[]') as '[]') ;
    }
  
    setCart(Bag: CartItemDetails[]) {
      return localStorage.setItem('Bag', JSON.stringify(Bag));
    }
  
    getCartSize(): any {
      return StoreData.getCart() ;
    }
  

    //New Changes Made Now
  }
  
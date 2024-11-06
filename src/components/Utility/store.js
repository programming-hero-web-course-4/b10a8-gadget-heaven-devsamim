import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const getStoreCartList = ()=>{
const storeListStr = localStorage.getItem('cart-list');
if(storeListStr){
  const storeList = JSON.parse(storeListStr);
 
  return storeList;
  
}else{
  
  return [];
}


}

const addStoreCartList = (id)=>{
const getStoreList =  getStoreCartList();
if(getStoreList.includes(id)){
  toast.warning('This Product already added! do not added... ')
}else{
  getStoreList.push(id);
  const listConvert = JSON.stringify(getStoreList);
  localStorage.setItem('cart-list',listConvert);
  toast.success('Product  added! Successfully... ')

}

}

const getWishList = ()=>{

  const getWishStr = localStorage.getItem('wish-list');
if(getWishStr){
  const storeWish = JSON.parse(getWishStr);
  
  return storeWish;
}else{
  return [];
}

}
const addWishList =(id)=>{
const getWishListAdd = getWishList();
if(getWishListAdd.includes(id)){
  toast.warning('This Product Wish Lis already added! do not added... ')
}else{
  getWishListAdd.push(id);
  const addConvert = JSON.stringify(getWishListAdd);
  localStorage.setItem('wish-list',addConvert);
  toast.success('Product Wishlist  added Successfully... ')
}

}



export {
  addStoreCartList,addWishList,getStoreCartList,getWishList
}

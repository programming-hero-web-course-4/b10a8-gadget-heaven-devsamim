import { toast } from "react-toastify";

const getStoreReadList = ()=>{
const storeListStr = localStorage.getItem('read-list');
if(storeListStr){
  const storeList = JSON.parse(storeListStr);
 
  return storeList;
  
}else{
  
  return [];
}


}

const addStoreReadList = (id)=>{
const getStoreList =  getStoreReadList();
if(getStoreList.includes(id)){
  toast('This book already added! do not added... ')
}else{
  getStoreList.push(id);
  const listConvert = JSON.stringify(getStoreList);
  localStorage.setItem('read-list',listConvert);

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
  toast('This book Wish Lis already added! do not added... ')
}else{
  getWishListAdd.push(id);
  const addConvert = JSON.stringify(getWishListAdd);
  localStorage.setItem('wish-list',addConvert);
}

}



export {
  addStoreReadList,addWishList,getStoreReadList,getWishList
}
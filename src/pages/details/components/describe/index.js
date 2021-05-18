import './describe.css'
import {getData} from 'api/getData'
import render from './describe.art'
const url=`https://www.imooc.com/api/mall-wepApp/details/${window.location.search.substring(4,)}`;
getData(url).then(data=>{
 document.getElementById('details-describe').innerHTML=render({
  intros:data.intros,
  refund:data.refund
 })
})
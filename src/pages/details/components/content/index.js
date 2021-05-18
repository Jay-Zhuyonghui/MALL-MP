import './content.css'
import {getData} from 'api/getData'
import render from './content.art'
const url=`https://www.imooc.com/api/mall-wepApp/details/${window.location.search.substring(4,)}`;
getData(url).then(data=>{
 document.getElementById('details-content').innerHTML=render({
  img:data.img,
  title:data.title,
  sold_counts:data.sold_counts,
  vistor_counts:data.vistor_counts,
  tags:data.tags,
 })
})

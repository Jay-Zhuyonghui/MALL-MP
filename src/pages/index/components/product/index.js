import './product.css'
import {getData} from 'api/getData'
import render from './items.art'
import {URL,LAYOUT_ID} from './config'
getData(URL).then(data=>{
 document.getElementById(LAYOUT_ID).innerHTML=render({
  items:data
 })
})
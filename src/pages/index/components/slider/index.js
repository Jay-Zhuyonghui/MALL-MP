import 'swiper/swiper-bundle.min.css';
import './slider.css';
import Swiper from 'swiper/swiper-bundle.min';
import config, { SWIPER_CONTAINER_CLASS,URL,LAYOUT_ID } from './config';
import render from './slider.art';
import { getData } from 'api/getData';

getData(URL).then((data) => {
 document.getElementById(LAYOUT_ID).innerHTML= render({
 imgs: data
 });
 new Swiper(SWIPER_CONTAINER_CLASS, config);
});


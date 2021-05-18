import './header.css'


const CHANG_CLASS_NAME='header-transition';
const INIT_STATE='init';
const CHANG_STATE='changed';

class Header{
 constructor(el,chang_point,scrollContainer,eventEl=scrollContainer){
  this.el=el;
  this.chang_point=chang_point;
  //滚动条所在的容器
  this.scrollContainer=scrollContainer;
  //监听滚动事件的元素
  this.eventEl=eventEl;
  this.setState(INIT_STATE);
  this.addEvent();
 }
 addEvent(){
  this.eventEl.addEventListener('scroll',()=>{
   if(this.needChang()){
    this.setState(CHANG_STATE);
    this.chang();
   }else if(this.needReset()){
    this.setState(INIT_STATE);
    this.reset();
   }
  },false);
 }
 //改变
 chang(){
  this.el.classList.add(CHANG_CLASS_NAME);
 }
 //重置
 reset(){
  this.el.classList.remove(CHANG_CLASS_NAME);
 }
 //是否需要改变
 needChang(){
  return this.state!=CHANG_STATE&&this.scrollContainer.scrollTop>0;
 }
 //是否需要重置
 needReset(){
  return  this.state!==INIT_STATE&&this.scrollContainer.scrollTop<=0;
 }
 //设置状态
 setState(state){
  this.state=state;
 }
 
}
export default Header;



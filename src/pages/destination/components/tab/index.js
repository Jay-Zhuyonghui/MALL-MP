import './tab.css';
import { getData } from 'api/getData';
const URL = 'https://www.imooc.com/api/mall-wepApp/destination/content';
class Tab {
	constructor(el) {
		this.el = el;
		this.itemEls = el.querySelectorAll('.tab-item');
	}
	setActiveItem(index) {
		for (const itemEl of this.itemEls) {
			itemEl.classList.remove('tab-item-active');
		}
		this.itemEls[index].classList.add('tab-item-active');
	}
	to(index) {
		//若上次的请求没有完成就开始了下次请求，则停止上次的请求
		if (this.tabPromise && this.tabPromise.xhr) {
			this.tabPromise.xhr.abort();
		}
		this.setActiveItem(index);
		this.tabPromise = getData(`${URL}/${this.itemEls[index].dataset.id}`);

		return this.tabPromise;
	}
}
export default Tab;

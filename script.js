/** Colors:
 *  #5A7684 - Cadet
 * 	#90FCF9 - Electric Blue
 * 	#011627 - Rich Black FOGRA 29
 * 	#D5C5C8 - Black Shadows
 */
const CADET = '#5A7684'; const ELECTRIC_BLUE = '#5A7684';
const RICH_BLACK = '#011627'; const BLACK_SHADOWS = '#D5C5C8';

//Declare vars for later use, along with display slider value
var body = document.querySelector('body');
var container  = document.querySelector('.container');
var slider = document.querySelector('#rangeSlide');
let p = document.createElement('input');
p.setAttribute('type', 'text'); p.setAttribute('value', slider.value);
p.textContent = slider.value;
body.insertBefore(p, container);


/** generateDivs(e) -> Create new grid based on slider value
 *  Generate new amount of divs.
 */
function generateDivs(e) {
	removeAllChildren(window.container);
let val = Number(e.target.value);
console.log(val);
p.value = val;
window.container.setAttribute('style', `display: grid; gap: 0px; width: 600px; height: 600px; 
						grid-template-columns: repeat(${val}, 1fr); grid-template-rows: repeat(${val}, 1fr);
						margin-top: 2vw;`);
console.log(`Value = '${Number(val)}'`);
for (let i = 0; i < val ; i++) {
	for(let k = 0; k < val; k++) {
	let div = document.createElement('div');
		div.classList.add('grid-square');
		div.addEventListener('mouseover', (e) => e.target.style.backgroundColor = RICH_BLACK);
	window.container.appendChild(div);
		}
	}
	
}
/** setup() -> initial grid setup
 * @return {None}
 */
function setup(){
	for (let i = 0; i < 16 ; i++){
	for(let k = 0; k < 16; k++) {
	let orgDiv = document.createElement('div');
	orgDiv.classList.add('grid-square');
	orgDiv.addEventListener('mouseover', (e) => e.target.style.backgroundColor = RICH_BLACK);
	window.container.appendChild(orgDiv);
	}
}
}
/** removeAllChildren() -> removes all Children from parent 
 * @param  {parent node}
 * @return {None}
 */
function removeAllChildren(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                    END PREP                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
setup();

//Event Listeners to change grid on input
slider.addEventListener('input', generateDivs);
p.addEventListener('input', function(e) {
 window.slider.value = e.target.value;
 generateDivs(e)
});
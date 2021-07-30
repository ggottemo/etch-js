//Declare vars for later use, along with display slider value
var body = document.querySelector('body');
var container  = document.querySelector('.container');
var slider = document.querySelector('#rangeSlide');
let p = document.createElement('input');
p.setAttribute('type', 'text'); p.setAttribute('value', slider.value);
p.textContent = slider.value;
body.insertBefore(p, container);
let clearBtn = document.querySelector('#btn-1');
let borderBtn = document.querySelector('#btn-2');
/** mouseOver(item, color) -> adds event listener to specified node object.
 * @param  item -> Element Object
 * @param  color -> String of valid css color 
 */
function mouseOver(item){
	item.setAttribute('data-filled', "false"); //Add Data attr to keep track of filled squares
	item.addEventListener('mouseover', function(e) {
	 e.target.setAttribute('style', 'animation: colorSquare 1s 1; animation-fill-mode: forwards; ');
	 e.target.setAttribute('data-filled', 'true');
	})
}
/** 
 *  clearGrid() -> sets color of all grid squares to base color.
 */
function clearGrid(){
	for (let i = 0; i < window.container.children.length; i++) {
				if (window.container.children[i].getAttribute('data-filled') == 'true'){
					window.container.children[i].setAttribute('style', 'animation: clearGrid 1s 1; animation-fill-mode: forwards;');
				}
	}
}
/**
 * toggleBorders() -> toggles class that adds border to cells
 */
function toggleBorders(){
	for (let i = 0; i < window.container.children.length; i++) {
		window.container.children[i].classList.toggle('borders');
	}
}

/** generateDivs(e) -> Create new grid based on slider value
 *  Generate new amount of divs.
 */
function generateDivs(e) {
	removeAllChildren(window.container);
let val = Number(e.target.value);
p.value = val;
window.container.setAttribute('style',`grid-template-columns: repeat(${val}, 1fr); grid-template-rows: repeat(${val}, 1fr);`)
//DEBUG console.log(`Value = '${Number(val)}'`); 
for (let i = 0; i < val ; i++) {
	for(let k = 0; k < val; k++) {
	let div = document.createElement('div');
		div.classList.add('grid-square');
		mouseOver(div);
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
	mouseOver(orgDiv);
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
borderBtn.addEventListener('click', toggleBorders);
clearBtn.addEventListener('click', clearGrid);
slider.addEventListener('input', generateDivs);
p.addEventListener('input', function(e) {
 window.slider.value = e.target.value;
 generateDivs(e);
});

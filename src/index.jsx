import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Body from './Body';
import MobileNavBar from './MobileNavBar'

function App() {
    return(
        <div className="main">
            <Navbar />
            <Body />
            <MobileNavBar />

        </div>
        
        
    );
}

ReactDOM.render(<App />, document.querySelector('.root'));


const storiesArrowRight = document.querySelector('.setinha--right');
const storiesArrowLeft = document.querySelector('.setinha--left');
const storiesSlider = document.querySelector('.slider');
const scrollLastPosition = (storiesSlider.scrollWidth - storiesSlider.clientWidth + 36);
let scrollXCoord;

storiesArrowRight.addEventListener('click', ()=>{
    const pixelsMovedPerClick = 250;
    scrollXCoord = storiesSlider.scrollLeft;
    if (scrollXCoord <= (scrollLastPosition - pixelsMovedPerClick)) {
        storiesArrowLeft.classList.remove('hidden');
        scrollXCoord += pixelsMovedPerClick;
        storiesSlider.scrollTo(scrollXCoord, 0);


        console.log(scrollXCoord);
    } else {
        scrollXCoord += pixelsMovedPerClick;
        storiesSlider.scrollTo(scrollXCoord, 0);
        storiesArrowRight.classList.add('hidden')
        
    }
})

storiesArrowLeft.addEventListener('click', ()=>{
    const pixelsMovedPerClick = 250;
    scrollXCoord = storiesSlider.scrollLeft;
    if (scrollXCoord >= pixelsMovedPerClick) {
        storiesArrowRight.classList.remove('hidden');
        scrollXCoord -= pixelsMovedPerClick;
        storiesSlider.scrollTo(scrollXCoord, 0);

        console.log(scrollXCoord);
        
    } else {
        storiesArrowLeft.classList.add('hidden');
        storiesSlider.scrollTo(0, 0);
    }
})



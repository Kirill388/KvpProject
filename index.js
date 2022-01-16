let arrows = document.querySelectorAll(".strelka");
let gears = document.querySelectorAll(".img-richag-krug-1");
let gearDeg=[0,0,0,0,0,0,0,0,0,0];
let arrowDeg = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let arrowsAmplitude = [25,5,5,5,5,5,5,5,5,5,5,5,5,5,5];


setHeight();
function setHeight()
{
    let div1 = document.getElementById("bac1");
    div1.style.height = div1.clientWidth/1.25;
}


document.addEventListener("DOMContentLoaded", event => {

    setInterval(()=>{


        for(let i=0;i<arrows.length;i++){
            let rand = Math.random()*arrowsAmplitude[i]*2-arrowsAmplitude[i];

            console.log(rand);

            arrowDeg[i]+=rand;
            arrowDeg[i] = checkDiapazon(arrowDeg[i], i);
            console.log(arrowDeg[i] + " "+ i);
            arrows[i].style.WebkitTransitionDuration="100ms";
            arrows[i].style.transform = 'rotate('+arrowDeg[i]+'deg)';
        }
    },100);
});
window.addEventListener("resize", setHeight);

for(let i=0;i<gears.length;i++) {
    gears[i].addEventListener("mousedown", event => {
        arrowsAmplitude[i]=arrowsAmplitude[i]-5;
        gearDeg[i]+=80;
        gears[i].style.WebkitTransitionDuration="1s";
        gears[i].style.transform = 'rotate('+gearDeg[i]+'deg)';
    });

}

function checkDiapazon(a,i){
    if(a>=arrowsAmplitude[i]||a<=-arrowsAmplitude[i]){
        a = Math.random()*i*2-i;
    }
    return a;
}




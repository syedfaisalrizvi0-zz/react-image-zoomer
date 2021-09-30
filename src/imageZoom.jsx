import React ,{ useRef , useState } from "react";
var timer  = null;
export default function Mangnifier(props){
    const zoom  = props.zoom ? props.zoom : 3; 
    const imgEl = useRef(null);
    const overlayEl =  useRef(null);
    const imgStyle = {
        position:"relative"
    }
    const [overlayCss,setOverlayCss] =  useState({
        display:'none',
        backgroundImage: `url("${props.src}")`,
        backgroundRepeat: 'no-repeat',
        position: "absolute",
        border: "3px solid #000",
        borderRadius: "50%",
        cursor: "none",
        /*Set the size of the magnifier glass:*/
        width: "100px",
        height: "100px",
    });
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = imgEl.current.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }
    const zoomIn  =  function (event) {
        clearTimeout(timer);
        let bw = 3;
        let pos  = getCursorPos(event);
        let x = pos.x;
        let y = pos.y;
        let w = overlayEl.current.offsetWidth / 2;
        let h = overlayEl.current.offsetHeight / 2;
        if (x > imgEl.current.width - (w / zoom)) {x = imgEl.current.width - (w / zoom);}
        if (x < w / zoom) {x = w / zoom;}
        if (y > imgEl.current.height - (h / zoom)) {y = imgEl.current.height - (h / zoom);}
        if (y < h / zoom) {y = h / zoom;}
        setOverlayCss({...overlayCss , 
        display: 'inline-block' ,left:(x-w)+"px",top:(y-h)+"px" ,
        backgroundPosition:"-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px" ,
        backgroundSize: (imgEl.current.width * zoom) + "px " + (imgEl.current.height * zoom) + "px"
    });
    timer  = setTimeout(zoomOut,500);
    }
    const  zoomOut =  function() {
        setOverlayCss({...overlayCss , display: 'none'});
    }
    return (
        <div style={imgStyle}>
         <div id="overlay" 
         ref={overlayEl} 
         style={overlayCss} 
         onMouseMove={zoomIn}
         onTouchMove={zoomIn}
         onTouchEnd={zoomOut}

         ></div>
         <img  {...props} 
          ref={imgEl}
          onMouseMove={zoomIn}
          onTouchMove={zoomIn}
          onTouchEnd={zoomOut}
         />
        </div>
    )
}
import React ,{ useRef , useState } from "react";
export default function  ImageZoom(props){
    const imgEl = useRef(null);
    const [overlayCss,setOverlayCss] =  useState({
        display:'none',
        backgroundPosition:"",
        backgroundImage: `url("${props.src}")`,
        backgroundRepeat: 'no-repeat',
        width: props.zoomWidth? props.zoomWidth : "500px",
        height: props.zoomHeight? props.zoomHeight : "500px",
        boxShadow: "0 5px 10px -2px rgba(0, 0, 0, 0.3)",
        PointerEvent: "none",
        position: "absolute",
        border: "2px solid #efefef",
        zIndex: 99,
        transition: "opacity 0.2s"
    });
    const zoomIn  =  function (event) {
        var img = imgEl.current;
        var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
        var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
        setOverlayCss({...overlayCss , display: 'inline-block' , backgroundPosition:(-posX * 4) + "px " + (-posY * 4) + "px" });
    }
    const  zoomOut =  function() {
        setOverlayCss({...overlayCss , display: 'none'});
    }
    return (
        <React.Fragment>
         <img  {...props} 
          ref={imgEl}
          onMouseMove={zoomIn}
          onMouseOut={zoomOut}
         />
        <div id="overlay" style={overlayCss} ></div>
        </React.Fragment>
    )
}
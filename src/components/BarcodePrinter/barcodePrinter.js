import React from 'react';
import BarCode from 'react-barcode';
import html2canvas from 'html2canvas';


export function BarcodePrinter(data){
    //const wrapper_ref = React.useRef();
    const code=data.code;
    /*const onClick=(e)=>{
       const opt = {
          scale: 4
      }
      const elem = wrapper_ref.current;
      html2canvas(elem, opt).then(canvas => {
          const iframe = document.createElement('iframe')
          iframe.name = 'printf'
          iframe.id = 'printf'
          iframe.height = 0;
          iframe.width = 0;
          document.body.appendChild(iframe)
  
          const imgUrl = canvas.toDataURL({
              format: 'jpeg',
              quality: '1.0'
          })
  
          const style=`
              height:30vh;
              width:100vw;
              position:absolute;
              left:0:
              top:0;
          `;
  
          const url = `<img style="${style}" src="${imgUrl}"/>`;
          var newWin = window.frames["printf"];
          newWin.document.write(`<body onload="window.print()">${url}</body>`);
          newWin.document.close();
  
      });
    }*/
  
    return (
        <div style={{marginTop:"30px"}}>
          <div >
              <BarCode
                value={code}
             />
          </div>
          
        </div>
      );
  }
  

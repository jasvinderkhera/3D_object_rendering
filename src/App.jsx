import { useState } from 'react'
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const modellist = [
  {name:"car",
    path: '../public/models/aston_martin_v8_vantage_v600.glb'
  },
  {name:"brake",
    path: '../public/models/free_-_brake_caliper_brembo.glb'
  },
  {name:"bee",
    path: '../public/models/stylized_flying_bee_bird_rigged.glb'
  }
]

function App() {
  const [show, setShow] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

   const openModel = (modelPath) => {
    setActiveModal(modelPath);
    setShow(true);
  };

  return (
    <>
     <div className="container mt-5 mx-auto">
      <h1 className='text-center my-3'>3D Model Rendering in React.Js</h1>
      <div className="row gap-2 justify-content-center">
        {modellist.map((item,index)=>(
          <div className="col-md-3 mb-4 px-0 border border-1 border-secondary" key={index}>
            <div className="preview-box" onClick={()=>openModel(item.path)}>
              <model-viewer src={item.path} autoplay camera-controls auto-rotate shadow-intensity="1"></model-viewer>
              <p className='text-center my-2'>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
     </div>

     {/* Fullscreen Modal */}
     <Modal
     show={show}
     onHide={()=>setShow(false)}
     size='xl'
     centered
     fullscreen
     >

      <Modal.Header closeButton>
        <Modal.Title>Model Viewer</Modal.Title>
          </Modal.Header>
        <Modal.Body>
          {activeModal && (
            <model-viewer
            src={activeModal}
            autoplay
            camera-controls
            auto-rotate
            shadow-intensity="1"
            style={{width:"100%", height: "90vh"}}
            ></model-viewer>
          )}
        </Modal.Body>
    
     </Modal>

    </>
  )
}

export default App

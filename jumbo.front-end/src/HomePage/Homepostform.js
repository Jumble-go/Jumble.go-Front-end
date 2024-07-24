import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from "react"
import Context from '../Context/Contex';
import { ModalTitle } from 'react-bootstrap';

import axios from 'axios';

function FormFilePost() {
    const { postToggle, setPostToggle } = useContext(Context)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [docFile, setFile]= useState("")

    const uploadImg = async () => {
      console.log(docFile)
      const bodyFormData = new FormData()
      bodyFormData.append("file", docFile)
      bodyFormData.append("upload_present", "m6itthaa")
        console.log(bodyFormData)
      let dataAx =  await axios.post("https://api.cloudinary.com/v1_1/dej7en15p/image/upload", bodyFormData)

    //   console.log(dataAx)

    // axios({
    //     method: "post",
    //     url: "https://api.cloudinary.com/v1_1/dej7en15p/image/upload",
    //     data: bodyFormData,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //     .then(function (response) {
    //       //handle success
    //       console.log(response);
    //     })
    }



    return (
            <div>
                {
                postToggle && <div style={{ paddingBlock: "2%", display: "flex", justifyContent: 'center' }} >
                        <div style={{ backgroundColor: "white", width: "85%" }}>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
                                <Form.Label column sm="2">
                                    User:
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue='Marcyuser' />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="1">
                                    Name of prodcut:
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="text" style={{ width: "40%" }} />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description of Item</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="1">
                                    Price:
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control placeholder="Only Numbers" style={{ width: "40%" }} />
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3" >
                                <Form.Label>Upload file </Form.Label>
                                <Form.Control type="file" style={{ width: "45%" }} onChange={(e)=>{setFile(e.target.files[0])}} />
                            </Form.Group>
                            <div>
                                <Button variant="outline-success" onClick={(e) =>{ uploadImg()}} >Success</Button>{' '}
                            </div>

                        </div>
                    </div>
                }
            </div>
        
    );
}

export default FormFilePost;
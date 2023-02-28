import { useState } from "react"
import { useLocation } from "react-router";
import styles from './EditShoe.module.css'

import { EditShoeFormData } from "../../types/forms";
import { User , Shoe } from "../../types/models";

interface EditShoeFormProps {
  user: User | null;
  handleUpdateShoe: (data: Shoe) => Promise<void>
  // handleAddShoe: (form: EditShoeFormData ) => void
  
}

const EditShoeForm = (props: EditShoeFormProps) : JSX.Element => {
  const {state} = useLocation()
  // const [form, setForm] = useState<EditShoeFormData>({
    const [form, setForm] = useState(state)

    console.log('this is state on edit forms', state)
    
  //   ({
  //   style: state.style,

  //   info: state.info,
  //   // added this 
  //   id: state.id,
  // })
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [event.target.name]: event.target.value})
  }
  
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('form', form)
    props.handleUpdateShoe(form)

  }
  return (
    <>
    <main className={styles.container}>
    <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
    <h1>Edit Shoe Form</h1>
    <h2>Make changes on the form below and then click the button to save</h2>
    <div>
      <label htmlFor="style-input">Style</label>
      <input
        onChange={handleChange}
        required
        type="text"
        name="style"
        id="style-input"
        placeholder="Style"
        value={form.style}
      />
    </div>
      {/* <div>
      <label htmlFor="photo-input">Photo</label>
      <input
        onChange={handleChange}
        required
        type="text"
        name="photo"
        id="photo-input"
        placeholder="Photo"
        value={form.photo}
      />
      </div> */}
      <div>
      <label htmlFor="info-input">Info</label>
      <input
        onChange={handleChange}
        required
        type="text"
        name="info"
        id="info-input"
        placeholder="Info"
        value={form.info}
      />
      </div>
      
      <button type="submit">SUBMIT</button> 
    
    </form>
  </main>
    </>

  )

}

export default EditShoeForm
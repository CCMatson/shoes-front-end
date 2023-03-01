import React, { useState } from "react"
import { NewShoeFormData } from "../../types/forms"
import { User } from "../../types/models"
import styles from './NewShoes.module.css'

interface NewShoeFormProps {
  user: User | null;
  handleAddShoe: (form: NewShoeFormData ) => void
}

const NewShoeForm = (props: NewShoeFormProps): JSX.Element => {
  const { user, handleAddShoe } = props
  const [form, setForm] = useState<NewShoeFormData>({
    style: '',
    // photo: '',
    info: '',
  })


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.handleAddShoe(form)
  }

  return (
    <main className={styles.container}>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
      <h1>Add a shoe with this form: </h1>
      <h2>Write the style and shoe information on the form below and then click the button to save</h2>
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
{/* 
        <label htmlFor="photo-upload">Photo</label>
        <label></label>
        <input
          onChange={handleChangePhoto}
          type="file"
          name="photo"
          placeholder="Photo"
          id="photo-upload"
          value={form.photo}
        /> */}
        <button type="submit">SAVE NEW SHOES TO THE COLLECTION</button>
      </form>
    </main>
  );
}



export default NewShoeForm


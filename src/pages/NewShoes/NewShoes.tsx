import React, { useState } from "react"
import { NewShoeFormData } from "../../types/forms"
import { User } from "../../types/models"
import styles from './NewShoes.module.css'

interface NewShoeFormProps {
  user: User | null;
  handleAddShoe: (form: NewShoeFormData) => void
}

interface ShoeFormData {
  style: string,
  info: string,
  photo: string,
}

const NewShoeForm = (props: NewShoeFormProps): JSX.Element => {
  // const { user, handleAddShoe } = props
  const [form, setForm] = useState<NewShoeFormData>({
    style: '',
    info: '',
    photo: '',
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
        <div>
          <label htmlFor="url-input">Photo URL</label>
          <input
            onChange={handleChange}
            required
            type="text"
            name="url"
            id="url-input"
            placeholder="URL"
            value={form.photo}
          />
        </div>
        <button type="submit">SAVE NEW SHOES TO THE COLLECTION</button>
      </form>
      <div className={styles.image}><img src="https://i.imgur.com/D4hhViw.png" alt="" /></div>
    </main>
  );
}



export default NewShoeForm


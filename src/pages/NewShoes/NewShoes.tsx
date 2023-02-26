import  React , { useState } from "react"
import { NewShoeFormData } from "../../types/forms"
import { User } from "../../types/models"
import styles from './NewShoes.module.css'

interface NewShoeFormProps {
  user: User | null;
  handleAddShoe: (form: NewShoeFormData , photo: File | null ) => void
}

const NewShoeForm = (props: NewShoeFormProps ): JSX.Element => {
  console.log(props, 'newShoeFormProps')
    const { user, handleAddShoe} = props
    const [form, setForm] = useState<NewShoeFormData>({
      style: '',
      photo: '',
      info: '',
    })

    const [photoData, setPhotoData] = useState<object>({})
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setForm({ ...form, [event.target.name]: event.target.value })
}

const handleChangePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
  setPhotoData({ photo: event.target.value[0] })
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  handleAddShoe(form , photoData.photo)
}

return (
  <main className={styles.container}>
    <h1 className={styles.h1}>Add a shoe with this form: </h1>
    <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
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

      <label htmlFor="photo-upload">Photo</label>
      <input
        onChange={handleChangePhoto}
        type="file"
        name="photo"
        id="photo-upload"
        placeholder="Photo"
        // value={form.photo}
      />
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
      <button type="submit">SUBMIT</button>
    </form>
  </main>
);
}



export default NewShoeForm


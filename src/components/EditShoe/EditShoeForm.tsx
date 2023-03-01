import { useState } from "react"
import { useLocation } from "react-router";
import styles from './EditShoe.module.css'

// import { EditShoeFormData } from "../../types/forms";
import { User, Shoe } from "../../types/models";

interface EditShoeFormProps {
  user: User | null;
  handleUpdateShoe: (data: Shoe) => Promise<void>
}

const EditShoeForm = (props: EditShoeFormProps): JSX.Element => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.handleUpdateShoe(form)

  }
  return (
    <>
      <main className={styles.container}>
      <div><img src="https://i.imgur.com/ACAgjTN.png" alt="" /></div>
        <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
          <h1>Edit Shoe Form</h1>
          <h2>Make changes on the form below and click the button to save</h2>
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
          <button type="submit">SAVE CHANGES</button>
        </form>
      </main>
    </>

  )

}

export default EditShoeForm
import  React , { useState } from "react"
import { NewShoeFormData } from "../../types/forms"
// import { User } from "../../types/models"
// import { Shoe } from '../../types/models'

// interface NewShoeProps {
//   handleAddShoe: (FormData: NewShoeFormData) => void
// }

// interface Shoe {
//   style: string,
//   photo: string,
//   info: string
// }

interface NewShoeFormProps {
  handleAddShoe: (form: NewShoeFormData ) => void
}

const NewShoeForm = (props: NewShoeFormProps ): JSX.Element => {
  // const NewShoe: React.FC<NewShoeProps> = (props) => {
    const { handleAddShoe} = props
    const [form, setForm] = useState<NewShoeFormData>({
      style: '',
      photo: '',
      info: '',
    })
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = event.target
  // setForm(prevState => ({ ...prevState, [name]: value}))
  setForm({ ...form, [event.target.name]: event.target.value })
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  props.handleAddShoe(form)
    // setForm({ ...form })

  // setForm({
  //   style: '',
  //   photo: '',
  //   info: '',
  // })
}

return (
  <main className="newShoe">
    <h1>Add a shoe with this form: </h1>
    <form autoComplete="off" onSubmit={handleSubmit} >
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


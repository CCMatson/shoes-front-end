import  React , { useState } from "react"
import { NewShoeFormData } from "../../types/forms"
import { User } from "../../types/models"
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
  user: User | null;
  handleAddShoe: (form: NewShoeFormData , photo: File | null ) => void
}

const NewShoeForm = (props: NewShoeFormProps ): JSX.Element => {
  // const NewShoe: React.FC<NewShoeProps> = (props) => {
    const { user, handleAddShoe} = props
    const [form, setForm] = useState<NewShoeFormData>({
      style: '',
      photo: '',
      info: '',
    })

    const [photoData, setPhotoData] = useState<object>({})
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = event.target
  // setForm(prevState => ({ ...prevState, [name]: value}))
  setForm({ ...form, [event.target.name]: event.target.value })
}

const handleChangePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
  setPhotoData({ photo: event.target.value[0] })
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  handleAddShoe(form , photoData.photo)
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


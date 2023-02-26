// import { useState } from "react"
// import { useLocation } from "react-router";

// import { NewShoeFormData } from "../../types/forms";
// import { User , Shoe } from "../../types/models";

// interface EditShoeFormProps {
//   user: User | null;
//   handleUpdateShoe: (data: Shoe) => Promise<void>
// }

// const EditShoeForm = (props: EditShoeFormProps) : JSX.Element => {
//   const {state} = useLocation()
//   const {user, handleUpdateShoe} = props
//   const [form, setForm] = useState<Shoe>({
//     style: state.style,
//     photo: state.photo,
//     info: state.info,
//   })

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({...form, [event.target.name]: event.target.value})
//   }

//   const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     handleUpdateShoe(form)
//   }
//   return (
//     <>
//     <main className="newShoe">
//     <h1>Edit Shoe Form</h1>
//     <form autoComplete="off" onSubmit={handleSubmit} >
//       <label htmlFor="style-input">Style</label>
//       <input
//         onChange={handleChange}
//         required
//         type="text"
//         name="style"
//         id="style-input"
//         placeholder="Style"
//         value={form.style}
//       />

//       <label htmlFor="photo-input">Photo</label>
//       <input
//         onChange={handleChange}
//         required
//         type="text"
//         name="photo"
//         id="photo-input"
//         placeholder="Photo"
//         value={form.photo}
//       />
//       <label htmlFor="info-input">Info</label>
//       <input
//         onChange={handleChange}
//         required
//         type="text"
//         name="info"
//         id="info-input"
//         placeholder="Info"
//         value={form.info}
//       />
//       <button type="submit">SUBMIT</button>
//     </form>
//   </main>
//     </>

//   )

// }

// export default EditShoeForm
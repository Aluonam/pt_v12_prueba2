
// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form';
// import ModalAnt from './ModalAnt';


// export interface formPropsTypes {
//     name: string;
//     pass?: string;
//     age?: number;
//     mail?: string;
//     country?: string;
// }

// const ReviewForm = () => {
//     return <></>


// //     const { register, handleSubmit } = useForm<formPropsTypes>();

// //     const [dataUserForm, setDataUserForm] = useState<formPropsTypes>({
// //         name: '',
// //         pass: '',
// //         age: 0,
// //         mail: '',
// //         country: '',
// //     })

// //     const handleSubmitForm = (data:formPropsTypes)=>{
// //         console.log('datos del usuario:',data)
// //         setDataUserForm(data)
// //         console.log('datos de USUARIO',dataUserForm)
       
// //     }



// //   return (
// //     <>
// //     <div>
// //       <h3>Formulario con useForm</h3>
// //     <form onSubmit={handleSubmit(handleSubmitForm)}>
// //         <div>
// //             <label>Name:</label>
// //             <input type='text' required {...register('name')}></input>
// //         </div>
// //         <div>
// //             <label>Password:</label>
// //             <input type='password' {...register('pass')}></input>
// //         </div>
// //         <div>
// //             <label>Age:</label>
// //             <input type='number' {...register('age')}></input>
// //         </div>
// //         <div>
// //             <label>Email:</label>
// //             <input type='text' {...register('mail')}></input>
// //         </div>
// //         <div>
// //             <label>Country:</label>
// //             <select {...register('country')}>
// //             <option value='es'>España</option>
// //             <option value='pr'>Portugal</option>
// //             <option value='fr'>Francia</option>
// //           </select>
// //         </div>
// //          {/* <ModalAnt dataUserForm={dataUserForm} handleSubmitModal={handleSubmit(handleSubmitForm)}></ModalAnt> */}
// //     </form>   
// //     </div>
   
//     // </>
// //   )
// }

// export default ReviewForm
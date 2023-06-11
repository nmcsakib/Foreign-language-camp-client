import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
const navigate = useNavigate()
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  
    const onSubmit = data => {
  
      const formData = new FormData();
      formData.append('image', data.thumbnail[0])
  
      fetch(img_hosting_url, {
          method: 'POST',
          body: formData
      })
      .then(res => res.json())
      .then(imgResponse => {
          if(imgResponse.success){

              const imgURL = imgResponse.data.display_url || 'https://picsum.photos/200/300';
              console.log(imgURL);
          const { email, name, title, seat, price } = data
          const newClass = { instructor: name, instructorEmail: email, image: imgURL, title: title, price: parseFloat(price), seat: parseFloat(seat), status: 'pending' }
          console.log(newClass);
          axiosSecure.post('/classes', newClass).then(data => {
            console.log('after posting new menu item', data.data)
            if (data.data.insertedId) {
              reset();
              navigate('/dashboard/my-classes')
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Item added successfully',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
        }
      }).catch(err => console.log(err))
  }

  return (
    <div className=" pt-14 text-slate-800">
      <section className="bg-purple-200/10  rounded-lg w-5/6  mx-auto backdrop-blur-xl body-font relative">
        <div className="container px-5 py-10 mx-auto" >
          <div className="flex flex-col text-center w-full mb-12" >
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add A Class</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-slate-900">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="lg:w-5/6 md:w-2/3 mx-auto" >
            <div className="flex flex-wrap -m-2" >
              <div className="p-2 w-1/2" >
                <div className="relative" >

                  <input readOnly defaultValue={user?.displayName} {...register("name", { required: true })} placeholder="Your Name" type="text" id="name" name="name" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline py-2  text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2" >
                <div className="relative" >

                  <input readOnly defaultValue={user?.email}  {...register("email", { required: true })} placeholder="Your email" type="email" id="email" name="email" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline py-2 text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2" >
                <div className="relative" >
               
                  <input  {...register("thumbnail", { required: true })} placeholder="Class Thumbnail" type="file" className="file-input py-2 outline bg-white/30  file-input-bordered w-full bg-transparent rounded " />
                </div>
              </div>
              <div className="p-2 w-1/2" >
                <div className="relative" >

                  <input  {...register("title", { required: true })} placeholder="Class Title" type="text" id="title" name="title" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline py-2 text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2" >
                <div className="relative" >

                  <input  {...register("seat", { required: true })} placeholder="Available seat" type="number" id="seat" name="seat" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline py-2 text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2" >
                <div className="relative" >

                  <input  {...register("price", { required: true })} placeholder="Price (USD)" type="number" id="price" name="price" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline py-2 text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div className="p-2 w-full" >
                <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus hover:bg-indigo-600 rounded text-lg">Add</button>
              </div>

            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddClass;
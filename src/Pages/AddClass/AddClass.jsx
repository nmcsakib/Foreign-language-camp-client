import { useForm } from "react-hook-form";

const AddClass = () => {
  

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    reset()
  }

    return (
        <div className=" pt-14 text-slate-800">
    <section className="bg-purple-200/10  rounded-lg w-5/6  mx-auto backdrop-blur-xl body-font relative">
  <div className="container px-5 py-10 mx-auto" >
    <div className="flex flex-col text-center w-full mb-12" >
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add A Class</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-slate-900">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <form  onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 md:w-2/3 mx-auto" >
      <div className="flex flex-wrap -m-2" >
        <div className="p-2 w-1/2" >
          <div className="relative" >
            
            <input  {...register("name", {required: true})} placeholder="Your Name" type="text" id="name" name="name" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2" >
          <div className="relative" >
            
            <input  {...register("email", {required: true})} placeholder="Your email" type="email" id="email" name="email" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2" >
          <div className="relative" >
            
            <input  {...register("thumbnail", {required: true})} placeholder="Class Thumbnail" type="file" id="name" name="name" className="file-input file-input-bordered w-full bg-transparent bg-opacity-50 rounded "/>
          </div>
        </div>
        <div className="p-2 w-1/2" >
          <div className="relative" >
            
            <input  {...register("title", {required: true})} placeholder="Class Title" type="email" id="email" name="email" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2" >
          <div className="relative" >
            
            <input  {...register("seat", {required: true})} placeholder="Available seat" type="number" id="seat" name="seat" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2" >
          <div className="relative" >
            
            <input  {...register("price", {required: true})} placeholder="Price (USD)" type="number" id="price" name="price" className="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        
        <div className="p-2 w-full" >
          <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add</button>
        </div>
        
      </div>
    </form>
  </div>
</section>            
        </div>
    );
};

export default AddClass;
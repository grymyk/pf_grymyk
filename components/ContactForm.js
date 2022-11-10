import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => console.log(data);
    console.log(errors);


  const btn_style = `flex text-white font-medium bg-gray-700 border-0
      py-2 px-6 focus:outline-none hover:bg-violet-400 rounded-md text-lg
      dark:bg-gray-300 dark:text-black dark:hover:bg-violet-400
      dark:hover:text-white
  `

  const input_holder_cls = `py-2 w-full`

  const input_cls = `dark:bg-transparent w-full bg-gray-100 bg-opacity-50
      rounded border border-gray-300 focus:border-violet-400
      focus:bg-white focus:ring-2 focus:ring-violet-200 text-base outline-none
      text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
  `

  return (
      <form onSubmit = { handleSubmit(onSubmit) }>
          <div className = "flex flex-wrap text-md">
            <div className = {input_holder_cls} >
              <div className ="relative">
                
                <label
                  htmlFor="name"
                  className="leading-7 text-gray-600"
                >
                  Name
                </label>
                
                <input
                  type = "text"
                  id = "name"
                  name = "name"
                  className = { input_cls }
                  {...register("name", { required: true })}
                />
              
              </div>
            </div>
            
            <div className = { input_holder_cls } >
              <div className="relative">
                
                <label
                  htmlFor = "email"
                  className = "leading-7 text-gray-600"
                >
                  Email
                </label>  
                
                <input
                  type = "email"
                  id = "email"
                  name = "email"
                  className = { input_cls }
                  {...register("email", { required: true })}
                />
                
              </div>
            </div>

            <div className = { input_holder_cls } >
              <div className="relative">
                
                <label
                  htmlFor = "message"
                  className = "leading-7 text-gray-600"
                >
                  Message
                </label>

                <textarea
                  id = "message"
                  name = "message"
                  className = { input_cls }
                  {...register("message")}
                ></textarea>
              
              </div>
            </div>

            <div className = { input_holder_cls } >
                <button className = { btn_style } >
                  Send Message
                </button>
            </div>
          </div>
        </form>
  );
}

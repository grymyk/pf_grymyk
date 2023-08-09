import React, { useState } from 'react';
import axios from 'axios';

export default function Formspree() {
    const btn_style = `flex text-white font-medium bg-gray-700 border-0
        py-2 px-6 focus:outline-none hover:bg-violet-400 rounded-md text-lg
        dark:bg-gray-300 dark:text-black dark:hover:bg-violet-400
        dark:hover:text-white
    `

    const input_holder_cls = `py-2 w-full`

    const input_cls = `w-full bg-gray-100 bg-opacity-50 rounded
        border border-gray-300 text-base outline-none text-gray-700 py-1 px-3
        leading-8 transition-colors duration-200 ease-in-out
        dark:bg-transparent
        focus:border-violet-400 focus:bg-white focus:ring-2
        focus:ring-violet-200
    `

    const address_cls = `not-italic text-lg dark:text-gray-300 font-Spartan`

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });
  
  
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleServerResponse = (ok, msg) => {
    if ( ok ) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });

      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (event) => {
    event.persist();

    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mknljoaj',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been sent.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main>
      <form onSubmit = { handleOnSubmit }>

      <div className = { input_holder_cls } >
        <div className="relative">
                <label
                    htmlFor = "name"
                    className = "leading-7 text-gray-600"
                >
                    Name
                </label>
                <input
                    id = "name"
                    type = "name"
                    name = "_replyto"
                    onChange = { handleOnChange }
                    required
                    value = { inputs.name }
                    className = { input_cls }
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
                    id = "email"
                    type = "email"
                    name = "_replyto"
                    onChange = { handleOnChange }
                    required
                    value = { inputs.email }
                    className = { input_cls }
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
                    onChange = { handleOnChange }
                    required
                    value = { inputs.message }
                    className = { input_cls }
                />
            </div>
        </div>

        <div className = { input_holder_cls } >
            <button
                type = "submit"
                disabled = { status.submitting }
                className = { btn_style }    
            >
            {
                !status.submitting
                ? !status.submitted
                ? 'Send Message'
                : 'Sent'
                : 'Sending...'
                }
            </button>
        </div>
        
      </form>
        {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg &&
            <p className = { address_cls }>{ status.info.msg }</p>
            }
    </main>
  );
};
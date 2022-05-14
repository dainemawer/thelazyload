import { useState } from 'react';
import Layout from '@components/Layout/Layout'
import Meta from '@components/Meta/Meta'
import { useForm } from "react-hook-form";

const Submit = () => {
    const [submitted, setSubmitted] = useState('Submit');
    const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const onSubmit = data => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();

                if (data.honeypot.length > 0) {
                   return false;
                }

                const body = {
                    to: 'hello@dainemawer.com',
                    from: data.email,
                    name: data.name,
                    message: data.message,
                    subject: `⚡️ thelazyload | Form submission`,
                    text_body: `Hey Daine, you have a new submission from thelazyload.com.\n\n${data.message}`,
                    html_body: `<p>Hey Daine, you have a new submission from thelazyload.com.</p>\n\n<p>From: ${data.name} - ${data.email}</p>\n\n<p>Message: ${data.message}</p>`,
                
                };

                fetch('/api/mail', {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(response =>  {
                    response.success ? setSubmitted('Success') : setSubmitted('Error');
                    setTimeout(() => {
                        reset();
                        setSubmitted('Submit');
                    }, 2500)
                })
                .catch(error => console.log('Error', error));
            }, 2000);
        });
    };

    return (
        <Layout>
            <Meta page="Submit" />
            <div className="text-center flex flex-col items-center justify-center mb-40">
                <span className="block mb-2 uppercase font-bold text-sm text-indigo-700">The Lazy Load</span>
                <h1 className="m-0 text-5xl max-w-2xl">Lets talk.</h1>
                <h2 className="text-base font-normal max-w-md leading-loose text-zinc-600">Have an idea? Got a really helpful resource? Or do you just want to send some kudos? I want to hear from you!</h2>
            </div>
            <section className="mx-auto max-w-lg">
                <h3 className="m-0 text-4xl text-center font-bold my-10">Make a move.</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block w-full" htmlFor="">
                            <span className="block text-sm mb-2 font-bold">Name</span>
                            <input className="border-gray-300 w-full text-sm rounded-full px-4 py-3 hover:border-indigo-700 focus:border-indigo-700 transition duration-200" type="text" placeholder="Name" {...register("name", { required: true })} />
                            <small>{errors.name && <span>This field is required</span>}</small>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block w-full" htmlFor="">
                            <span className="block text-sm mb-2 font-bold">Email</span> 
                            <input className="border-gray-300 w-full text-sm rounded-full px-4 py-3 hover:border-indigo-700 focus:border-indigo-700 transition duration-200" type="email" placeholder="mail@domain.com" {...register("email", { required: true, validate: (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) })} />
                            {console.log(errors)}
                            <small>{errors.email && <span>This field is required</span>}</small>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block w-full" htmlFor="">
                            <span className="block text-sm mb-2 font-bold">Message</span>
                            <textarea placeholder="Message" rows="10" className="border-gray-300 w-full py-3 resize-none rounded-2xl hover:border-indigo-700 focus:border-indigo-700 transition duration-200 text-sm" {...register("message", { required: true })}>
                            </textarea>
                            <small>{errors.message && <span>This field is required</span>}</small>
                        </label>
                    </div>
                    <input hidden type="text" {...register('honeypot')} />
                    <button className={`w-full text-sm hover:bg-indigo-700 focus:bg-indigo-700 hover:text-white focus:text-white transition duration-200 rounded-full py-4 px-4 cursor-pointer top-[30%] ${submitted === 'Success' ? 'bg-emerald-500 text-white' : 'bg-indigo-100'}`} type="submit">
                        {isSubmitting ? "Submitting..." : submitted}
                    </button>
                </form>
            </section>
        </Layout>
    )
}
export default Submit
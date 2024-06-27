'use client';

import { creatInventoryComment } from "@/app/lib/action";
// import {  createUser } from "@/app/lib/action";

import { useFormState } from 'react-dom';


export default function Form() {
    // const initialState = { message: null, errors: {} };
    const initialState = {
        message: '',
        errors: {},
      } ;
    const [state, dispatch] = useFormState(creatInventoryComment, initialState);
    

    return (
        <form action={dispatch} className=" w-full h-full flex flex-col gap-2" >
            <div className=" flex flex-row justify-start w-full h-full gap-2">
                <div className=" flex flex-col items-start justify-start gap-2 basis-1/3">
                    <label className=" text-slate-400 text-[0.75rem] font-light" htmlFor="name">Name</label>
                    <input  className=" rounded-md border border-slate-300 h-5 p-5 w-4/5" type="text" name="name" id="name" />
                </div>
                <div className=" flex flex-col items-start justify-start gap-2 basis-1/3">
                    <label  className=" text-slate-400 text-[0.75rem] font-light" htmlFor="email">Email</label>
                    <input  className=" rounded-md border border-slate-300  h-5 p-5 w-4/5"  type="email" name="email" id="email"  required/>
                </div>
                <div className=" flex flex-col items-start justify-start gap-2 basis-1/3">
                    <label className=" text-slate-400 text-[0.75rem] font-light" htmlFor="phone">Phone</label>
                    <input className=" rounded-md border border-slate-300  h-5 p-5 w-4/5" type="tel" name="phone" id="phone" />
                </div>
            </div>
            <div className=" flex flex-col mt-3 items-start gap-2 w-full">
                <label className=" text-slate-400 text-[0.75rem] font-light" htmlFor="comment">Comment</label>
                <textarea className=" rounded-md h-32 w-full border p-3 border-slate-300" name="comment" id="comment" required></textarea>
            </div>
            <div className=" mt-3 py-2 w-full">
                <button className=" w-full bg-aem-700 text-white p-4 rounded-md" type="submit">Submit</button>
            </div>
        </form>
    )
}
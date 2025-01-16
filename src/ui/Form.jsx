import React from 'react'
import SectionTitle from './SectionTitle'
import { useForm } from 'react-hook-form'
import Paragraph from './Paragraph';

export default function Form() {
  const {register,handleSubmit,formState: { errors }} = useForm();
  console.log(errors);
  function submitForm(data){
  }
   const inputClasses = 'border border-[#ccc] py-2 px-3 focus:outline-primary w-full mt-2';
  return (
    <form onSubmit={handleSubmit(submitForm)} className='bg-white shadow-md p-10'>
        <SectionTitle className='!text-left mb-5'>Contact Form</SectionTitle>
        <div className='space-y-5'>
            <div className='flex sm:flex-row flex-col gap-5 '>
                <div className='flex flex-col w-full'>
                    <label>First Name</label>
                    <input className={inputClasses} type="text" {...register('firsName',{required:"This input is required"}) }/>
                    {errors.firsName && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.firsName.message}</Paragraph>}
                </div>
                <div className='flex flex-col w-full'>
                    <label>Last Name</label>
                    <input className={inputClasses} type="text" {...register('lastName',{required:"This input is required"})} />
                    {errors.lastName && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.lastName.message}</Paragraph>}
                </div>
            </div>
            <div className='w-full'>
                <label>Company Details</label>
                <input className={inputClasses} {...register('companyDetails',{required:"This input is required"})} type="text"/>
                {errors.companyDetails && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.companyDetails.message}</Paragraph>}

            </div>
            <div className='w-full'>
                <label>Email</label>
                <input className={inputClasses} {...register('email',{required:"This input is required",pattern:{
                    value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message:"This email isn't valid"
                    }
                })} type="text"/>
                {errors.email && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.email.message}</Paragraph>}

            </div>
            <div className='w-full'>
                <label>Phone Number</label>
                <input className={inputClasses} {...register('phone',{required:"This input is required"})} type="text"/>
                {errors.email && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.email.message}</Paragraph>}

            </div>
            <div>
                <label htmlFor="">Sector</label>
                <select {...register('sector',{required:"This input is required"})} className={inputClasses}>
                    <option>
                        Handy Paper
                    </option>
                    <option>
                        Handy Tissue Products
                    </option>
                    <option>
                        Wet Wipes
                    </option>
                </select>
                {errors.sector && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.sector.message}</Paragraph>}

            </div>
            <div>
                <label htmlFor="">Inquery Type</label>
                <select {...register('inqueryType',{required:"This input is required"})} className={inputClasses}>
                    <option>
                        General Inquiry

                    </option>
                    <option>
                        Domestic Sales
                    </option>
                    <option>
                        International Sales
                    </option>
                    <option>
                        Procurement
                    </option>
                    <option>
                    Customer Complaint
                    </option>
                    <option>
                    Careers
                    </option>
                </select>
                {errors.inqueryType && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.inqueryType.message}</Paragraph>}

            </div>
            <div>
                <label>Subject</label>
                <input type='text' {...register('subject',{required:"This input is required"})} className={`${inputClasses}`}/>
                {errors.subject && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.subject.message}</Paragraph>}

            </div>
            <div>
                <label>Message</label>
                <textarea {...register('message',{required:"This input is required"})} className={`${inputClasses} h-28 resize-none`}></textarea>
                {errors.message && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.message.message}</Paragraph>}

            </div>
            <button type='submit' className='border border-[#ccc] px-8 text-primary font-semibold hover:text-white hover:bg-primary transition-colors duration-300 py-3 block '>Submit</button>
        </div>
    </form>
  )
}

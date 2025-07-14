import React from 'react'
import { useForm } from 'react-hook-form'
import SectionTitle from '../SectionTitle';
import Paragraph from '../Paragraph';
import FadeRight from '../Animation/FadeRight';
import { useTranslation } from 'react-i18next';

export default function Form() {
    const{t} = useTranslation("Form")
    const {register,watch,handleSubmit,formState: { errors }} = useForm();
    function submitForm(data){
    }

    const inqueryType = watch("inqueryType");
    const sector = watch("sector");

    const subjectValue = inqueryType&&sector ?`${sector}-${inqueryType}`:'';

    const inputClasses = 'border border-[#ccc] py-2 px-3 focus:outline-primary w-full mt-2 disabled:bg-[#ccc]';
    return (
        <FadeRight>
            <form onSubmit={handleSubmit(submitForm)} className='bg-white shadow-md p-10'>
            <SectionTitle className='!text-start mb-5'>{t("Contact Form")}</SectionTitle>
            <div className='space-y-5'>
                <div className='flex sm:flex-row flex-col gap-5 '>
                    <div className='flex flex-col w-full'>
                        <label>{t("First Name")}</label>
                        <input className={inputClasses} type="text" {...register('firsName',{required:t("This input is required")}) }/>
                        {errors.firsName && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.firsName.message}</Paragraph>}
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>{t("Last Name")}</label>
                        <input className={inputClasses} type="text" {...register('lastName',{required:t("This input is required")})} />
                        {errors.lastName && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.lastName.message}</Paragraph>}
                    </div>
                </div>
                <div className='w-full'>
                    <label>{t("Company Details")}</label>
                    <input className={inputClasses} {...register('companyDetails',{required:t("This input is required")})} type="text"/>
                    {errors.companyDetails && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.companyDetails.message}</Paragraph>}

                </div>
                <div className='w-full'>
                    <label>{t("Email")}</label>
                    <input className={inputClasses} {...register('email',{required:t("This input is required"),pattern:{
                        value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message:t("This email isn't valid")
                        }
                    })} type="text"/>
                    {errors.email && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.email.message}</Paragraph>}

                </div>
                <div className='w-full'>
                    <label>{t("Phone Number")}</label>
                    <input className={inputClasses} {...register('phone',{required:t("This input is required")})} type="text"/>
                    {errors.email && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.email.message}</Paragraph>}

                </div>
                <div>
                    <label htmlFor="">{t("Sector")}</label>
                    <select {...register('sector',{required:t("This input is required")})} className={inputClasses}>
                        <option>
                            {t("Handy Paper")}
                        </option>
                        <option>
                            {t("Handy Tissue Products")}
                        </option>
                        <option>
                            {t("Wet Wipes")}
                        </option>
                    </select>
                    {errors.sector && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.sector.message}</Paragraph>}

                </div>
                <div>
                    <label htmlFor="">{t("Inquery Type")}</label>
                    <select {...register('inqueryType',{required:t("This input is required")})} className={inputClasses}>
                        <option>
                            {t("General Inquiry")}

                        </option>
                        <option>
                            {t("Domestic Sales")}
                        </option>
                        <option>
                            {t("International Sales")}
                        </option>
                        <option>
                            {t("Procurement")}
                        </option>
                        <option>
                            {t("Customer Complaint")}
                        </option>
                        <option>
                            {t("Careers")}
                        </option>
                    </select>
                    {errors.inqueryType && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.inqueryType.message}</Paragraph>}

                </div>
                <div>
                    <label>{t("Subject")}</label>
                    <input type='text' disabled value={subjectValue} {...register('subject')} className={`${inputClasses}`}/>
                    {errors.subject && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.subject.message}</Paragraph>}

                </div>
                <div>
                    <label>{t("Message")}</label>
                    <textarea {...register('message',{required:t("This input is required")})} className={`${inputClasses} h-28 resize-none`}></textarea>
                    {errors.message && <Paragraph size="sm" className='text-secondary italic my-3'>{errors.message.message}</Paragraph>}

                </div>
                <button type='submit' className='border border-[#ccc] px-8 text-primary font-semibold hover:text-white hover:bg-primary transition-colors duration-300 py-3 block '>{t("Submit")}</button>
            </div>
        </form>
        </FadeRight>
    )
}

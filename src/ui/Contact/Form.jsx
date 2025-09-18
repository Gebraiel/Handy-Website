import { useState } from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../SectionTitle";
import Paragraph from "../Paragraph";
import FadeRight from "../Animation/FadeRight";
import { useTranslation } from "react-i18next";
import { sendEmail } from "../../services/contact";
import { FiLoader } from "react-icons/fi";

export default function Form() {
  const { t } = useTranslation("Form");
  const [formError, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const inqueryType = watch("inquery_type");
  const sector = watch("sector");

  const subjectValue = inqueryType && sector ? `${sector}-${inqueryType}` : "";

  async function submitForm(data) {
    const postData = {...data,subject:subjectValue};
    const { message, error } = await sendEmail(postData);
    if (error) {
      setError(message);
    } else {
      setSuccessMessage(t("Success-Message"));
      setTimeout(()=>setSuccessMessage(""),3000);
      reset();
    }
  }



  const inputClasses =
    "border border-[#ccc] py-2 px-3 focus:outline-primary w-full mt-2 disabled:bg-[#ccc]";
  return (
    <FadeRight>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="bg-white shadow-md p-10"
      >
        <SectionTitle className="!text-start mb-5">
          {t("Contact Form")}
        </SectionTitle>
        <div className="space-y-5">
          <div className="flex sm:flex-row flex-col gap-5 ">
            <div className="flex flex-col w-full">
              <label>{t("First Name")}</label>
              <input
                className={inputClasses}
                type="text"
                {...register("name", { required: t("This input is required") })}
              />
              {errors.name && (
                <Paragraph size="sm" className="text-secondary italic my-3">
                  {errors.name.message}
                </Paragraph>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label>{t("Last Name")}</label>
              <input
                className={inputClasses}
                type="text"
                {...register("last_name", {
                  required: t("This input is required"),
                })}
              />
              {errors.last_name && (
                <Paragraph size="sm" className="text-secondary italic my-3">
                  {errors.last_name.message}
                </Paragraph>
              )}
            </div>
          </div>
          <div className="w-full">
            <label>{t("Company Details")}</label>
            <input
              className={inputClasses}
              {...register("companyDetails", {
                required: t("This input is required"),
              })}
              type="text"
            />
            {errors.companyDetails && (
              <Paragraph size="sm" className="text-secondary italic my-3">
                {errors.companyDetails.message}
              </Paragraph>
            )}
          </div>
          <div className="w-full">
            <label>{t("Email")}</label>
            <input
              className={inputClasses}
              {...register("email", {
                required: t("This input is required"),
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: t("This email isn't valid"),
                },
              })}
              type="text"
            />
            {errors.email && (
              <Paragraph size="sm" className="text-secondary italic my-3">
                {errors.email.message}
              </Paragraph>
            )}
          </div>
          <div className="w-full">
            <label>{t("Phone Number")}</label>
            <input
              className={inputClasses}
              {...register("phone", { required: t("This input is required") })}
              type="text"
            />
            {errors.phone && (
              <Paragraph size="sm" className="text-secondary italic my-3">
                {errors.phone.message}
              </Paragraph>
            )}
          </div>
          <div>
            <label htmlFor="">{t("Sector")}</label>
            <select
              {...register("sector", { required: t("This input is required") })}
              className={inputClasses}
            >
              <option></option>
              <option>{t("Handy Paper")}</option>
              <option>{t("Handy Tissue Products")}</option>
              <option>{t("Wet Wipes")}</option>
            </select>
            {errors.sector && (
              <Paragraph size="sm" className="text-secondary italic my-3">
                {errors.sector.message}
              </Paragraph>
            )}
          </div>
          <div>
            <label htmlFor="">{t("Inquery Type")}</label>
            <select
              {...register("inquery_type", {
                required: t("This input is required"),
              })}
              className={inputClasses}
            >
              <option></option>
              <option value={t("General Inquiry")}>
                {t("General Inquiry")}
              </option>
              <option value={t("Domestic Sales")}>{t("Domestic Sales")}</option>
              <option value={t("International Sales")}>
                {t("International Sales")}
              </option>
              <option value={t("Procurement")}>{t("Procurement")}</option>
              <option value={t("Customer Complaint")}>
                {t("Customer Complaint")}
              </option>
              <option value={t("Careers")}>{t("Careers")}</option>
            </select>
            {errors.inquery_type && (
              <Paragraph size="sm" className="text-secondary italic my-3">
                {errors.inquery_type.message}
              </Paragraph>
            )}
          </div>
          <div>
            <label>{t("Subject")}</label>
            <input
              type="text"
              readOnly
              value={subjectValue}
              {...register("subject")}
              className={`${inputClasses} bg-[#ccc]`}
            />
            {errors.subject && (
              <Paragraph size="sm" className="text-secondary italic my-3">
                {errors.subject.message}
              </Paragraph>
            )}
          </div>
          <div>
            <label>{t("Message")}</label>
            <textarea
              {...register("message", {
                required: t("This input is required"),
              })}
              className={`${inputClasses} h-28 resize-none`}
            ></textarea>
            {errors.message && (
              <Paragraph size="sm" className="text-secondary italic my-3">
                {errors.message.message}
              </Paragraph>
            )}
          </div>
          {formError && (
            <Paragraph size="sm" className="text-secondary italic my-3">
              {formError}
            </Paragraph>
          )}
          {successMessage && (
            <Paragraph size="sm" className="text-green-500 my-3">
              {!formError && successMessage}
            </Paragraph>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="border border-[#ccc] px-8 text-primary font-semibold hover:text-white hover:bg-primary transition-colors duration-300 py-3 block disabled-bg-[#ccc]"
          >
            {" "}
            {isSubmitting ? (
              <span className="animate-spin">
                <FiLoader />
              </span>
            ) : (
              t("Submit")
            )}
          </button>
        </div>
      </form>
    </FadeRight>
  );
}

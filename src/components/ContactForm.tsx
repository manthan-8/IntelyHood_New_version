import Button from '@/templates/Button'
import FormInput from '@/templates/FormInput'
import FormTextArea from '@/templates/FormTextArea'
import { CONTACT_FORM_SCRIPT_URL } from '@/utilities/config'
import React, { useState } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';

const ContactForm: React.FC = () => {
    const [response, setResponse] = useState('');
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const [visible, setVisible] = useState(false);

    const scriptURL = CONTACT_FORM_SCRIPT_URL || '';

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Full name is required')
            .matches(
                /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                'Full name must contain only alphabets and single spaces between names'
            )
            .test(
                'no-leading-trailing-space',
                'No leading or trailing spaces allowed',
                (val) => val === val?.trim()
            )
            .max(100, 'Full name must be less than 100 characters'),

        contact: Yup.string()
            .required('Contact number is required')
            .matches(/^[0-9]{10}$/, 'Contact number must be 10 digits')
            .test(
                'no-leading-trailing-space',
                'No leading or trailing spaces allowed',
                (val) => val === val?.trim()
            ),

        email: Yup.string()
            .required('Email is required')
            .email('Invalid email format')
            .max(100, 'Email must be less than 100 characters')
            .test(
                'no-leading-trailing-space',
                'No leading or trailing spaces allowed',
                (val) => val === val?.trim()
            ),

        message: Yup.string()
            .required('Message is required')
            .max(500, 'Message must be less than 500 characters')
            .test(
                'no-leading-trailing-space',
                'No leading or trailing spaces allowed',
                (val) => val === val?.trim()
            ),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            contact: '',
            email: '',
            message: '',
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setVisible(false);
            setResponse('');
            setIsSuccess(null);

            try {
                const formData = new FormData();
                Object.entries(values).forEach(([key, value]) => {
                    formData.append(key, value);
                });

                const res = await fetch(scriptURL, {
                    method: 'POST',
                    body: formData,
                });

                if (res.ok) {
                    resetForm();
                    setResponse('Your message has been sent!');
                    setIsSuccess(true);
                    setVisible(true);
                } else {
                    setResponse('Failed to send message.');
                    setIsSuccess(false);
                    setVisible(true);
                }
            } catch (error) {
                if (error instanceof Error) {
                    console.error(`Submission Error:`, error.message);
                    setResponse('Error: ' + error.message);
                } else {
                    console.error(`Unknown Submission Error`, error);
                    setResponse('Something went wrong.');
                }
                setIsSuccess(false);
                setVisible(true);
            }

            setTimeout(() => setVisible(false), 5000);
        }
    });

    return (
        <div className="bg-background-main text-text-main p-4 sm:p-10 rounded-lg border border-primary-main/30">
            <div className='mb-5 text-center'>
                <h4 className="text-2xl font-semibold">Send us a message</h4>
                <p className="">
                    Fill out the form below and we'll get back to you within 24 hours.
                </p>
            </div>
            <form onSubmit={formik.handleSubmit} className="space-y-5">
                <FormInput
                    label='Full Name'
                    type='text'
                    id="name"
                    name='name'
                    formik={formik}
                    placeholder="Your Name"
                    required />
                <FormInput
                    label='Email'
                    type='email'
                    id="email"
                    name='email'
                    formik={formik}
                    placeholder="Your Email"
                    required />
                <FormInput
                    label='Contact'
                    type='tel'
                    id="contact"
                    name="contact"
                    formik={formik}
                    placeholder="Your Contact No."
                    required />
                <FormTextArea
                    id="message"
                    label='Message'
                    name='message'
                    formik={formik}
                    rows={4}
                    placeholder="Tell us more about your inquiry..."
                    required />

                <Button type="submit" className="w-full">
                    Send
                </Button>
            </form>
            {visible && (
                <div
                    id="formMessage"
                    className={`mt-4 px-4 py-2 rounded ${isSuccess ? 'bg-success-main' : 'bg-error-main'
                        } text-text-dark`}
                >
                    {response}
                </div>
            )}
        </div>
    )
}

export default ContactForm
"use client";

import React, { use, useState } from 'react'
import { MdKeyboardBackspace } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { APPLY_FORM_SCRIPT_URL } from '@/utilities/config';
import { experienceOptions, jobOpenings } from '@/utilities/data';
import Link from 'next/link';
import Button from '@/templates/Button';
import FormInput from '@/templates/FormInput';
import FormSelect from '@/templates/FormSelect';
import FormTextArea from '@/templates/FormTextArea';
import { useRouter } from 'next/navigation';
import GalaxyBackground from '@/components/GalaxyBg';


interface CareerDetailProps {
    params: Promise<{ id: string }>;   // 👈 params is now a Promise
}

const ViewPosition: React.FC<CareerDetailProps> = ({ params }) => {
    const { id } = use(params);
    const router = useRouter();
    const position = jobOpenings.find((position) => position.id === Number(id));
    const [response, setResponse] = useState('');
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const [visible, setVisible] = useState(false);

    const scriptURL = APPLY_FORM_SCRIPT_URL || '';

    if (!position) {
        router.back();
        return <></>;
    }

    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
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

        contactNumber: Yup.string()
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

        coverLetter: Yup.string()
            .required('Cover letter is required')
            .max(500, 'Cover letter must be less than 500 characters')
            .test(
                'no-leading-trailing-space',
                'No leading or trailing spaces allowed',
                (val) => val === val?.trim()
            ),

        url: Yup.string()
            .url('Invalid URL format')
            .max(100, 'URL must be less than 100 characters')
            .test(
                'no-leading-trailing-space',
                'No leading or trailing spaces allowed',
                (val) => val === val?.trim()
            ),

        experience: Yup.string()
            .required('Experience is required'),
    });

    const formik = useFormik({
        initialValues: {
            fullName: '',
            contactNumber: '',
            email: '',
            coverLetter: '',
            experience: '',
            url: ''
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
                    setResponse('Your application has been sent!');
                    setIsSuccess(true);
                    setVisible(true);
                } else {
                    setResponse('Failed to send application.');
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
        <>
            <section className="px-6 pt-40 pb-10 lg:pt-50 border-b border-border-main/20">
                <div className="container mx-auto max-w-screen-xl">
                    <GalaxyBackground />
                    <Link
                        href="/careers"
                        className="inline-block p-2 rounded-md bg-secondary-main/50 hover:bg-secondary-main/80 text-text-main mb-5"
                    >
                        <MdKeyboardBackspace className="inline mr-2" />
                        Back to Careers
                    </Link>


                    <div className="flex flex-col lg:flex-row lg:items-center text-text-main justify-between">
                        <div>
                            <div className="flex items-center space-x-4 mb-3">
                                <h1 className="text-3xl font-bold">{position.title}</h1>
                                <span className="bg-primary-default/60 rounded-full px-2 text-sm">{position.department}</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                <div className="flex items-center">
                                    <IoLocationOutline className="text-md mr-1" />
                                    {position.location}
                                </div>
                                <div className="flex items-center">
                                    <FaRegClock className="text-md mr-1" />
                                    {position.type}
                                </div>
                                {/* <div className="flex items-center">
                                    <MdCurrencyRupee className="text-md mr-1" />
                                    {position.salary}
                                </div> */}
                                <div className="flex items-center">
                                    <HiOutlineBriefcase className="text-md mr-1" />
                                    {position.experience}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                                href='#apply'
                                target='_self'
                            >
                                Apply Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative px-6 py-20 lg:py-18 overflow-hidden">
                <div className="container mx-auto max-w-screen-xl">
                    <GalaxyBackground />
                    {/* Job Description */}
                    <div className="bg-muted-dark text-text-light border border-border-main/30 p-5 rounded-md mb-10">
                        <h3 className="text-2xl font-semibold mb-3">About This Role</h3>
                        <p className="space-y-4">
                            {position.description}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8 text-text-main">
                            {/* Requirements */}
                            <div className="bg-muted-dark border border-border-main/30 p-5 rounded-md">
                                <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                                <div>
                                    <ul className="space-y-2">
                                        {position.requirements.map((req: string, index: number) => (
                                            <li key={index} className="flex items-start">
                                                - {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <div className="bg-muted-dark border border-border-main/30 p-5 rounded-md">
                                <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
                                <div>
                                    <ul className="space-y-2">
                                        {position.responsibilities.map((resp: string, index: number) => (
                                            <li key={index} className="flex items-start">
                                                - {resp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Qualifications */}
                            <div className="bg-muted-dark border border-border-main/30 p-5 rounded-md">
                                <h3 className="text-xl font-semibold mb-4">Preferred Qualifications</h3>
                                <div>
                                    <ul className="space-y-2">
                                        {position.qualifications.map((qual: string, index: number) => (
                                            <li key={index} className="flex items-start">
                                                - {qual}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6 text-text-main">
                            {/* Job Summary */}
                            <div className="bg-muted-dark border border-border-main/30 p-5 rounded-md">
                                <h3 className="text-xl text-text font-semibold mb-4">Job Summary</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="mb-1">Department</div>
                                        <div className="font-medium">{position.department}</div>
                                    </div>
                                    <div>
                                        <div className="mb-1">Employment Type</div>
                                        <div className="font-medium">{position.type}</div>
                                    </div>
                                    <div>
                                        <div className="mb-1">Experience Level</div>
                                        <div className="font-medium">{position.experience}</div>
                                    </div>
                                    {/* <div>
                                        <div className="mb-1">Salary Range</div>
                                        <div className="font-medium">{position.salary}</div>
                                    </div> */}
                                    <div>
                                        <div className="mb-1">Location</div>
                                        <div className="font-medium">{position.location}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="bg-muted-dark border border-border-main/30 p-5 rounded-md">
                                <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                                <div>
                                    <ul className="space-y-2">
                                        {position.benefits.map((benefit: string, index: number) => (
                                            <li key={index} className="flex items-start">
                                                - {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Application Form */}
            <section id='apply' className="relative px-6 py-10 overflow-hidden">
                <div className="container mx-auto max-w-screen-xl">
                    <GalaxyBackground />
                    <div className="text-center mb-10 text-text-main">
                        <h3 className="text-3xl mb-5 font-semibold">Apply for <span className='bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent'>{position.title}</span></h3>
                        <p className="">
                            Ready to join our team? Fill out the application form below and we'll be in touch soon.
                        </p>
                    </div>
                    <div className="bg-background-main/90 border border-border-main/20 p-8 max-w-4xl mx-auto rounded-md">
                        <form onSubmit={formik.handleSubmit} className="space-y-6">
                            <div className="flex flex-col md:grid grid-cols-2 gap-6">
                                <FormInput
                                    id='fullName'
                                    name='fullName'
                                    label='Full Name'
                                    type='text'
                                    formik={formik}
                                    placeholder='Enter your name'
                                    required />
                                <FormInput
                                    id='email'
                                    name='email'
                                    label='Email'
                                    type='text'
                                    formik={formik}
                                    placeholder='Enter your email'
                                    required />
                                <FormInput
                                    id='contactNumber'
                                    name='contactNumber'
                                    label='Contact Number'
                                    type='text'
                                    formik={formik}
                                    placeholder='Enter your Contact Number'
                                    required />
                                <FormSelect
                                    id='experience'
                                    name='experience'
                                    label='Years of Experience'
                                    options={experienceOptions.map((opt) => ({ label: opt, value: opt }))} formik={formik}
                                    placeholder='Select Your Experience Level'
                                    required />
                                <FormInput
                                    id='url'
                                    name='url'
                                    label='Portfolio/LinkedIn URL'
                                    type='text'
                                    formik={formik}
                                    className='col-span-2'
                                    placeholder='Enter your Contact Number' />
                                <FormTextArea
                                    id='coverLetter'
                                    name='coverLetter'
                                    label='Cover Letter'
                                    formik={formik}
                                    rows={4}
                                    className='col-span-2'
                                    placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                                    required />

                                <div className="text-center mt-2 col-span-2">
                                    <Button
                                        type="submit"
                                    >
                                        Submit Application
                                    </Button>
                                </div>
                            </div>
                        </form>
                        {visible && (
                            <div
                                id="formMessage"
                                className={`mt-4 px-4 py-2 rounded ${isSuccess ? 'bg-success' : 'bg-danger/30'
                                    } text-text`}
                            >
                                {response}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ViewPosition
"use client";

import React, { useState } from 'react'
import { TbCreditCardRefund } from "react-icons/tb";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { REFUND_FORM_SCRIPT_URL } from '@/utilities/config';
import Button from '@/templates/Button';
import FormInput from '@/templates/FormInput';
import FormTextArea from '@/templates/FormTextArea';
import { refund } from '@/utilities/data';
import GalaxyBackground from '@/components/GalaxyBg';

interface RefundFormValues {
    fullName: string;
    email: string;
    contactNumber: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    invoiceDate: string;
    invoiceNumber: number;
    reason: string;
    amount: number;
    serviceName: string;
    bankName: string;
    bankBranch: string;
    accountHolder: string;
    accountNumber: number;
    confirmAccountNumber: number;
    ifscCode: string;
    upiId: string;
    applyDate: string;
    acceptTerms: boolean,
}

const Refund: React.FC = () => {
    const lastUpdated = "August, 2025";
    const [show, setShow] = useState(false);
    const [response, setResponse] = useState('');
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const [visible, setVisible] = useState(false);

    const scriptURL = REFUND_FORM_SCRIPT_URL || '';

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
        address: Yup.string().required("Address is required"),
        city: Yup.string().required("City is required"),
        state: Yup.string().required("State is required"),
        zipCode: Yup.string().optional(),
        country: Yup.string().required("Country is required"),
        applyDate: Yup.date().required("Apply date is required"),
        invoiceDate: Yup.date().required("Invoice date is required"),
        invoiceNumber: Yup.number().required("Invoice Number is required").min(0),
        reason: Yup.string().required("Reason is required"),
        amount: Yup.number().required("Amount is required").min(0),
        serviceName: Yup.string().required("Service name is required"),
        bankName: Yup.string().required("Bank name is required"),
        bankBranch: Yup.string().required("Bank branch is required"),
        accountHolder: Yup.string().required("Account holder name is required"),
        accountNumber: Yup.number().required("Account number is required").min(0),
        confirmAccountNumber: Yup.number().oneOf(
            [Yup.ref("accountNumber")],
            "Account numbers must match"
        ).required("Confirm account number is required").min(0),
        ifscCode: Yup.string().required("IFSC code is required"),
        upiId: Yup.string().required("UPI ID is required"),
        acceptTerms: Yup.boolean()
            .oneOf([true], "You must accept the Terms of Service")
            .required(),
    });

    const initialValues: RefundFormValues = {
        fullName: "",
        email: "",
        contactNumber: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        applyDate: "",
        invoiceDate: "",
        invoiceNumber: 0,
        reason: "",
        amount: 0,
        serviceName: "",
        bankName: "",
        bankBranch: "",
        accountHolder: "",
        accountNumber: 0,
        confirmAccountNumber: 0,
        ifscCode: "",
        upiId: "",
        acceptTerms: false,
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
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
        <>
            {/* Hero Section */}
            <section className="relative px-6 pb-15 pt-40 lg:pb-30 lg:pt-50">
                <div className="container max-w-screen-xl mx-auto overflow-hidden text-center">
                    <GalaxyBackground />
                    <div className="flex justify-center mb-8 text-center">
                        <div className="p-4 bg-primary-main rounded-full">
                            <TbCreditCardRefund className="text-5xl text-text-dark" />
                        </div>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold text-text-main mb-6">
                        Refund <span className="bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">Policy</span>
                    </h1>
                    <p className="text-xl text-text-main mb-4">
                        At Chit Codes Technologies LLP, we value customer satisfaction and offer a transparent refund policy for our services and products.
                    </p>
                    <p className="text-text-main">Last updated: {lastUpdated}</p>
                </div>
            </section>

            {/* Main Sections */}
            <section className="relative px-5 py-20 lg:py-24">
                <div className="container mx-auto max-w-screen-lg">
                    <GalaxyBackground />
                    <div className="flex flex-col gap-10 mx-auto text-text-main">
                        {refund.map((rfd, index) => (
                            <div key={index} className="border p-5 border-border-main/30 bg-background-main rounded-md">
                                <div className="flex items-center space-x-4 mb-5">
                                    <div className="bg-primary-main p-3 rounded-lg flex items-center justify-center">
                                        <rfd.icon className="text-2xl text-text-dark" />
                                    </div>
                                    <h3 className="text-2xl font-semibold">{rfd.title}</h3>
                                </div>
                                <div className="space-y-6">
                                    {rfd.content.map((item, itemIndex) => (
                                        <div key={itemIndex}>
                                            <h4 className="text-lg font-semibold mb-2">{item.subtitle}</h4>
                                            <p className="leading-relaxed">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='text-center text-text-main pt-10'>
                        <Button className='mb-10' onClick={() => setShow(!show)}>Refund Form</Button>

                        {show && (
                            <form onSubmit={formik.handleSubmit} className="text-left p-7 border border-border-main/30 rounded-md bg-background-main">
                                <h5 className='font-semibold mb-3 text-lg'>Personal Details -</h5>
                                <div className='grid grid-cols-2 gap-5 mb-10'>
                                    <FormInput
                                        label='Full Name'
                                        type='text'
                                        id="fullName"
                                        name='fullName'
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
                                        label='Contact Number'
                                        type='tel'
                                        id="contactNumber"
                                        name="contactNumber"
                                        formik={formik}
                                        placeholder="Your Contact No."
                                        required />
                                    <FormInput id="address" name="address" label="Address" placeholder="Enter your Address" type="text" formik={formik} required />
                                    <FormInput id="city" name="city" label="City" placeholder="Enter your City" type="text" formik={formik} required />
                                    <FormInput id="state" name="state" label="State" placeholder="Enter your State" type="text" formik={formik} required />
                                    <FormInput id="country" name="country" label="Country" placeholder="Enter your Country" type="text" formik={formik} required />
                                    <FormInput id="zipCode" name="zipCode" label="Zip Code" placeholder="Enter your Zip Code" type="text" formik={formik} />
                                    <FormInput id="Date" name="applyDate" label="Date" placeholder="Date" type="date" formik={formik} required />
                                </div>
                                <h5 className='font-semibold mb-3 text-lg'>Invoice Details -</h5>
                                <div className='grid grid-cols-2 gap-5 mb-10'>
                                    <FormInput id="invoiceNumber" name="invoiceNumber" label="Invoice Number" type="number" formik={formik} required placeholder='' />
                                    <FormInput id="amount" name="amount" label="Invoice Amount" type="number" placeholder="Invoice Amount" formik={formik} required />
                                    <FormInput id="invoiceDate" name="invoiceDate" label="Invoice Date" type="date" formik={formik} required placeholder='' />
                                    <FormInput id="serviceName" name="serviceName" label="Service Name" type="text" placeholder="Service Name" formik={formik} required />
                                    <FormTextArea
                                        id="reason"
                                        label='Reason'
                                        name='reason'
                                        formik={formik}
                                        rows={4}
                                        placeholder="Write reason for refund"
                                        required />
                                </div>
                                <h5 className='font-semibold mb-3 text-lg'>Bank Details For Your Refund -</h5>
                                <div className='grid grid-cols-2 gap-5'>
                                    <FormInput id="accountHolder" name="accountHolder" label="Account Holder Name" type="text" placeholder="Enter Bank Holder Name" formik={formik} required />
                                    <FormInput id="bankName" name="bankName" label="Bank Name" type="text" placeholder="Enter Bank Name" formik={formik} required />
                                    <FormInput id="accountNumber" name="accountNumber" label="Account Number" type="number" placeholder="Enter Account Number" formik={formik} required />
                                    <FormInput id="confirmAccountNumber" name="confirmAccountNumber" label="Confirm Account Number" type="number" placeholder="Enter Confirm Account Number" formik={formik} required />
                                    <FormInput id="bankBranch" name="bankBranch" label="Bank Branch" type="text" placeholder="Enter Bank Branch" formik={formik} required />
                                    <FormInput id="ifsc" name="ifscCode" label="IFSC Code" type="text" placeholder="Enter IFSC Code" formik={formik} required />
                                    <FormInput id="upiId" name="upiId" label="UPI ID" type="text" placeholder="Enter UPI ID" formik={formik} />
                                </div>
                                <div className="mt-10">75% Amount Will Be Get Refund in Your Given Bank Account Within 15 Working Days.</div>
                                <div className="mt-3 mb-10">
                                    <label className="flex items-start gap-3 cursor-pointer select-none">
                                        <input
                                            id="acceptTerms"
                                            name="acceptTerms"
                                            type="checkbox"
                                            checked={formik.values.acceptTerms}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className="mt-1 h-4 w-4 rounded"
                                        />
                                        <span className="text-sm text-text-inverse">
                                            I have read and accept the{" "}
                                            <span
                                                className="text-secondary-main underline underline-offset-2"
                                                role="button"
                                                tabIndex={0}
                                            >
                                                Terms of Service
                                            </span>
                                            .
                                        </span>
                                    </label>
                                    {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
                                        <p className="mt-2 text-xs text-error-main">{formik.errors.acceptTerms}</p>
                                    ) : null}
                                </div>
                                <div>
                                    <Button type="submit" className="w-full">
                                        Send
                                    </Button>
                                </div>
                                {visible && (
                                    <div
                                        id="formMessage"
                                        className={`mt-4 px-4 py-2 rounded ${isSuccess ? 'bg-success-main' : 'bg-error-main'
                                            } text-text-dark`}
                                    >
                                        {response}
                                    </div>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Refund;
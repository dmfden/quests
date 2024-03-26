'use client';
import gameOrder from "@/api/orderAction";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./validationSchema";
import { IOrderForm } from '@/types';
import { useState } from "react";
import { useRouter } from 'next/navigation'

interface IForm {
    id: string,
    peopleCount: number[];
}

function FormOrder({ id, peopleCount }: IForm): JSX.Element {
    const [isShowingForm, setShowForm] = useState(true);
    const router = useRouter();
    const [minPeoples, maxPeoples] = peopleCount;

    const initialValues = {
        name: "",
        phone: "",
        peopleCount: 0,
        isLegal: true
    };

    const handleSubmit = async (values: IOrderForm) => {
        const response = await gameOrder(values);
        if (response >= 200 && response < 300) {
            setShowForm(false);
            setTimeout(() => {
                router.replace('/');
            }, 2000)
        }

    }
    const formOrder = <div className="max-w-[480px] bg-darkText-400 rounded-[20px] px-8 pb-12">
        <button>close</button>
        <h3 className="font-extrabold text-[40px] mb-2 text-white">Заявка на гру</h3>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema({ peopleCountNums: { min: minPeoples, max: maxPeoples } })}
            onSubmit={handleSubmit}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik;
                return (
                    <div className="container">
                        <Form className="flex flex-col gap-8">
                            <div className="form-row">
                                <Field
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Ваше ім'я"
                                    className={errors.name && touched.name ?
                                        "input-error" : null}
                                />
                                <ErrorMessage name="name" component="span" className="error" />
                            </div>

                            <div className="form-row">
                                <Field
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Ваш номер телефону"
                                    className={errors.phone && touched.phone ?
                                        "input-error" : null}
                                />
                                <ErrorMessage
                                    name="phone"
                                    component="span"
                                    className="error"
                                />
                            </div>

                            <div className="form-row">
                                <Field
                                    type="number"
                                    name="peopleCount"
                                    id="peopleCount"
                                    placeholder="Кількість гравців"
                                    className={errors.peopleCount && touched.peopleCount ?
                                        "input-error" : null}
                                />
                                <ErrorMessage
                                    name="peopleCount"
                                    component="span"
                                    className="error"
                                />
                            </div>
                            <div className="form-row">
                                <label className="cursor-pointer">
                                    <Field
                                        type="checkbox"
                                        name="isLegal"
                                        id="isLegal"
                                        className={errors.isLegal && touched.isLegal ?
                                            "input-error" : null}
                                    />
                                    <span className="text-sm font-medium text-neutral-250 px-2">Погоджуюсь з правилами обробки персональних даних та угодою користувачів</span>
                                </label>

                                <ErrorMessage
                                    name="isLegal"
                                    component="span"
                                    className="error"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-max py-[14px] px-11 m-auto text-base font-semibold text-darkText-100 bg-yellow-450 hover:bg-orange-450 rounded-md focus:brightness-200 disabled:bg-gray-500 disabled:bg-gray-500 disabled:opacity-50 transition ease-in-out duration-500"
                                disabled={!isValid}
                            >
                                Sign In
                            </button>

                        </Form>
                    </div>
                );
            }}
        </Formik>
    </div>

    const orderAccepted = <div className="max-w-[480px] bg-darkText-400 rounded-[20px] px-8 pb-12">
        <h3 className="text-yellow-450 text-[54px] p-[60px]">Order Accepted</h3>
    </div>

    if (!isShowingForm) {
        return orderAccepted;
    }

    return formOrder;
}

export default FormOrder;
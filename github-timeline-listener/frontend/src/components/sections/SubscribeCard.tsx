"use client"

import { useState } from 'react'
import Container from '../ui/container'

const SubscribeCard = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleEmailSubscription = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsSuccess(false);

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            console.log("Invalid Email");
            setIsSubmitting(false);
            return;
        }
        try {
            // api

            setEmail("");
            setIsSuccess(true);
            setIsSubmitting(false);
        } catch (error) {
            console.log(error);
            setIsSuccess(false);
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Container className='bg-[#fdf9f0] flex flex-col text-center'>
                <h1 className='text-2xl font-semibold tracking-tighter'>Get Your Daily Github Digest</h1>
                <p className='text-base w-sm text-zinc-500 tracking-tight'>Join thousands of developers who stay informed about the latest public GitHub activity.</p>

                <div className="flex justify-center z-30 py-4">
                    <div
                        className="flex flex-col sm:flex-row bg-black mt-8 sm:mt-0 rounded-lg"
                    >
                        <form
                            className="flex flex-col w-xl "
                            onSubmit={handleEmailSubscription}
                        >
                            {!isSuccess && (
                                <input
                                    placeholder="Enter your email address"
                                    aria-label="Email address"
                                    className="border-2 border-[#232323] h-full py-2 sm:px-4 px-2 bg-[#fdf9f0] rounded-lg text-center sm:text-center"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    required
                                />
                            )}
                            <button
                                type="submit"
                                className={`bg-[#232323] text-white px-2 py-1 rounded-lg sm:py-2 transition-all flex items-center justify-center ${isSubmitting ? "opacity-60 cursor-not-allowed bg-transparent" : "  hover:bg-zinc-900"
                                    }`}
                                disabled={isSubmitting || isSuccess}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg
                                            className="animate-spin h-5 w-5 mr-2 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            ></path>
                                        </svg>
                                    </>
                                ) : isSuccess ? (
                                    <span className="flex items-center gap-1">
                                        <svg
                                            className="h-5 w-5 text-green-400"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        Success!
                                    </span>
                                ) : (
                                    <div className="pr-2">👉Join The Newsletter</div>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SubscribeCard
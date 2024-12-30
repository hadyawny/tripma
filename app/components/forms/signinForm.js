import Image from 'next/image'
import React from 'react'
import { signIn } from '@/auth'

export default function SigninForm() {
    const handleGoogleSignIn = () => {
        signIn("google"); // Triggers Google login
      };
    
      const handleEmailPasswordSignIn = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        signIn("credentials", {
          email,
          password,
          callbackUrl: "/", // Redirect to the homepage after successful sign-in
        });
      };
  return (
    <div>
      <form onSubmit={handleEmailPasswordSignIn}>
                <input
                  type="email"
                  name='email'
                  placeholder="Email"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                  type="password"
                  name='password'
                  placeholder="Password"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button
                  type="submit"
                  className="bg-purpleBlue text-white px-4 py-2 rounded w-full"
                >
                  Sign In
                </button>
                <div className="flex items-center mt-4">
                  <div className="flex-grow border-t border-gray-400 mr-2"></div>
                  <span className="text-gray-400">or</span>
                  <div className="flex-grow border-t border-gray-400 ml-2"></div>
                  
                </div>
                <div className="flex flex-col items-center mt-4">
                <button onClick={handleGoogleSignIn} className="flex  border border-purpleBlue rounded-lg px-5 py-3  w-full items-center justify-center text-purpleBlue text-lg">
                  <Image
                    src="/googleicon.png"
                    alt="google logo"
                    width={14}
                    height={14}
                    className="mr-6"
                  />
                  Continue With Google
                </button>
                <button className="flex  border border-purpleBlue rounded-lg px-5 py-3 mt-4 w-full items-center justify-center text-purpleBlue text-lg">
                  <Image
                    src="/appleicon.png"
                    alt="apple logo"
                    width={14}
                    height={14}
                    className="mr-6"
                  />
                  Continue With Apple
                </button>
                <button className=" flex  border border-purpleBlue rounded-lg px-5 py-3 mt-4 w-full items-center justify-center text-purpleBlue text-lg ">
                  <Image
                    src="/facebookicon.png"
                    alt="facebook logo"
                    width={14}
                    height={14}
                    className="mr-6"
                  />
                  Continue With Facebook
                </button>
                
                </div>
              </form>
    </div>
  )
}

import { socialLogin } from '@/app/actions/authActions'
import Image from 'next/image'
import React from 'react'

export default function SignupForm() {
  return (
    <div>
      <form action={socialLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms" className="ml-2  text-grey-600">
                  I agree to the{" "}
                  <span className="text-purpleBlue">terms and conditions</span>
                </label>
                <br />
                <input type="checkbox" name="alerts" id="alerts" />
                <label htmlFor="alerts" className="ml-2  text-grey-600">
                  Send me the latest deal alerts
                </label>

                <button
                  type="submit"
                  className="bg-purpleBlue text-white px-4 py-2 mt-4 rounded w-full"
                >
                  Sign Up
                </button>
                <div className="flex items-center mt-4">
                  <div className="flex-grow border-t border-gray-400 mr-2"></div>
                  <span className="text-gray-400">or</span>
                  <div className="flex-grow border-t border-gray-400 ml-2"></div>
                  
                </div>
                <div className="flex flex-col items-center mt-4">
                <button type='submit' name='action' value="google" className="flex  border border-purpleBlue rounded-lg px-5 py-3  w-full items-center justify-center text-purpleBlue text-lg">
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
                <button className=" flex  border border-purpleBlue rounded-lg px-5 py-3 mt-4 w-full items-center justify-center text-purpleBlue text-lg">
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

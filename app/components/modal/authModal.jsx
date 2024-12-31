"use client";

import { nextAuthGoogleSignIn, nextAuthSignIn } from "@/app/actions/authActions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const signUpSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  terms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
});

export default function AuthModal({ buttonLabel, modalType }) {
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter(); // Use the router hook

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSignUpSubmit = async (schema, data) => {
    try {
      schema.parse(data); // Validate the data

      const { email, password } = data;

      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        
        await nextAuthSignIn(email,password);

        setErrors({});
        handleClose();
        router.refresh();

      }
      else {
        // Handle errors from the server response
        const errorData = await response.json();
        if (errorData.message) {
          setErrors({ server: errorData.message });
        } else {
          setErrors({ server: "An unexpected error occurred." });
        }
      }
    } catch (e) {
      const validationErrors = {};
      e?.errors?.forEach((err) => {
        validationErrors[err.path[0]] = err.message;
      });
      setErrors(validationErrors);
    }
  };
  const handleSignInSubmit = async(schema, data) => {
    try {
      schema.parse(data); // Validate the data


      const { email, password } = data;
      
      const response = await fetch("http://localhost:3000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok){
        await nextAuthSignIn(email,password);

        setErrors({});
        handleClose();
        router.refresh();
      }
      else {
        // Handle errors from the server response
        const errorData = await response.json();
        if (errorData.message) {
          setErrors({ server: errorData.message });
        } else {
          setErrors({ server: "An unexpected error occurred." });
        }
      }
    } catch (e) {
      const validationErrors = {};
      e.errors.forEach((err) => {
        validationErrors[err.path[0]] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  async function onGoogleSignIn(){
    await nextAuthGoogleSignIn();
  }

  return (
    <>
      {modalType === "signUp" && (
        <SignUpModal
          onSubmit={(data) => handleSignUpSubmit(signUpSchema, data)}
        />
      )}
      {modalType === "signIn" && (
        <SignInModal
          onSubmit={(data) => handleSignInSubmit(signInSchema, data)}
        />
      )}
    </>
  );

  function SignInModal({ onSubmit }) {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
      <div>
        <button
          onClick={handleOpen}
          className=" text-grey-400 px-5 py-3.5 rounded-md"
        >
          {buttonLabel}
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-trueWhite p-10 rounded-lg w-3/6">
              <div className="flex justify-between mb-4">
                <p className="text-h3 text-grey-600 font-bold ">Sign In</p>
                <button onClick={handleClose}>
                  <Image
                    src="/closegrey.png"
                    alt="close button"
                    width={16}
                    height={16}
                    className=""
                  />
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit(formData);
                }}
              >
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-2  border border-gray-300 rounded"
                  />
                  {errors.email && (
                    <p className="text-red text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full p-2  border border-gray-300 rounded"
                  />
                  {errors.password && (
                    <p className="text-red text-sm mt-1">{errors.password}</p>
                  )}
                </div>
                <div>
                <button
                  type="submit"
                  className="bg-purpleBlue text-white px-4 py-2 rounded w-full"
                >
                  Sign In
                </button>

                {errors.server && (
                    <p className="text-red text-sm mt-1">{errors.server}</p>
                  )}
                </div>
              </form>
              <div className="flex items-center mt-4">
                <div className="flex-grow border-t border-gray-400 mr-2"></div>
                <span className="text-gray-400">or</span>
                <div className="flex-grow border-t border-gray-400 ml-2"></div>
              </div>
              <div className="flex flex-col items-center mt-4">
                <button
                  type="submit"
                  onClick={onGoogleSignIn}
                  className="flex  border border-purpleBlue rounded-lg px-5 py-3  w-full items-center justify-center text-purpleBlue text-lg"
                >
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
            </div>
          </div>
        )}
      </div>
    );
  }

  function SignUpModal({ onSubmit }) {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      terms: false,
    });

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    };

    return (
      <div>
        <button
          onClick={handleOpen}
          className="bg-purpleBlue text-grey-100 px-5 py-3.5 rounded-md"
        >
          {buttonLabel}
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-trueWhite p-10 rounded-lg ">
              <div className="flex justify-between mb-4">
                <p className="text-h3 text-grey-600 font-bold ">
                  Sign up for Tripma{" "}
                </p>
                <button onClick={handleClose}>
                  <Image
                    src="/closegrey.png"
                    alt="close button"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
              <p className="text-lg text-grey-400 mb-4">
                Tripma is totally free to use. Sign up using your email address
                or phone number below to get started.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit(formData);
                }}
              >
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-2  border border-gray-300 rounded"
                  />
                  {errors.email && (
                    <p className="text-red text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.password && (
                    <p className="text-red text-sm mt-1">{errors.password}</p>
                  )}
                </div>
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                <label className="ml-2 text-grey-600" htmlFor="terms">
                  I agree to the{" "}
                  <span className="text-purpleBlue">terms and conditions</span>
                </label>
                {errors.terms && (
                  <p className="text-red text-sm mt-1">{errors.terms}</p>
                )}
                <br />
                <input type="checkbox" name="alerts" id="alerts" />
                <label htmlFor="alerts" className="ml-2  text-grey-600">
                  Send me the latest deal alerts
                </label>
                <div>
                <button
                  type="submit"
                  className="bg-purpleBlue text-white px-4 py-2 mt-4 rounded w-full"
                >
                  Sign Up
                </button>
                {errors.server && (
                    <p className="text-red text-sm mt-1">{errors.server}</p>
                  )}

                </div>
              </form>
              <div className="flex items-center mt-4">
                <div className="flex-grow border-t border-gray-400 mr-2"></div>
                <span className="text-gray-400">or</span>
                <div className="flex-grow border-t border-gray-400 ml-2"></div>
              </div>
              <div className="flex flex-col items-center mt-4">
                <button
                  type="submit"
                  onClick={onGoogleSignIn}
                  className="flex  border border-purpleBlue rounded-lg px-5 py-3  w-full items-center justify-center text-purpleBlue text-lg"
                >
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
            </div>
          </div>
        )}
      </div>
    );
  }
}

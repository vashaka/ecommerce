"use client";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useThemeContext } from "../context/theme";

export default function SignUpPage() {
  const [userExistsError, setUserExistsError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [formValid, setFormValid] = React.useState(false);

  const submitHandler = async (e: any) => {
    try {
      e.preventDefault();
      setLoading(true);
      const incomingUser = await axios.post(
        "http://localhost:3000/api/users/signup",
        user
      );

      if (incomingUser.data.createdUser) {
        localStorage.setItem(
          "user",
          JSON.stringify(incomingUser.data.createdUser)
        );

        window.location = "/";
      } else {
        setUserExistsError(true);
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.email.includes("@") &&
      user.password.length > 0
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [user]);

  return (
    <div className="flex justify-center items-center bg-gray-200 h-screen">
      <form
        onSubmit={submitHandler}
        className="rounded-3xl w-[90%] md:w-[550px] h-[550px] bg-gray-100 md:px-0 px-2"
      >
        <div className="">
          <div className="flex justify-center">
            <h1 className="text-center font-semibold text-4xl mt-16 hidden md:flex">
              Create An Account
            </h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-center font-semibold text-2xl mt-12 flex md:hidden">
              Create An Account
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-center text-lg text-[hsl(0,0%,63%)] mt-3 md:flex hidden">
              Create an account to enjoy all the services <br /> without any ads
              for free!
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-center text-md text-[hsl(0,0%,63%)] mt-3 md:hidden flex">
              Create an account to enjoy all the services without any ads for
              free!
            </p>
          </div>

          <div className="flex justify-center">
            <input
              className="w-[400px] py-4 px-4 border-1 border border-[hsl(0,0%,88%)] rounded-xl outline-none mt-4"
              placeholder="Username"
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <input
              className="w-[400px] py-4 px-4 border-1 border border-[hsl(0,0%,88%)] rounded-xl outline-none mt-4"
              placeholder="Email Address"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <input
              className="w-[400px] py-4 px-4 border-1 border border-[hsl(0,0%,88%)] rounded-xl outline-none mt-4"
              placeholder="Password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          {userExistsError && (
            <p className="text-red-500 text-center pt-2">
              User Allready Exists, Try Logging In
            </p>
          )}
        </div>

        <div className="flex justify-center">
          {formValid ? (
            <button
              className={`px-10 py-4 bg-[hsl(158,37%,55%)] text-white rounded-2xl text-xl font-semibold mt-4 hover:bg-[hsl(158,37%,45%)] ${
                loading && "hover:cursor-wait"
              }`}
            >
              Create An Account
            </button>
          ) : (
            <button
              disabled
              className="px-10 py-4 bg-[hsl(158,37%,65%)] text-white rounded-2xl text-xl font-semibold mt-4 cursor-not-allowed"
            >
              Create An Account
            </button>
          )}
        </div>

        <div className="flex justify-center font-[300] text-md mt-2">
          <p>
            Already Have An Account?{" "}
            <span className="underline cursor-pointer hover:text-gray-400">
              <Link href="/login">Log In</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

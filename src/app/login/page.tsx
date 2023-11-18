"use client";
import Link from "next/link";
import React from "react";
import axios from "axios";

export default function SignUpPage() {
  const [notFoundError, setNotFoundError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [formValid, setFormValid] = React.useState(false);

  const submitHandler = async (e: any) => {
    try {
      e.preventDefault();
      setLoading(true);
      const incomingUser = await axios.post(
        "http://localhost:3000/api/users/login",
        user
      );
      if (incomingUser.data.foundUser) {
        localStorage.setItem(
          "user",
          JSON.stringify(incomingUser.data.foundUser)
        );

        window.location = "/";
      } else {
        setNotFoundError(true);
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (
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
              Log In
            </h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-center font-semibold text-2xl mt-12 flex md:hidden">
              Log In
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-center text-lg text-[hsl(0,0%,63%)] mt-3 md:flex hidden">
              Get Back to your account to use <br /> advanced features!
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-center text-md text-[hsl(0,0%,63%)] mt-3 md:hidden flex">
              Get Back to your account to use advanced features!
            </p>
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

        <div className="">
          <div className="flex justify-center">
            <input
              className="w-[400px] py-4 px-4 border-1 border border-[hsl(0,0%,88%)] rounded-xl outline-none mt-4"
              placeholder="Password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          {notFoundError && (
            <p className="text-red-500 text-center pt-2">
              E-mail or password incorrect
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
              Log In To Acc
            </button>
          ) : (
            <button
              disabled
              className="px-10 py-4 bg-[hsl(158,37%,65%)] text-white rounded-2xl text-xl font-semibold mt-4 cursor-not-allowed"
            >
              Log In To Acc
            </button>
          )}
        </div>

        <div className="flex justify-center font-[300] text-md mt-2">
          <p>
            Dont Have An Account?{" "}
            <span className="underline cursor-pointer hover:text-gray-400">
              <Link href="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

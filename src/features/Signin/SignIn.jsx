import SigninForm from "./SigninForm";

function SignIn() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-2 tracking-wide ">Welcome back</h2>
        <p className="text-sm text-stone-500 mb-12">
          Welcome back! %Name% please enter yout details
        </p>
        <SigninForm />
        <p>
          Dont have an account?{" "}
          <a href="/" className="text-green-700 font-semibold">
            Sign up
          </a>
        </p>
      </div>

      <div className=" backgroundWithGradient2 text-stone-50  bg-cover bg-center flex-col flex items-center justify-center"></div>
    </div>
  );
}
export default SignIn;

function SigninForm() {
  return (
    <form>
      <div>
        <label className="font-semibold " htmlFor="Email">
          Email
        </label>
        <input
          className="border w-full mb-4 rounded-md border-stone-300 px-4 py-2 "
          id="Email"
          type="Email"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-2">
        <label className="font-semibold " htmlFor="Password">
          Password*
        </label>
        <input
          className="border w-full mb-1 rounded-md border-stone-300 px-4 py-2 "
          id="Password"
          type="text"
          placeholder="Enter your Password"
        />
      </div>

      <div className="mb-10 text-sm space-x-2">
        <input type="checkBox" id="check" />
        <label>Remember in 30days</label>

        <a href="/">Forgot Password</a>
      </div>

      <div className="text-center mb-20 ">
        <button className="bg-green-700 w-full py-1 rounded-md text-stone-100 ">
          Log
        </button>
      </div>
    </form>
  );
}
export default SigninForm;

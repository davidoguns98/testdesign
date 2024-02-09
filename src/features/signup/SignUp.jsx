function Signup() {
  return (
    <div className="grid grid-rows-2 text-yellow-500">
      <div>
        <img src="" alt="bg" />
        <h1>Start turning your ideas into reality</h1>
        <p>
          Create a free account and get full access to all features for 30-days
          <br />
          No credit card needed. Trusted by over 4,000 professionals.
        </p>
      </div>
      <div>
        <h2>Sign up</h2>
        <form>
          <div>
            <label htmlFor="name">Name*</label>
            <input id="name" type="text" placeholder="Enter your name" />
          </div>

          <div>
            <label htmlFor="Email">Email*</label>
            <input id="Email" type="email" placeholder="Enter your Email" />
          </div>

          <div>
            <label htmlFor="Password">Password*</label>
            <input
              id="Password"
              type="text"
              placeholder="Enter your Password"
            />
            <p>Must be at least 6 characters</p>
          </div>
          <button>Get started</button>
        </form>
        <p>
          Already have an account? <a>Log In</a>
        </p>
      </div>
    </div>
  );
}
export default Signup;

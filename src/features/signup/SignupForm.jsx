import { useState } from "react";

const fakeUsers = [
  { name: "joeman", email: "joeman@gmail.com", password: "joeman" },
  { name: "esther", email: "esther@gmail.com", password: "esther" },
  { name: "david", email: "david@gmail.com", password: "david" },
  { name: "becca", email: "Rebecca@gmail.com", password: "becca" },
];

function SignupForm() {
  const [users, setUsers] = useState(fakeUsers);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [newUser, setNewUser] = useState([{}]);

  function createUser(e) {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsers(() => [...users, newUser]);
    console.log(newUser);
    console.log(users);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 mb-8">
      <h2 className="text-xl font-bold mb-8 text-left">Sign up</h2>
      <div>
        <label className="font-semibold " htmlFor="name">
          Name*
        </label>
        <input
          className="border w-full mb-4 rounded-md border-stone-300 px-4 py-2 "
          id="name"
          type="text"
          placeholder="Enter your name"
          name="name"
          value={newUser.name}
          onChange={createUser}
        />
      </div>

      <div>
        <label className="font-semibold " htmlFor="Email">
          Email*
        </label>
        <input
          className="border w-full mb-4 rounded-md border-stone-300 px-4 py-2 "
          id="Email"
          type="email"
          placeholder="Enter your Email"
          name="email"
          value={newUser.email}
          onChange={createUser}
        />
      </div>

      <div className="mb-20">
        <label className="font-semibold " htmlFor="Password">
          Password*
        </label>
        <input
          className="border w-full mb-1 rounded-md border-stone-300 px-4 py-2 "
          id="Password"
          type="text"
          placeholder="Enter your Password"
          name="password"
          value={newUser.password}
          onChange={createUser}
          min={6}
        />
        {/* {newUser.password.length < 6 ? (
          <p className="text-sm text-red-500">Must be at least 6 characters</p>
        ) : (
          <p className="text-sm">Must be at least 6 characters</p>
        )} */}
      </div>
      <div className="text-center ">
        <button className="bg-green-700 w-full py-1 rounded-md text-stone-100 ">
          Get started
        </button>
      </div>
    </form>
  );
}

export default SignupForm;

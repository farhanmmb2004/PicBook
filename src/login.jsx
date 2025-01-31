import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if ((!email&&!username) || !password) {
      setError("All fields are required");
      return;
    }
    try{
        let response = await axios.post("http://localhost:8000/api/v1/users/login",{email,username,password});
        console.log(response.data);
        const token=response.data.data.accessToken;
        Cookies.set("token", token, { expires: 7, secure: true, sameSite: "Strict" });
        localStorage.setItem("token",token);
        console.log(token);
        setError("");
        alert("Login Successful!");
        // navigate("/");
    }
    catch(err){
    console.log(err);
    alert("login failed");
    }
   
  };
  let hit=async()=>{
    try{
        const token = localStorage.getItem("token");
        console.log(token);
        let response = await axios.get("https://localhost:8000/api/v1/vidios/?query=",{
            withCredentials:true
        });
    console.log(response.data);
    }
    catch(err){
    console.log(err);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="w-80 space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <br />
        <input
          type="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
      <p className="mt-4">
        Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
      </p>
      <button onClick={hit}>hit</button>
    </div>
  );
}

export default Login;

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [fullname, setfullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Fix: Proper Validation Check
//     if (!fullname || !email || !password || !username||!image) {
//       setError("All fields are required");
//       return;
//     }
  
//     try {
//       let response = await axios.post("http://localhost:8000/api/v1/users/register", {
//         fullname,
//         password,
//         username,
//         email,
//         avtar:image
//       });
  
//       setError("");
//       alert("Registration Successful!");
//       navigate("/login");
//     } catch (error) {
//       // Fix: Proper Error Handling
//       setError(error.response?.data?.message || "Something went wrong!");
//       console.error("Registration Error:", error);
//     }
//   };
const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!fullname || !email || !password || !username || !image) {
      setError("All fields are required");
      return;
    }
  
    // Create FormData object
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avtar", image); // Use the correct key expected by the backend
  
    try {
      let response = await axios.post("http://localhost:8000/api/v1/users/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      });
  
      setError("");
      alert("Registration Successful!");
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong!");
      console.error("Registration Error:", error);
    }
  };
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="w-80 space-y-4">
        <input
          type="text"
          placeholder="full Name"
          value={fullname}
          onChange={(e) => setfullname(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <br />
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <br />
         <input type="file" accept="image/*" onChange={handleImageChange} />
         <br />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Register
        </button>
      </form>
      <p className="mt-4">
        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
      </p>
    </div>
  );
}

export default Register;

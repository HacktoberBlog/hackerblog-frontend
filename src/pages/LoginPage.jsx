import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMyContext } from "../context/MyContext";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { auth } from "../firebase/auth.js"; // your firebase.js file
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import "./AuthPages.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { updateUserProfile, setLoadingState, setErrorState } = useMyContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setLoadingState(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      updateUserProfile(userCredential.user);
      navigate("/dashboard");
    } catch (error) {
      setErrorState(error.message);
    } finally {
      setIsLoading(false);
      setLoadingState(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setIsLoading(true);
    setLoadingState(true);
    try {
      const result = await signInWithPopup(auth, provider);
      updateUserProfile(result.user);
      navigate("/dashboard");
    } catch (error) {
      setErrorState(error.message);
    } finally {
      setIsLoading(false);
      setLoadingState(false);
    }
  };

  const handleGithubLogin = async () => {
    const provider = new GithubAuthProvider();
    setIsLoading(true);
    setLoadingState(true);
    try {
      const result = await signInWithPopup(auth, provider);
      updateUserProfile(result.user);
      navigate("/dashboard");
    } catch (error) {
      setErrorState(error.message);
    } finally {
      setIsLoading(false);
      setLoadingState(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Sign in to your HackerBlog account</p>
          </div>

          <form onSubmit={handleEmailLogin} className="auth-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? "error" : ""}`}
                placeholder="Enter your email"
                disabled={isLoading}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-input ${errors.password ? "error" : ""}`}
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="password-toggle"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <button type="submit" disabled={isLoading} className="auth-button">
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <div className="social-login flex flex-col justify-around h-auto items-center mt-3">
            <p className="text-white font-sans ">Or sign in with</p>
            <div className="social-buttons mt-3 flex justify-around w-1/2">
              <button onClick={handleGoogleLogin} title="Login with Google "  className="cursor-pointer" disabled={isLoading}>
                <AiFillGoogleCircle size={36} color="white" />
              </button>
              <button onClick={handleGithubLogin}   title="Login with GitHub" className="cursor-pointer" disabled={isLoading}>
                <AiFillGithub size={36} color="white" />
              </button>
            </div>
          </div>

          <div className="auth-footer">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="auth-link">Create one here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

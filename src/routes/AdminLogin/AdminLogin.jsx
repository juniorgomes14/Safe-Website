import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Navigate } from "react-router-dom";
import { z } from "zod";
import Logo from "../../assets/logoSafe.webp";
import backgroundImage from "../../assets/safeBackground.jpg";
import { useAuth } from "../../context/AuthContext";
import Loading from "../Loading/Loading";
import "./AdminLogin.css";

const loginSchema = z.object({
  email: z
    .string()
    .min(5, "O campo deve ser prenchido")
    .email("O campo deve ser um email valido"),
  password: z.string().min(8, "O password deve ter pelomenos 8 letras"),
});

const AdminLogin = () => {
  const { loading, user, loginUser } = useAuth();

  if (loading) return <Loading />;

  if (user) return <Navigate to="/dashboard" />;

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function OnLogin(data) {
    const success = await loginUser(data.email, data.password);

    if (!success) {
      toast.error(`Email ou password estão incorretos`);
    }
  }

  return (
    <div className="login-container">
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "#303030",
            padding: "16px",
            color: "#D9D9D9",
          },
        }}
      />
      <form className="login-form" onSubmit={handleSubmit(OnLogin)}>
        <img src={Logo} className="logo-login" alt="logo-login" />
        <label htmlFor="username">
          Email
          <input type="text" {...register("email")} />
          {errors.email && (
            <span className="login-error-message">{errors.email.message}</span>
          )}
        </label>
        <label htmlFor="password">
          Password
          {showPassword ? (
            <IoIosEye className="eye-icon" onClick={toggleShowPassword} />
          ) : (
            <IoIosEyeOff className="eye-icon" onClick={toggleShowPassword} />
          )}
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          {errors.password && (
            <span className="login-error-message">
              {errors.password.message}
            </span>
          )}
        </label>
        <button className="enter-button">Entrar</button>
      </form>
      <img
        className="login-background"
        src={backgroundImage}
        alt="background"
      />
    </div>
  );
};

export default AdminLogin;

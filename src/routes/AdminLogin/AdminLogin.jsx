import Logo from "../../assets/logoSafe.webp";
import backgroundImage from "../../assets/safeBackground.jpg";
import "./AdminLogin.css";
// import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoIosEyeOff } from "react-icons/io";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { z } from "zod";
import { useAuth } from "../../context/AuthContext";

const loginSchema = z.object({
  email: z
    .string()
    .min(5, "O campo deve ser prenchido")
    .email("O campo deve ser um email valido"),
  password: z.string().min(8, "O password deve ter pelomenos 8 letras"),
});

const AdminLogin = () => {
  const Auth = useAuth();
  const navigate = useNavigate();

  
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  // useEffect(() => {
  //   async function LoginState() {

  //     console.log(Auth.token)
  //     if (Auth.token) return navigate("/dashboard", { replace: true });
  //   }
  //   LoginState();
  // }, []);

  async function OnLogin(data) {
    setLoginError(null);
    const success = await Auth.loginAdmin(data.email, data.password);

    if (!success) return setLoginError("O email ou password estão incorretos");

    navigate("/dashboard");
  }

  return (
    <div className="login-container">
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
        {loginError && (
          <p className="login-error-message">
            Email ou password estão incorretos
          </p>
        )}

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

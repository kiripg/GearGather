import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userAction } from "../Store/User/user.store";

const PrivateRoute = ({ children }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");

  const { user } = useSelector((state: any) => {
    return state.user;
  });

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }
  }, [token, navigate, dispatch, user]);

  return <>{token && children}</>;
};

export default PrivateRoute;

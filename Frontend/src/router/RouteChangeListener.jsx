import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../features/ui/uiSlice";

const RouteChangeListener = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoading());
    // Simulate a short delay to show the loader on route change
    const timer = setTimeout(() => {
      dispatch(hideLoading());
    }, 500); // 🕒 0.5s - smooth but fast

    return () => clearTimeout(timer);
  }, [location, dispatch]);

  return null; // this component only listens, doesn't render anything
};

export default RouteChangeListener;

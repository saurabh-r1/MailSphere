import { useSelector } from "react-redux";

const GlobalLoader = () => {
  const { globalLoading } = useSelector((state) => state.ui);

  if (!globalLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-[1000] backdrop-blur-sm">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
};

export default GlobalLoader;

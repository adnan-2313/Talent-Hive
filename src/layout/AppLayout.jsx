import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      this is app layout
      <Outlet />
    </div>
  );
};

export default AppLayout;

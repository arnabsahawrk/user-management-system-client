import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="text-pretty">
      <Outlet />
    </main>
  );
};

export default MainLayout;

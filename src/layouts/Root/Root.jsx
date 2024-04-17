import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <main className="text-pretty">
      <Outlet />
    </main>
  );
};

export default Root;

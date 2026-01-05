import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="bg-gray-800 flex items-center justify-center h-screen">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <Link
            to="/personas"
            className="bg-yellow-400 rounded-sm p-3 hover:bg-yellow-500"
          >
            Trabajadores
          </Link>
        </div>

        <div>
          <Link
            to="/trabajos"
            className="bg-green-400 rounded-sm p-3 hover:bg-green-500"
          >
            Trabajos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;

import { useThemeStore } from "../store/useThemeStore";

const ThemeButton: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
      }`}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeButton;

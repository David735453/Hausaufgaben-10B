import Link from 'next/link';
import { useUser } from '../context/UserContext';

export default function Header({ name }) {
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="pt-20 pb-12 relative">
      {user && (
        <button
          onClick={handleLogout}
          className="absolute top-4 left-1/2 -translate-x-1/2 bg-primary text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      )}
      <img
        src="/favicon.ico"
        alt="Logo"
        className="w-12 h-12 rounded-full block mx-auto mb-4"
      />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">{name}</Link>
      </p>
    </header>
  );
}

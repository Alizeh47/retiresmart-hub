import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl mt-4">Page Not Found</h2>
      <p className="mt-4">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 text-blue-500 underline">
        Return Home
      </Link>
    </div>
  );
} 
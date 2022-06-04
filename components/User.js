import { useSession, signIn, signOut } from "next-auth/react";
export default function User() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <p className="link">
          <img
            onClick={signOut}
            src={session.user.image}
            alt="user-image-or-avatar"
            className="h-10 w-10 rounded-full hover:bg-gray-400 cursor-pointer p-1"
          />
        </p>
      </>
    );
  }
  return (
    <>
      <button
        onClick={signIn}
        className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-110 hover:shadow-md "
      >
        Sign in
      </button>
    </>
  );
}

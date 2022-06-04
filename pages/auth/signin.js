import React from "react";
import Header from "../../components/Header";
import { getProviders } from "next-auth/react";

export default function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="">
            <img src="/google-logo.svg" alt="Google Logo" />
            <p>This website is created for learning purposes</p>
            <button>Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

"use client"
import Logo from "@/components/Logo";
import MonacoEditor from "@/components/MonacoEditor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14 px-3 bg-hero-background bg-cover bg-no-repeat bg-center">
      <div className="w-full flex flex-col items-center justify-between mb-10">
        <Logo />
        <h2 className="mt-10 text-gray-dark text-3xl font-semibold">Create & Share</h2>
        <h1 className="mt-4 text-gray-dark text-4xl font-semibold">Your Code easily</h1>
      </div>
      <div className="w-full lg:w-[56rem]">
        <MonacoEditor
          languageInit={undefined}
          themeInit={undefined}
          codeInit={undefined}
          isLink={false}
          id={undefined}
        />
      </div>
    </main>
  );
}

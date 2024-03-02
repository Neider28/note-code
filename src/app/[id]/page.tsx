"use client"
import Loading from "@/components/Loading";
import Logo from "@/components/Logo";
import MonacoEditor from "@/components/MonacoEditor";
import { useEffect, useState } from "react";

export default function NoteByID({ params }: { params: { id: string } }) {
  const [note, setNote] = useState<any>(null);

  useEffect(() => {
    const getNote = async () => {
      try {
        const res = await fetch(`/api/notes/${params.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (res.ok) {
          const data = await res.json();
          setNote(data);
        } else {
          setNote(null);
        }
      } catch (error) {
        console.log("Client error"); 
      }
    };

    getNote();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14 px-3 bg-hero-background bg-cover bg-no-repeat bg-center">
      <div className="w-full flex flex-col items-center justify-between mb-10">
        <Logo />
        <h2 className="mt-10 text-gray-dark text-3xl font-semibold">Create & Share</h2>
        <h1 className="mt-4 text-gray-dark text-4xl font-semibold">Your Code easily</h1>
      </div>
      {note != null && (
        <div className="w-full lg:w-[56rem]">
          <MonacoEditor
            languageInit={note.note.language}
            themeInit={note.note.theme}
            codeInit={note.note.code}
            isLink={true}
            id={params.id}
          />
        </div>
      )}
      {!note && (
        <div className="w-full lg:w-[56rem] h-[80vh] flex items-center justify-center">
          <Loading />
        </div>
      )}
    </main>
  );
}

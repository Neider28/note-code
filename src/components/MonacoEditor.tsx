import Editor from "@monaco-editor/react";
import { useState } from "react";
import { AnchorIcon } from "./AnchorIcon";
const { Select, SelectItem, Button } = require("@nextui-org/react");
import copy from "clipboard-copy";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { languages, themes } from "@/data/options";

const MonacoEditor = ({
    languageInit,
    themeInit,
    codeInit,
    id,
    isLink,
  } : {
    languageInit: string | undefined,
    themeInit: string | undefined,
    codeInit: string | undefined
    id: string | undefined
    isLink: boolean,
  }) => {
  const [valueLanguage, setValueLanguage] = useState<string>(!languageInit ? "html" : languageInit);
  const [valueTheme, setValueTheme] = useState<string>(!themeInit ? "vs-dark" : themeInit);
  const [code, setCode] = useState<string | undefined>(!codeInit ? languages[0].code : codeInit);
  const initialCode = codeInit;
  const [isLoading, setIsLoading] = useState(false);
  const [changed, setChanged] = useState(false);
  const router = useRouter();

  const handleSelectionLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueLanguage(e.target.value);
    setCode(languages.find((item: any) => item.value === e.target.value)?.code);
  };

  const handleSelectionThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueTheme(e.target.value);
  };

  const handleEditorChange = (newValue: string | undefined) => {
    setCode(newValue);

    if (isLink) {
      if (initialCode === newValue) {
        setChanged(false);
      } else {
        setChanged(true);
      }
    }
  };

  const handleConfirm = (text: string) => {
    toast.success(text);
  };

  const handleCancel = () => {
    toast.error("Internal error!");
  };
  
  const shareNote = async () => {
    setIsLoading(true);

    try {
      const noteI = {
        language: valueLanguage,
        theme: valueTheme,
        code: code,
      };

      const note = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteI),
      });

      const data = await note.json();

      if (data) {
        setIsLoading(false);

        router.push(`/${data.note._id}`);
      }
    } catch (error) {
      setIsLoading(false);
      handleCancel();
    }
  };

  const copyNoteLink = async () => {
    if (id) {
      await copy(`https://note-code-app.vercel.app/${id}`);
      handleConfirm("Copy to clipboard!");
    }
  };

  return (
    <div className="rounded-2xl bg-black-editor p-6 shadow-inner shadow-gray-600">
      <ToastContainer autoClose={3000} position="top-center" />
      <Editor
        width="100%"
        height="80vh"
        language={valueLanguage}
        theme={valueTheme}
        value={code}
        onChange={handleEditorChange}
        options={{
          tabSize: 2,
          selectOnLineNumbers: true,
          formatOnType: true,
          formatOnPaste: true,
          minimap: {
            enabled: false,
          },
        }}
      />
      <div className={`w-full flex sm:flex-row gap-4 flex-col ${(isLink && id) ? "items-center" : "items-start"} lg:items-center justify-between pt-4`}>
        <div className="w-full lg:w-auto flex gap-4 sm:flex-col lg:flex-row">
          <Select
            defaultSelectedKeys={[!languageInit ? "html" : languageInit]}
            aria-label="Languages"
            className="w-full lg:w-40"
            onChange={handleSelectionLanguageChange}
            isDisabled={isLink}
          >
            {languages.map((language) => (
              <SelectItem key={language.value} value={language.value}>
                {language.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            defaultSelectedKeys={[!themeInit ? "vs-dark" : themeInit]}
            aria-label="Themes"
            className="w-full lg:w-40"
            onChange={handleSelectionThemeChange}
            isDisabled={isLink}
          >
            {themes.map((theme) => (
              <SelectItem key={theme.value} value={theme.value}>
                {theme.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="w-full lg:w-auto flex lg:flex-row flex-col gap-4 items-center">
          {(isLink && id) && (
            <Button
              className="w-full lg:w-fit"
              color="success"
              variant="bordered"
              radius="full"
              size="lg"
              startContent={<AnchorIcon />}
              onClick={copyNoteLink}
            >
              {`.../${id}`}
            </Button>
          )}
          <Button
            className="w-full lg:w-32"
            color="primary"
            radius="full"
            size="lg"
            onClick={shareNote}
            isLoading={isLoading}
            isDisabled={isLink && ((isLink && changed) ? false : true)}
          >
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MonacoEditor;

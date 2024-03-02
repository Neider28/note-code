import Image from "next/image";
import NoteCodeLogo from "../../public/img/note-code-logo.svg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src={NoteCodeLogo}
        alt="Note Code"
        width={150}
        style={{
          height: "auto"
        }}
        priority
      />
    </Link>
  );
}

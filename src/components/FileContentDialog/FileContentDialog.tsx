import "./FileContentDialog.css";
import type { FileContents } from "@pierre/diffs";
import type { PrimitiveAtom } from "jotai";
import { useAtom } from "jotai";
import { useEffect, useId, useRef } from "react";

export function FileContentDialog(props: {
  fileContentAtom: PrimitiveAtom<FileContents>;
  handleClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const contentInputRef = useRef<HTMLTextAreaElement>(null);
  const titleId = useId();
  const contentId = useId();
  const [fileContent, setFileContent] = useAtom(props.fileContentAtom);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="file-content-dialog"
      onClose={props.handleClose}
    >
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          setFileContent({
            name: titleInputRef.current?.value.trim() ?? "",
            contents: contentInputRef.current?.value ?? "",
          });
          props.handleClose();
        }}
      >
        <label htmlFor={titleId}>File title</label>
        <input
          id={titleId}
          defaultValue={fileContent.name}
          ref={titleInputRef}
        />
        <label htmlFor={contentId}>Content</label>
        <textarea
          id={contentId}
          defaultValue={fileContent.contents}
          ref={contentInputRef}
          rows={20}
        />
        <button type="submit">Save</button>
      </form>
    </dialog>
  );
}

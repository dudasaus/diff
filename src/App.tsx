import "./App.css";
import { useState } from "react";
import { Diff } from "./components/Diff/Diff";
import type { FileContents } from "@pierre/diffs";
import { FileContentDialog } from "./components/FileContentDialog/FileContentDialog";
import { newFileAtom, oldFileAtom } from "./atoms";
import type { PrimitiveAtom } from "jotai";
import { DiffStyleToggle } from "./components/DiffStyleToggle/DiffStyleToggle";
import { FileSuffix } from "./components/FileSuffix/FileSuffix";

export default function App() {
  const [editingFile, setEditingFile] =
    useState<PrimitiveAtom<FileContents> | null>(null);

  return (
    <>
      <h1>DIFF</h1>
      {editingFile ? (
        <FileContentDialog
          fileContentAtom={editingFile}
          handleClose={() => {
            setEditingFile(null);
          }}
        />
      ) : null}

      <div className="diff-settings-container">
        <FileSuffix />
        <DiffStyleToggle />
      </div>

      <div className="edit-file-actions">
        <button
          onClick={() => {
            setEditingFile(oldFileAtom);
          }}
        >
          Edit File 1
        </button>
        <button
          onClick={() => {
            setEditingFile(newFileAtom);
          }}
        >
          Edit File 2
        </button>
      </div>

      <Diff />
    </>
  );
}

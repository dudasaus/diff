import { useState } from "react";
import { Diff } from "./components/diff/Diff";
import type { FileContents } from "@pierre/diffs";
import { FileContentDialog } from "./components/FileContentDialog/FileContentDialog";
import { oldFileAtom } from "./atoms";
import type { PrimitiveAtom } from "jotai";

export default function App() {
  const [editingFile, setEditingFile] = useState<PrimitiveAtom<FileContents> | null>(null);


  return <>
    {editingFile ? <FileContentDialog 
      fileContentAtom={editingFile} 
      handleClose={() => { setEditingFile(null) }} 
    /> : <button 
    onClick={() => setEditingFile(oldFileAtom)}
  >Edit</button>}

    <Diff/>
  </>
}

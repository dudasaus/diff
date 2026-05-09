import { MultiFileDiff } from "@pierre/diffs/react";
import { useAtomValue } from "jotai";
import { diffStyleAtom, newFileAtom, oldFileAtom } from "../../atoms";

export function Diff() {
  const diffStyle = useAtomValue(diffStyleAtom);
  const oldFile = useAtomValue(oldFileAtom);
  const newFile = useAtomValue(newFileAtom);

  return (
    <>
      <MultiFileDiff
        oldFile={oldFile}
        newFile={newFile}
        options={{ diffStyle, theme: "pierre-dark" }}
      />
    </>
  );
}

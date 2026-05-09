import { MultiFileDiff } from "@pierre/diffs/react";
import { useAtomValue } from "jotai";
import {
  diffStyleAtom,
  fileSuffixAtom,
  newFileAtom,
  oldFileAtom,
} from "../../atoms";

export function Diff() {
  const diffStyle = useAtomValue(diffStyleAtom);
  const oldFile = useAtomValue(oldFileAtom);
  const newFile = useAtomValue(newFileAtom);
  const fileSuffix = useAtomValue(fileSuffixAtom);

  return (
    <>
      <MultiFileDiff
        oldFile={{
          ...oldFile,
          name: `${oldFile.name}.${fileSuffix}`,
        }}
        newFile={{
          ...newFile,
          name: `${newFile.name}.${fileSuffix}`,
        }}
        options={{ diffStyle, theme: "pierre-dark" }}
      />
    </>
  );
}

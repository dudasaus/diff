import type { FileContents } from "@pierre/diffs";
import { atomWithStorage } from "jotai/utils";

export type DiffStyle = "split" | "unified";

export const diffStyleAtom = atomWithStorage<DiffStyle>("diffStyle", "split");

export const fileSuffixAtom = atomWithStorage<string>("fileSuffix", "txt");

export const oldFileAtom = atomWithStorage<FileContents>("oldFile", {
  name: "base",
  contents: "Hello world!\n",
});

export const newFileAtom = atomWithStorage<FileContents>("newFile", {
  name: "new",
  contents: "Hello friends!\n",
});

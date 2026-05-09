import type { FileContents } from "@pierre/diffs";
import { atom } from "jotai";

export type DiffStyle = "split" | "unified";

export const diffStyleAtom = atom<DiffStyle>("split");

export const oldFileAtom = atom<FileContents>({
  name: "base.txt",
  contents: "Hello world!\n",
});

export const newFileAtom = atom<FileContents>({
  name: "new.txt",
  contents: "Hello friends!\n",
});

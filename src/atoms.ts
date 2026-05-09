import type { FileContents } from "@pierre/diffs";
import { atom } from "jotai";

export type DiffStyle = "split" | "unified";

export const diffStyleAtom = atom<DiffStyle>("split");

export const fileSuffixAtom = atom<string>("txt");

export const oldFileAtom = atom<FileContents>({
  name: "base",
  contents: "Hello world!\n",
});

export const newFileAtom = atom<FileContents>({
  name: "new",
  contents: "Hello friends!\n",
});

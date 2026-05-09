import {
  type FileContents,
  MultiFileDiff,
} from '@pierre/diffs/react';
import { useState } from 'react';

const oldFile: FileContents = {
  name: 'base.txt',
  contents: `const std = @import("std");

pub fn main() !void {
    const stdout = std.io.getStdOut().writer();
    try stdout.print("Hi you, {s}!\\\\n", .{"world"});
}
`,
};

const newFile: FileContents = {
  name: 'new.txt',
  contents: `const std = @import("std");

pub fn main() !void {
    const stdout = std.io.getStdOut().writer();
    try stdout.print("Hello there, {s}!\\\\n", .{"zig"});
}
`,
};

type DiffStyle = "split" | "unified";

export function Diff() {

  const [diffStyle, setDiffStyle] = useState<DiffStyle>('unified');

  return (<>
    <button onClick={() => setDiffStyle(diffStyle === 'split' ? 'unified' : 'split')}>
      Toggle Diff Style
    </button>
    <MultiFileDiff
      oldFile={oldFile}
      newFile={newFile}
      options={{ diffStyle, theme: 'pierre-dark' }}
    />
  </>);
}

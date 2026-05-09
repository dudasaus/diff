import {
  MultiFileDiff,
} from '@pierre/diffs/react';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
import { newFileAtom, oldFileAtom } from '../../atoms';

type DiffStyle = "split" | "unified";

export function Diff() {

  const [diffStyle, setDiffStyle] = useState<DiffStyle>('unified');
  const oldFile = useAtomValue(oldFileAtom);
  const newFile = useAtomValue(newFileAtom);

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

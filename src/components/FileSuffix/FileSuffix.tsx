import "./FileSuffix.css";
import { useAtom } from "jotai";
import { fileSuffixAtom } from "../../atoms";
import { useId, useRef } from "react";

export function FileSuffix() {
  const [fileSuffix, setFileSuffix] = useAtom(fileSuffixAtom);
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleUpdate() {
    const resolvedValue = inputRef.current?.value.trim();
    if (resolvedValue) {
      setFileSuffix(resolvedValue);
    }
  }

  return (
    <div className="file-suffix-container">
      <label htmlFor={id}>File suffix:</label>
      <input
        ref={inputRef}
        defaultValue={fileSuffix}
        type="text"
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            handleUpdate();
          }
        }}
      />
    </div>
  );
}

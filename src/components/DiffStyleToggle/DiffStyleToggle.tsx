import { useAtom } from "jotai";
import { diffStyleAtom } from "../../atoms";

export function DiffStyleToggle() {
  const [diffStyle, setDiffStyle] = useAtom(diffStyleAtom);

  return (
    <button
      onClick={() => {
        setDiffStyle(diffStyle === "split" ? "unified" : "split");
      }}
    >
      View diff {diffStyle == "split" ? "inline" : "side-by-side"}
    </button>
  );
}

import { useState, useCallback, useRef } from "react";

/**
 * Copies the given text to clipboard.
 * Returns { copied, handleClick } — attach handleClick to a button's onClick.
 * `copied` is true for 2 seconds after a successful copy (use for toast/icon feedback).
 */
export function useCopyToClipboard(text: string) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const handleClick = useCallback(() => {
    try {
      navigator.clipboard.writeText(text);
    } catch {
      // Legacy fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return { copied, handleClick };
}

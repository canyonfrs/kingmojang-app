import { useEffect, useRef, useState } from "react";

interface TextAreaInterface {
  defaultFontSize?: number;
  resizeStep?: number;
}

const MINIMUM_FONTSIZE = 10;

export default function useTextArea({ defaultFontSize = 24, resizeStep = 2 }: TextAreaInterface) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [fontSize, setFontSize] = useState(defaultFontSize);

  const handleWheel = (event: WheelEvent) => {
    if (event.ctrlKey) {
      event.preventDefault();
      adjustFontSize(event.deltaY > 0 ? "plus" : "minus");
    }
  };

  // 글자 크기 조절 함수
  const adjustFontSize = (control: "plus" | "minus") => {
    setFontSize((prevSize) => {
      if (control === "minus" && prevSize - resizeStep < MINIMUM_FONTSIZE) {
        return prevSize;
      } else {
        return prevSize + (control === "plus" ? resizeStep : -resizeStep);
      }
    });
  };

  // 키보드 이벤트 핸들러
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();
      if (event.key === "=") {
        adjustFontSize("plus");
      } else if (event.key === "-") {
        adjustFontSize("minus");
      }
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.addEventListener("wheel", (ev) => handleWheel(ev));
      textarea.addEventListener("keydown", (ev) => handleKeyDown(ev));
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener("keydown", (ev) => handleKeyDown(ev));
        textarea.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.fontSize = `${fontSize}px`;
    }
  }, [fontSize]);

  return { textareaRef };
}

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

interface TextAreaInterface {
  defaultFontSize?: number;
  resizeStep?: number;
}

type Coordinate = {
  row: number;
  column: number;
};

const MINIMUM_FONTSIZE = 10;

export default function useTextArea({ defaultFontSize = 24, resizeStep = 2 }: TextAreaInterface) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [fontSize, setFontSize] = useState(defaultFontSize);
  const [coordinate, setCoordinate] = useState<Coordinate>({
    row: 0,
    column: 0,
  });

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
      if (event.key === "=") {
        event.preventDefault();
        adjustFontSize("plus");
      } else if (event.key === "-") {
        event.preventDefault();
        adjustFontSize("minus");
      }
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.addEventListener("wheel", (ev) => handleWheel(ev));
      textarea.addEventListener("keydown", (ev) => {
        setTimeout(() => {
          // keydown 비동기 해결하려 추가
          getCursorPositionOnArrowKey();
        }, 0);
        handleKeyDown(ev);
      });
      textarea.addEventListener("click", () => {
        setTimeout(() => {
          // keydown 비동기 해결하려 추가
          getCursorPositionOnClick();
        }, 0);
      });
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

  function getCursorPositionOnClick() {
    if (!textareaRef.current) return;
    const textarea = textareaRef.current;
    if (!textarea) return;
    const cursorPos = textareaRef.current.selectionStart;

    // 클릭된 위치의 행과 열을 계산
    const textBeforeCursor = textarea.value.substring(0, cursorPos);
    const lines = textBeforeCursor.split("\n");
    const currentRow = lines.length;
    const currentColumn = lines[lines.length - 1].length;
    setCoordinate({ row: currentRow, column: currentColumn });
    return { row: currentRow, column: currentColumn };
  }

  function getCursorPositionOnArrowKey() {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const cursorPos = textarea.selectionStart;

    const textBeforeCursor = textarea.value.substring(0, cursorPos);
    const lines = textBeforeCursor.split("\n");
    const currentRow = lines.length;
    const currentColumn = lines[lines.length - 1].length;
    setCoordinate({ row: currentRow, column: currentColumn });
    return { row: currentRow, column: currentColumn };
  }

  return { textareaRef, coordinate };
}

'use client'

import { useEffect } from "react";
interface TypewriteProps {
    words: string[]
}
export function Typewrite({ words}: TypewriteProps) {
    useEffect(() => {
        let i = 0;
        let j = 0;
        let currentWord = "";
        let isDeleting = false;

        function type() {
          currentWord = words[i];
          if (isDeleting) {
            const span: any = document.getElementById("typewriter")
            span.textContent =
              currentWord.substring(0, j - 1);
            j--;
            if (j == 0) {
              isDeleting = false;
              i++;
              if (i == words.length) {
                i = 0;
              }
            }
          } else {
            const span: any = document.getElementById("typewriter")
            span.textContent =
              currentWord.substring(0, j + 1);
            j++;
            if (j == currentWord.length) {
                setTimeout(() => {
                    isDeleting = true;
                }, 500)
         
            }
          }
          setTimeout(type, 150);
        }
        type()
      }, []);
    
    return (
        <div><span id="typewriter" className="text-xl font-normal font-mono"></span><strong className="animate-ping"> __</strong></div>
    )
}
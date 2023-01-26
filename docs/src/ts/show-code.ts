export const showCode = () => {
  document.querySelectorAll("#usage code:empty").forEach((code) => {
    let html = code.previousElementSibling;
    if (html instanceof HTMLTemplateElement) {
      html = html.content.firstElementChild;
    }

    const encoded = encodeHTMLEntities(html?.outerHTML!);
    code.innerHTML = encoded;
  });
};

function encodeHTMLEntities(text: string) {
  let textArea = document.createElement("textarea");
  textArea.innerText = text;
  let encodedOutput = textArea.innerHTML;
  let arr = encodedOutput.split("<br>");
  const extraWhitespace = countWhitespace(arr[1]) - 2;
  arr = arr.slice(0, 1).concat(
    arr.slice(1).map((line) => {
      return line.slice(extraWhitespace);
    })
  );

  encodedOutput = arr.join("\n");
  return encodedOutput;
}

function countWhitespace(text: string): number {
  const matches = /^\s+/.exec(text);
  return matches?.[0]?.length ?? 0;
}

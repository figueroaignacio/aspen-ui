export function highlightCode(code: string) {
  const keywords = [
    "import",
    "from",
    "export",
    "default",
    "function",
    "return",
    "const",
    "let",
    "var",
    "if",
    "else",
    "for",
    "while",
    "true",
    "false",
    "null",
    "undefined",
    "async",
    "await",
  ];

  const operators = ["=", "=>", "+", "-", "*", "/", "%", "&&", "||", "!"];
  const brackets = ["(", ")", "{", "}", "[", "]"];

  return code.split(/([\s{}()\[\];.,]+)/).map((token, index) => {
    if (keywords.includes(token)) {
      return (
        <span key={index} className="text-blue-400 font-semibold">
          {token}
        </span>
      );
    }
    if (operators.includes(token)) {
      return (
        <span key={index} className="text-blue-400">
          {token}
        </span>
      );
    }
    if (brackets.includes(token)) {
      return (
        <span key={index} className="text-blue-400">
          {token}
        </span>
      );
    }
    if (/^["'`].*["'`]$/.test(token)) {
      return (
        <span key={index} className="text-green-400">
          {token}
        </span>
      );
    }
    if (/^\d+$/.test(token)) {
      return (
        <span key={index} className="text-red-400">
          {token}
        </span>
      );
    }
    return token;
  });
}

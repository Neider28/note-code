export const languages = [
  {
    label: "HTML",
    value: "html",
    code: `<html>\n\t<head>\n\t\t<title>HTML Sample</title>\n\t\t<meta http-equiv="X-UA-Compatible" content="IE=edge">\n\t\t<style type="text/css">\n\t\t\th1 {\n\t\t\t\tcolor: #CCA3A3;\n\t\t\t}\n\t\t</style>\n\t\t<script type="text/javascript">\n\t\t\talert("I am a sample... visit devChallengs.io for more projects");\n\t\t</script>\n\t</head>\n\t<body>\n\t\t<h1>Heading No.1</h1>\n\t\t<input disabled type="button" value="Click me" />\n\t</body>\n</html>`,
  },
  {
    label: "CSS",
    value: "css",
    code: `h1 {\n\tcolor: blue;\n}`,
  },
  {
    label: "JavaScript",
    value: "javascript",
    code: `console.log("Hello, world!");\n\nfunction add(a, b) {\n\treturn a + b;\n}`,
  },
  {
    label: "TypeScript",
    value: "typescript",
    code: `interface Person {\n\tname: string;\n\tage: number;\n}\n\nconst person: Person = {\n\tname: "John",\n\tage: 30\n};`,
  },
  {
    label: "JSON",
    value: "json",
    code: `{\n\t"key": "value",\n\t"array": [1, 2, 3],\n\t"object": {\n\t\t"nestedKey": "nestedValue"\n\t}\n}`,
  },
];

export const themes = [
  {
    label: "Dark",
    value: "vs-dark",
  },
  {
    label: "Light",
    value: "vs",
  },
];

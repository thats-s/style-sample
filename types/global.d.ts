declare module '*.html?raw' {
  const content: string;
  export default content;
}

declare module '*.ejs?raw' {
  const content: string;
  export default content;
}

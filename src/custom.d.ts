declare module '*.pdf' {
    const content: string;
    export default content;
  }

  declare module 'pdfjs-dist' {
    const getDocument: any;
    const version: string;
    const GlobalWorkerOptions: {
      workerSrc: string;
    };
    export { getDocument, version, GlobalWorkerOptions };
  } 
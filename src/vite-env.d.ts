/// <reference types="vite/client" />
/// <reference types="vite-imagetools" />

declare module '*.jpg?cardImage' {
    const src: string;
    export default src;
}

declare module '*.jpeg?cardImage' {
    const src: string;
    export default src;
}

declare module '*.png?cardImage' {
    const src: string;
    export default src;
}

declare module '*.webp?*' {
    const src: string;
    export default src;
}

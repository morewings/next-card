/**
 * Custom image loader to replace built-in which doesn't work in export mode
 * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports#image-optimization
 */
export default function cloudinaryLoader({
    src,
    width,
    quality,
}: {
    src: string;
    width: number;
    quality?: number;
}) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
    return `https://res.cloudinary.com/demo/image/upload/${params.join(',')}${src}`;
}

import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
}

export const Card = ({src, alt}: Props) => {
  return (
    <div>
  <Image src={src} alt={alt} width={300} height={200} />
  <p>This is a great picture!</p>
</div>
  )
}

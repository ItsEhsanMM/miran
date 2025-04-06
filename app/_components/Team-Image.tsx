import Image from "next/image";

interface Props {
   src: string;
   alt: string;
   role: string;
}

const TeamImage = ({ alt, role, src }: Props) => {
   return (
      <div className="flex flex-col h-72 text-center items-center justify-between max-w-40">
         <Image
            loading="lazy"
            src={src}
            alt={alt}
            width={512}
            height={512}
            className="rounded-full"
         />
         <h5>{alt}</h5>
         <h6 className="text-foreground">{role}</h6>
      </div>
   );
};
export default TeamImage;

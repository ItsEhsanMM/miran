import Image from "next/image";

interface Props {
   src: string;
   alt: string;
   role: string;
}

const TeamImage = ({ alt, role, src }: Props) => {
   return (
      <div className="flex flex-col items-center max-w-40">
         <Image
            src={src}
            alt={alt}
            width={512}
            height={512}
            className="rounded-full"
         />
         <h5>{alt}</h5>
         <h6>{role}</h6>
      </div>
   );
};
export default TeamImage;

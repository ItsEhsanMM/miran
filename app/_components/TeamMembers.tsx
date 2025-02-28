import TeamImage from "./Team-Image";

interface Props {
   id: number;
   name: string;
   role: string;
   imageUrl: string;
}

const TeamMembers = (values: Props) => {
   return (
      <section className="text-center space-y-8">
         <h1>Team Members</h1>
         <TeamImage
            alt={values.name}
            role={values.role}
            src={values.imageUrl}
         />
      </section>
   );
};
export default TeamMembers;

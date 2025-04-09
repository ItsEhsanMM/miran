import TeamImage from "./Team-Image";

interface TeamMember {
   id: number;
   name: string;
   role: string;
   imageUrl: string;
}

interface Props {
   values: TeamMember[];
}

const TeamMembers = ({ values }: Props) => {
   return (
      <section className="flex flex-col gap-8 justify-start items-start">
         <h1>Team Members</h1>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {values.map((member) => (
               <TeamImage
                  key={member.id}
                  alt={member.name}
                  role={member.role}
                  src={member.imageUrl}
               />
            ))}
         </div>
      </section>
   );
};

export default TeamMembers;

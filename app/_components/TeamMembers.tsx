import TeamImage from "./Team-Image";

const TeamMembers = () => {
   return (
      <section className="text-center space-y-8">
         <h1>Team Members</h1>
         <TeamImage
            alt="Abbas Hayali"
            role="Founder"
            src="/assets/abbas-hayali.png"
         />
      </section>
   );
};
export default TeamMembers;

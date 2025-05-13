import { PERSONALITY_DESCRIPTION } from "../const/constants";

type Props = {
  personality: string;
};

const PersonalityDescription = ({ personality }: Props) => {
  const match = PERSONALITY_DESCRIPTION.find(
    (info) => info.title === personality
  );

  return (
    <div className="text-center text-sm italic max-w-sm p-3">
      {match ? (
        <p className="">{match.description}</p>
      ) : (
        <p>Personality not found.</p>
      )}
    </div>
  );
};

export default PersonalityDescription;

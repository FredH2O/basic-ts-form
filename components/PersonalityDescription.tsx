import { PERSONALITY_DESCRIPTION } from "../const/constants";

type Props = {
  personality: string;
};

const PersonalityDescription = ({ personality }: Props) => {
  const match = PERSONALITY_DESCRIPTION.find(
    (info) => info.title === personality
  );

  return (
    <div>
      {match ? (
        <p>
          <strong>{match.title}</strong> - {match.description}
        </p>
      ) : (
        <p>Personality not found.</p>
      )}
    </div>
  );
};

export default PersonalityDescription;

type Props = {
  personality: string;
  description: string;
};

const PersonalityDescription = ({ personality, description }: Props) => {
  return (
    <div>
      <p>
        {personality} - {description}
      </p>
    </div>
  );
};

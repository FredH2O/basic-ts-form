import { ACTIVITIES } from "../../const/activities";
import type { ChangeEvent, FormEvent } from "react";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Activities = ({ onChange }: Props) => {
  return (
    <div className="flex flex-col justify-center gap-1">
      <p className="text-2xl p-1">
        Do you attend any of the following school communities/activities?
      </p>
      {ACTIVITIES.map((activity) => (
        <div key={activity.id} className="flex gap-2 hover:text-blue-500 ">
          <input
            onChange={onChange}
            className="hover:cursor-pointer"
            type="checkbox"
            id={activity.name}
            name="activity"
            value={activity.value}
          />
          <label className="hover:cursor-pointer" htmlFor={activity.name}>
            {activity.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Activities;

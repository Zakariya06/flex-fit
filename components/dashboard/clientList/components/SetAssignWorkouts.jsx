import OptionInput from "@/components/OptionsInput"
import TagsInput from "@/components/TagsInput"

export default function SetAssignWorkouts({setWorkOutValue}){
    const options = ["Full body", "Core", "Chest"]
    return (
        <div className="SetWorkoutPlanContent">
              <TagsInput setWorkOutValue={setWorkOutValue} name="role" options={options} label="Select Workout" />
        </div>
    )
}
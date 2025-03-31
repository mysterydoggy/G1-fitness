import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Create_Workout.css"; 
import logo from "./G1_Logo.png";
import dumbell from "./Dumbell.png";

function WorkoutCreation() {
  const [workoutName, setWorkoutName] = useState("");  
  const [selectedExercises, setSelectedExercises] = useState({});
  /* Category and subcategory state */
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  /* State for workout plan and creation status */
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [isWorkoutCreated, setIsWorkoutCreated] = useState(false); 
  const [duplicateMessage, setDuplicateMessage] = useState("");

  // Exercise data structure
  // Each category has subcategories with corresponding exercises
  const exercises = {
    Arms: {
      Biceps: ["Bicep Curl", "Hammer Curl", "Concentration Curl"],
      Triceps: ["Tricep Dip", "Tricep Pushdown", "Skull Crusher"],
      Forearms: ["Wrist Curl", "Reverse Curl", "Forearm Plank"],
    },
    Back: {
      Upper: ["Seated Cable Row", "Bent-over Barbell Row", "T-Bar Row"],
      Lats: ["Lat Pulldown", "Pull-up", "Chin-up", "Straight-Arm Pulldown"],
      Lower: ["Deadlift", "Barbell Good Mornings", "Back Extension"],
      Traps: ["Shrugs", "Face Pulls", "Upright Row"],
    },
    Chest: {
      Upper: ["Incline Bench Press", "Incline Dumbbell Press", "Incline Push-Up"],
      Middle: ["Bench Press", "Flat Dumbbell Press", "Chest Fly"],
      Lower: ["Decline Bench Press", "Dips (Chest Focused)", "Cable Crossover"],
    },
    Core: {
      Inner: ["Plank", "Bird Dog", "Dead Bug"],
      Outer: ["Side Plank", "Oblique Crunch", "Hang Leg Raise"],
    },
    FullBody: {
      Power: ["Clean and Jerk", "Snatch", "Snatch"],
      Conditioning: ["Burpees", "Kettlebell Swings", "Battle Ropes"],
      BodyWeight: ["Jump Squats", "Push-Up to Plank", "Mountain Climbers"],
    },
    Legs: {
      Quadriceps: ["Barbell Squat", "Leg Press", "Lunges"],
      Hamstrings: ["Deadlift", "Hamstring Curl", "Glute Bridge"],
      Calves: ["Calf Raise", "Seated Calf Raise", "Donkey Calf Raise"],
      Glutes: ["Hip Thrust", "Cable Kickback", "Glute Bridge"],
    },
    Shoulders: {
      Deltoids: ["Overhead Press", "Lateral Raise", "Upright Row"],
      RotatorCuff: ["External Rotation", "Internal Rotation", "Face Pull"],
    },
  };

  /* Function to handle checkbox changes */
  const handleCheckboxChange = (subcategory, exercise) => {
    setSelectedExercises((prevState) => {
      const updatedList = prevState[subcategory]?.includes(exercise)
        ? prevState[subcategory].filter((e) => e !== exercise)
        : [...(prevState[subcategory] || []), exercise];

      return { ...prevState, [subcategory]: updatedList };
    });
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
    setActiveSubcategory(null); // reset subcategory when switching
  };

  const handleSaveWorkout = () => {
    // handle saving the workout routine here, needs work
    console.log("Workout Saved:", workoutName, selectedExercises);
  };

  const handleCreateWorkout = () => {
    setIsWorkoutCreated(true); // toggle the visibility of the content
  };

  // Function to handle the "Add to Workout" button click
  const handleAddToWorkout = () =>{
    if(!activeSubcategory || !selectedExercises[activeSubcategory]) return;

    const newEntries = selectedExercises[activeSubcategory].map((exercise) => ({
      category: activeCategory,
      subcategory: activeSubcategory,
      exercise, 
    }));

    /*Handaling problem i ran into where you could add duplicate exercises*/
    const duplicates = newEntries.filter((newItem) => 
      workoutPlan.some(
        (existingItem) => 
          existingItem.exercise === newItem.exercise &&
          existingItem.subcategory === newItem.subcategory &&
          existingItem.category === newItem.category
      )
    );

    if(duplicates.length > 0){
      setDuplicateMessage("❗ One or more exercises already in workout.");
      return;
    }
    setDuplicateMessage(""); // Clear the message if no duplicates
    setWorkoutPlan((prev) => [...prev, ...newEntries]);

    //Clear the checkbox when it is added to workout plan
    setSelectedExercises((prevState) => ({
      ...prevState,
      [activeSubcategory]: [], // Clear the selected exercises for this subcategory
    }));
  };

  const handleRemoveFromWorkout = (indexRemoved) => {
    setWorkoutPlan((prev) => prev.filter((_, index) => index !== indexRemoved));
  };

  // Function to handle the "Create Workout" button click
  return (
    <div className="createworkout">
      
      <div className="header-top">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="Tit">Workout Creation</h1>
        <Link to ="/">
          <button className="nav-button">Home</button>
        </Link>
      </div>
      <hr /> 

      <div className="dumbell">
        <img src ={dumbell} alt="dumbell" />
      </div>

      {/* create workout button */}
      {!isWorkoutCreated && (
        <button className="create-workout-button" onClick={handleCreateWorkout}>
          Create Workout
        </button>
      )}

      {/* content appears after clicking workout buttn */}
      {isWorkoutCreated && (
        <div className="content-container show">
          {/* workout name input */}
          <input
            type="text"
            className="workout-name-input"
            placeholder="Enter workout name"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
          />

          {/* muscle categories, choice */}
          <div className="muscle-group-dropdown">
            <select
              value={activeCategory || ""}
              onChange={(e) => handleCategoryClick(e.target.value)}
            >
              <option value="">Select Muscle Group</option>
              {Object.keys(exercises).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          {/* subcategories, choice */}
          {activeCategory && (
            <div className="subcategory-dropdown">
              <select
                value={activeSubcategory || ""}
                onChange={(e) => setActiveSubcategory(e.target.value)}
              >
                <option value="">Select Target Muscle</option>
                {Object.keys(exercises[activeCategory]).map((subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* list by category */}
          {activeCategory && activeSubcategory &&(
            <div className="exercise-list">
              {exercises[activeCategory][activeSubcategory].map((exercise) => (
                <div key={exercise} className="exercise-item">
                  <input
                    type="checkbox"
                    checked={
                      selectedExercises[activeSubcategory]?.includes(exercise) || false
                    }
                    onChange={() =>
                      handleCheckboxChange(activeSubcategory, exercise)
                    }
                  />
                  {exercise}
                </div>
              ))}

          {selectedExercises[activeSubcategory]?.length > 0 && (
            <button className="add-button" onClick={handleAddToWorkout}>
              + Add to Workout
            </button>
          )}
          {duplicateMessage && (
            <p style={{color: "red", fontWeight: "bold"}}>{duplicateMessage}</p>
          )}
            </div>
          )}

          {/* save button, not functional */}
          <div className="save-button-container">
            <button className="save-button" onClick={handleSaveWorkout}>
              Save Workout
            </button>
          </div>

          {/* workout plan display */}
          {workoutPlan.length > 0 && (
          <div className="workout-table">
            <h3>Workout Plan</h3>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Muscle Group</th>
                  <th>Exercise</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {workoutPlan.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.subcategory} {item.category}</td>
                    <td>{item.exercise}</td>
                    <td>
                      <button onClick={() => handleRemoveFromWorkout(index)}>
                        ❌Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        </div>
      )}
    </div>
  );
}

export default WorkoutCreation;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Create_Workout.css"; // Import the updated CSS file

function WorkoutCreation() {
  const [workoutName, setWorkoutName] = useState("");
  const [selectedExercises, setSelectedExercises] = useState({
    Chest: [],
    Core: [],
    Legs: [],
  });
  const [activeCategory, setActiveCategory] = useState(null);
  const [isWorkoutCreated, setIsWorkoutCreated] = useState(false); // New state to toggle content visibility

  const exercises = {
    Chest: ["Push-up", "Bench Press", "Incline Press"],
    Core: ["Sit-up", "Crunches", "Plank"],
    Legs: ["Squats", "Lunges", "Leg Press"],
  };

  const handleCheckboxChange = (category, exercise) => {
    setSelectedExercises((prevState) => {
      const updatedCategory = prevState[category].includes(exercise)
        ? prevState[category].filter((item) => item !== exercise)
        : [...prevState[category], exercise];
      return { ...prevState, [category]: updatedCategory };
    });
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  const handleSaveWorkout = () => {
    // Handle saving the workout routine here
    console.log("Workout Saved:", workoutName, selectedExercises);
  };

  const handleCreateWorkout = () => {
    setIsWorkoutCreated(true); // This will toggle the visibility of the content
  };

  return (
    <div className="createworkout">
        <h1 className="Tit">Workout Creation</h1>
        <Link to="/">
          <button className="nav-button">Home</button>
        </Link>

      {/* Create Workout Button */}
      {!isWorkoutCreated && (
        <button className="create-workout-button" onClick={handleCreateWorkout}>
          Create Workout
        </button>
      )}

      {/* Content that appears after clicking the "Create Workout" button */}
      {isWorkoutCreated && (
        <div className="content-container show">
          {/* Workout name input */}
          <input
            type="text"
            className="workout-name-input"
            placeholder="Enter workout name"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
          />

          {/* Muscle Group Selection */}
          <div className="muscle-group-buttons">
            {Object.keys(exercises).map((category) => (
              <button
                key={category}
                className={`muscle-group-button ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Exercise List for Selected Category */}
          {activeCategory && (
            <div className="exercise-list">
              {exercises[activeCategory].map((exercise) => (
                <div key={exercise} className="exercise-item">
                  <input
                    type="checkbox"
                    checked={selectedExercises[activeCategory].includes(exercise)}
                    onChange={() =>
                      handleCheckboxChange(activeCategory, exercise)
                    }
                  />
                  {exercise}
                </div>
              ))}
            </div>
          )}

          {/* Save Workout Button */}
          <div className="save-button-container">
            <button className="save-button" onClick={handleSaveWorkout}>
              Save Workout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkoutCreation;

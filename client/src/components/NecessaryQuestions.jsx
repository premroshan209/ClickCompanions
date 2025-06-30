<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> prem
import NameQuestion from "./RegisterQuestions/NameQuestion";
import GenderPicker from "./RegisterQuestions/GenderPicker";
import DateOfBirthPicker from "./RegisterQuestions/DateOfBirthPicker";
import UploadPhotos from "./RegisterQuestions/UploadPhotos";
<<<<<<< HEAD

const necessaryQuestions = () => {
  const [signUpStage, setSignUpStage] = useState(1);
=======
import InterestPicker from "./RegisterQuestions/InterestPicker";

const NecessaryQuestions = () => {
  const [userData, setUserData] = useState({});
  const [signUpStage, setSignUpStage] = useState(1);
  useEffect(() => {
    console.log(userData);
  }, [userData]);

>>>>>>> prem
  return (
    <div>
      {signUpStage == 1 && (
        <NameQuestion
          currentStage={signUpStage}
          setCurrentStage={setSignUpStage}
<<<<<<< HEAD
=======
          userData={userData}
          setUserData={setUserData}
>>>>>>> prem
        />
      )}
      {signUpStage == 2 && (
        <GenderPicker
          currentStage={signUpStage}
          setCurrentStage={setSignUpStage}
<<<<<<< HEAD
        />
      )}
      {signUpStage == 3 && (
        <DateOfBirthPicker
          currentStage={signUpStage}
          setCurrentStage={setSignUpStage}
        />
      )}
      {signUpStage == 4 && <UploadPhotos />}
=======
          userData={userData}
          setUserData={setUserData}
        />
      )}
      {signUpStage == 3 && (
        <InterestPicker
          currentStage={signUpStage}
          setCurrentStage={setSignUpStage}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      {signUpStage == 4 && (
        <DateOfBirthPicker
          currentStage={signUpStage}
          setCurrentStage={setSignUpStage}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      {signUpStage == 5 && <UploadPhotos />}
>>>>>>> prem
    </div>
  );
};

<<<<<<< HEAD
export default necessaryQuestions;
=======
export default NecessaryQuestions;
>>>>>>> prem

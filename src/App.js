import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Outcome from './pages/Outcome';
import Play from './pages/Play';
import Header from './Components/Header';

function App() {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [compChoice, setCompChoice] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [counter, setCounter] = useState(3);
  const [userWin, setUserWin] = useState('');


  const handleClearScore = () => {
    setComputerScore(0);
    setUserScore(0);
    localStorage.clear();
  };

  // Getting userscore local storage
  useEffect(() => {
    const savedUserScore = JSON.parse(
      localStorage.getItem('USERS_SCORE') || null
    );

    if (savedUserScore) {
      setUserScore(savedUserScore);
    }
  }, []);

  // Setting userscore local storage
  useEffect(() => {
    if (userScore) {
      localStorage.setItem('USERS_SCORE', JSON.stringify(userScore || []));
    }
  }, [userScore]);

  // Getting computer score local storage
  useEffect(() => {
    const saveComputerScore = JSON.parse(
      localStorage.getItem('COMPUTERS_SCORE') || null
    );

    if (saveComputerScore) {
      setComputerScore(saveComputerScore);
    }
  }, []);

  // Setting computer score local storage
  useEffect(() => {
    if (computerScore) {
      localStorage.setItem(
        'COMPUTERS_SCORE',
        JSON.stringify(computerScore || [])
      );
    }
  }, [computerScore]);

  return (
    <>
      <Header
        setModalShow={setModalShow}
        modalShow={modalShow}
        userScore={userScore}
        computerScore={computerScore}
        setUserChoice={setUserChoice}
        userChoice={userChoice}
        handleClearScore={handleClearScore}
      />
      <Routes>
        <Route
          path='/'
          element={
            <Play
              setModalShow={setModalShow}
              modalShow={modalShow}
              userScore={userScore}
              computerScore={computerScore}
              setUserChoice={setUserChoice}
              userChoice={userChoice}
            />
          }
        />

        <Route
          path='/game'
          element={
            <Outcome
              userScore={userScore}
              setUserScore={setUserScore}
              computerScore={computerScore}
              setComputerScore={setComputerScore}
              userChoice={userChoice}
              compChoice={compChoice}
              setCompChoice={setCompChoice}
              counter={counter}
              setCounter={setCounter}
              userWin={userWin}
              setUserWin={setUserWin}
              handleClearScore={handleClearScore}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

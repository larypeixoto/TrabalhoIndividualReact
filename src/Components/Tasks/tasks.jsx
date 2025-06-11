import styles from "./tasks.module.css";

import { useState } from "react";
import { Input } from "../../Components/Input/Commons/input";
import { Button } from "../Button/SquareSmallAdd/button";
import { Card } from "../Card/TaskCard/card";

export function Tasks() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  const handleRemoveTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <div>
        <div className={styles.containerAddList}>
          <Input
            type="text"
            placeholder="Digite um drama"
            className={styles.inputList}
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          ></Input>
          <Button
            className={styles.addTask}
            onClick={handleAddTask}
            title={"✚"}
          />
        </div>

        <div className={styles.card}>
          {tasks.map((task, index) => (
            <Card key={index}>
              <p className={styles.titleDrama}>{task}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

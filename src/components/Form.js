import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";

import UserContext from "./context/UserContext";
import axios from "axios";

const Form = () => {
  //UserContext
  const { users, dispatch, getUpdate } = useContext(UserContext);

  //Estados
  const [horario, setHorario] = useState("");
  const [todos, setTodos] = useState([]);
  const [grades, setGrades] = useState("");

  const [horarioUno, setHorarioUno] = useState("");
  const [horarioDos, setHorarioDos] = useState("");

  // //Todo junto

  // const [formData,setFormData ] = useState({
  //   schedule:"",grades:"",startTime:"",endTime:""
  // });

  // const handleChange = ({target})=>{
  //   setFormData((prev)=>({...prev,[target.name]: [target.value]}))
  // }

  const [grados, setGrados] = useState([]);

  //Changes

  const onSelectChange = (event) => {
    setGrades(event.target.value);
  };

  const onSelectDate = (event) => {
    setHorario(event.target.value);
  };

  const onSelectHorarioUno = (event) => {
    setHorarioUno(event.target.value);
  };

  const onSelectHorarioDos = (event) => {
    setHorarioDos(event.target.value);
  };

  //useEffect

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://static.healthforcego.com/grades.json"
      );
      const getGrades = Object.entries(data)[0][1];

      const keyGrades = getGrades.map((key) => {
        return key.split(" ");
      });
      setGrados(keyGrades);
    })();
  }, []);

  //Array de objetos agregados

  const onFormSubmit = (event) => {
    event.preventDefault();
    getUpdate({
      horario,
      grades,
      horarioUno,
      horarioDos,
    });

    setGrades("");
    setHorario("");
    setHorarioUno("");
    setHorarioDos("");
  };

  const informacion = todos;

  console.log(informacion, "esta es la informacion");

  return (
    <div className="mx-auto mt-20 p-6 max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={onFormSubmit}>
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 text-center"
        >
          Choose a option
        </label>
        <select
          id="countries"
          value={grades}
          onChange={onSelectChange}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5"
        >
          <option selected>Choose a name</option>
          
          {grados?.map((grado) => {
            return (
              <option value={grado[0]}>
                {grado[1]} {grado[2]}
              </option>
            );
          })}
        </select>

        <div class="relative z-0 w-full mb-6 group"></div>

        <div class="grid xl:grid-cols-2 xl:gap-6">
          <div class="relative z-0 w-full mb-6 group ">
            {/* primer input */}

            <div className="">
              <div date-rangepicker class="flex items-center ml-20 mt-2">
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    name="startTime"
                    type="time"
                    value={horarioUno}
                    onChange={onSelectHorarioUno}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date start"
                  ></input>
                </div>
                <span class="mx-4 text-gray-500">to</span>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    name="endTime"
                    type="time"
                    value={horarioDos}
                    onChange={onSelectHorarioDos}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date end"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid xl:grid-cols-2 xl:gap-6">{/* segundo input */}</div>

        <div class="relative z-0 w-full mb-6 group">
          {/* primer input */}
          <input
            type="date"
            name="schedule"
            value={horario}
            onChange={onSelectDate}
            id="floating_last_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            // placeholder=" "
            required
          />
          <label
            for="floating_last_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Reserve
          </label>
        </div>
        {/* Boton */}
        <div className="text-center">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

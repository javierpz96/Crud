import { useContext, useState } from "react";
import UserContext from "./context/UserContext";
import { BsFillPersonFill } from "react-icons/bs";

const Crud = () => {
  const { users } = useContext(UserContext);


  const MostrarTurnos = () =>{
    console.log(users,"este es el onClick")
  }

  return (
    <div className="w-full mx-auto mt-10 flex justify-center ">
      {users.lenght && <p>No hay turnos aún</p>}
      <div class="p-4 max-w-lg w-2/4  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-between items-center mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Bookings to be Confirmed
          </h5>
          
        </div>
        <div class="flow-root ">
          <ul
            role="list"
            class="divide-y divide-gray-200 dark:divide-gray-700 "
          >
            {users?.map((persona) => {
              return (
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <BsFillPersonFill class="w-8 h-8 rounded-full" />
                    </div>
                    <div class="flex-1 min-w-0 ">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {persona.horario}
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400 m-1">
                      {persona.grades}
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {persona.horarioUno} to {persona.horarioDos}
                    </div>
                  </div>
                </li>
              );
            })}
            <div className="text-center">
            <button 
            onClick={()=>{
              console.log(users)
            }}
            type="button" class=" mt-8 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Confirm Bookings</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Crud;

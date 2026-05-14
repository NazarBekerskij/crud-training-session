// import { isElement } from "lodash";

import { getStudents, addStudent, updateStudent, deleteStudent } from "./api/studentApi";




let currentId = null


const listRef = document.querySelector("#students-table tbody");
const getStudentsBtn = document.querySelector("#get-students-btn")
const form = document.querySelector("#add-student-form");




function createItemsMurckups(array){
    const item = array.map(({id, name, age, course, skills, email, isEnrolled}) => {
        return`
        <tr id="${id}">
            <td>${id}</td>
            <td>${name}</td>
            <td>${age}</td>
            <td>${course}</td>
            <td>${skills}</td> 
            <td>${email}</td>
            <td>${isEnrolled}</td>
            <td>
                <button type="button" data-action="update">Оновити</button>
                <button type="button" data-action="delete" style="background-color: red;">Видалити</button>
            </td>
        </tr>`;
    }).join("")
    listRef.innerHTML = item
}



// getStudentsBtn.addEventListener("click", () => {getStudents().then(res => createItemsMurckups(res))})



//отримує студентів
getStudentsBtn.addEventListener("click", async () => {
    const res = await getStudents()
    createItemsMurckups(res)
})

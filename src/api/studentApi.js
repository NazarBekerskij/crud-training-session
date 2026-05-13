const BASE_URL = 'http://localhost:3000/students';


//запит на сервер
export const getStudents = async () => {
    const res = await fetch((`${BASE_URL}`))
    return res.json()
}


//створення нового студента
export const addStudent = async (studentData) => {
    const options = {
        method: "POST", // створення
        body: JSON.stringify(studentData), // Дані, які ми відправляємо
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    }
        const result = await fetch(BASE_URL, options)
        return result.json()
}



// оновлення даних
export const updateStudent = async(id, updateData) => {
    const options = {
        method: "PATCH", 
        body: JSON.stringify(updatedData),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
    };
    const res = await fetch(`${BASE_URL}/${id}`, options);
    return res.json();
}




//видалення
export const deleteStudent = async (id) => {
    const options = { method: "DELETE" };
    const res = await fetch(`${BASE_URL}/${id}`, options)
    return await res.json()
}














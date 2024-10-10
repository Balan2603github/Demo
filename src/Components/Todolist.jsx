import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Todolist = () => {
    const [todo, setTodo] = useState('');
    const [db, setDb] = useState([]);

    // Function to post data
    function dataPost() {
        axios.post("http://localhost:3000/posts", { todo })
            .then(() => {
                alert("Data has been posted");
                setTodo('');
                getdata(); // Re
            })
            .catch(() => {
                alert("Data has not been posted");
            });
    }

    // Function to get data
    function getdata() {
        axios.get("http://localhost:3000/posts")
            .then((res) => {
                setDb(res.data);
            })
            .catch(() => {
                alert("Data has not been read");
            });
    }

    // Function to update data
    function updatePost(id, data) {
        axios.put('http://localhost:3000/posts/${id}',{ todo: data })
            .then(() => {
                console.log("Data updated");
                getdata();
            })
            .catch(() => {
                console.log("Data not updated");
            });
    }

    // Function to prompt for new data and call the update function
    function newData(id) {
        const data = prompt("Enter new data");
        if (data) {
            updatePost(id, data);
        }
    }

    return (
        <div>
            <div>
                <TextField 
                    id="outlined-basic" 
                    label="Todo" 
                    variant="outlined"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)} 
                />
            </div>
            <div>
                <Button variant="contained" onClick={dataPost}>Post</Button>
                <Button variant="contained" onClick={getdata}>Get</Button>
            </div>
            <div>
                <ul>
                    {db.map((item) => (
                        <li key={item.id}>
                            {item.todo}
                            <button onClick={() => newData(item.id)}>Edit</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todolist;

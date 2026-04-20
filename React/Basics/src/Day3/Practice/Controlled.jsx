import React,{useState} from 'react'
import { generatePath } from 'react-router-dom';

const Controlled = () => {
    // const [username, setUsername] = useState("");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        gender: "",
        skills:""
    });
    // const [password, setPassword] = useState("");

    let handleChange = (e) => {
        const { value, name, type,checked} = e.target;
        if (type === "checkbox") {
            if(checked) {
                setFormData({
                    ...formData,
                    skills: [...formData.skills, value]
                });
            } else {
                setFormData({
                    ...formData,
                    skills: formData.skills.filter(skill => skill !== value)
                });
            }
        }

        else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    }

    const formValidation = {
        uppercase:/[A-Z]/.test(formData.password),
        lowercase:/[a-z]/.test(formData.password),
        number:/[0-9]/.test(formData.password),
        lengthOfPassword:formData.password.length >= 8
    }

    console.log(formValidation);
    let result = Object.values(formValidation).filter(value => value === true);
    
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    const isFormValid =
    formData.username.trim() !== "" &&
    formData.password.trim() !== "" &&
    formData.gender !== "" &&
    formData.skills.length > 0 &&
    Object.values(formValidation).every(v => v === true);


  return (
      <div>
          <form action="" onSubmit={handleSubmit}>
              Username: <input type="text" name="username" value={formData.username} onChange={handleChange} />
              <hr/>
              Password: <input type="password" name="password" value={formData.password} onChange={handleChange} />
              {result.length === 1 && <p style={{ color: "red" }}>Your password is weak</p>}
              {result.length === 2 && <p style={{ color: "orange" }}>Your password is moderate</p>}
              {result.length >= 3 && <p style={{ color: "green" }}>Your password is strong</p>}

              <ul>
                  <li style={{color: formValidation.uppercase ? 'green' : 'red'}}>It should contains atleast one uppercase</li>
                  <li style={{color: formValidation.lowercase ? 'green' : 'red'}}>It should contains atleast one lowercase</li>
                  <li style={{color: formValidation.number ? 'green' : 'red'}}>It should contains atleast one number</li>
                  <li style={{color: formValidation.lengthOfPassword ? 'green' : 'red'}}>It should be at least 8 characters long</li>
              </ul>
              <hr/>
              Gender: Male<input type="radio" name="gender" value="male" onChange={handleChange} />
              Female<input type="radio" name="gender" value="female" onChange={handleChange} />
              <hr/>
              Skills:React<input type="checkbox" name="skills" value="react" onChange={handleChange} />
              Html:<input type="checkbox" name="skills" value="html" onChange={handleChange} />
              Css:<input type="checkbox" name="skills" value="css" onChange={handleChange} />
              <hr />
              <input disabled={!isFormValid} type="submit" value="Submit" />
          </form>
      </div>
  )
}

export default Controlled;

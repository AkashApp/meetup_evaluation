import './Log.scss'
import {useState} from 'react';



export const LoginSignUp = () => {
// const [name, setName]= useState("");
// const [pass, setPass]= useState("");
// const [location, setLocation]= useState("");
// const [tech, setTech]= useState("");
// const [food, setFood]= useState("");
// const [movie, setMovie]= useState("");
// const [culture, setCulture]= useState("");
// const [art, setArt]= useState("");
// const [drama, setDrama]= useState("");
// const [Lname, setLname]= useState("");
// const [Lpass, setLpass]= useState("");

// const Passs=(e)=>{
//   console.log(e);
// }


  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={(e)=>{Passs(e)}}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(e) => {NameChange(e)}}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(e) => {PasswordChange(e)}}
          required
        />
        <br />
        <select value={""} className="location" onChange={(e) => {LocationChange(e)}}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          onChange={(e) => {TechChange(e)}}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" onChange={(e) => {FoodChange(e)}} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" onChange={(e) => {MovieChange(e)}} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" onChange={(e) => {CultureChange(e)}} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" onChange={(e) => {ArtChange(e)}} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" onChange={(e) => {DramaChange(e)}} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={(e) => {ImgChange(e)}}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={LogSub}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(e) => {UserChange(e)}}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(e) => {PassChange(e)}}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};

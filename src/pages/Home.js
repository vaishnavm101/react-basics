import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  console.log("Home rendered");
  const navigate = useNavigate();
  return (
    <>
      <h1>Home page</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatibus, totam nisi quod veniam perferendis asperiores, nihil eaque in ab non repellat recusandae explicabo necessitatibus odio enim corporis voluptates illum?
      Voluptas excepturi ducimus accusantium eos alias. Veritatis repellat natus placeat molestias facilis culpa! Repellat culpa sunt nisi nostrum, numquam accusantium cumque cum magni aspernatur est, recusandae ipsum provident dolor repudiandae.
      Quae obcaecati voluptate nam voluptatum eos officiis, in, architecto consequuntur delectus perferendis culpa necessitatibus cum placeat corporis perspiciatis minus eum ducimus quidem recusandae adipisci labore pariatur. Voluptates odio pariatur incidunt?
      <button onClick={() => {
        console.log("before going to contact route")
        navigate("/contact")

      }}>Goto Contact Page</button>
      <button onClick={() => navigate(-1)}>Go Backwards</button>
      <button onClick={() => navigate(1)}>Go Forward</button>
    </>
  )
}

export default Home
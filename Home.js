import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const{data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {error && <div>{error}</div>}
      { isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;




/*
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new blog', body: 'lorem ipsum...', author: 'Mario', id: 1},
        { title: 'My new website', body: 'lorem ipsum...', author: 'Luigi', id: 2},
        { title: 'My new business', body: 'lorem ipsum...', author: 'Alisa', id: 3}
    ]);

    const [name, setName] = useState('Mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id) // Удаление блога
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log("use effect run")
    })

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title = "All Blogs!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title = "Mario's blogs"/>
            <button onClick={() => setName('Luigi')}>Change name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;
*/





/*
import { useState } from "react";

const Home = () => {

    //let name = 'Mario'
    const [name, setName] = useState('Mario')
    const [age, setAge] = useState(25)

    const handleClick = () => {
        //console.log("hello")
        //name = 'Luigi'
        setName('Luigi')
        setAge(27)
    }

    const handleClickAgain = (name) => {
        alert('Hello' + name)
    } 

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            {<button onClick={handleClickAgain(' world')}>Click me again</button>}
        </div>
     );
}
 
export default Home; 

*/

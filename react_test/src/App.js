import React, {useState} from 'react';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
// import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascrippt 1', body: 'Description'},
    {id: 2, title: 'Javascrippt 2', body: 'Description'},
    {id: 3, title: 'Javascrippt 3', body: 'Description'},
  ])

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(body)
  }
  // function addNewPost() {   или такая запись !!! разницы нет
  // }

  return (
    <div className="App">
      <form action="">
        {/*управляемый компонент*/}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" 
          placeholder="Название поста"
        />
        {/*неуправляемый компонент*/}
        <MyInput 
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text" 
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;

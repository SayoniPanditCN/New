import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Navbar/>
    <Login/>
      </header>
    </div>
  );
}

export default App;

// const userLeft=false;
// const userWatchingCatmeme=false;

// function WatchTutorialCallback(){
//     return new Promise((resolve,reject)=>{
//      if(userLeft){
//         reject({
//             name:'User left',
//             mesage:':('
//         })
//      }
//      else if(userWatchingCatmeme){
//         reject({
//             name:'User Watching Cat Meme',
//             message:'Web Dev simplified <cat'
//         })
//      }
//      else{
//         resolve('Thumbs up and Subscribe')
//      }})
// }
// WatchTutorialCallback().then((message)=>{
//     console.log('success'+' '+message);
// }).catch((error)=>{
//     console.log(error.name+' '+error.message);
// }
// )
// //Callback
// const userLeft=false;
// const userWatchingCatmeme=false;

// function WatchTutorialCallback(callback,errorcallback){
//      if(userLeft){
//         errorcallback({
//             name:'User left',
//             mesage:':('
//         })
//      }
//      else if(userWatchingCatmeme){
//         errorcallback({
//             name:'User Watching Cat Meme',
//             message:'Web Dev simplified <cat'
//         })
//      }
//      else{
//         callback('Thumbs up and Subscribe')
//      }
// }
// WatchTutorialCallback((message)=>{
//     console.log('success'+' '+message);
// },
// (error)=>{
//     console.log(error.name+' '+error.message);
// }
// )

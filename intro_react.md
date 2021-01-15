AXIOS CALL SNIPPET

const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get(
      //api request
    )
    .then((res) => {
      setData(res.data);
      console.log("fetched data", res.data);
    })
    .catch((error) => console.log("The API request has failed. "));
  }, []);

  MAPPING THROUGH PROPS IN A COMPONENT TO RENDER PASSED DATA
 -this is an example of a basic component


export default function MakeThis(props) {

  export const MappedItem = (props) => {
  return (
    <div className="d-flex justify-content-center">
      {props.keyName.map((key, idx) => (
        <p>
          <a href={key.idx}>{key}</a>
        </p>
      ))}
    </div>
  );
};

return (
    <div className="d-flex container">
      <h3 className="display-4">{props.name}</h3>
      <div>{props.keyName && <MappedItem keyName={props.keyName} />}</div>
      <div>
);

}



this provides renders a div container mapping through an array or object to render each piece of data


-things to remember in flexing components. 
    *components are child by nature meaning they will be flexed by their container so parent of component child should, on a base level be : 
    <div className="d-flex container">
    <Component relevantName={data}/>
    </div>

    passing data as props to the component script


SEARCH BAR TEMPLATE

-from app
const handleSearch = (event) => {
    event.persist();
    const { value } = event.target;
    const filteredPosts = sourceName.filter((post) => {
      return post.username.toLowerCase().includes(value.toLowerCase());
    });
    const postsToUse = value ? filteredPosts : dummyData;
    setPosts(postsToUse);
  };



  NPM DEPENDENCIES FOR REACT PROJECTS

npm install  //install app
rm -rf node_modules package-lock.json //remove old dependencies
npm run build //create a deployment version run build
npm i axios // install axios
npm i bootstrap // install bootstrap
npm i reactstrap react react-dom // install reactstrap react react-dom
npm start // start the application on local host
npx browserslist@latest --update-db //browser error fix

WAYS TO USE BOOTSTRAP AND REACTSTRAP


//reactstrap imports

import Jumbotron from "react-bootstrap/JumboTron";
import Button from "react-bootstrap/Button";


function App() {


    return(
        <Jumbotron>
            <h1>SOME INFO</h1> 
            <Button><a href="#">Take me home</a><Button>
        </Jumbotron>
    );
}




//bootstrap stylesheet imports for utilizing bootstrap by className instead of importing each bootstrap element ala carte

import "bootstrap/dist/css/bootstrap.css";

function App() {

    return (
        <div className="jumbotron d-flex container">
            <h1 className="display-4">SOME INFO</h1>
            <button className"btn button-outline-dark"><a href="#">Take me home</a></button>
        </div>
    );

}





// Or you can blend the two

import Jumbotron from "react-bootstrap/JumboTron";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";

function App() {

    return (
        <Jumbotron className="d-flex container">
         <h1 className="display-4">SOME INFO</h1>
          <Button><a href="#" className="btn-outline-dark">Take me home</a><Button>
        </Jumbotron>

    )
}
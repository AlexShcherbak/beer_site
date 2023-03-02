import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import DrinksS1 from "../components/drinks-s1";
import DrinksS2 from "../components/drinks-s2";
import DrinksS3 from "../components/drinks-s3";

class Drinks extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <DrinksS1/>
                <DrinksS2/>
                <DrinksS3/>
            </Container>    
        );
    }
}

export default Drinks;
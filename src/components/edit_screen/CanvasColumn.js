import React from 'react';

import CustomTextfield from '../customComponents/customTextfield.js'
import CustomLabel from '../customComponents/customLabel.js'
import CustomButton from '../customComponents/customButton.js'
import CustomContainer from '../customComponents/customContainer.js'


class CanvasColumn extends React.Component {

    componentDidMount(){
        window.addEventListener("keydown", (e) => this.keysPressed(e), false);
        window.addEventListener("keyup", (e) => this.keysReleased(e), false);
    }

    componentWillUnmount(){
        window.removeEventListener("keydown", (e) => this.keysPressed(e), false);
        window.removeEventListener("keyup", (e) => this.keysReleased(e), false);
    }

    render() {
        const components = this.props.wireframe.components;
        console.log(components);


        return (
                <div className="canvas_column" onClick={(e) => this.props.setCurrentComponent(e, "")} style={
                    {
                        height: this.props.wireframe.height.toString() + "px",
                        width: this.props.wireframe.width.toString() + "px",
                    }}>
                    <div className="canvas_column_scale" style={{transform: "scale(" + this.props.wireframe.zoomPercent + ")"}}>
                    {components && components.map(component =>
                        component.type === "customButton" || component.type === "sampleButton" ? <CustomButton key={component.key} zoom={this.props.zoom} component={component} setCurrentComponent={this.props.setCurrentComponent} currentComponent={this.props.currentComponent} /> :
                            component.type === "customLabel" || component.type === "sampleLabel" ? <CustomLabel key={component.key} zoom={this.props.zoom} component={component} setCurrentComponent={this.props.setCurrentComponent}  currentComponent={this.props.currentComponent} /> :
                                component.type === "customContainer" || component.type === "sampleContainer" ? <CustomContainer key={component.key} zoom={this.props.zoom} component={component} setCurrentComponent={this.props.setCurrentComponent} currentComponent={this.props.currentComponent} /> :
                                    component.type === "customTextfield" || component.type === "sampleTextfield" ? <CustomTextfield key={component.key} zoom={this.props.zoom} component={component} setCurrentComponent={this.props.setCurrentComponent} currentComponent={this.props.currentComponent} /> : null
                    )}
                    </div>
                </div>
        );
    }

    keysPressed = (e) => { 

        // e.preventDefault();

        // store an entry for every key pressed
        this.props.keys[e.keyCode] = true;
        
        // Ctrl + D
        if (this.props.keys[17] && this.props.keys[68] && this.props.currentComponent.text !== "") {

            console.log("Duplicate the current component");
            console.log(this.props.currentComponent);

            this.props.duplicateComponent(e, this.props.currentComponent);
            
            this.props.keys[17] = false; 
            this.props.keys[90] = false;

            // prevent default browser behavior
            e.preventDefault();	
        }

        // Delete and Backspace
        else if((this.props.keys[46]) && this.props.currentComponent.text !== "") // || this.props.keys[8]
        {
            delete this.props.wireframe.components[this.props.currentComponent.key];

            var newComponents = [];

            this.props.wireframe.components.forEach(element => {
                element ? newComponents.push(element) : console.log("Deleted an element")
            })

            console.log(newComponents);

            this.props.setComponents(newComponents);

            e.preventDefault();
        }
        else if(this.props.keys[8]){
            e.preventDefault();
        }
        else if(this.props.keys[17] && this.props.keys[68]){
            console.log(this.props.currentComponent)
        }
        return;
    }

    keysReleased = (e) => {
        // mark keys that were released
        this.props.keys[e.keyCode] = false;
    }
}
export default CanvasColumn;
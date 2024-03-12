import React from "react";
import { useParams } from "react-router-dom";
import { Carousel, Container } from "react-bootstrap";
import Projects from '../../Data/Projects'; // Import your Projects data

function ProjectsDetalis() {
    const params = useParams();
    const projectId = parseInt(params.id, 10); // Ensure the ID is an integer
    const project = Projects.find(item => item.id === projectId); // Find the project by ID

    if (!project) {
        return <div>project not found</div>; // Handle project not found
    }

    return (
        <Container >
           
             <div className="card m-3" style={{textAlign:'center'}}>
  <h3 className="card-header mb-3">{project.title}</h3>
  <Carousel>
    {project.images.map((src, index) => (
        <Carousel.Item key={index}>
            <img 
                src={src} 
                className="d-block w-100" 
                alt={`Slide ${index}`} 
                style={{ height: '100%' }} // Set the height
            />
        </Carousel.Item>
    ))}
</Carousel>
  <div className="card-body">
    <p className="card-text">{project.desc}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><strong>System : </strong> {project.system}</li>
    <li className="list-group-item"><strong>Language : </strong> {project.lang}</li>
  </ul>
  <div className="card-footer text-muted">
    {project.date}
  </div>
</div>
        </Container>
    );
}

export default ProjectsDetalis;

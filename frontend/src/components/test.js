import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AircraftList = () => {
  const [aircraftData, setAircraftData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1000/delership/api/planes');
        setAircraftData(response.data.content);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  function setImages(a){
    const dataURL = `data:image/jpeg;base64,${a}`;
    return dataURL;
  }

  return (
    <div>
      <h1>Aircraft Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Sheet</th>
            <th>Image</th>
            <th>Price</th>
            <th>Old</th>
            <th>Weight</th>
            <th>Fuel</th>
            <th>Speed</th>
            <th>Range</th>
            <th>Primary</th>
          </tr>
        </thead>
        <tbody>
          {aircraftData.map(aircraft => (
            <tr key={aircraft.id}>
              <td>{aircraft.name}</td>
              <td>{aircraft.sheet}</td>
              <td><img src={setImages(aircraft.image)} alt='imgs'/></td>
              <td>{aircraft.price}</td>
              <td>{aircraft.old}</td>
              <td>{aircraft.weight}</td>
              <td>{aircraft.fuel}</td>
              <td>{aircraft.speed}</td>
              <td>{aircraft.range}</td>
              <td>{aircraft.primary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AircraftList;

import React from 'react';

const NumberTable = ({ phoneNumbers, isLoading, handleGenerate, onChange }) => {
  return (
    <div>
      {
        isLoading ?
          <div><div className="spinner-border text-primary"
            style={{
              width: '3rem',
              height: '3rem',
              margin: 30
            }} role="status">
            <span className="sr-only">Loading...</span>
          </div><div className="spinner-border text-primary"
            style={{
              width: '3rem',
              height: '3rem',
              margin: 30
            }} role="status">
              <span className="sr-only">Loading...</span>
            </div><div className="spinner-border text-primary"
              style={{
                width: '3rem',
                height: '3rem',
                margin: 30
              }} role="status">
              <span className="sr-only">Loading...</span>
            </div> </div> :
          <div>
            <div style={{
            float: 'left',
            marginTop: 30,
            marginBottom: 30,
            marginLeft: 10
          }}> <button
            type="button"
            onClick={handleGenerate}
            className="btn btn-primary btn-lg"><i className="fas fa-plus-square"></i> Generate Numbers</button>


          </div>
          <div style={{
            float: 'right',
            margin: 30
          }}>
            <select 
            onChange={(e) => onChange(e.target.value)}>
              <option>Sort</option>
              <option>Ascending</option>
              <option>Descending</option>
            </select>
          </div>
          </div>



      }


      <table className="table">
        <thead className="table-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Numbers</th>
            <th scope="col">Generated date</th>
            <th scope="col">Generated by</th>
          </tr>
        </thead>
        <tbody>
          {
            phoneNumbers.map((numbers, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{numbers.phoneNumber}</td>
                <td>{new Date(numbers.date).toDateString()}</td>
                <td>{numbers.generatedBy}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default NumberTable;

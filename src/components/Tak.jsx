import React, { useState } from 'react'
import * as xlsx from 'xlsx'

function Tak() {
  let [data,setData]=useState()
  let convert=(e)=>{
    e.preventDefault();
    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx.utils.sheet_to_json(worksheet);
            setData(json)
            console.log(json);
        };
        reader.readAsArrayBuffer(e.target.files[0]);
    }
  }
  return (
    <div>
      <h2>Excel to JSON Convertor</h2>
      <input type='file' onChange={convert}/>
      <textarea rows="20" style={{width:"100%",}} value={data}></textarea>
      <button>Download file</button>
    </div>
  )
}

export default Tak